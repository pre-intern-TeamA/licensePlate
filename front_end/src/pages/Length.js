import {useEffect, useState} from 'react';
import axios from 'axios';

function Length(){
    var len = 0;
    const [users, setUsers] = useState([]);
    useEffect(() => {
    axios.get('http://3.37.116.243:5000/register')
        .then(response =>{
            console.log(response)
            setUsers(response.data);
        });
    }, []);
    {users.map(user => {
        return(
            <div>
                {len} = {len} + 1;
            </div>
        );
    })}

    return len;
}

export default Length;