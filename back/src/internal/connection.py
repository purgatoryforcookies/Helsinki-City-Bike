from sqlalchemy import create_engine, engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker, Session
import os
import dotenv


dotenv.load_dotenv(".env")
dotenv.load_dotenv("../.env")

print("\n")
print("Connection is being made")

db_to_connect_to = "test_db"

if os.environ['ENV'] == "prod":
    db_to_connect_to = "postgres"

try:

    SOLDEV_DB = engine.URL.create(
        "postgresql",
        username = os.environ['POSTGRE_USER'],
        password = os.environ['POSTGRE_PASS'],
        host = os.environ['POSTGRE_HOST'],
        database = db_to_connect_to
            
    )


    soldev_engine = create_engine(
        SOLDEV_DB,
        pool_size=40, max_overflow=8, echo=False
    )

    Session_ = sessionmaker(autocommit=False, autoflush=False, bind=soldev_engine)
    
    print("Connected to", os.environ['ENV'])

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
        



