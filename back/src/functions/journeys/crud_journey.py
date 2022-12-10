from models.models import Log, Station
from sqlalchemy.orm import join, aliased
from sqlalchemy.sql import select, text, or_
import psycopg2
from sqlalchemy.exc import IntegrityError
from fastapi import HTTPException
from sqlalchemy import func
from sqlalchemy.sql.expression import cast
from sqlalchemy import String

from functions.utils import classOperation



def get_log(db, params):
# TODO: let db handle sorting/searching instead of querying all and then sorting. 
#       due to relationships and need for sorting based on child table, 
#       this turned out to be difficult and workaround is this
    
    dStation = aliased(Station)
    rStation = aliased(Station)
    
    # baseline
    
    q = db.query(Log).join(dStation, Log.departure_station).join(rStation, Log.return_station)
    
    if params.sortkey and params.sortkey['sortKey'] != 'NONE':
        q = sort_records(q, dStation, rStation, params)
        
    
    
    if params.searchkey:
        q = q.filter(or_(
            dStation.name.contains('%{}%'.format(params.searchkey)),
            rStation.name.contains('%{}%'.format(params.searchkey)),
            cast(Log.ride_id, String).contains('%{}%'.format(params.searchkey))
        ))
    
    
    result = q.limit(12).all()
    
    db.close()

    del q

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
        
        raise HTTPException(status_code=400, detail="Station id does not exist")
    
    except Exception as e:
        # print(e)
        raise HTTPException(status_code=500, detail="This is an internal error")
        


def search_by_string(db, params):
    dStation = aliased(Station)
    rStation = aliased(Station)
    
    return (
        db.query(Log)
        .join(dStation, Log.departure_station)
        .join(rStation, Log.return_station)
        .filter(dStation.name.contains('%{}%'.format(params.searchkey)))
        .limit(params.limit)
        )
    # .all()

    
    
    
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
    
    
    
    
    
    
