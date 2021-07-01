import axios from "axios";
import {useEffect, useState} from 'react';

function ID()  {
    var number = 0 ;
    const [users, setUsers] = useState([]);
    useEffect(() => {
    axios.get('http://3.37.116.243:5000/status')
        .then(response =>{
            console.log(response)
            setUsers(response.data);
        });
    }, []);

    users.map(user=> number)

    return number;
}
export default ID;