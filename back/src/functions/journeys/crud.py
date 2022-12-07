from models.models import Log
from sqlalchemy.orm import join
from sqlalchemy.sql import select

def get_log(db):
    
    result = db.query(Log).limit(10).all()
    
    


    return result






