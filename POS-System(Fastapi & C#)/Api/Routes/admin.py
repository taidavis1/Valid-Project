from fastapi import APIRouter , Depends
from db.db import Session , get_db
from db.model import *

admin = APIRouter(
    prefix = "/admin",
)

@admin.post("/add_categories")
def add_cat(cat: CategoriesBase , db:Session = Depends(get_db)):
    cat = Categories(cat_name = cat.cat_name)
    db.add(cat)
    db.commit()
    db.refresh(cat)
    return {'msg': 'Add Successfully'}

@admin.get("/categories")
def get_service(db: Session = Depends(get_db)):
    cat = db.query(Categories).all()
    return cat

@admin.post("/add_service")
def add_service(service: ServicesBase , db: Session = Depends(get_db)):
    db_services = Services(serviceType = service.serviceType , serviceName = service.serviceName , servicePrice = service.servicePrice)
    db.add(db_services)
    db.commit()
    db.refresh(db_services)
    return {'msg': 'Add Successfully'}

@admin.get("/service/{catname}")
def get_service(catname: str , db: Session = Depends(get_db)):
    service = db.query(Services).filter_by(serviceType = catname).all()
    return service

@admin.get("/checkin")
def get_checkin(db: Session = Depends(get_db)):
    checkin = db.query(Checkin).all()
    return checkin

@admin.get("/Employee")
def get_employee(db:Session = Depends(get_db)):
    employee = db.query(Employee).all()
    return employee

@admin.put("/Edit/employee")
def edit_employee(emp:EmployeeBase , db:Session = Depends(get_db)):
    employee = db.query(Employee).filter(Employee.name == emp.name).first()
    for i , j in vars(emp).items():
        if j is not None:
            setattr(employee,i,j)
    db.commit()
    db.refresh(employee)
    return{'msg' : 'Complete edit'}