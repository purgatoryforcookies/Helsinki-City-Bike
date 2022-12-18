from models.models import Station
from sqlalchemy.orm import join, outerjoin, joinedload
from sqlalchemy.sql import or_
from fastapi import HTTPException
from sqlalchemy import cast, String
from sqlalchemy.exc import IntegrityError


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
    # Forcing to retry insert 5 times before calling it a defeat. Station_ids
    # are deemed to not be in the hands of user. Race condition or missing values in original data could 
    # create this problem. 
    count = 0
    while True:
        count +=1
        try:
        
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
                            y=station.y,
                            # station_id=53
                            )
            
            db.add(record)
            db.commit()
            db.refresh(record)
            return record
        
        except IntegrityError as e: 
            print("KEY ERROR")
            db.rollback()
            if count > 5:
                return HTTPException(status_code=500, detail='Primary key error, try again later')
            continue
            
        except Exception as e:
            raise HTTPException(status_code=500, detail=str(e))
   
   
   
   
