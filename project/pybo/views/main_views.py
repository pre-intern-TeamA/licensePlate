from flask import Blueprint, url_for #render_template
#from pybo.models import Question
from werkzeug.utils import redirect

bp = Blueprint('main', __name__, url_prefix='/')

@bp.route('/hello')
def hello_pybo():
    return 'Hello, Pybo!'

@bp.route('/')
def index():
    return redirect(url_for('question._list'))
    # url_for 함수는 라우트가 설정된 함수명으로 URL을 역으로 찾아준다.
"""
@bp.route('/')
def index():
    # 조회 결과를 내림차순 정렬 order by desc
    # 조회 결과를 작성 일시 기준 역순(내림차순) : Question.create_date.desc
    question_list = Question.query.order_by(Question.create_date.desc())
    # render_template 함수는 템플릿 파일을 화면에 그려 준다.
    # 조회된 목록을 템플릿으로 전달하여 받은 데이터로 화면을 구성한다.
    return render_template('question/question_list.html', question_list=question_list)

@bp.route('/detail/<int:question_id>/')
def detail(question_id):
    question = Question.query.get_or_404(question_id)
    return render_template('question/question_detail.html', question=question)
"""