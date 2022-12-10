from models.models import Log, Station
from sqlalchemy.orm import join, aliased
from sqlalchemy.sql import select
import psycopg2
from sqlalchemy.exc import IntegrityError
from fastapi import HTTPException
from sqlalchemy import func


from functions.utils import classOperation

def get_log(db, params):
# TODO: let db handle sorting/searching instead of querying all and then sorting. 
#       due to relationships and need for sorting based on child table, 
#       this turned out to be difficult and workaround is this
    
    # result = (db.query(Log)).all()
    
    # dStation = aliased(Station)
    # rStation = aliased(Station)
    
    if params.searchkey:
        result = search_by_string(db, params.searchkey)
    else:
        result = (db.query(Log)).all()

    if params.sortkey: # params.sortkey = {sortKey: "", reverse: "True"/"False"} or None
        result = classOperation.sort_class(result, params.sortkey)
        
 
    result = result[:params.limit]
    

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
        


def search_by_string(db, searchkey):
    dStation = aliased(Station)
    rStation = aliased(Station)
    
    return (
        db.query(Log)
        .join(dStation, Log.departure_station)
        .join(rStation, Log.return_station)
        .filter(dStation.name.contains('%{}%'.format(searchkey)))
        ).all()

    
    
    
    
    
    
    
