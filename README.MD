
# Helsinki city bike dashboard

Project includes stack of technologies to upload, 
view and edit helsinki's city bike
journey and station data. 

Project is built upon using Python, React(no-ts), and assumes a postgres database.
Backend serves data to frontend with FastApi's framework. 
Database is mapped using SQLAlchemy.

Docker handles environments for backend testing and applications production. 
Automatic pipeline handles esting and deployment 
to Amazon EC2 where Nginx works
as a reverse proxy to serve backend api service and frontend static files.


Once again, many lessons were learned. Notable ones being not to host small project web applications
 in S3 or Amplify without a domain, nor with the technologies used here in Fly.io. Without a domain AWS is 
 going to provide hard time reaching to API endpoints from your buckets, without SSL.



## Demo

http://ec2-13-51-161-123.eu-north-1.compute.amazonaws.com/

## Features `v1.0.0`

### Journeys
- List, search, filter and sort journeys
- Add a new journey (adding new stations not supported through ui yet)

### stations
- List and search stations
- Stations metrics such as inbound, outbound and balance count
- See station on the map
- See basic details of a station (location, id, active or not)
- Filter metrics by time. Available: last 1 week, 1 month and 3 month timeframes



## Environment Variables

To run this project , you will need to add the following
credentials to your environment.

`POSTGRE_PASS`
`POSTGRE_USER`
`POSTGRE_HOST`
`ENV=prod|test`

## Run Locally
As of release `v1.0.0` you need to have a database of your own. 
Also uploading .csv files locally is not supported


#### Dependendices 

`Docker:20` `Docker-compose:2` `Node:18` 

`PostgreSQL:14`
Default databases: postgres (prod) and test_db (test)

Database content (.csv files):  
source:https://github.com/solita/dev-academy-2023-exercise



### Local deployment

Clone the project

```bash
  git clone https://https://github.com/purgatoryforcookies/Helsinki-City-Bike
```

Go to the project directory

```bash
  cd Helsinki-City-Bike
```

Deploy

```bash
  npm run deploy:local
```

Application will start up and run locally in `127.0.0.1`
Database tables will be created automatically should they not exist yet. 
## API Resources
Service runs on port 80, therefore do send requests with http rather than https.

`http://ec2-13-51-161-123.eu-north-1.compute.amazonaws.com`

For `POST` requests, send parameters in the body, if none use empty body `{}`

All dates are to be provided in UTC string ISO 8601 or UNIX time

Header = {'content-type' : 'application/json'}
### Journeys

#### Get journeys

```http
  POST /api/journey/fetch
```
All parameters are **optional**
| Parameter | Type     | Description                                          |
| :-------- | :------- | :--------------------------------------------------- |
| `sortkey` | `object` | {sortKey: see list of sortkeys, reverse: true/false} |
| `limit` | `int` | default = 20 |
| `searchkey` | `string` | Accepts one word for filtering by id and name |
| `departure` | `string` | UTC timestamp for filtering |
| `arrival` | `string` | UTC timestamp for filtering |

Responses `200` `404` `422` 


#### Add new journey

```http
  POST /api/journey
```

| Parameter | Type     | Description                                          |
| :-------- | :------- | :--------------------------------------------------- |
| `departure` | `string` | UTC timestamp |
| `arrival` | `string` | UTC timestamp |
| `departure_station_id` | `int` | Station id |
| `return_station_id` | `int` | Station id |
| `distance` | `int` | Distance in meters |
| `duration` | `int` | **optional** Duration in seconds |

Responses `200` `404` `422` 

### Stations

#### Get all stations
*Note: will return all stations*

```http
  GET /api/station
```
Responses `200` `404` `422` 

#### Search for station

```http
  GET /api/station/search/?search=""
```

| Parameter | Type     | Description                                          |
| :-------- | :------- | :--------------------------------------------------- |
| `search` | `string` | Accepts one word for searching |

Responses `200` `404` `422` 

#### Add a station

```http
  POST /api/station
```



| Parameter | Type     | Description                                          |
| :-------- | :------- | :--------------------------------------------------- |
| `name` | `string` | Name of the station. min. lenght 3 |
| `name_swe` | `string` | **optional** Name in other language |
| `name_eng` | `string` | **optional** Name in other language |
| `address` | `string` | Street address of the station. min lenght 3   |
| `address_swe` | `string` | **optional** Street address in other language |
| `city` | `string` | **optional** City |
| `city_swe` | `string` | **optional** City name in other language |
| `operator` | `string` | **optional** Stations operator |
| `capacity` | `int` | Stations capacity in unit of bicycles |
| `x` | `float` | Longitude coordinate of the station |
| `y` | `float` | Latitude coordinate of the station |

Responses `200` `404` `422` 

#### Statistics by station

```http
  GET /api/station/dynamic/?station_id=""&days=""
```

| Parameter | Type     | Description                                          |
| :-------- | :------- | :--------------------------------------------------- |
| `station_id` | `int` | Id of station of an intrest |
| `days` | `int` | **optional** Filter metrics n number of days back from today |


Responses `200` `404` `422`
## Running Tests

Frontend unit tests, test coverage is 20ish %

```bash
  cd front && npm run test
```

Backend

Performs unit/integration test with a disposable postgreSQL instance

```bash
  cd back && docker-compose -f docker-compose.test.yml up --build --exit-code-from app
```

## License

[MIT](https://choosealicense.com/licenses/mit/)
