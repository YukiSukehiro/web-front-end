import React, {useState} from "react";
import './Register.css'
import { Link, useNavigate } from 'react-router-dom'
import logo from './images/logo.png'
import Validation from './CreateValidation'; 
import axios from "axios";




function Register () {
    const [values, setValues] = useState({
        name: '',
        email:'',
        password:''
    })
    const navigate = useNavigate();
    const [errors, setErrors] = useState({})
    const handleInput = (event) => {
        setValues(prev => ({...prev, [event.target.name]: event.target.value}))
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        setErrors(Validation(values));
        if(errors.name === "" && errors.email === "" && errors.password === "") {
            axios.post('http://localhost:8081/signup', 
                values)
                .then((response) => {
                    navigate('/sign-in');
                })
            .catch(err => console.log(err) 
            );
        }
    }
    return(
        <>
        <div className="register">
        <div className='d-flex justify-content-center align-items-center bg-transparent'>
            <div className='register-card'>
            <div className="register-center">
                <img className="logo" src={logo} width={110}  alt='upang'/>
                <h2>Sign Up</h2>
            </div>
        <form action='' onSubmit={handleSubmit}>
        <div className='mb-3'>
            <label htmlFor="name" style={{fontSize: '20px'}}>Name</label>
            <input  type='name' placeholder='yun name mo'  name='name' className='form-control rounded-0' 
            onChange={handleInput}/>
            {errors.name && <span className='text-danger' style={{fontSize: '15px'}}>{errors.name}</span>}
            </div>
            <div className='mb-3'>
            <label htmlFor="email" style={{fontSize: '20px'}}>Email</label>
            <input  type='email' placeholder='yungemailmo@gmail.com'  name='email' className='form-control rounded-0' 
            onChange={handleInput}/>
            {errors.email && <span className='text-danger' style={{fontSize: '15px'}}>{errors.email}</span>}
            </div>
            <div className='mg-3'>
            <label htmlFor="password" style={{fontSize: '20px'}}>Password</label>
            <input type='password' placeholder='**********'  name='password' className='form-control rounded-0'
            onChange={handleInput}/>
            {errors.password && <span className='text-danger' style={{fontSize: '15px'}}>{errors.password}</span>}
            </div>
            <p style={{fontSize: '13px'}}>You are agree to our terms and policies</p>
            <div className="register-btn-container">
                <button  className="log-in"><strong>Sign up</strong></button>
                <Link to="/sign-in" style={{textDecoration: 'none'}}>
                    <button  className="log-in"><strong>Sign in</strong></button>
                </Link>
            </div>
        </form>
        </div>
         </div>
        </div>
        </>
        
    )
}

export default Register;