import React from "react";
import './AboutUs.css'
import serve from './images/serve.jpg'
export default function AboutUS () {
    return (
        <div className="about-us">
            <img className="serve" src={serve} alt="" style={{
    width: "150%", 
    height: "15%"}} />

    <div >
        <h2 className="abt">ABOUT US</h2><br/>
        <p className="text">Sparkling Homes is meant to make locating and scheduling professional house 
        cleaning services easier and more efficient, providing ease and efficiency to your cleaning needs.
            services</p>
    </div>

    <div className="brd">
                <h1 className="best"> Best Cleaners Are Ready for your Homes!</h1>
                <p className="sprk">Make your home sparkly!</p>
                
    </div>


    <div className="clean1">
        <div className="imageclean1">
        </div>
        <div className="contentclean1">
        <span className="titleclean1">
        Professional Cleaning.
        </span>

        <p className="descclean1">
        These services can be availed for residential, commercial, or industrial properties and cover
        a wide range of cleaning tasks to maintain cleanliness, hygiene, and aesthetics.
        (Inclusion: Carpet and upholstery cleaning, Industrial cleaning, Post-construction cleaning.)
        </p>
    </div>
</div>



<div className="clean2">
        <div className="imageclean2">
        </div>
        <div className="contentcclean2">
        <span className="titleclean2">
        Costumized Cleaning Plans.
        </span>
        <p className="descclean2">
        The ability for homeowners to select and customize their cleaning preferences, such as the type 
        of cleaning service (deep cleaning, regular maintenance, etc.), specific areas to focus on, and cleaning frequency (one-time, weekly, bi-weekly, monthly).
        </p>
    </div>
</div>


<div className="clean3">
        <div className="imageclean3">
        </div>
        <div className="contentcclean3">
        <span className="titleclean3">
        Deep Cleaning.
        </span>
        <p className="descclean3">
        Deep cleaning services aim to remove deeply embedded dirt, grime, and allergens that may not 
        be addressed in regular cleaning routines.( Carpet and upholstery cleaning, Tile and grout cleaning, Kitchen appliance cleaning, and Deep cleaning of hard floors.)
        </p>
    </div>
</div>


<div className="clean4">
        <div className="imageclean4">
        </div>
        <div className="contentcclean4">
        <span className="titleclean4">
        Regular Cleaning.
        </span>
        <p className="descclean4">
        These services are often contracted on a weekly, bi-weekly, or monthly basis, depending 
        on the client's needs and preferences. ( Sweeping the floor, moping, wiping the shelves, Window cleaning, and Bathroom cleaning.)
        </p>
    </div>
</div>


<div className="packages">
<h1 className="t1">Our Packages</h1>
<p className="pak">Sparkling Homes aims to expand service coverage to other cities, offering premium cleaning services and a unique, personalized experience.</p>
<div class="pack1">
<div><h4 className="packs1">Description: <br></br></h4>
<p className="des1">Kickstart your home's cleanliness with our Sparkling Starter package,<br></br>
designed for a quick and refreshing touch.<br></br></p>
<h4 className="serv1">Services Included</h4>
<h4 className="vacc">Vacuum and Mop Magic:</h4>
<p className="servi1"> Our team will work their magic on your floors,<br></br> leaving them 
spotless.</p>
<h4 className="dust1">Dusty Delight:</h4>
<p className="dusty1">We'll banish dust and cobwebs, giving your home a fresh glow.<br></br>
</p>
<h4 className="dust2">Bathroom Bliss:</h4>
<p className="dusty2"> Enjoy a clean and fresh bathroom experience, with sink, toilet,<br></br> and mirror shining bright.</p>
<h4 className="dust3">Kitchen Karma: </h4>
<p className="dusty3">We'll spruce up your kitchen, taking care of countertops and sink.</p>
<a href="/book-now">
<button className="price1">
PHP 2,800
</button>
</a>





</div>
</div>
<div class="pack2">
<div><h4 className="packs2">Description: <br></br></h4>
<p className="des2"> Dive deep into cleanliness with our Deluxe Deep Dive package, leaving no
corner untouched.</p>
<h4 className="serv2">Services Included</h4>
<h4 className="floor">Floor Enchantment: </h4>
<p className="servi2"> Experience the magic of pristine floors, meticulously vacuumed<br></br> and mopped.</p>
<h4 className="dust4">Surface Symphony:</h4>
<p className="dusty4"> We orchestrate a dust-free symphony on all surfaces.<br></br>
</p>
<h4 className="dust5">Bathroom Beauty:</h4>
<p className="dusty5"> Revel in a sparkling bathroom, complete with sink, toilet,<br></br> and a rejuvenated shower/bathtub.</p>
<h4 className="dust6">Kitchen Kudos </h4>
<p className="dusty6"> Our experts will pamper your kitchen, from countertops<br></br> to appliances.
Window Wonders: Your windows will<br></br> shine inside and out.</p>
<a href="/book-now">
<button className="price2">
PHP 1,500
</button>
</a>
</div>
</div>




<div class="pack3">
<div><h4 className="packs3">Description: <br></br></h4>
<p className="des3"> When moving in or out, choose our Fresh Start Frenzy package to give your home a<br></br> brand-new beginning</p>
<h4 className="serv3">Services Included</h4>
<h4 className="magic">Moving Magic:</h4>
<p className="servi3"> We perform a comprehensive deep clean, just as in the <br></br>Deluxe Deep Dive.</p>
<h4 className="surf">Cabinet and Drawer Charm:</h4>
<p className="surface">Inside cabinets and drawers will be refreshed.<br></br>
</p>
<h4 className="bath">Web-Wrecking Crew</h4>
<p className="bat"> We'll rid your home of cobwebs, ensuring a spider-free environment.</p>
<h4 className="kud">Light Fixture Love:  </h4>
<p className="kudos"> Your light fixtures and ceiling fans will shine with love and care.</p>
<h4 className="frid">Fridge and Oven Revival:   </h4>
<p className="rev"> Inside your refrigerator and oven (if applicable) will be meticulously <br></br>cleaned.
</p>
<a href="/book-now">
<button className="price3">
PHP 2,000
</button>
</a>
</div>
</div>



<div class="pack4">
<div><h4 className="packs4">Description: <br></br></h4>
<p className="des4">Create your dream cleaning experience with our customizable package. You dream it; we'll clean it.</p>
<h4 className="serv4">Services Included</h4>
<h4 className="serving">Services: </h4>
<p className="servi4"> Tailor your cleaning services to your unique needs and preferences.<br></br> Choose from our menu of services, 
and we'll provide a personalized <br></br>quote based on your selections.</p>
<h4 className="cost">Price:</h4>
<p className="costy">Varies based on your selections
These revamped packages not only<br></br> highlight the specific services but also infuse a bit of personality and<br></br> creativity into the
descriptions, making them more interesting and<br></br> engaging for potential customers.
</p>
<a href="/book-now">
<button className="price4">
PHP 0.0
</button>
</a>





</div>
</div>

</div>




        </div>
    )
}