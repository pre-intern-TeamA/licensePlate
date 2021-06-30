from detection.app import db

class User(db.Model):
#    __tablename__ = 'user'
    __table_args__ = {'mysql_collate': 'utf8_general_ci'}   # for utf8

    id = db.Column(db.Integer, primary_key=True, nullable=False)
    file_name = db.Column(db.String(100), default='default.jpg', nullable=False)
    fileURL = db.Column(db.String(4294000000))
    car_number = db.Column(db.String(20), nullable=False)
    current_time = db.Column(db.String(50), nullable=False)
    
    def __init__(self, id, file_name, fileURL, car_number, current_time):
        self.id = id
        self.file_name = file_name
        self.fileURL = fileURL
        self.car_number = car_number
        self.current_time = current_time

    # for print
    def __repr__(self):
        return 'id : %d, file_name : %s, car_number : %s, current_time : %s' % (self.id, self.file_name, self.car_number, self.current_time)
    # In db, the type of 'QueryObject' which is the result of query, translate to the type of 'dict'
    def as_dict(self):
        return {x.name: getattr(self, x.name) for x in self.__table__.columns}


