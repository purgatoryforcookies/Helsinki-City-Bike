from fastapi.testclient import TestClient
from sqlalchemy import create_engine, engine
from sqlalchemy.orm import sessionmaker
import os
from src import main
from faker import Factory
import json
import random

fake = Factory.create('fi_FI')


client = TestClient(main.app)

SOLDEV_DB_TEST = engine.URL.create(
        "postgresql",
        username = os.environ['POSTGRE_USER'],
        password = os.environ['POSTGRE_PASS'],
        host = os.environ['POSTGRE_HOST'],
        database = "test_db"
            
    )

soldev_test_engine = create_engine(
        SOLDEV_DB_TEST,
        pool_size=40, max_overflow=8   
    )


TestingSession = sessionmaker(autocommit=False, autoflush=False, bind=soldev_test_engine)



def override_get_db():
    try:
        db = TestingSession()
        yield db
    finally:
        db.close()

from src.internal.connection import get_db, Base


main.app.dependency_overrides[get_db] = override_get_db

Base.metadata.create_all(soldev_test_engine)




HEADERS = {
            'Content-Type': 'application/json'
        }

def create_fake_station():
    
    baseAddress = fake.address()
    street = baseAddress.split('\n')[0]

    x,y,city,j,h = fake.local_latlng(country_code='FI')

    name = fake.company()

    capacity = random.randint(1, 40)
    
    
    
    return json.dumps({        "name": name,
                    "name_swe": "",
                    "name_eng": "",
                    "address": street,
                    "address_swe": '',
                    "city": city,
                    "city_swe": "",
                    "operator": "test",
                    "capacity": capacity,
                    "x": x,
                    "y": y
                    })







