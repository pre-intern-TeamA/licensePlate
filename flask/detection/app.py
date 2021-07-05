from flask import Flask, request, make_response, jsonify
from flask_cors import CORS
from werkzeug.utils import secure_filename
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
import config
from detection.carnumber import detect_number
import time

db = SQLAlchemy()
migrate = Migrate()

app = Flask(__name__)
app.config.from_object(config)

    # ORM
db.init_app(app)
migrate.init_app(app, db)
from detection.model import User

CORS(app)
def get_filename():
    filename = secure_filename(g_file.filename)
    return filename

@app.route("/register",methods=['POST'])
def register():
    global g_file, g_id, filename

    g_file = request.files['file']
    filename = get_filename()
    fileURL = request.form['file_url']
    g_file.save('./' + secure_filename(g_file.filename))
    g_id = filename[0:1]
    carNum = detect_number(filename, g_id)
    print("carNum: ", carNum)   # debug
    time_now = time.strftime('%c', time.localtime(time.time()))
    user = User(id=g_id, file_name=filename, fileURL=fileURL, car_number=carNum, current_time=time_now)
    db.session.add(user)
    db.session.commit()
    return make_response(jsonify(success=True), 200)

@app.route("/status", methods=['GET'])
def status():
    import pandas as pd
    all = User.query
    df = pd.read_sql(all.statement, all.session.bind)
    import json
    data = json.loads(df.to_json(orient='records'))
    return jsonify(data), 200

@app.route("/delete/<del_id>", methods=['GET'])
def delete(del_id):
    tmp = User.query.filter(User.id == del_id).one()
    db.session.delete(tmp)
    db.session.commit()
    return jsonify(success=True), 200

if __name__ == "__main__":
    app.run(host='0.0.0.0', debug=True)

