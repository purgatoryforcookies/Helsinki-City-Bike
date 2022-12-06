from sqlalchemy import Column, Integer, String, DateTime, ForeignKey, Boolean, Float
from internal import connection
from pydantic import BaseModel, validator
from datetime import datetime, date
from pydantic_collections import BaseCollectionModel




class Log(connection.Base):
    __tablename__ = "ridelog"
    
    
    ride_id = Column(Integer, primary_key=True)
    departure = Column(DateTime, nullable = False)
    arrival = Column(DateTime, nullable = False)
    
    departure_station_id = Column( Integer, nullable=False)
    return_station_id = Column(Integer, nullable=False)
    distance = Column('covered_distance_m',Integer, nullable=False)
    duration = Column('duration_s', Integer, nullable=False)






class Stations(connection.Base):
    __tablename__ =  'stations'
    
    station_id = Column(Integer, primary_key=True)
    name = Column(String(200), nullable=False)
    
    active = Column(Boolean, nullable=True, default=True)
    
    
# connection.Base.metadata.create_all(connection.engine)




