
### Technologies
##### Front
React

##### Back
Python with FastAPI framework

##### Database
PostgreSQL hosted on AWS

##### Testing
###### Integration test API - DB

CD pipeline 
Docker containers running on GitHub Actions

To run locally
git clone
on parent dir
python -m pytest src/tests -c local_pytest.ini

### Features

#####API resources

GET`/api/station/?limit=10`
List all stations

GET`/api/station/search/search=`
Search all stations by keyword. Includes integers also for id's

POST`/api/station/=name=`
Search all stations by keyword. Includes integers also for id searching

GET`/api/journey/?limit=10`
List all journeys sorted by time, newest first

POST`/api/journey`
Add a new journey with POST, include the content in request body as a json



