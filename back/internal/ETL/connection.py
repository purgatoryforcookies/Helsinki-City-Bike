from sqlalchemy import create_engine, engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker, Session



import os

import dotenv
dotenv.load_dotenv(".env")

print("\n")
print("Connection is being made")

try:

    SOLDEV_DB = engine.URL.create(
        "postgresql",
        username = os.environ['POSTGRE_USER'],
        password = os.environ['POSTRGE_PASS'],
        host = os.environ['POSTGRE_HOST'],
        database = os.environ['DATABASE']
            
    )


    soldev_engine = create_engine(
        SOLDEV_DB,

    )
    
    Session_ = sessionmaker(autocommit=False, autoflush=False, bind=soldev_engine)
    
    print("Connected \n")

except Exception as e:
    print("Error making connection: ", e)
    print("\n")

Base = declarative_base()


def get_db():
    db = Session_()
    
    try:
        yield db
    finally:
        db.close()
        



