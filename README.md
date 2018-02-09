# cars

This API will track cars and manufacturer information via '/cars' and '/car-oems' (Orignal Equipment Manufacturers) endpoints. It is a RESTful HTTP based api using JSON to rep. cars and oems.

## Getting Started

## HTTP Verbs
The cars api alllows the following HTTP verbs:

- `GET`
- `POST`- create
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
```````
A successfully created car will result in a '201 -Created' response and the car document will be return in the respnse body. The response body will include an '_id' and '_rev' properties 

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


## Get a car

Retrieves a single car from the collection of cars using a 'GET' to the '/dogs/id:' route.
```
GET /dogs/car_corvette

A successful response will result in a '200-ok response code and the car will be returned in the response body
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

## OEM
## Create a OEM 
Create an OEM via a `POST` to the '/oems' route passing a car JSON object in the request body.
```
POST /oems

{
  "name": "General Motors",
  "country": "USA",
  "CEO": "Mary Barra",
  "salesVolume": 9,958,000,
  "models": ["Volt", "Equinox", "Corvette", "Escalade", "Camaro"],
  "hqCity": "Detroit",
  "type: "oem" 
}
```
A successfully created oem will result in a '201 -Created' response and the oem document will be returned in the respnse body. The response body will include an '_id' and '_rev' properties 
```
{
  "_id": "oem_general-motors"
  "_rev": "1-aajdj3387"
  "name": "General Motors",
  "country of origin": "USA",
  "CEO": "Mary Barra",
  "Sales volume": 9,958,000,
  "models": ["Volt", "Equinox", "Corvette", "Escalade", "Camero"],
  "headquarters": "Detroit, MI",
  "type: "oem" 
}
```



