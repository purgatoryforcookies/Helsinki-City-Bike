from fastapi import FastAPI, APIRouter, Request, status
from fastapi.middleware.cors import CORSMiddleware
from fastapi.encoders import jsonable_encoder
from fastapi.exceptions import RequestValidationError
from fastapi.responses import JSONResponse
from collections import defaultdict
import uvicorn

from routes import journeys, stations
# from internal.ETL import config

# config.construct_db()


app = FastAPI()

origins = [
    "*",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_methods=["GET,POST"],
    allow_headers=["*"]

)

app.include_router(journeys.journey_router)
app.include_router(stations.station_router)

@app.exception_handler(RequestValidationError)
async def custom_form_validation_error(request, exc):
    reformatted_message = []

    
    for pydantic_error in exc.errors():
        new_error = {}
        loc, msg = pydantic_error["loc"], pydantic_error["msg"]
        filtered_loc = loc[1:] if loc[0] in ("body", "query", "path") else loc
        field_string = ".".join(filtered_loc)

        
        new_error['location'] = field_string
        new_error['message'] = msg
        
        reformatted_message.append(new_error)
        

    return JSONResponse(
        status_code=status.HTTP_400_BAD_REQUEST,
        content=jsonable_encoder(
            {"detail": "Invalid request", "errors": reformatted_message}
        ),
    )


# if __name__ == "__main__":
    
#     uvicorn.run(app, log_level="info")






