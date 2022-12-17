from models.models import Station
from sqlalchemy.orm import join, outerjoin, joinedload
from sqlalchemy.sql import or_
from fastapi import HTTPException
from sqlalchemy import cast, String



def get_stations(db):
    
    result = db.query(Station).all()
    return result



def get_station_byId(db, id_):
    
    result = db.query(Station).filter(Station.station_id == id_).first()
    return result




def search_stations(db, search):
    
    result = db.query(Station).filter(
        or_(
            Station.name.like("%{}%".format(search)),
            cast(Station.station_id, String).like("%{}%".format(search))
            )
        ).limit(10).all()

    return result


def insert_station(db, station_name):
    
    try:
    
        record = Station(name=station_name)
        
        db.add(record)
        db.flush()
        db.commit()
        db.refresh(record)
        
        return record

    except Exception as e:
       raise HTTPException(status_code=400, detail=str(e))
   
   
   
   
