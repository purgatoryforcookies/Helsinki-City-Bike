from models.paramModels import SORTKEYS
import calendar
import time
from tests import test_connection
import json
from random import randrange
import datetime
from dateutil import parser
client = test_connection.client

def test_addJourney():

    test_names = ['ATestiasema88', "BTestiasema28", 'CVuosaari77',
                  'DPisulahti451', 'ETommi kähönen23', 'FTommi 23kähönen55',
                  'Gtestiasema 33', 'Helppo','Xoksss','Ynapapiiri',
                  'Zkissanmaa']

    for name in test_names:
        response = client.post("/api/station/?name={}".format(name))
        assert response.status_code == 200
        assert response.json()["name"] == name

    for i in range(30):
        newJourney = json.dumps({
            "departure": calendar.timegm(time.gmtime())-(i*1000),
            "arrival": calendar.timegm(time.gmtime())-(i*1000),
            "departure_station_id": randrange(1, 10),
            "return_station_id": randrange(1, 10),
            "distance": i*10+10,
            "duration": i*10+10
        })

        headers = {
            'Content-Type': 'application/json'
        }

        response = client.post(
            "/api/journey/", content=newJourney, headers=headers)

        assert response.status_code == 200
        assert response.json()['departure_station_id'] >= 1
        assert response.json()['return_station_id'] >= 1
        assert response.json()['distance'] >= 10


def test_journey_get():

    response = client.post("/api/journey/fetch", content=json.dumps({}))

    assert response.status_code == 200
    assert "departure_station" in response.json()[0]
    assert "return_station" in response.json()[0]


def test_journey_sorting():
    
    

    for key in SORTKEYS:
        print(key)
        if key == "NONE":
            continue

        for condition in ['True', "False"]:
            print("sorkey is: ", key, "Condition is: ", condition)

            params = {
                "limit": 10,
                "sortkey": {"sortKey": key, "reverse": condition},
            }

            response = client.post("/api/journey/fetch",
                                   content=json.dumps(params))

            assert response.status_code == 200
            assert "departure_station" in response.json()[0]
            assert "return_station" in response.json()[0]

            if condition == "True":

                if key in ("departure_station", "return_station"):
                    assert response.json()[
                        0][key]['name'] >= response.json()[-1][key]['name']
                    
                elif key in ('departure', 'arrival'):
                    assert parser.parse(response.json(
                    )[0][key]) > parser.parse(response.json()[-1][key])
                    
                else:
                    assert response.json()[0][key] > response.json()[-1][key]

            else:
                if key in ("departure_station", "return_station"):
                    assert response.json()[
                        0][key]['name'] <= response.json()[-1][key]['name']
                    
                elif key in ('departure', 'arrival'):
                    assert parser.parse(response.json(
                    )[0][key]) < parser.parse(response.json()[-1][key])
                    
                else:
                    assert response.json()[0][key] < response.json()[-1][key]


def test_search():

    abc = ['A', 'B', 'C','X']    
    
    for letter in abc:

        params = {
                    "limit": 10,
                    "searchkey": letter
                }

        response = client.post("/api/journey/fetch",
                                content=json.dumps(params))

        assert response.status_code == 200
        assert "departure_station" in response.json()[0]
        assert "return_station" in response.json()[0]
        
        for i in range(len(response.json())):
        
            word = response.json()[i]['departure_station']['name']+response.json()[i]['return_station']['name']
            assert letter.casefold() in word.casefold()
    
    
    
    
    






def test_addFalsyJourney():

    newJourney = json.dumps({
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

    response = client.post("/api/journey", content=newJourney, headers=headers)
    assert response.status_code == 400
    assert response.json() == {"detail": "Station id does not exist"}

    newJourney = json.dumps({
        "departure": "sjnjsnjgjdgsdsv",
        "arrival": "2022-12-08T18:19:38.957Z",
        "departure_station_id": 1,
        "return_station_id": 1,
        "distance": 150,
        "duration": 55555
    })

    response = client.post(
        "/api/journey/", content=newJourney, headers=headers)
    assert response.status_code == 422

    newJourney = json.dumps({
        "departure": "sjnjsnjgjdgsdsv",
        "arrival": "",
        "departure_station_id": 1,
        "return_station_id": 1,
        "distance": 150,
        "duration": 55555
    })

    response = client.post(
        "/api/journey/", content=newJourney, headers=headers)
    assert response.status_code == 422
