from fastapi import APIRouter, Depends, HTTPException, Header
from models import init
from functions.stations import crud
from internal import connection

from sqlalchemy.orm import Session
from datetime import datetime


station_router = APIRouter(
    prefix="/api/station",
    tags=["stations"],
    responses={404: {"description": "We have nothing here"}},
)



@station_router.get("/")
async def retrieve_stations(db: Session = Depends(connection.get_db)):
    

    return crud.get_stations(db)

