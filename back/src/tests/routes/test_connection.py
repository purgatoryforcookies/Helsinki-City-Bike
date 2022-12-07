from fastapi.testclient import TestClient
from sqlalchemy import create_engine, engine
from sqlalchemy.orm import sessionmaker
import os
from src.internal.connection import get_db, Base
from src import main


client = TestClient(main.app)

SOLDEV_DB_TEST = engine.URL.create(
        "postgresql",
        username = os.environ['POSTGRE_USER'],
        password = os.environ['POSTRGE_PASS'],
        host = os.environ['POSTGRE_HOST'],
        database = "test"
            
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

main.app.dependency_overrides[get_db] = override_get_db

