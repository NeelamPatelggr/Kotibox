import React from 'react'

import location from './home/photos/location.png'
import fac from './home/photos/fac.png'
import ins from './home/photos/ins.png'
import lin from './home/photos/lin.png'
import twi from './home/photos/twi.png'
import pin from './home/photos/pin.png'
import you from './home/photos/you.png'

import '../component/Blog.css';



import { Link } from 'react-router-dom'; // Import Link from react-router-dom

function Blog() {
  return (
    <>
    <nav className="navbar  navbar-expand-lg ">
  <div className="container-fluid">
   <Link className="navbar-brand"><img src="https://www.achieversit.com/assets/images/logo-white.png" alt="" /></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse " id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">

      <li className="nav-item dropdown ">
         <Link className="nav-link active dropdown-toggle text-light" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            All Courses
          </Link>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item " to="/AngularTraining">Front End Courses</Link></li>
            <li><Link className="dropdown-item" to="#">Full Stake Courses</Link></li>
            <li><Link className="dropdown-item" to="#">Cloud Computing</Link></li>
            <li><Link className="dropdown-item" to="#">Data Scince</Link></li>
            <li><Link className="dropdown-item" to="#">Artificial</Link></li>
            <li><Link className="dropdown-item" to="#">Digital Markiting Courses</Link></li>
            <li><Link className="dropdown-item" to="#">Microsoft Training</Link></li>
            <li><Link className="dropdown-item" to="#">Software Testing</Link></li>
          </ul>
        </li>
        <li className="nav-item" style={{color:"white"}}>
         <Link className="nav-link active text-light" aria-current="page" to="/place">Placement</Link>
        </li>
        <li className="nav-item ">
         <Link className="nav-link active text-light" to="/intern">Internship</Link>
        </li>
        <li className="nav-item dropdown">
         <Link className="nav-link active dropdown-toggle text-light" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Existing Students
          </Link>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to="/LMS">LMS Portal</Link></li>
           
          </ul>
        </li>

        <li className="nav-item dropdown">
         <Link className="nav-link active dropdown-toggle text-light" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            About Us
          </Link>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to="/ContactUs">Contact Us</Link></li>
           
          </ul>
        </li>
        <li className="nav-item">
         <Link className="nav-link active text-light" to="/Reviews">Review</Link>
        </li>
        <li className="nav-item">
         <Link className="nav-link active text-light" to="/Blog">Blog</Link>
        </li>
      </ul>
     
    </div>
  </div>
</nav>





  <section className='container mt-5' style={{display:"flex",justifyContent:"center", gap:"20px"}}>
  <div style={{ width: "100%" }}>
  <h4>UI DEVELOPMENT</h4>
  <div className="card-container" style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>

    <div className="card mb-3" style={{ flex: "1 1 48%", minWidth: "300px", boxShadow: "0 0 3px" }}>
      <div className="row g-0 card-content" style={{ display: "flex", flexDirection: "row" }}>
        <div className="col-md-4 image-container">
          <img src="https://www.achieversit.com/management/uploads/blog/ui-development2.png" className="img-fluid pt-1 px-2" alt="..." />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h6>The Future of UI Development: Roles...</h6>
            <p className="card-text">By Author | May 30, 2024</p>
            <Link className="link active" to="#" style={{ textDecoration: "none" }}>Read More</Link>
          </div>
        </div>
      </div>
    </div>

    <div className="card mb-3" style={{ flex: "1 1 48%", minWidth: "300px", boxShadow: "0 0 3px" }}>
      <div className="row g-0 card-content" style={{ display: "flex", flexDirection: "row" }}>
        <div className="col-md-4 image-container">
          <img src="https://www.achieversit.com/management/uploads/blog/react_js_2024@blog_(1)4.png" className="img-fluid pt-1 px-2" alt="..." />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h6>Why AchieversIT is Leading the Way in Front-End</h6>
            <p className="card-text">By Admin | March 25, 2024</p>
            <Link className="link active" to="#" style={{ textDecoration: "none" }}>Read More</Link>
          </div>
        </div>
      </div>
    </div>

  </div>

  <h4>REACTJS DEVELOPMENT</h4>
  <div className="card-container" style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>

    <div className="card mb-3" style={{ flex: "1 1 48%", minWidth: "300px", boxShadow: "0 0 3px" }}>
      <div className="row g-0 card-content" style={{ display: "flex", flexDirection: "row" }}>
        <div className="col-md-4 image-container">
          <img src="https://www.achieversit.com/management/uploads/blog/reactjs.png" className="img-fluid pt-1 px-2" alt="..." />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h6>React Js Development..</h6>
            <p className="card-text">By Admin | May 31, 2024</p>
            <Link className="link active" to="#" style={{ textDecoration: "none" }}>Read More</Link>
          </div>
        </div>
      </div>
    </div>

    <div className="card mb-3" style={{ flex: "1 1 48%", minWidth: "300px", boxShadow: "0 0 3px" }}>
      <div className="row g-0 card-content" style={{ display: "flex", flexDirection: "row" }}>
        <div className="col-md-4 image-container">
          <img src="https://www.achieversit.com/management/uploads/blog/react_js_2024@blog2.png" className="img-fluid pt-1 px-2" alt="..." />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h6>The Top 5 Reasons to Choose AchieversIT for Your React</h6>
            <p className="card-text">By Admin | March 16, 2024</p>
            <Link className="link active" to="#" style={{ textDecoration: "none" }}>Read More</Link>
          </div>
        </div>
      </div>
    </div>

  </div>

</div>


<div className='text-start' style={{width:"250px", boxShadow:"0 0 3px", height:"48rem"}}>
  <h4 className="text-center pt-3"style={{color:"blue"}}>Become an Author</h4>
<form className=" g-2 align-items-center px-3" style={{width:"250px"}}>
      <div className="col-md">
        <input type="email" className="form-control" placeholder="Your Name*" required />
      </div><br/>
      <div className="col-md">
        <input type="tel" className="form-control" placeholder="Address*" required />
      </div><br/>
      <div className="col-md">
        <input type="text" className="form-control" placeholder="Mobile Number*" required />
      </div><br/>
      <div className="col-md-auto">
        <button type="submit" className="text-center" style={{width:"220px", backgroundColor:"orange", borderRadius:"5px",border:"none",height:"40px"}}>Reach Us</button>
      </div>
    </form>

    <h4 className="text-center pt-5"style={{color:"blue"}}> Categories</h4>

    <div class="card" style={{width: "18rem;"}}>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">UI Development</li>
    <li class="list-group-item">ReactJS development</li>
    <li class="list-group-item">Angular development</li>
    <li class="list-group-item">Data Scince</li>
    <li class="list-group-item">Cloud Computing</li>
    <li class="list-group-item">Java Full Stack</li>
    <li class="list-group-item">Full Stack</li>
    <li class="list-group-item">Digital Marketing</li>
    <li class="list-group-item">Python Programming</li>
    <li class="list-group-item">Database</li>
  </ul>
</div>
    
    
    
    </div>
</section>



<section className='container'>
      <h1 className='text-center pt-4'>Locations</h1>
      <p className='text-center'>Come and discuss with us about your goals ,We transform your goals into success!!!</p>
      <div className="row justify-content-space-between">

      <div className="col-12 col-sm-6 col-md-4 mb-4">
      <div className="cardD" style={{width:"19rem",height:"12rem"}}>
        <div className="card-body">
        <img src={location} className="text-center"style={{width:"25px"}} alt="location"/>
          <h5 className="card-title text-center">BTM Layout - Bangalore</h5>
          <p className='card-text text-center'>#63, 1st Floor, 16th Main, 8th Cross BTM 1st Stage, BTM Layout, Bengaluru, Karnataka 560029</p>
        </div>
      </div>
    </div>
    <div className="col-12 col-sm-6 col-md-4 mb-4">
      <div className="cardD" style={{width:"19rem",height:"12rem"}}>
        <div className="card-body">
        <img src={location} className="text-center"style={{width:"25px"}} alt="location"/>
          <h5 className="card-title text-center">Marathahalli - Bangalore</h5>
          <p className='card-text text-center'>#1, 4th Main Rd, Extension, Ayyappa Layout, Chandra Layout, Marathahalli, Bengaluru, Karnataka </p>
        </div>
      </div>
    </div>

    <div className="col-12 col-sm-6 col-md-4 mb-4">
      <div className="cardD" style={{width:"19rem",height:"12rem"}}>
        <div className="card-body">
        <img src={location} className="text-center"style={{width:"25px"}} alt="location"/>
          <h5 className="card-title text-center"> Kukatpally - Hyderabad</h5>
          <p className='card-text text-center'>#101,Vandana's Trade Center, Beside Padmavathi Plaza, Above Union Bank,Kukatpally,Hyderabad 500072</p>
        </div>
      </div>
    </div>

    <div className="col-12 col-sm-6 col-md-4 mb-4">
      <div className="cardD" style={{width:"19rem",height:"12rem"}}>
        <div className="card-body">
        <img src={location} className="text-center"style={{width:"25px"}} alt="location"/>
          <h5 className="card-title text-center">Chennai - Tamilnadu</h5>
          <p className='card-text text-center'>No 7, Dayasadan road, Opp Shell petrol pump, near Amma Unavagam, Nerkundrum, Chennai - 600 107</p>
        </div>
      </div>
    </div>

    <div className="col-12 col-sm-6 col-md-4 mb-4">
      <div className="cardD" style={{width:"19rem",height:"12rem"}}>
        <div className="card-body">
        <img src={location} className="text-center"style={{width:"25px"}} alt="location"/>
          <h5 className="card-title text-center">Mumbai - Maharasthra</h5>
          <p className='card-text text-center'>Satra Plaza, Unit No. 1011, 10th Floor, Palm Beach, Rd Phase 2, Sector 14,19D, Vashi, Navi Mumbai, Maharashtra - 400703</p>
        </div>
      </div>
    </div>

    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
      <div className="cardD" style={{width:"19rem",height:"12rem"}}>
        <div className="card-body">
        <img src={location} className="text-center"style={{width:"25px"}} alt="location"/>
          <h5 className="card-title text-center">Pune - Maharasthra</h5>
          <p className='card-text text-center'>Times Square, S-699/1, Near Saibaba Mandir, Pune-Satara Road, Pune -411037.</p>
        </div>
      </div>
    </div>
</div>
    </section>




    
<footer className="footer text-center mt-4" style={{ backgroundColor: 'black' }}>
  <section className="text-center mt-4">
    <div className="container pt-5">
      <div className="row text-white">
        
        {/* Logo and Description Section */}
        <div className="col-md-3 col-sm-6 mb-4">
          <img 
            className='text-start' 
            src="https://www.achieversit.com/assets/images/logo-white.png" 
            alt="AchieversIT Logo" 
            id='logo' 
            style={{ maxWidth: '100px' }}
          />
          <p className='text-start' style={{ color: 'grey', width: '250px' }}>
            AchieversIT - Provides a wide group of opportunities for freshers and experienced candidates who can develop their skills and build their career opportunities across multiple companies.
          </p>
        </div>

        {/* COMPANY Section */}
        <div className="col-md-3 col-sm-6 mb-4 text-start">
          <h4 style={{ color: 'grey' }}>COMPANY</h4>
          <Link to="/Home" className="footer-link"><strong>Home</strong></Link><br />
          <Link to="/place" className="footer-link"><strong>Placements</strong></Link><br />
          <Link to="#" className="footer-link"><strong>Corporate Training</strong></Link><br />
          <Link to="/ContactUs" className="footer-link"><strong>Contact Us</strong></Link><br />
        </div>

        {/* TRENDING COURSES Section */}
        <div className="col-md-3 col-sm-6 mb-4 text-start">
          <h4 style={{ color: 'grey' }}>TRENDING COURSES</h4>
          <Link to="#" className="footer-link"><strong>UI Development Course</strong></Link><br />
          <Link to="#" className="footer-link"><strong>Angular JS Course</strong></Link><br />
          <Link to="#" className="footer-link"><strong>React JS Course</strong></Link><br />
          <Link to="#" className="footer-link"><strong>Digital Marketing Course</strong></Link><br />
          <Link to="#" className="footer-link"><strong>Python Course</strong></Link><br />
        </div>

        {/* CONTACT INFO Section */}
        <div className="col-md-3 col-sm-6 mb-4 text-start">
          <h4 style={{ color: 'grey' }}>CONTACT INFO</h4>
          <p><strong style={{ color: 'white' }}>#63, 1st Floor, 16th Main, 8th Cross, BTM 1st Stage, Bangalore, India - 560029</strong></p>
          <p><strong style={{ color: 'white' }}>India: +91 8431-040-457</strong></p>
          <p><strong style={{ color: 'white' }}>info@achieversit.com</strong></p>
        </div>
        
      </div>
    </div>
  </section>
  <hr style={{ color: "white", width: "100rem" }}/>

  {/* Social Media Icons */}
  <div className='container text-center'>
    <img src={fac} className="social-icon" alt="Facebook"/>
    <img src={ins} className="social-icon" alt="Instagram"/>
    <img src={lin} className="social-icon" alt="LinkedIn"/>
    <img src={twi} className="social-icon" alt="Twitter"/>
    <img src={pin} className="social-icon" alt="Pinterest"/>
    <img src={you} className="social-icon" alt="YouTube"/>
  </div>

  {/* Footer Bottom Links */}
  <div className='container pt-4 footer-bottom'>
    <p style={{ color: "grey" }}>Copyright © 2024 AchieversIT. All Rights Reserved</p>
    <Link to="/Home" className="footer-link"><strong>Privacy Policy</strong></Link>
    <Link to="/" className="footer-link"><strong>Terms of Use</strong></Link>
    <Link to="/" className="footer-link"><strong>Refund Policy</strong></Link>
  </div>
</footer>


    
 
    
    </>
  
  )
}

export default Blog