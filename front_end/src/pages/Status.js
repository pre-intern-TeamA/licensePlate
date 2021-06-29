import React, {useEffect, useState} from 'react';
import './Status.css';
import axios from 'axios';

const Status= () => {
    const parent_div = {
        width: "100%",
        height: "100%",
        textAlign: "center",
    };
    const background = {
        width: "100%",
        height: "100vh",
        backgroundSize: "400% 400%",
    };
    
    const [users, setUsers] = useState([]);
    useEffect(() => {
    axios.get('http://localhost:3000/posts')
        .then(response =>{
            console.log(response)
            setUsers(response.data);
        });
    }, []);

    return (
        <div className="status_backImg">
            <div style={background}>
            <div style={parent_div}>
                <div className="Car_Info">
                {users.map(user=>{
                    return(
                    <div className="user_info">
                        Id : {user.id}    {user.time}<br/>
                        <img alt="pic" className='profile_preview' src={user.file_url} class="img-rounded"/>
                    </div>
                    )
                })}
                </div>
                <a href='/home' >
                    <button href='/home' className="home">Return Home</button>
                </a>
            </div>
            </div>
        </div>
        );
}

export default Status;