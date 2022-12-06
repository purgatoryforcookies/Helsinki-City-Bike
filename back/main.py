from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import uvicorn



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



if __name__ == "__main__":
    
    uvicorn.run(app, log_level="info")






