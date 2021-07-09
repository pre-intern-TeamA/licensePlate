import axios from 'axios'

// 차량 등록시 이미지와 id, 이미지 url을 formdata 형식으로 axios로 post
function Upload(props){
    const fd = new FormData();
    fd.append('id', 5);
    fd.append('file',props.File);
    fd.append('file_url',props.URL);
    axios.post('http://3.37.116.243:5000/register', fd,{
    headers : {
        "content-type": "multipart/form-data"
        },
    })
    .then(response => {console.log(response)})
    .catch(error => {console.log(error)})

    return 1;
}

export default Upload;