import './Show.css'
<<<<<<< HEAD
=======
import Length from './Length';
>>>>>>> b55fcbd89907e2aba78b27adfd94d8f2a6634937
import axios from 'axios';

function Show(props){

        const fd = new FormData();
        fd.append('file',props.File);
        fd.append('file_url',props.URL);
        axios.post('http://3.37.116.243:5000/register', fd,{
            headers : {
                "content-type": "multipart/form-data"
            },
        })
        .then(response => {console.log(response)})
        .catch(error => {console.log(error)})
    return (
        <div >
            <img className = "carInfo" alt="pic" src={props.URL}/>
        </div>
    );
}

export default Show;