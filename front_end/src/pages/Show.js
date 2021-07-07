import './Show.css'


function Show(props){     
    return (
        <div >
            <img className = "carInfo" alt="pic" src={props.URL}/>
        </div>
    );
}

export default Show;