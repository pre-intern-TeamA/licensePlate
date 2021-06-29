from flask import Flask, request, make_response, jsonify
from flask_cors import CORS
from werkzeug.utils import secure_filename
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
import config
from datetime import datetime   # 테스트용이므로 후에 지우기
db = SQLAlchemy()
migrate = Migrate()

app = Flask(__name__)
app.config.from_object(config)

    # ORM
db.init_app(app)
migrate.init_app(app, db)
#from . import models
from detection.models import User
    #return app
    
#app = create_app()
CORS(app)
#from app.models import User
#db.create_all()

def search_events(id):
    return User.query.filter_by(id=id).all()

@app.route("/post",methods=['POST'])
def post():
    global g_data, g_file
    if request.is_json:
        g_data = request.get_json()
        user = User(id=g_data['id'], file_name=g_data['file_name'], current_time=g_data['time'])
        print(user)
        db.session.add(user)
        db.session.commit()
        #now = g_data['time']
        #now = datetime(int(now))
        #date_to_compare = datetime.strptime("20210629", "%Y%m%d")
        #print("비교할 날짜: ", date_to_compare)
        #date_diff = now - date_to_compare
        #print("차이:", date_diff, ", Type:", type(date_diff))
        #print("db!?!: ", search_events(g_data['id']))
    else:
        g_file = request.files['file']
        g_file.save('./uploads/' + secure_filename(g_file.filename))
    return make_response(jsonify(success=True), 200)

@app.route("/test", methods=['GET'])
def test():
    #global g_data
    tmp = User.query.filter(User.id == 2).one()
    print (tmp.file_name)
    return jsonify(success=True), 200#g_data), 200

if __name__ == "__main__":
    app.run(host='0.0.0.0', debug=True)

