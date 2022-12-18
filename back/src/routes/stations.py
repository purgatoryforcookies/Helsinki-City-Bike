from fastapi import APIRouter, Depends, HTTPException, Header
# from models.models import init
from functions.stations import crud_station
from functions.journeys import crud_journey
from internal import connection
from sqlalchemy.orm import Session
from datetime import datetime
from models import paramModels


station_router = APIRouter(
    prefix="/api/station",
    tags=["stations"],
    responses={404: {"description": "We have nothing here"}},
)



@station_router.get("/")
async def retrieve_stations(db: Session = Depends(connection.get_db)):
    

    return crud_station.get_stations(db)

@station_router.get("/search/")
async def search_stations(search: str, db: Session = Depends(connection.get_db)):
    print(search)

    return crud_station.search_stations(db, search)


@station_router.post("/")
async def add_new_station(params: paramModels.NewStation, db: Session = Depends(connection.get_db)):
    return crud_station.insert_station(db, params)



@station_router.get("/dynamic/")
async def metrics_by_station(station_id: int, days: int = None, db: Session = Depends(connection.get_db)):
    
    respond = {}
    respond['station'] = crud_station.get_station_byId(db, station_id)
    respond['metrics'] = crud_journey.get_log_byId(connection.soldev_engine, station_id, days)

    return respond


