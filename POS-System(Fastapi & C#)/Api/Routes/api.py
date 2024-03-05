from fastapi import APIRouter , Depends
import db.model as model
import json
from db.db import Session , get_db
from db.model import *

api = APIRouter(
    prefix = "/api",
)

@api.get("/generatehours/{day}/{date}")
def GenerateHours(day:str , date:str , db: Session = Depends(get_db)):
    available_hours = []
    hour = ['9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM', '11:00 PM', '11:30 PM', '12:00 PM', '12:30 PM' , '01:00 PM' , '01:30 PM' , '02:00 PM' , 
            '02:30 PM' , '03:00 PM' , '03:30 PM' , '04:00 PM' , '04:30 PM' , '05:00 PM',
            "05:30 PM" , "06:00 PM"]
    similarTime = db.query(Booking).filter(Booking.date == date).all()
    booked_time = [booking.time for booking in similarTime]
    if day != 'Sun':
        available_hours = [item for item in hour if item not in booked_time]
    return {'hours' : available_hours}

@api.post("/booking")
def booking(book: BookingBase , db: Session = Depends(get_db)):
    book_data = book.model_dump()
    check_book = db.query(Booking).filter_by(phone = book_data['phone'] , date = book_data['date']).first()
    if check_book:
        return {'msg' : f'Already Book on this date {check_book.date}'}
    else:
        book_data['services_list'] = json.dumps(book_data['services_list'])
        db_book = Booking(**book_data)
        db.add(db_book)
        db.commit()
        db.refresh(db_book)
        return {'msg': 'Thank you for booking with us'}