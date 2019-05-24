 
from bottle import route, run, view, response
from horoscope import generate_prophecies
from datetime import datetime as dt
from random import random 

@route("/prediction") 
 
def generate_something():
    now = dt.now()
    x = random()

    response.headers["Access-Control-Allow-Origin"] = "*"
    return {
        "date": f"{now.year}-{now.month}-{now.day}",
        "predictions": generate_prophecies(),
        "special_date":  x > 0.5,
        "x": x
    }
 


run()