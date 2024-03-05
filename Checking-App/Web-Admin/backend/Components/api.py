from flask import request, jsonify, Blueprint
from Components.database import *



api = Blueprint('api', __name__,)


@api.route('/api/generatehours/<day>/<date>')
def generate(day , date):
    hourSun = ['11:00 AM' , '11:30 AM' , '12:00 PM' , '12:30 PM' , '01:00 PM' , '01:30 PM' , '02:00 PM' , '02:30 PM' , '03:00 PM' , '03:30 PM' , '04:00 PM' , '04:30 PM' , '5:00 PM']
    hourReg = ['10:30 AM', '11:00 AM', '11:30 AM', '12:00 PM', '12:30 PM', '01:00 PM', '01:30 PM' , '02:00 PM' , '02:30 PM' , '03:00 PM' , '03:30 PM' , '04:00 PM' , '04:30 PM' , '05:00 PM' , '05:30 PM' , '06:00 PM' , '06:30 PM' , '07:00 PM']
    hourSat = ['10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM', '12:00 PM', '12:30 PM', '01:00 PM', '01:30 PM' , '02:00 PM' , '02:30 PM' , '03:00 PM' , '03:30 PM' , '04:00 PM' , '04:30 PM' , '05:00 PM' , '05:30 PM' , '06:00 PM']
    similartime  = Booking.query.filter(Booking.date == date).all()
    booked_times = [booking.time for booking in similartime]
    if day == 'Sun':
        available_hours = [item for item in hourSun if item not in booked_times]
    elif day == 'Sat':
        available_hours = [item for item in hourSat if item not in booked_times]
    else:
        available_hours = [item for item in hourReg if item not in booked_times]
    return jsonify({
        "hours": available_hours,
    })

@api.route('/api/book' , methods = ['POST'])
def book():
    data = request.get_json()
    slist = data.get('service')
    phone = data.get('phone')
    name = data.get('name')
    time = data.get('time')
    date = data.get('date')
    technician = data.get('technician')
    
    check_book = Booking.query.filter_by(phone = phone , date = date).first()
    
    if check_book:
        return jsonify({
            "messages": "Already Book"
        })
        
    else:
        booking = Booking(name , phone , date, time , slist , technician)
        db.session.add(booking)
        db.session.commit()
        return jsonify({
            "messages": "Thank You For Your Appointment! We will be in touch soon",
        })
