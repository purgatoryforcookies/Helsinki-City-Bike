from fastapi import APIRouter, Depends, HTTPException, Header
from models import init
from functions.journeys import crud
from internal import connection

from sqlalchemy.orm import Session
from datetime import datetime

journey_router = APIRouter(
    prefix="/journey",
    tags=["journeys"],
    responses={404: {"description": "We have nothing here"}},
)



@journey_router.get("/")
async def retrieve_journeys(db: Session = Depends(connection.get_db)):
    
    
    
    
    
    return crud.get_log(db) 
# {"status":"ok"}







