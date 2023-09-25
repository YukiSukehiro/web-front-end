import React from "react";
import './AboutUs.css'

export default function AboutUS () {
    return (
        <div className="about-us">
        <div className="about-banner">
            <h2 className="abt">ABOUT US</h2><br/>
            <p className="text">Sparkling Homes is meant to make locating and scheduling professional house 
                cleaning services easier and more efficient, providing ease and efficiency to your cleaning needs.
                services
            </p>
        </div>

         <div className="brd">
            <h1 className="best"> Best Cleaners Are Ready for your Homes!</h1>
            <p className="sprk">Make your Homes Sparkly!</p>      
        </div>


   



    <div className="card-container">
        <div className="card">
            <div className="imageclean1">
            </div>
            <div className="content">
                <span className="title" style={{color: 'black'}}>
                John Nilo A. Diaz
                </span>
                <p className="desc" style={{color: 'black'}}>
                Professional Cleaning.
                </p>
            </div>
            <a href="https://www.facebook.com/Ajeple" className="buttoned">Folow</a>
        </div>

        <div className="card">
            <div className="imageclean2">
            </div>
            <div className="content">
                <span className="title" style={{color: 'black'}}>
                    Jayvee Suarez
                </span>
                <p className="desc" style={{color: 'black'}}>
                Costumized Cleaning Plans.
                </p>
            </div>
            <a href="https://www.facebook.com/jayvee.suarez.395" className="buttoned">Folow</a>
        </div>


        <div className="card">
            <div className="imageclean3">
            </div>
            <div className="content">
                <span className="title" style={{color: 'black'}}>
                Kristine Joy Pagodpod Hetler
                </span>
                <p className="desc" style={{color: 'black'}}>
                Deep Cleaning.
                </p>
            </div>
            <a href="https://www.facebook.com/Hetler.Kristine" className="buttoned">Folow</a>
        </div>


        <div className="card">
            <div className="imageclean4">
            </div>
            <div className="content">
                <span className="title" style={{color: 'black'}}>
                Rishia Lucille Barrozo Bravo 
                </span>
                <p className="desc" style={{color: 'black'}}>
                Regular Cleaning.
                </p>
            </div>
            <a href="https://www.facebook.com/Rishiabravo07" className="buttoned">Folow</a>
        </div>
    </div>


<div className="packages">
<h1 className="t1">Our Packages</h1>
<p className="pak">Sparkling Homes aims to expand service coverage to other cities, offering premium cleaning services and a unique, personalized experience.</p>
<div className="card-container">
    <div className="pack" style={{fontSize: '15px'}}>
        <div>
        <h2>PACKAGE 1</h2><br></br>
    <br></br><h4 className="packs1"><strong>Description: </strong><br></br></h4>
        <p className="des1">Kickstart your home's cleanliness with our Sparkling Starter package,<br></br>
        designed for a quick and refreshing touch.<br></br></p>
        <h4 className="serv1" style={{fontSize: '18px'}}><strong>Services Included</strong></h4><br></br>
        <h4 className="vacc" style={{fontSize: '18px'}}><strong>Vacuum and Mop Magic:</strong></h4>
        <p className="servi1"> Our team will work their magic on your floors,<br></br> leaving them 
        spotless.</p>
        <h4 className="dust1" style={{fontSize: '18px'}}><strong>Dusty Delight:</strong></h4>
        <p className="dusty1">We'll banish dust and cobwebs, giving your home a fresh glow.<br></br>
        </p>
        <h4 className="dust2" style={{fontSize: '18px'}}><strong>Bathroom Bliss:</strong></h4>
        <p className="dusty2"> Enjoy a clean and fresh bathroom experience, with sink, toilet,<br></br> and mirror shining bright.</p>
        <h4 className="dust3" style={{fontSize: '18px'}}><strong>Kitchen Karma:</strong> </h4>
        <p className="dusty3">We'll spruce up your kitchen, taking care of countertops and sink.</p>
        <a href="/book-now" style={{textDecoration: 'none'}}><br></br>
        <br></br>
        <br></br>
        <button className="price">
        PHP 2,800
        </button>
    </a>
        </div>
        </div>
    <div className="pack" style={{fontSize: '15px'}}>
    <div>
    <h2>PACKAGE 2</h2><br></br>
    <br></br><h4 className="packs2"><strong>Description: </strong><br></br></h4>
    <p className="des2"> Dive deep into cleanliness with our Deluxe Deep Dive package, leaving no
    corner untouched.</p>
    <h4 className="serv2" style={{fontSize: '18px'}}><strong>Services Included </strong></h4><br></br>
    <h4 className="floor" style={{fontSize: '18px'}}><strong>Floor Enchantment: </strong></h4>
    <p className="servi2"> Experience the magic of pristine floors, meticulously vacuumed<br></br> and mopped.</p>
    <h4 className="dust4" style={{fontSize: '18px'}}><strong>Surface Symphony:</strong></h4>
    <p className="dusty4"> We orchestrate a dust-free symphony on all surfaces.<br></br>
    </p>
    <h4 className="dust5" style={{fontSize: '18px'}}><strong>Bathroom Beauty:</strong></h4>
    <p className="dusty5"> Revel in a sparkling bathroom, complete with sink, toilet,<br></br> and a rejuvenated shower/bathtub.</p>
    <h4 className="dust6" style={{fontSize: '18px'}}><strong>Kitchen Kudos </strong></h4>
    <p className="dusty6"> Our experts will pamper your kitchen, from countertops<br></br> to appliances.
    Window Wonders: Your windows will<br></br> shine inside and out.</p>
    <a href="/book-now" style={{textDecoration: 'none'}}>
    <br></br>
        <br></br>
    <button className="price">
    PHP 1,500
    </button>
    </a>
    </div>
    </div>




    <div className="pack" style={{fontSize: '15px'}}>
    <div>
    <h2>PACKAGE 3</h2><br></br>
    <br></br><h4 className="packs3"><strong>Descriiption:</strong> <br></br></h4>
    <p className="des3"> When moving in or out, choose our Fresh Start Frenzy package to give your home a<br></br> brand-new beginning</p>
    <h4 className="serv3" style={{fontSize: '18px'}}><strong>Services Included</strong></h4><br></br>
    <h4 className="magic" style={{fontSize: '18px'}}><strong>Moving Magic:</strong></h4>
    <p className="servi3" > We perform a comprehensive deep clean, just as in the <br></br>Deluxe Deep Dive.</p>
    <h4 className="surf" style={{fontSize: '17px'}}><strong>Cabinet and Drawer Charm:</strong></h4>
    <p className="surface">Inside cabinets and drawers will be refreshed.<br></br>
    </p>
    <h4 className="bath" style={{fontSize: '17px'}}><strong>Wrecking Crew:</strong></h4>
    <p className="bat"> We'll rid your home of cobwebs, ensuring a spider-free environment.</p>
    <h4 className="kud" style={{fontSize: '17px'}}><strong>Light Fixture Love: </strong> </h4>
    <p className="kudos"> Your light fixtures and ceiling fans will shine with love and care.</p>
    <h4 className="frid" style={{fontSize: '17px'}}><strong>Fridge and Oven Revival: </strong>  </h4>
    <p className="rev"> Inside your refrigerator and oven (if applicable) will be meticulously <br></br>cleaned.
    </p>
    <a href="/book-now" style={{textDecoration: 'none'}}>
    <button className="price">
    PHP 2,000
    </button>
    </a>
    </div>
    </div>



    <div className="pack" style={{fontSize: '15px'}}>
    <div><h2>PACKAGE 4</h2><br></br>
    <br></br>
        <h4 className="packs4" ><strong>Description:</strong> <br></br></h4>
    <p className="des4" >Create your dream cleaning experience with our customizable package. You dream it; we'll clean it.</p>
    <h4 className="serv4" ><strong>Services Included</strong></h4><br></br>
    <h4 className="serving"style={{fontSize: '18px'}}><strong>Services:</strong> </h4>
    <p className="servi4" style={{fontSize: '15px'}}> Tailor your cleaning services to your unique needs and preferences.<br></br> Choose from our menu of services, 
    and we'll provide a personalized <br></br>quote based on your selections.</p>
    <h4 className="cost" style={{fontSize: '18px'}}><strong>Price:</strong></h4>
    <p className="costy" >Varies based on your selections
    These revamped packages not only<br></br> highlight the specific services but also infuse a bit of personality and<br></br> creativity into the
    descriptions, making them more interesting and<br></br> engaging for potential customers.
    </p>
    <a href="/book-now" style={{textDecoration: 'none'}}>
    <br></br>
        <br></br>
        <br></br>
    <button className="price" >
    PHP 0.0
    </button>
    </a>
        </div>
    </div>
</div>
</div>
        </div>
    )
}