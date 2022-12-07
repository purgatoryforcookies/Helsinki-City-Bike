from fastapi.testclient import TestClient
import pytest

import os



from src import main
client = TestClient(main.app)

def test_read_main():

    response = client.get("/api/journey/")
    
    

    assert response.status_code == 200
    # assert response.json()



