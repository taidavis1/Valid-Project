from datetime import timedelta

class Configuration:
    SQLALCHEMY_DATABASE_URI = "mysql+pymysql://nina:123giadinh@74.208.246.165:3306/admin_tanya" 
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    JWT_SECRET_KEY = '123giadinh'
    JWT_COOKIE_SECURE = True
    JWT_ACCESS_TOKEN_EXPIRES = timedelta(hours=1)
    SECRET_KEY = '123giadinh'