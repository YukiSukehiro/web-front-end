import React from 'react';
import './Home.css';

export default function Home() {
return (
    <>
    <div className='home'>
        <h1 className='h1'>Welcome to Sparkling Homes, 
        We can connect you with reliable cleaning professionals who will transform your living space into a spotless sanctuary, 
        whether you require a one-time thorough cleaning or monthly maintenance.
        </h1><br></br>
            <a href='/sign-up' style={{textDecoration: "none"}} >
                <button className='btn'>BOOK NOW</button></a>
                <div className='2nd-p'>
                    <h1 className='h1-2'> What We Do</h1>
                <p className='par'>We can connect you with reliable cleaning professionals who will transform your living space into a spotless sanctuary, 
                whether you require a one-time thorough cleaning or monthly maintenance.</p>
                </div>






                <div className="card">
        <div className="image">
        </div>
        <div className="content">
        <a href="/services">
        <span className="title">
        Customized Cleaning Plans.
        </span>
        </a>
        <p className="desc">
        The ability for homeowners to select and customize their cleaning preferences,
        such as the type of cleaning service (deep cleaning, regular maintenance, etc.), specific areas to focus on, and cleaning frequency (one-time, weekly, bi-weekly, monthly).

        </p>
        <a className="action" href="/book-now">
        BOOK NOW
        <span aria-hidden="true">
            →
        </span>
        </a>
    </div>
    </div>





    <div className="card-1">
        <div className="image-1">
        </div>
        <div className="content-1">
        <a href="/services">
        <span className="title-1">
        Professional Cleaning.
        </span>
        </a>
        <p className="desc-1">
        These services can be availed for residential, commercial, or industrial properties and cover
        a wide range of cleaning tasks to maintain cleanliness, hygiene, and aesthetics.
        (Inclusion: Carpet and upholstery cleaning, Industrial cleaning, Post-construction cleaning.)
        </p>
        <a className="action-1" href="/book-now">
        BOOK NOW
        <span aria-hidden="true">
            →
        </span>
        </a>
    </div>
    </div>





    <div className="card-2">
        <div className="image-2">
        </div>
        <div className="content-2">
        <a href="/services">
        <span className="title-2">
        Deep Cleaning.
        </span>
        </a>
        <p className="desc-2">
        Deep cleaning services aim to remove deeply embedded dirt, grime, 
        and allergens that may not be addressed in regular cleaning routines.( Carpet and upholstery cleaning, Tile and grout cleaning, Kitchen appliance cleaning, and Deep cleaning of hard floors.)

        </p>
        <a className="action-2" href="/book-now">
        BOOK NOW
        <span aria-hidden="true">
            →
        </span>
        </a>
    </div>
    </div>




    <div className="card-3">
        <div className="image-3">
        </div>
        <div className="content-3">
        <a href="/services">
        <span className="title-3">
        Regular Cleaning.
        </span>
        </a>
        <p className="desc-3">
        These services are often contracted on a weekly, bi-weekly, or monthly basis, 
        depending on the client's needs and preferences. ( Sweeping the floor, moping, wiping 
        the shelves, Window cleaning, and Bathroom cleaning.)

        </p>
        <a className="action-3" href="/book-now">
        BOOK NOW
        <span aria-hidden="true">
            →
        </span>
        </a>
    </div>
    </div>



    </div>
    </>
);
}