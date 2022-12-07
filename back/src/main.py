from fastapi import FastAPI, APIRouter
from fastapi.middleware.cors import CORSMiddleware
import uvicorn

from routes import journeys, stations

app = FastAPI()

origins = [
    "http://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_methods=["GET"],
    allow_headers=["*"]

)

app.include_router(journeys.journey_router)
app.include_router(stations.station_router)

# if __name__ == "__main__":
    
#     uvicorn.run(app, log_level="info")






