from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import inspect
import json
import pymysql


db = SQLAlchemy()

class Booking(db.Model):
    id = db.Column(db.Integer , primary_key = True)
    name = db.Column(db.String(200) , nullable = False)
    phone = db.Column(db.String(200) , nullable = False)
    date = db.Column(db.String(200) , nullable = False)
    time = db.Column(db.String(200) , nullable = False)
    service_list = db.Column(db.String(200) , nullable = False)
    technician = db.Column(db.String(200) , nullable = False)
    
    def __init__(self, name, phone , date , time , service_list , technician):
        self.name = name
        self.phone = phone
        self.date = date
        self.time = time
        self.service_list = json.dumps(service_list)      
        self.technician = technician
    
    def get_list(self):             
        return json.loads(self.service_list)

    def to_dict(self):
        return {
            'id': self.id,
            'name': self.name,
            'phone': self.phone,
            'date': self.date,
            'time': self.time,
            'services': self.get_list(),
            'technician': self.technician,
        }
        
def int__app(app):
    db.__init__(app)