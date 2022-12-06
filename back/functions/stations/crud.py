from models import init


def get_stations(db):
    
    result = db.query(init.Stations)
    
    print(result)





