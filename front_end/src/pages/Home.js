import React from 'react';
import './Home.css';
import car_status from '../Image_file/park_status.png'
import car_register from '../Image_file/register_car.png'

const Home = () => {
<<<<<<< HEAD
=======

>>>>>>> b55fcbd89907e2aba78b27adfd94d8f2a6634937
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
        <div className="home_backImg">
            <div style={background}>
            <div style={parent_div}>
                <a href='/status' >
                    <img className="status" src={car_status} alt="Car_Status"/>
                </a>
                <a href='/register'>
                    <img className="register" src={car_register} alt="Car_Status"/>
                </a>
            </div>
            </div>
        </div>
    );
}

export default Home;