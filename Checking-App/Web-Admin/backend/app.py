from flask import *
from Components.api import *
from Components.database import *
from Components.config import *
from Components.socket import *
from Components.admin import *
from flask_cors import CORS


app = Flask(__name__)

app.config.from_object(Configuration)


db.init_app(app)

with app.app_context():
    
    db.create_all()

init_jwt(app)

init_sok(app)


CORS(app, supports_credentials=True)

app.register_blueprint(api)

app.register_blueprint(admin)

app.register_blueprint(socket)


##################################################################

if __name__ == '__main__':
    
    # app.run(debug=True , host='localhost' , port=8080)

    socketio.run(app, host='0.0.0.0', port=8080)
