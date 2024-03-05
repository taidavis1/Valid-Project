from flask import request, jsonify, Blueprint
import datetime
from .api import *
from Components.database import *
from flask_socketio import SocketIO, emit
import json

socket = Blueprint('socket', __name__,)

socketio = SocketIO(cors_allowed_origins='*')

def init_sok(app):
    socketio.init_app(app)

@socketio.on('check_in')
def add_checking(data):
    phone = data.get('phone')
    book_check = Booking.query.filter_by(phone = phone).first()
                
    if not book_check:
        emit("check_data_app" , "No Book Information")
            
    else:
        
        list_data = {
            'name': book_check.name,
            'phone': phone,
            'time': book_check.time,
            'date': book_check.date,
            'services': book_check.get_list(),
            'technician': book_check.technician 
        }
        
        emit("check_data_app" , "You have Successfuly Check In")
        emit("check_data" , list_data, broadcast= True)
        

@socketio.on('delete_checkin' , namespace='/delete')
def delete_checkin(data):
    phone = data.get('phone')
    book = Booking.query.filter_by(phone = phone).first()
    db.session.delete(book)
    db.session.commit()            
    emit("delete_msg" , {
        'msg': "You have Successfuly Delete",
        'phone': phone,
    })