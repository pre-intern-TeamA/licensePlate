import React, { Component } from 'react';
import './Register.css';
import Show from './Show';


class Register extends Component {
    constructor(props){
        super(props);
        this.state = {
            file : '',
            previewURL : '',
            isLoading : true
        }
    }
    handleFileOnChange = (event) => {
        event.preventDefault();
        let reader = new FileReader();
        let file = event.target.files[0];
        reader.onloadend = () => {
          this.setState({
            file : file,
            previewURL : reader.result,
            isLoading : false
          })
        }
        reader.readAsDataURL(file);
    } 
    
    summit(){
<<<<<<< HEAD
        alert('Summited, Going to Status Page.')
    }

    reject(){
        alert('Returning to the Home Page.')
=======
        alert('Summited, Returning to the Home screen.')
    }

    reject(){
        alert('Returning to the Home screen.')
>>>>>>> b55fcbd89907e2aba78b27adfd94d8f2a6634937
    }

    render(){
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
            <div className="register_backImg">
                <div style={background}>
                <div style={parent_div}>
                {this.state.isLoading ?
                <div>
                <label className="input-file-button" for="input-file">Register</label>
                <input
                    style={{display:"none"}}
                    id = "input-file"
                    type='file' 
                    accept='image/jpg,impge/png,image/jpeg,image/png' 
                    name='car_img' 
                    onChange={this.handleFileOnChange}/></div>
                        : <Show File={this.state.file} URL={this.state.previewURL} />}
                

                {this.state.isLoading ?<div/>:
                <div className="summit">
                    <h2>Would you like to register this car?</h2>
                    
<<<<<<< HEAD
                    <a href='/status'>
                        <button className="summit_bnt" onClick={this.summit}>Yes</button>
                    </a>
                    <a href='/home'>
=======
                    <a href='/home'>
                        <button className="summit_bnt" onClick={this.summit}>Yes</button>
>>>>>>> b55fcbd89907e2aba78b27adfd94d8f2a6634937
                        <button className="summit_bnt" onClick={this.reject}>No</button>
                    </a>
                </div>}

                </div>
                </div>
            </div>
        );
    }
}

export default Register;