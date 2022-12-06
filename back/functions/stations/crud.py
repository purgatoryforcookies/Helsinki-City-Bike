from models import init
from sqlalchemy.orm import join, outerjoin, joinedload

def get_stations(db):
    
    result = db.query(init.Station).all()
    

    return result


