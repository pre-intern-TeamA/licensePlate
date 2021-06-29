from detection.app import db
from datetime import datetime

class User(db.Model):
#    __tablename__ = 'user'
    __table_args__ = {'mysql_collate': 'utf8_general_ci'}   # 한글 인식

    id = db.Column(db.Integer, primary_key=True, nullable=False)
    file_name = db.Column(db.String(100), default='default.jpg', nullable=False)
    current_time = db.Column(db.DateTime)

    def __init__(self, id, file_name, current_time):
        self.id = id
        self.file_name = file_name
        self.current_time = datetime.now()
    # user 객체 자체로 print 찍었을 때 어떤 모습인지 정해주기
    def __repr__(self):
        return 'id : %d, file_name : %s, current_time : %s' % (self.id, self.file_name, self.current_time)
    # db에서 query 한 결과인 QueryObject 타입을 dict 타입으로 변환
    def as_dict(self):
        return {x.name: getattr(self, x.name) for x in self.__table__.columns}


