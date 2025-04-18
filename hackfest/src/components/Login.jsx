import React from 'react';
import { FaUserAlt,FaLock} from "react-icons/fa";
import './Login.css';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function Login(){
    const{
        register,
        formState:{errors}
    }=useForm();

    const [username,setUsername]=useState('');
    const [password,setPassword]=useState('');
    const navigate=useNavigate();

    const handleSubmit =(e)=>{
        e.preventDefault();
        axios.post('XXX',{username,password})
        .then(res=>{
            console.log("Login response:",res);
            if(res.data===200 && res.data.message ==='OK'){
                localStorage.setItem('userId',res.data.user.id);
                navigate ('/home');
            } else if (res.data === 'incorrect password') {
                alert("Incorrect password");
              } else if (res.data === 'User not found') {
                alert("User not found");
              } else {
                alert("Something went wrong");
              }
    } )
    .catch(err =>{
        console.error("Login error:", err);
        alert("An error occurred during login. Please try again later.");
    });
};

return(
    <div className="login">
        <div className="wrapper">
            <form onSubmit={handleSubmit}>
                <h1>Login</h1>
                <div className="input-box">
                    <input type="text" placeholder="Username" required 
                    {...register("username", { 
                        required: "Username is required",
                        minLength: {
                          value: 3,
                          message: "Username must be at least 3 characters"
                        }
                      })}
                      onChange={(e) => setUsername(e.target.value)}
                    />
                    {errors.username && <p className="error red">{errors.username.message}</p>}
                    <FaUserAlt className='icon'/>
                </div>
                <div className="input-box">
                    <input type="password" placeholder="Password" required 
                    {...register("password", { 
                        required: "Password is required",
                        minLength: {
                          value: 8,
                          message: "Password must be at least 8 characters"
                        }
                      })}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    {errors.password && <p className="error red">{errors.password.message}</p>}
                    <FaLock className='icon'/>
                </div>
                <button type="submit" className="btn">Login</button>
                <div className="register-link">
                    <p>Don't have an account? <a href="/register">Register</a></p>
                </div>
            </form>
        </div>
    </div>
);
}
export default Login;