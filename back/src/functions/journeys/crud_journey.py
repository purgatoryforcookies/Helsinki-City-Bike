from models.models import Log
from sqlalchemy.orm import join
from sqlalchemy.sql import select
import psycopg2
from sqlalchemy.exc import IntegrityError
from fastapi import HTTPException


def get_log(db):
    
    result = db.query(Log).limit(10).all()

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
        



