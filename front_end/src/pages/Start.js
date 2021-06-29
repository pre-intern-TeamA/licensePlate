import React from "react";
import { Link } from "react-router-dom";
import "./Start.css";

const Start = () => {
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
    <div className="start_backImg">
        <div style={background}>
        <div style={parent_div}>
            <Link to='/Home'>
              <div className='move_on_script'>Press Here To Start.</div>
            </Link>
        </div>
        </div>
    </div>
  );
};

export default Start;
