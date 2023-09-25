import './Footer.css';
import React from "react";
import logo from './pages/images/logo.png'






function Footer (){

return (
    <>
    <div className='main-footer'>
    <div className= "container">
    <div className="row1">
    <div className='social'>

        <img className="logo" src={logo} width={100}  alt='upang'/>
        <h4 className='title'>Sparkling Homes</h4>
        <p className='sub-title'>"Bringing the Glamour to Your Living Spaces!✨"</p>
        <h5> Follow Us </h5>
        <div>
            <a style={{textDecoration: 'none'}} href='https://www.facebook.com/Ajeple' target='_blank' rel='noreferrer' className="fa-brands fa-square-facebook">
            </a>
        </div>
        <div >
            <a style={{textDecoration: 'none'}} href='https://twitter.com/ShinChoiOhab' target='_blank' rel='noreferrer'  className="fa-brands fa-square-instagram">     
            </a>
        </div>
            <a style={{textDecoration: 'none'}} href='https://www.instagram.com/diazjohnnilo/' target='_blank' rel='noreferrer' className="fa-brands fa-square-twitter">
            </a>
        <div>
            <h6>sparklinghomes@gmail.com</h6>
        </div>
        </div>
            </div>
            <div className="row">
                &copy;{new Date().getFullYear()} Sparkling Homes | All Right Reserved | Term Of Service | Privacy 
            </div>
    </div>
  
        </div>
    </>

);
}
export default Footer;