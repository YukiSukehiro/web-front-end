import React, {useState} from "react";
import logo from './images/logo.png'
import { useNavigate } from 'react-router-dom'
import Validation from './CreateValidation'; 
import './BookNow.css'
import axios from "axios";

function BookNow () {
    const [values, setValues] = useState({
        name: '',
        address:'',
        phonenumber:'',
        email:'',
        date:''
    })
    const navigate = useNavigate();
    const [errors, setErrors] = useState({})
    const handleInput = (event) => {
        setValues(prev => ({...prev, [event.target.name]: event.target.value}))
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        setErrors(Validation(values));
        if( errors.email === "") {
            axios.post('http://localhost:8081/bookings', 
                values)
                .then((response) => {
                    navigate('/home');
                })
            .catch(err => console.log(err) 
            );
        }
    }
        return (
        <div className='book-now'>
            <form action='' onSubmit={handleSubmit}>
            <div className='d-flex justify-content-center align-items-center bg-transparent vh-200'>
            <div className='bg-white p-3 rounded ' style={{width: '450px', height: '690px'}}>
            <img className="" src={logo} width={110} style={{borderRadius: "250px", height: '110px', position: 'relative', left: '155px'}} alt='upang'/>
                <h2 style={{position: 'relative', left: '155px', bottom: '-10px', width: '100px'}}>Services</h2>
            <div className='mb-3'>
            <label htmlforfor='name' style={{fontSize: '20px'}}>Name
            <input style={{width: '200%'}} autoComplete="name" type='name' placeholder='yun name mo'  name='name' className='form-control rounded-0' 
            onChange={handleInput}/>
            </label>
            
            </div>
            <div className='mb-3'>
            <label htmlforfor='address' style={{fontSize: '20px'}}>Address
            <input  style={{width: '200%'}} autoComplete="address" type='address' placeholder='yun address mo'  name='address' className='form-control rounded-0' 
            onChange={handleInput}/>
            </label>
            
            </div>
            <div className='mb-3'>
            <label htmlforfor='phonenumber' style={{fontSize: '20px'}}>Phone Number
            <input  style={{width: '200%'}}  type='phonenumber' placeholder='yun phonenumber mo'  name='phonenumber' className='form-control rounded-0' 
            onChange={handleInput}/>
            </label>
            
            
            </div>
            <div className='mb-3'>
            <label htmlforfor='email' style={{fontSize: '20px'}}>Email
            <input  style={{width: '200%'}} autoComplete="email" type='email' placeholder='yun email mo'  name='email' className='form-control rounded-0' 
            onChange={handleInput}/>
            </label>
            {errors.email && <span className='text-danger' style={{fontSize: '15px', position: 'absolute'}}>{errors.email}</span>}
            </div>
            <div className='mb-3'>
            <label htmlforfor='date' style={{fontSize: '20px'}}>Date
            <input  style={{width: '278%'}}  type='date' placeholder='yun date mo'  name='date' className='form-control rounded-0' 
            onChange={handleInput}/>
            </label>
            
            </div>
            </div>
            </div>
            <button type="submit" className='log' ><strong 
            >Appointment</strong></button>
            </form>
        </div>
    );
}

export default BookNow;