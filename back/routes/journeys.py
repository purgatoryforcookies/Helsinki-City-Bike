from fastapi import APIRouter, Depends, HTTPException, Header


journey_router = APIRouter(
    prefix="/journey",
    tags=["journeys"],
    responses={404: {"description": "We have nothing here"}},
)



@journey_router.get("/")
async def retrieve_journeys():
    
    return {"status":"ok"}







