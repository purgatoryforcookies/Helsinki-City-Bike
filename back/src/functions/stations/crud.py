from models.models import Station
from sqlalchemy.orm import join, outerjoin, joinedload

def get_stations(db):
    
    result = db.query(Station).all()
    

    return result


