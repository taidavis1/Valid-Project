from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import db.model as model
from db.db import engine
from db.model import *
from Routes.api import api
from Routes.admin import admin

app = FastAPI()
origins = [
    "https://nailstech-md.com",
]
app.add_middleware(
    CORSMiddleware,
    allow_origins = origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(api)
app.include_router(admin)
model.Base.metadata.create_all(bind = engine)