import test_connection
client = test_connection.client


def test_db_with_stations():
    test_names = ['Testiasema1', "Testiasema2", 'Vuosaari', 'Pisulahti', 'Tommi kähönen']
    
    for name in test_names:
        response = client.post("/api/station/?name={}".format(name))
        print(response)
        assert response.status_code == 200
        assert response.json()["name"] == name


def test_station_get():

    response = client.get("/api/station/")

    assert response.status_code == 200
    assert len(response.json()) >= 5



def test_addFalsyStation():


    response = client.post("/api/station/?name={}".format("te"))
    assert response.status_code == 400
    assert response.json() == {"detail": "Name too short"}




def test_searchingStation():


    response = client.get("/api/station/search/?search={}".format("23"))
    assert response.status_code == 200
    assert len(response.json()) >= 1
    
    response = client.get("/api/station/search/?search={}".format("asema"))
    assert response.status_code == 200
    assert len(response.json()) >= 1
    
    response = client.get("/api/station/search/?search={}".format("DROP TABLE"))
    assert response.status_code == 200
    assert len(response.json()) == 0


