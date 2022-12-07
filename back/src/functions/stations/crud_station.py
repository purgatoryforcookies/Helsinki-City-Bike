from models.models import Station
from sqlalchemy.orm import join, outerjoin, joinedload






def get_stations(db):
    
    result = db.query(Station).all()
    

    return result

def insert_station(db, station_name):
    
    try:
    
        record = Station(name=station_name)
        
        db.add(record)
        db.flush()
        db.commit()
        db.refresh(record)
        
        # db.close()
        
        return record

    except Exception as e:
        print("Error in adding station:",e)
        return False
    
