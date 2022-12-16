from models.models import Log, Station
from sqlalchemy.orm import join, aliased
from sqlalchemy.sql import select, text, or_
from sqlalchemy.exc import IntegrityError
from fastapi import HTTPException
from sqlalchemy import func
from sqlalchemy.sql.expression import cast
from sqlalchemy import String
from datetime import datetime, timedelta
import pandas as pd
from functions.utils.journeyFunctions import journey_metrics


def get_log_byId(db, station_id, days):
    
    q = select(Log.departure_station_id, 
               Log.return_station_id, 
               Log.distance, 
               Log.duration).filter(or_ (Log.departure_station_id == station_id, 
                                  Log.return_station_id == station_id))

    if days and days != None:
        daysBack = datetime.today() - timedelta(days=days)
        q = q.filter(Log.arrival >= daysBack)
    
    df_log = pd.read_sql_query(q, con=db)
    
    
    
    return journey_metrics(df_log, station_id)
    



def get_log(db, params):
    dStation = aliased(Station)
    rStation = aliased(Station)

    q = db.query(Log).join(dStation, Log.departure_station).join(
        rStation, Log.return_station)

    if params.sortkey and params.sortkey['sortKey'] != 'NONE':
        q = sort_records(q, dStation, rStation, params)
    if params.departure:
            q = q.filter(Log.departure >= params.departure)
    if params.arrival:
        q = q.filter(Log.departure <= params.arrival)

    if params.searchkey:
        q = q.filter(or_(
            dStation.name.ilike('%{}%'.format(params.searchkey)),
            rStation.name.ilike('%{}%'.format(params.searchkey)),
            cast(Log.ride_id, String).ilike('%{}%'.format(params.searchkey))
        ))
        
    result = q.limit(params.limit).all()

    return result


def add_journey(db, journey):
    
    try:
        record = Log(departure=journey.departure,
                     arrival=journey.arrival,
                     departure_station_id=journey.departure_station_id,
                     return_station_id=journey.return_station_id,
                     distance=journey.distance,
                     duration=journey.duration)

        db.add(record)
        db.flush()
        db.commit()
        db.refresh(record)

        return record

    except IntegrityError as e:

        raise HTTPException(
            status_code=400, detail={"errors":"Station id does not exist"})

    except Exception as e:
        # print(e)
        raise HTTPException(
            status_code=500, detail="This is an internal error")


def sort_records(q, dStation, rStation, params):

    sortcol = params.sortkey['sortKey']

    if sortcol == "departure_station":
        if params.sortkey['reverse'] == 'False':
            q = q.order_by(dStation.name.asc())
        else:
            q = q.order_by(dStation.name.desc())

    elif sortcol == "return_station":
        if params.sortkey['reverse'] == 'False':
            q = q.order_by(rStation.name.asc())
        else:
            q = q.order_by(rStation.name.desc())

    else:
        if params.sortkey['reverse'] == 'False':
            q = q.order_by(getattr(Log, sortcol).asc())

        else:
            q = q.order_by(getattr(Log, sortcol).desc())

    return q
