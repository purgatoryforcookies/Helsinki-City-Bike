from pydantic import BaseModel
from datetime import datetime

class NewJourney(BaseModel):
    departure: datetime
    arrival: datetime
    departure_station_id: int
    return_station_id: int
    distance: int
    duration: int

    

    



