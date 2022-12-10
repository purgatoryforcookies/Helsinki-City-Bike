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
    duration: int

    
class JourneyParams(BaseModel):
    sortkey: dict[str,str] = None
    limit: int = 20
    searchkey: str | None = None
    timeframe: dict[str,str] | None = None
    
    @validator('searchkey')
    def handle_empty_string(cls, v):
        if v == "":
            v = None
        
        return v

    # @validator('timeframe')
    # def correct_form(cls, v):

    #     if "start" in v and v['start'] != '':
    #         v['start'] = parser.parse(v['start'])
            
             
    #     if "end" in v and v['end'] != '':
    #         v['end'] = parser.parse(v['end'])

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

        # if v['sortKey'] in ("departure_station", "return_station"):
        #     v['sortKey'] += ".name"
        
        
        return v
    
    
