from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker , Session

SQLALCHEMY_DATABASE_URI =  "mysql+pymysql://selena:123giadinh@74.208.246.165:3306/admin_pasadena"
# mysql+pymysql://selena:123giadinh@74.208.246.165:3306/admin_pasadena"
# mysql+pymysql://root:123giadinh@localhost/testdb
engine = create_engine(
    SQLALCHEMY_DATABASE_URI
)
SessionLocal = sessionmaker(autocommit = False , autoflush = False , bind = engine)
Base = declarative_base()
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


