# Weather Api
Get Hong Kong's weather from openweathermap and store in database. If the openweathermap is down, query data from database 

##Getting Started
Introduce how to run the apis

### Installing
Run the command to install node modules
```
npm install
```

### Run the app
```
npm start
```

### Run the tests
```
npm test
```

#APIs
Api examples below

##Create user

###Request
`POST /api/users/`
```
curl -i -d 'email=xxx&password=xxx' http://localhost:8000/api/users/
```

###Response
```
access-control-allow-origin →*
connection →keep-alive
content-length →292
content-type →application/json; charset=utf-8
date →Wed, 08 Jan 2020 07:59:37 GMT
etag →W/"124-AVTp7ljnTgKA7HouS5gd7etMnjQ"
x-powered-by →Express

{
    "user": {
        "_id": "5e158be9154c6a867058f1ec",
        "email": "yptse123@gmail.com",
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InlwdHNlMTIzQGdtYWlsLmNvbSIsImlkIjoiNWUxNThiZTkxNTRjNmE4NjcwNThmMWVjIiwiZXhwIjoxNTgzNjU0Mzc3LCJpYXQiOjE1Nzg0NzAzNzd9.kIvX8A_3EG3Ur3FA6UscrFhDZuSD3iGqmYk2O780A0Y"
    }
}
```

##Login

###Request
`POST /api/users/login/`
```
curl -i -d 'email=xxx&password=xxx' http://localhost:8000/api/users/login/
```

###Response
```
access-control-allow-origin →*
connection →keep-alive
content-length →292
content-type →application/json; charset=utf-8
date →Wed, 08 Jan 2020 07:59:37 GMT
etag →W/"124-AVTp7ljnTgKA7HouS5gd7etMnjQ"
x-powered-by →Express

{
    "user": {
        "_id": "5e158be9154c6a867058f1ec",
        "email": "yptse123@gmail.com",
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InlwdHNlMTIzQGdtYWlsLmNvbSIsImlkIjoiNWUxNThiZTkxNTRjNmE4NjcwNThmMWVjIiwiZXhwIjoxNTgzNjU0Mzc3LCJpYXQiOjE1Nzg0NzAzNzd9.kIvX8A_3EG3Ur3FA6UscrFhDZuSD3iGqmYk2O780A0Y"
    }
}
```

##Get weather

###Request
`GET /api/weathers/`
```
curl -i -H 'Authorization: Token xxxxxxxxxxx' http://localhost:8000/api/weathers/
```

###Response
```
access-control-allow-origin →*
connection →keep-alive
content-length →497
content-type →application/json; charset=utf-8
date →Wed, 08 Jan 2020 08:13:15 GMT
etag →W/"1f1-4+Kyhhjg7oDbiduh9esADYE0Elw"
x-powered-by →Express

{
    "coord": {
        "lon": 114.17,
        "lat": 22.25
    },
    "weather": [
        {
            "id": 801,
            "main": "Clouds",
            "description": "few clouds",
            "icon": "02d"
        }
    ],
    "base": "stations",
    "main": {
        "temp": 299,
        "feels_like": 294.23,
        "temp_min": 295.93,
        "temp_max": 301.15,
        "pressure": 1017,
        "humidity": 39
    },
    "visibility": 10000,
    "wind": {
        "speed": 7.2,
        "deg": 110
    },
    "clouds": {
        "all": 20
    },
    "dt": 1578470897,
    "sys": {
        "type": 1,
        "id": 9154,
        "country": "HK",
        "sunrise": 1578438253,
        "sunset": 1578477276
    },
    "timezone": 28800,
    "id": 1819730,
    "name": "Hong Kong Special Administrative Region",
    "cod": 200
}
```
