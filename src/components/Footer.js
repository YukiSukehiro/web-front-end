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
                <h3> Follow Us </h3>
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
            </div>
    <img className="logo" src={logo} width={100}  alt='upang'/>
        <h4>PHINMA University of Pangasinan</h4>
        <p>College of Information and Technology</p>
        
                {/* Column1 */}
            </div>
    </div>
    <hr />
    <div className="row">
            <p className="col-sm">
                &copy;{new Date().getFullYear()} Sparkling Homes | All Right Reserved | Term Of Service | Privacy 
            </p>
        </div>
        </div>
    </>

);
}
export default Footer;