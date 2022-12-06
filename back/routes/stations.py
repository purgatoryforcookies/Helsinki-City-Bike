from fastapi import APIRouter, Depends, HTTPException, Header


station_router = APIRouter(
    prefix="/station",
    tags=["stasions"],
    responses={404: {"description": "We have nothing here"}},
)



@station_router.get("/")
async def retrieve_stations():
    
    return {"status":"ok"}

