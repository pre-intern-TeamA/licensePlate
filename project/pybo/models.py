from pybo import db

class Question(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    subject = db.Column(db.String(200), nullable=False)
    content = db.Column(db.Text(), nullable=False)
    create_date = db.Column(db.DateTime(), nullable=False)

class Answer(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    question_id = db.Column(db.Integer, db.ForeignKey('question.id', ondelete='CASCADE'))
    question = db.relationship('Question', backref=db.backref('answer_set'))
    content = db.Column(db.Text(), nullable=False)
    create_date = db.Column(db.DateTime(), nullable=False)

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True, nullable=False)
    password = db.Column(db.Integer)
    customer = db.Column(db.String(50))

class Detail(db.Model):
    name = db.Column(db.String(10), primary_key=True, nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    phone_number = db.Column(db.Integer)
    address = db.Column(db.Integer)
    where = db.Column(db.String(100), nullable=False)

class Parking(db.Model):
    parking_nubmer = db.Column(db.Integer, primary_key=True, nullable=False)
    customer = db.Column(db.String(100), db.ForeignKey('user.customer'), nullable=False)
    date = db.Column(db.DateTime())
    where = db.Column(db.String(100), db.ForeignKey('detail.where'), nullable=False)
    in_time = db.Column(db.DateTime())
    out_time = db.Column(db.DateTime())
    cost = db.Column(db.Integer)

class WhereDetail(db.Model):
    id = db.Column(db.Integer, primary_key=True, nullable=False)
    where = db.Column(db.String(100), db.ForeignKey('detail.where'), nullable=False)
    max_car_num = db.Column(db.Integer)
    car_num = db.Column(db.Integer)
    cost_per_10min = db.Column(db.Integer)