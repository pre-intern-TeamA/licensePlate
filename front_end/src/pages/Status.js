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
    // 데이터베이스에서 읽을 정보를 담을 배열을 선언
    const [users, setUsers] = useState([]);
    useEffect(() => {
        // axios get을 해 지정된 주소에서 정보를 받음
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
                {/* 반복문을 사용해 모든 정보를 출력 */}
            {users.map(user=>{
                return(
                    // 차량별 grid에 정보 및 사진을 출력
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