from sqlalchemy import create_engine, engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker, Session
from sqlalchemy import Table, Column, Integer, String, MetaData, ForeignKey
from fastapi import Depends

import os

import dotenv
dotenv.load_dotenv("../.env")



SOLDEV_DB = engine.URL.create(
    "postgresql",
    username = os.environ['POSTGRE_USER'],
    password = os.environ['POSTRGE_PASS'],
    host = os.environ['POSTGRE_HOST'],
    database = os.environ['DATABASE']
        
)


soldev_engine = create_engine(
    SOLDEV_DB,
    pool_size=40, max_overflow=8   
)

Session_ = sessionmaker(autocommit=False, autoflush=False, bind=soldev_engine)


Base = declarative_base()


def get_db():
    db = Session_()
    
    try:
        yield db
    finally:
        db.close()
        



