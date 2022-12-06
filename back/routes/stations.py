from fastapi import APIRouter, Depends, HTTPException, Header
from models import init
from functions.stations import crud
from internal import connection

from sqlalchemy.orm import Session


station_router = APIRouter(
    prefix="/station",
    tags=["stasions"],
    responses={404: {"description": "We have nothing here"}},
)



@station_router.get("/")
async def retrieve_stations(db: Session = Depends(connection.get_db)):
    
    print(crud.get_stations(db))

    
    
    return crud.get_stations(db)

