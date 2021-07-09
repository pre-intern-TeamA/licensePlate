import './Show.css'


function Show(props){     
    return (
        <div>
            {/* 등록 시 이미지 미리보기 */}
            <img className = "carInfo" alt="pic" src={props.URL}/>
        </div>
    );
}

export default Show;