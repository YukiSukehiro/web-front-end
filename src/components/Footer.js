import './Footer.css';
import React from "react";
import logo from './pages/images/logo.png'






function Footer (){

return (
    <>
    <div className='main-footer'>
    <div className= "container">
    <div className="row1">
    <img className="logo" src={logo} width={100}  alt='upang'/>
        <h4>PHINMA University of Pangasinan</h4>
        <p>College of Information and Technology</p>
                {/* Column1 */}
            </div>
    </div>
    <hr />
    <div className="row">
            <p className="col-sm">
                &copy;{new Date().getFullYear()} This Website | All right reserved | Term Of Service | Privacy 
            </p>
        </div>
        </div>
    </>

);
}
export default Footer;