from sqlalchemy import Column  , Integer , String
from typing import List , Optional
from pydantic import BaseModel
from .db import Base
class Categories(Base):
    __tablename__ = "categories"
    id = Column(Integer , primary_key= True, index= True)
    cat_name = Column(String(200) , index= True , nullable= False)

class Services(Base):
    __tablename__ = "services"
    id = Column(Integer , primary_key= True, index= True)
    serviceType = Column(String(200) , index= True , nullable= False)
    serviceName = Column(String(200) , nullable= False)
    servicePrice = Column(Integer , nullable= False)

class Employee(Base):
    __tablename__ = "employee"
    id = Column(Integer , primary_key= True, index= True)
    name = Column(String(200) , index= True , nullable= False)
    Phone = Column(String(200) , index= True , nullable= False)
    ImgUrl = Column(String(200) , index= True , nullable= True)
    DayOff = Column(String(200) , nullable= False)

class Booking(Base):
    __tablename__ = "booking"
    id = Column(Integer , primary_key= True, index= True)
    name = Column(String(200) , nullable= False)
    phone = Column(String(200) , nullable= False)
    date = Column(String(200) , nullable= False)
    time = Column(String(200) , nullable= False)
    services_list = Column(String(200) , nullable= False)
    tech = Column(String(200) , nullable= False)

class Checkin(Base):
    __tablename__ = "checkin"
    id = Column(Integer , primary_key= True, index= True)
    name = Column(String(200) , nullable= False)
    phone = Column(String(200) , nullable= False)
    date = Column(String(200) , nullable= False)
    time = Column(String(200) , nullable= False)
    services_list = Column(String(200) , nullable= False)
    tech = Column(String(200) , nullable= False)
    
class CategoriesBase(BaseModel):
    cat_name: str

class ServicesBase(BaseModel):
    serviceType: str
    serviceName: str
    servicePrice: int

class BookingBase(BaseModel):
    name:str
    phone: str
    date: str
    time: str
    services_list: List[str]
    tech: str

class CheckinBase(BaseModel):
    name:str
    phone: str
    date: str
    time: str
    services_list: list
    tech: str

class EmployeeBase(BaseModel):
    name:Optional[str] = None
    Phone:Optional[str] = None
    ImgUrl:Optional[str] = None
    DayOff:Optional[str] = None
