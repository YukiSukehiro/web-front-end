
import React from 'react'
import './SparklingHomes.css';

export default function Modules() {

return (
    <>
    <div className='sparkling-homes'>
        <div className='repo'>
            <div className='sito'>
            </div>
            <div>
            <h1 className='spark'> Sparkling Homes</h1>
            <p className='paragraph'>"Welcome to Sparkling Homes, where cleanliness meets convenience. Get ready to experience a spotless home with just a few clicks!"</p>
                </div>
        </div>
        <a href='/about-us' style={{textDecoration: 'none'}}>
        <button className='learn' > LEARN MORE</button>
    </a>
    </div>
    </>
);
}
