import React, { useState } from 'react';
import './SignIn.css';
import { Link, useNavigate } from 'react-router-dom';
import logo from './images/logo.png';
import Validation from './Validation';
import axios from 'axios';


export const SignIn = () => {
    const [values, setValues] = useState({
        email:'',
        password:''
    })
    const navigate = useNavigate();
    const [errors, setErrors] = useState({})
    const handleInput = (event) => {
        setValues(prev => ({...prev, [event.target.name]: event.target.value}))
    }
    const handleSubmit =(event) => {
        event.preventDefault();
        setErrors(Validation(values));
        if( errors.email === "" && errors.password === "") {
            axios.post('http://localhost:8081/login', 
                values)
                .then((response) => {
                    navigate('/home');
                })
            .catch(err => console.log(err) 
            );
        }
    }

return (
    <>
    <div className='sign-in' >
        <div className='d-flex justify-content-center align-items-center bg-transparent vh-200'>
            <div className='signin-card'>
            <div className='signin-header'>
                <img className="logo" src={logo} alt='upang'/>
                <h2 >Sign In</h2>
            </div>
            <form action='' onSubmit={handleSubmit}>
            <div className='mb-3'>
            <label htmlFor="email" style={{fontSize: '20px'}}>Email</label>
            <input  type='email' placeholder='yungemailmo@gmail.com' id='email' name='email' className='form-control rounded-0'
            onChange={handleInput}/>
            {errors.email && <span className='text-danger' style={{fontSize: '15px'}}>{errors.email}</span>}
            </div>
            <div className='mg-3'>
            <label htmlFor="password" style={{fontSize: '20px'}}>Password</label>
            <input type='password' placeholder='**********' id='password' name='password' className='form-control rounded-0'
            onChange={handleInput}/>
                        {errors.password && <span className='text-danger' style={{fontSize: '15px'}}>{errors.password}</span>}
            </div>
            <p style={{fontSize: '12px'}}>You are agree to our terms and policies </p>
            <div className='signin-btn-container'>
                <button  className='log-in' type='submit'><strong>Sign In</strong></button>
                <Link  to="/register" style={{textDecoration: 'none'}}>
                <button  className='log-in' type='submit'><strong>Create Account</strong></button>
                </Link>
            </div>

            </form>
        </div>
    </div>
</div>
    </>
    );
    }
export default SignIn;