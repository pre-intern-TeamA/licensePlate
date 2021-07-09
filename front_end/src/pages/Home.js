import React from 'react';
import './Home.css';
import car_status from '../Image_file/park_status.png'
import car_register from '../Image_file/register_car.png'

const Home = () => {
    //화면 크기 고정
    const parent_div = {
            width: "100%",
            height: "100%",
            textAlign: "center",
      };
      const background = {
            width: "100%",
            height: "100vh",
            backgroundSize: "400% 400%",
            animation: "gradient 13s ease infinite",
      };

    return (
        //배경 사진 지정
        <div className="home_backImg">
            <div style={background}>
            <div style={parent_div}>
                {/* 차량 조회 페이지 이동 */}
                <a href='/status' >
                    <img className="status" src={car_status} alt="Car_Status"/>
                </a>
                {/* 차량 등록 페이지 이동 */}
                <a href='/register'>
                    <img className="register" src={car_register} alt="Car_Status"/>
                </a>
            </div>
            </div>
        </div>
    );
}

export default Home;