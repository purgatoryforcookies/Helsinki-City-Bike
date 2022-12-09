from fastapi import APIRouter, Depends, HTTPException, Header
from functions.journeys import crud_journey
from internal import connection
from sqlalchemy.orm import Session
from models import paramModels


journey_router = APIRouter(
    prefix="/api/journey",
    tags=["journeys"],
    responses={404: {"description": "We have nothing here"}},
)



@journey_router.post("/fetch")
async def retrieve_journeys(params: paramModels.JourneyParams, db: Session = Depends(connection.get_db)):
    # print(params)
    return crud_journey.get_log(db, params) 
# {"status":"ok"}




@journey_router.post("/")
async def add_journey(journey: paramModels.NewJourney, db: Session = Depends(connection.get_db)):
    
    
    return crud_journey.add_journey(db, journey)


