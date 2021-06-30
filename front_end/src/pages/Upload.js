import axios from 'axios';
import Length from './Length';

function Upload(props){
    const file = props.File;
    const fd = new FormData();
    fd.append('id', Length())
    fd.append('file',file);
    
    console.log(Length())
    axios.post('http://3.37.116.243:5000/register', fd,{
        headers : {
            "content-type": "multipart/form-data",
        },
    })
    .then(response => {console.log(response)})
    .catch(error => {console.log(error)})
    return(
        alert("Registered. Returning to the Home screen.")
    )
}

export default Upload;