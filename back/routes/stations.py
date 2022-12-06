from fastapi import APIRouter, Depends, HTTPException, Header
from models import init
from functions.stations import crud
from internal import connection

from sqlalchemy.orm import Session
from datetime import datetime


station_router = APIRouter(
    prefix="/station",
    tags=["stasions"],
    responses={404: {"description": "We have nothing here"}},
)



@station_router.get("/")
async def retrieve_stations(db: Session = Depends(connection.get_db)):
    
    # print(crud.get_stations(db))

    # record = init.Stations(
    #     station_id = 3,
    #     name = "Testi"
    # )
    # db.add(record)
    # db.commit()
    # db.close()
    
    # record = init.Log(
    #     departure = datetime.now(),
    #     arrival = datetime.now(),
    #     departure_station_id = 3,
    #     return_station_id = 3,
    #     distance = 300,
    #     duration = 199
    # )
    # db.add(record)
    # db.commit()
    # db.close()
    
    return crud.get_stations(db)

