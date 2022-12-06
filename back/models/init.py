from sqlalchemy import Column, Integer, String, DateTime, ForeignKey, Boolean, Float
from internal import connection
from pydantic import BaseModel, validator
from datetime import datetime, date
from pydantic_collections import BaseCollectionModel
from sqlalchemy.orm import relationship

class Station(connection.Base):
    __tablename__ =  'stations'
    
    station_id = Column(Integer, primary_key=True)
    name = Column(String(200), nullable=False)
    active = Column(Boolean, nullable=True, default=True)
    
    # log = relationship("Log", back_populates='parent')


class Log(connection.Base):
    __tablename__ = "ridelog"
    
    
    ride_id = Column(Integer, primary_key=True)
    departure = Column(DateTime, nullable = False)
    arrival = Column(DateTime, nullable = False)
    
    departure_station_id = Column(Integer, ForeignKey("stations.station_id"))
    return_station_id = Column(Integer, ForeignKey("stations.station_id"))
    
    departure_station = relationship("Station", foreign_keys=[departure_station_id], lazy='immediate', uselist=False)
    return_station = relationship("Station", foreign_keys=[return_station_id], lazy='immediate', uselist=False)

    distance = Column('covered_distance_m',Integer, nullable=False)
    duration = Column('duration_s', Integer, nullable=False)
    
    # parent = relationship('Station', back_populates='log')

    
    # ride = relationship('Log', primaryjoin="Station.station_id == Log.departure_station_id")
    

# Station.ridelog = relationship("Log", order_by=Log.departure, back_populates='departure_station_name')


# connection.Base.metadata.create_all(connection.engine)




