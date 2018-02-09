# Cars API

This API will track cars and manufacturer information via `/cars` and `/oems` (Orignal Equipment Manufacturers) endpoints. It is a RESTful HTTP based api using JSON to rep. cars and oems.

## Getting Started

## HTTP Verbs
The cars api allows the following HTTP verbs:

- `GET`
- `POST`
- `PUT`
- `DELETE`

## ENDPOINTS

## Cars

## Create a car
Create a car via a `POST` to the '/cars' route passing a car JSON object in the request body.

```
POST /cars

{
  "model": "corvette",
  "modelYear": 2018,
  "color": "yellow",
  "engineSize": "6.2L",
  "oemId": "oem_general-motors",
  "type": "car"
}
```
A successfully created car will result in a '201 -Created' response and the response body. The response body will include an `id`,  `_rev` and `ok` properties

```
{
  "ok": true,
  "id": "car_corvette",
  "rev": "1-147586933",
}
```

## Get a car

Retrieves a single car from the collection of cars using a 'GET' to the '/cars/id:' route.

```
GET /cars/car_corvette
```
A successful response will result in a `200-ok` response code and the car will be returned in the response body

```
{
  "_id": "car_corvette",
  "_rev": "1-147586933"
  "make": "general motors",
  "model": "corvette",
  "model year": 2018,
  "color": "yellow",
  "engine size": "6.2L",
  "type": car
}

```
## Delete a car

Delete a car via a `DELETE` to the `\cars\:id` route.

```
DELETE /cars/:car_corvette
```

A successful response would result in a `200 - ok` . The response body will contain the following:

```
{
  "ok": true
  "id": "car_corvette"
  "rev": "1-147586933"
}
```

## Update a car
Updates a car within the collection of cars via to the '/cars/:id' route. Provides a representation of a car in the request body.

>Tip: Be sure to provide the most recent `_rev` value in the request body. Otherwise, you will recieve an `409- Conflict` error.

All required fields include `_id`, `_rev`, `make`, `model`, `modelYear`, `color`, `engineSize`, `type`

```
PUT /cars/car_corvette

{
  "_id": "car_corvette",
  "_rev": "1-147586933"
  "make": "general motors",
  "model": "corvette",
  "modelYear": 2018,
  "color": "yellow",
  "engineSize": "6.2L",
  "type": "car"
}
```

A successfully updated car will result in a `200 - ok` response and the response body. The response body will include an `id`,  `_rev` and `ok` properties

```
{
  "ok": true,
  "id": "car_corvette",
  "rev": "2-147586933",
}
```


## OEM
## Create a OEM
Create an OEM via a `POST` to the '/oems' route passing a car JSON object in the request body.

```
POST /oems

{
  "name": "General Motors",
  "country": "USA",
  "ceo": "Mary Barra",
  "salesVolume": 9,958,000,
  "models": ["Volt", "Equinox", "Corvette", "Escalade", "Camaro"],
  "hqCity": "Detroit",
  "type: "oem"
}
```
A successfully created OEM will result in a '201 -Created' response and the response body. The response body will include an `id`,  `_rev` and `ok` properties

```
{
  "ok": true,
  "id": "oem_general-motos",
  "rev": "2-147586933",
}
```
## Retrieve an OEM
Description....

```
GET /oems/oem_general-motors
```
A successful response will result in a `200-ok` response code and the OEM will be returned in the response body


```
{
  "_id": "oem_general-motors"
  "_rev": "1-aajdj3387"
   "name": "General Motors",
  "country": "USA",
  "ceo": "Mary Barra",
  "salesVolume": 9,958,000,
  "models": ["Volt", "Equinox", "Corvette", "Escalade", "Camaro"],
  "hqCity": "Detroit",
  "type: "oem"
}
```

## Delete an OEM

Delete a car via a `DELETE` to the `\oem\:id` route.

```
DELETE /oems/:oem_general-motors
```

A successful response would result in a `200 - ok` . The response body will contain the following:

```
{
  "ok": true
  "id": "oem_general-motors"
  "rev": "1-147586933"
}
```

## Update an OEM
Updates an OEM within the collection of OEMs via to the '/oems/:id' route. Provides a representation of an OEM in the request body.

>Tip: Be sure to provide the most recent `_rev` value in the request body. Otherwise, you will recieve an `409- Conflict` error.

All required fields include `_id`, `_rev`, `name`, `country`, `ceo`, `salesVolume`, `models`, `hqCity`

```
PUT /oems/oem_general-motors

{
  "_id": "oem_general-motors"
  "_rev": "1-aajdj3387"
    "name": "General Motors",
  "country": "USA",
  "ceo": "Mary Barra",
  "salesVolume": 9,958,000,
  "models": ["Volt", "Equinox", "Corvette", "Escalade", "Camaro"],
  "hqCity": "Detroit",
  "type: "oem"
}
```

A successfully updated OEM will result in a `200 - ok` response and the response body. The response body will include an `id`,  `_rev` and `ok` properties

```
{
  "ok": true,
  "id": "oem_general-motos",
  "rev": "2-147586933",
}
```

