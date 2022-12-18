from tests import test_connection
import json


client = test_connection.client



def test_db_with_stations():
    

    for i in range(10):

        
        response = client.post("/api/station/", 
                               content=test_connection.create_fake_station(), 
                               headers=test_connection.HEADERS)
        assert response.status_code == 200
        assert response.json()["name"]




def test_station_get():

    response = client.get("/api/station/")

    assert response.status_code == 200
    assert len(response.json()) >= 5



def test_addFalsyStation():
    
    falsy = json.dumps({        "name": "f",
                    "name_swe": "",
                    "name_eng": "",
                    "address": "",
                    "address_swe": '',
                    "city": "city",
                    "city_swe": "",
                    "operator": "test",
                    "capacity": 0,
                    "x": 0,
                    "y": 0
                    })


    response = client.post("/api/station/", 
                           content=falsy, 
                           headers=test_connection.HEADERS)
    res = response.json()
    assert response.status_code == 400
    assert 'detail' in res
    assert 'errors' in res
    assert len(res['errors']) == 8




def test_searchingStation():
    
    example = json.dumps({        "name": "asematie 66",
                    "name_swe": "",
                    "name_eng": "",
                    "address": "Not an empty address",
                    "address_swe": '',
                    "city": "city",
                    "city_swe": "",
                    "operator": "test",
                    "capacity": 55,
                    "x": 66,
                    "y": 26
                    })


    response = client.post("/api/station/", 
                           content=example, 
                           headers=test_connection.HEADERS)
    assert response.status_code == 200



    response = client.get("/api/station/search/?search={}".format("66"))
    assert response.status_code == 200
    assert len(response.json()) >= 1
    
    response = client.get("/api/station/search/?search={}".format("asema"))
    assert response.status_code == 200
    assert len(response.json()) >= 1
    
    response = client.get("/api/station/search/?search={}".format("DROP TABLE"))
    assert response.status_code == 200
    assert len(response.json()) == 0


