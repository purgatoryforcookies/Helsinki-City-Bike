from models.models import Station
from sqlalchemy.orm import join, outerjoin, joinedload
from sqlalchemy.sql import or_
from fastapi import HTTPException
from sqlalchemy import cast, String



def get_stations(db):
    
    result = db.query(Station).order_by(Station.station_id).all()
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


def insert_station(db, station):
    
    # try:
    
        record = Station(name=station.name,
                         name_swe=station.name_swe,
                         name_eng=station.name_eng,
                         address = station.address,
                         address_swe = station.address_swe,
                         city=station.city,
                         city_swe=station.city_swe,
                         operator=station.operator,
                         capacity=station.capacity,
                         x=station.x,
                         y=station.y)
        
        db.add(record)
        db.flush()
        db.commit()
        db.refresh(record)
        
        return record

    # except Exception as e:
    #    raise HTTPException(status_code=400, detail=str(e))
   
   
   
   
