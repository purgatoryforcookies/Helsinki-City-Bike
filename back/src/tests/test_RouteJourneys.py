from tests import test_connection
import json
client = test_connection.client




def test_addJourney():
    
    test_names = ['Testiasema1', "Testiasema2", 'Vuosaari', 'Pisulahti', 'Tommi kähönen', 'Tommi 23kähönen']
    
    for name in test_names:
        response = client.post("/api/station/?name={}".format(name))
        assert response.status_code == 200
        assert response.json()["name"] == name
    
    newJourney= json.dumps({
                "departure": "2022-12-07T18:19:38.957Z",
                "arrival": "2022-12-08T18:19:38.957Z",
                "departure_station_id": 1,
                "return_station_id": 3,
                "distance": 150,
                "duration": 55555
                })
    
    headers = {
    'Content-Type': 'application/json'
    }
    
    response = client.post("/api/journey/", content=newJourney, headers=headers)
    
    assert response.status_code == 200
    assert response.json()['departure_station_id'] == 1
    assert response.json()['return_station_id'] == 3
    assert response.json()['distance'] == 150



def test_journey_get():

    response = client.get("/api/journey/")

    assert response.status_code == 200
    assert "departure_station" in response.json()[0]
    assert "return_station" in response.json()[0]
        


def test_addFalsyJourney():
    
    newJourney= json.dumps({
                "departure": "2022-12-07T18:19:38.957Z",
                "arrival": "2022-12-08T18:19:38.957Z",
                "departure_station_id": 0,
                "return_station_id": 1,
                "distance": 150,
                "duration": 55555
                })
    
    headers = {
    'Content-Type': 'application/json'
    }
    
    response = client.post("/api/journey/", content=newJourney, headers=headers)
    assert response.status_code == 400
    assert response.json() == {"detail": "Station id does not exist"}
    
    
    newJourney= json.dumps({
            "departure": "sjnjsnjgjdgsdsv",
            "arrival": "2022-12-08T18:19:38.957Z",
            "departure_station_id": 1,
            "return_station_id": 1,
            "distance": 150,
            "duration": 55555
            })
    
    response = client.post("/api/journey/", content=newJourney, headers=headers)
    assert response.status_code == 422
    
    newJourney= json.dumps({
            "departure": "sjnjsnjgjdgsdsv",
            "arrival": "",
            "departure_station_id": 1,
            "return_station_id": 1,
            "distance": 150,
            "duration": 55555
            })
    
    response = client.post("/api/journey/", content=newJourney, headers=headers)
    assert response.status_code == 422

