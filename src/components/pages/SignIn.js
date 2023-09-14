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
            <div className='bg-white p-3 rounded ' style={{width: '450px', height: '570px'}}>
                <img className="" src={logo} width={110} style={{borderRadius: "250px", height: '110px', position: 'relative', left: '155px'}} alt='upang'/>
                <h2 style={{position: 'relative', left: '155px', bottom: '-10px'}}>Sign In</h2>
        <form action='' onSubmit={handleSubmit}>
            <div className='mb-3'>
            <label htmlFor="email" style={{fontSize: '20px'}}>Email</label>
            <input  type='email' placeholder='yungemailmo@gmail.com' id='email' name='email' className='form-control rounded-0'
            onChange={handleInput}/>
            {errors.email && <span className='text-danger' style={{fontSize: '15px', position: 'absolute'}}>{errors.email}</span>}
            </div>
            <div className='mg-3'>
            <label htmlFor="password" style={{fontSize: '20px'}}>Password</label>
            <input type='password' placeholder='**********' id='password' name='password' className='form-control rounded-0'
            onChange={handleInput}/>
                        {errors.password && <span className='text-danger' style={{fontSize: '15px', position: 'absolute'}}>{errors.password}</span>}
            </div>
            <button  className='log-in' type='submit' style={{position: 'absolute', top: '69%', left: '44.6%',width: '200px', height: '47px', fontSize: '15px', color: 'white'}}><strong>Sign In</strong></button>
            <p style={{fontSize: '13px', position: 'absolute', left: '43.9%', top: '710px'}}>You are agree to our terms and policies</p>
        </form>
        <Link to="/register" className='create' style={{position: 'absolute', top: '78%', left: '46.3%', height: '47px', width: '130px', fontSize: '15px', color: 'white', textDecoration: 'none', textAlign: 'center', justifyContent: 'center'}}><strong style={{textAlign:'center', position: 'relative'
    , top: '10px'}}>Create account</strong></Link>
        </div>
    </div>
</div>
    </>
    );
    }
export default SignIn;