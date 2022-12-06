from models.init import Log
from sqlalchemy.orm import join, outerjoin, joinedload
from sqlalchemy.sql import select

def get_log(db):
    
    result = db.query(Log).all()
    


    return result






