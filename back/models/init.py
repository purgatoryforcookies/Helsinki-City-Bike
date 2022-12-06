from sqlalchemy import Column, Integer, String, DateTime, ForeignKey, Boolean
from internal import connection
from pydantic import BaseModel, validator
from datetime import datetime, date
from pydantic_collections import BaseCollectionModel




# class Log():
#     __tablename__ : "ridelog"
    
    
#     id_ = Column("id", Integer, primary_key=True)
#     departure = Column("Departure", DateTime, nullable = False)
#     arrival = Column("Return", DateTime, nullable = False)
    
#     dep_id = Column("Departure station id", Integer)


class Stations(connection.Base):
    __tablename__ =  'stations'
    
    station_id = Column(Integer, primary_key=True)
    name = Column(String(200), nullable=False)
    date_added = Column(DateTime, nullable=False)
    active = Column(Boolean, nullable=False, default=True)
    
    
# connection.Base.metadata.create_all(connection.engine)




