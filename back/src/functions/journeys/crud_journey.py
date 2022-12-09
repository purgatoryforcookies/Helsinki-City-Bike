from models.models import Log, Station
from sqlalchemy.orm import join
from sqlalchemy.sql import select
import psycopg2
from sqlalchemy.exc import IntegrityError
from fastapi import HTTPException
import operator
from functions.utils import converters

def get_log(db, params):
    print(params)
    
    
    # Log.arrival.desc()
    
    
    result = (db.query(Log)).all()
    
    if params.sortkey and params.sortkey['sortKey'] != 'NONE':
        result.sort(key=operator.attrgetter(params.sortkey['sortKey']), 
                    reverse=converters.string_to_bool(params.sortkey['reverse']))
    
    result = result[:params.limit]
    
    # print(type(result))
    
    
    # result = db.query(Log).limit(1)
    
    # result = result.order_by(getattr(Log, params.sortkey))
    

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
        



