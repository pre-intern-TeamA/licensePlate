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
        height: "150vh",
        backgroundSize: "400% 400%",
    };
    
    const [users, setUsers] = useState([]);
    useEffect(() => {
    axios.get('http://3.37.116.243:5000/status')
        .then(response =>{
            console.log(response)
            setUsers(response.data);
        });
    }, []);

    return (
        <div className="status_backImg">
            <div style={background}>
            <div style={parent_div}>
            <div className="test">
            <div className="grid">
            {users.map(user=>{
                return(
                <div className="box">
                    <img alt="pic" className='show_car' src={user.fileURL} />
                    <div className="user_info">
                        <ul>
                            <li>ID : {user.id}</li><br/>
                            <li>Car Number : {user.car_number}</li><br/>
                            <li>{user.current_time}</li>
                        </ul>
                    </div>
                </div>
                )
                })}
            </div>
            
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