from flask import request, jsonify, Blueprint
import datetime
from datetime import timedelta , timezone
from flask_jwt_extended import create_access_token, JWTManager, jwt_required, get_jwt, get_jwt_identity, unset_jwt_cookies
from Components.database import *

admin = Blueprint('admin' , __name__)

admin_user = {
    'name': 'nina',
    'pass': '123'
}

jwt = JWTManager()

def init_jwt(app):
    jwt.init_app(app)

@admin.after_request
def refresh_expiring_jwts(response):
    try:
        exp_timestamp = get_jwt()["exp"]
        now = datetime.datetime.now(timezone.utc)
        target_timestamp = datetime.datetime.timestamp(
            now + timedelta(minutes=30))
        if target_timestamp > exp_timestamp:
            access_token = create_access_token(identity=get_jwt_identity())
            data = response.get_json()
            if type(data) is dict:
                data["access_token"] = access_token
                response.data = json.dumps(data)
        return response
    except (RuntimeError, KeyError):
        return response


@admin.route("/admin/login", methods=['POST'])
def login():
    data = request.get_json()
    username = data.get('username')
    password = data.get('password')
    if username == admin_user['name'] and admin_user['pass'] == password:
        access_token = create_access_token(identity=username)
        return jsonify(access_token=access_token)
    else:
        return jsonify({
            'message': 'Not Match'
        })


@admin.route("/admin/logout", methods=['POST'])
def logout():
    response = jsonify({"msg": "logout successful"})
    unset_jwt_cookies(response)
    return response


@admin.route('/admin/delete/<int:id>', methods=['DELETE'])
@jwt_required(locations=['headers'])
def delete_data(id):
    book = Booking.query.filter_by(id = id).first()
    db.session.delete(book)
    db.session.commit()
    
    return jsonify({
        'message': 'Successful Delete'
    })

@admin.route('/admin/adminBook')
@jwt_required(locations=['headers'])
def admin_check_book():
    data = Booking.query.order_by(Booking.date).all()
    list_data = [i.to_dict() for i in data]
    return jsonify(
        {'data': list_data}
    )