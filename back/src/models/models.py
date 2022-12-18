from sqlalchemy import Column, Integer, String, Identity, DateTime, ForeignKey, Boolean, Float, dialects
from internal import connection
from pydantic import BaseModel, validator
from sqlalchemy.orm import relationship, validates
import os
from datetime import datetime
from sqlalchemy.ext.hybrid import hybrid_property
from sqlalchemy.sql import func


dateColumnSpec = dialects.postgresql.TIMESTAMP(timezone=False, precision=2)


class Station(connection.Base):
    __tablename__ =  'stations'
    
    station_id = Column(Integer, primary_key=True)
    fid = Column(Integer, Identity(start=1, cycle=False))
    name = Column(String(200), nullable=False)
    name_swe = Column(String(200), nullable=False)
    name_eng = Column(String(200), nullable=False)
    address = Column(String(200), nullable=False)
    address_swe = Column(String(200), nullable=False)
    city = Column(String(120), nullable=True)
    city_swe = Column(String(120), nullable=True)
    operator = Column(String(120), nullable=True)
    capacity = Column(Integer, nullable=False)
    x = Column(Float, nullable=False)
    y = Column(Float, nullable=False)
    active = Column(Boolean, nullable=True, default=True, server_default="true")
    modified = Column(dateColumnSpec, nullable=True, onupdate=func.now())
    date_added = Column(dateColumnSpec, nullable=True, server_default=func.now())
    
    @validates('name')
    def validate_name(self, key, value):
        if len(value) < 3:
            raise ValueError("Name too short")
        else:
            return value
    
    

class Log(connection.Base):
    __tablename__ = "ridelog"
    
    
    ride_id = Column(Integer, primary_key=True)
    departure = Column(dateColumnSpec, nullable = False)
    arrival = Column(dateColumnSpec, nullable = False)
    
    departure_station_id = Column(Integer, ForeignKey("stations.station_id"))
    return_station_id = Column(Integer, ForeignKey("stations.station_id"))
    
    departure_station = relationship("Station", 
                                     foreign_keys=[departure_station_id], 
                                     lazy='joined', uselist=False)
    return_station = relationship("Station", 
                                  foreign_keys=[return_station_id], 
                                  lazy='joined', uselist=False)

    distance = Column('covered_distance_m',Integer, nullable=False)
    duration = Column('duration_s', Integer, nullable=False)


# if os.environ['ENV'] == "test":
#     print("Dropping tables for test env")
#     connection.Base.metadata.drop_all(connection.soldev_engine, [Log.__table__, Station.__table__])

connection.Base.metadata.create_all(connection.soldev_engine)











