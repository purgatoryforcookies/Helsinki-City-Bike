from pydantic import BaseModel, validator, ValidationError
from datetime import datetime
from dateutil import parser
SORTKEYS = ('ride_id','departure', 'arrival', 
            'departure_station','return_station','distance','duration', 'NONE')



class NewJourney(BaseModel):
    departure: datetime
    arrival: datetime
    departure_station_id: int
    return_station_id: int
    distance: int
    duration: int | None = None
    
    
    @validator('duration', always=True)
    def compute_duration(cls, v, values):
        duration = (values['arrival'] - values['departure']).total_seconds()   
        if duration < 0:
            raise ValueError('Duration cannot be negative based on dates!')
        return duration
        



class JourneyParams(BaseModel):
    sortkey: dict[str,str] = None
    limit: int = 20
    searchkey: str | None = None
    departure: str | None = None
    arrival: str | None = None
    
    @validator('searchkey')
    def handle_empty_string(cls, v):
        if v == "":
            v = None
        
        return v

    @validator('departure')
    def departureDate(cls, v):
        try:
            parser.parse(v)
        except:
            v = ""
        return v
        
    @validator('arrival')
    def arrivalDate(cls, v):
        try:
            parser.parse(v)
        except:
            v = ""
        return v


    @validator('sortkey')
    def correct_sortkey(cls,v):
        if not v:
            return v
        
        if "sortKey" not in v:
            raise ValueError("Invalid sorting dict key, should be sortKey")
        
        if "reverse" not in v:
            raise ValueError("Invalid sorting order key, should be reversed")
        
        
        if v['sortKey'] not in SORTKEYS:
            raise ValueError("Invalid sortkey. Available sortkeys: "+", ".join(SORTKEYS))
        
        return v
    
    
