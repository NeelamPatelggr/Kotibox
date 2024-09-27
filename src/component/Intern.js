import React from 'react';
import ggl from './home/photos/ggl.png'
import location from './home/photos/location.png'
import fac from './home/photos/fac.png'
import ins from './home/photos/ins.png'
import lin from './home/photos/lin.png'
import twi from './home/photos/twi.png'
import pin from './home/photos/pin.png'
import you from './home/photos/you.png'

import './intern.css'; // Importing the CSS file
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
function Intern() {
  return (
    <>
    <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img src="https://www.achieversit.com/assets/images/logo-white.png" alt="AchieversIT Logo" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {/* Dropdown for All Courses */}
              <li className="nav-item dropdown">
                <Link className="nav-link active dropdown-toggle text-light" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  All Courses
                </Link>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to="/AngularTraining">Front End Courses</Link></li>
                  <li><Link className="dropdown-item" to="#">Full Stack Courses</Link></li>
                  <li><Link className="dropdown-item" to="#">Cloud Computing</Link></li>
                  <li><Link className="dropdown-item" to="#">Data Science</Link></li>
                  <li><Link className="dropdown-item" to="#">Artificial Intelligence</Link></li>
                  <li><Link className="dropdown-item" to="#">Digital Marketing Courses</Link></li>
                  <li><Link className="dropdown-item" to="#">Microsoft Training</Link></li>
                  <li><Link className="dropdown-item" to="#">Software Testing</Link></li>
                </ul>
              </li>

              {/* Link to Placement */}
              <li className="nav-item">
                <Link className="nav-link active text-light" to="/place">Placement</Link>
              </li>

              {/* Link to Internship */}
              <li className="nav-item">
                <Link className="nav-link active text-light" to="/intern">Internship</Link>
              </li>

              {/* Dropdown for Existing Students */}
              <li className="nav-item dropdown">
                <Link className="nav-link active dropdown-toggle text-light" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Existing Students
                </Link>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to="/LMS">LMS Portal</Link></li>
                </ul>
              </li>

              {/* Dropdown for About Us */}
              <li className="nav-item dropdown">
                <Link className="nav-link active dropdown-toggle text-light" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  About Us
                </Link>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to="/ContactUs">Contact Us</Link></li>
                </ul>
              </li>

              {/* Other Links */}
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


    <div className='containers-fluid'>
    <img src="https://thumbs.dreamstime.com/b/internship-word-cloud-concept-grey-background-90730727.jpg" style={{height:'400px',objectFit:"cover"}} className="d-block w-100" alt="..."/>
    </div>


    <section className='container' id='two'>
      <div className='text-start pt-3' style={{width:"600px"}}>
      <h2 style={{color:'red'}}>Internship at AchieversIT</h2>
      <p>Internships can help you gain valuable work experience, fulfill a college requirement and give you material to add to your resume. They can introduce you to many aspects of full-time employment while allowing you to explore your interests and form your personal career goals.</p>
      <p>Our IT Internsship Programs is to provides the industry experience to the beginners as well as non-technical students so that they must be prepared enough to perform better and gain the good jobs in their career.</p>
      <p>If you are college fresher , most of the time people were not aware of the process, methodlogies, design priciples, design patterns and more which IT companies uses in all the Software Development Life Cycle phases.This Programs makes participants comfortable to work and reach the expecations hence there should not be any problems during job tenure.</p>
      <h2 className='pt-2' style={{color:'red'}}>What do we promise?</h2>
      <p>We are here to better solve your work-related complications.</p>
      <ul>
          <li>Our services are reliable and affordable that meets client needs.</li>
          <li>Our consultants are real-time professionals with abundant experience in the IT industry on various skills. They provide complete exposure of your job-related issues.</li>
          <li>We impart knowledge and skills in a practical way and make resource understand the technology workflow.</li>
          <li>Our real-time expert’s guidelines help you handle critical situations at the job.</li>
          <li>Our consultants guide you to solve the particular task within a given amount of time.</li>
          <li>We offer students effective tools to achieve success.</li>
        </ul>
        <h2 className='pt-2' style={{color:'red'}}>Benefits of internships at AchiversIT</h2>
        <ul>
          <li>Job experience</li>
          <li>Research experience</li>
          <li>Access to a variety of tasks and departments</li>
          <li>Mentorship</li>
          <li>Help guide career goals</li>
          <li>Create a professional network</li>
          <li>Build a strong resume</li>
          <li>Secure good references and recommendations</li>
          <li>Transition to a permanent job</li>
          <li>Build confidence</li>
          <li>Understanding Work Environment</li>
          <li>Confidence Building</li>
          <li>Job Offers</li>
          <li>Competitive Edge</li>
          <li>Clarification of Career Goals</li>
        </ul>
        <p>Internships bridge the gap between academic learning and professional employment, making students more marketable and better prepared for their future careers</p>
      </div>


      <div className='text-center' style={{paddingLeft:"70px"}}>
      <div className="cardF" style={{width:"15rem", boxShadow:"0 0 3px", marginTop:"130px"}}>
  <ul className="list-group list-group-flush">
    <li className="list-group-item text-start pt-3 px-4" style={{height:"7rem"}}>
   <p><img src={ggl} className="text-center"style={{width:"55px"}} alt=""/>4.9/5</p>
   <p>1280+ Google Reviews</p>
    </li>

    <li className="list-group-item text-start pt-3 px-4" style={{height:"7rem"}}>
   <p><img src={fac} className="text-center"style={{width:"55px"}} alt=""/>9.4/10</p>
   <p>500+ Facebook Reviews</p>
    </li>

    <li className="list-group-item text-start pt-3 px-4" style={{height:"7rem"}}>
   <p><img src={lin} className="text-center"style={{width:"55px"}} alt=""/>4.0/5</p>
   <p>400+ Linkedin Reviews</p>
    </li>
  </ul>
</div>

<h3 className='' style={{marginTop:"100px"}}>COURSE CATEGORIES</h3><hr/>
<div className="cardG mt-5">
        <p>
          <span> <Link to="" className="link"><strong>UI <br/> Development</strong></Link></span>
        </p>
        <p>
          <span> <Link to="" className="link"><strong>ReactJS</strong></Link></span>
        </p>
        <p>
          <span> <Link to="" className="link"><strong>Digital <br/>Marketing</strong></Link></span>
        </p>
        <p>
          <span> <Link to="" className="link"><strong>Web <br/>Development</strong></Link></span>
        </p>
      </div>
</div>
    </section>


    <section className='container'>
      <h3 className='text-center pt-4'>Internship Gallery</h3>
      <div className="row justify-content-space-between pt-5">

      <div className="col-12 col-sm-6 col-md-4 mb-">
      <div className="cardH" style={{width:"18rem",height:"10rem"}}>
        <div className="card-body">
        <img src="https://www.achieversit.com/assets/images/srana/corporate-workshop.jpg" style={{width:"19rem",height:"13rem"}} alt=""/>
        </div>
      </div>
    </div>

   <div className="col-12 col-sm-6 col-md-4 mb-4">
      <div className="cardH" style={{width:"18rem",height:"12rem"}}>
        <div className="card-body">
        <img src="https://www.achieversit.com/assets/images/srana/python-fullstack-writen-test.jpeg" style={{width:"19rem",height:"13rem"}} alt=""/>
        </div>
      </div>
    </div>

    <div className="col-12 col-sm-6 col-md-4 mb-4">
      <div className="cardH" style={{width:"18rem",height:"12rem"}}>
        <div className="card-body">
        <img src="https://www.achieversit.com/assets/images/srana/campus-apptitude.jpeg" style={{width:"19rem",height:"13rem"}} alt=""/>
        </div>
      </div>
    </div>

    <div className="col-12 col-sm-6 col-md-4 mb-4">
      <div className="cardH" style={{width:"18rem",height:"12rem"}}>
        <div className="card-body">
        <img src="https://www.achieversit.com/assets/images/srana/web-development-system-test.jpeg" style={{width:"19rem",height:"13rem"}} alt=""/>
        </div>
      </div>
    </div>

    <div className="col-12 col-sm-6 col-md-4 mb-4">
      <div className="cardH" style={{width:"18rem",height:"12rem"}}>
        <div className="card-body">
        <img src="https://www.achieversit.com/assets/images/srana/python-test.jpeg" style={{width:"19rem",height:"13rem"}} alt=""/>
        </div>
      </div>
    </div>

    <div className="col-12 col-sm-6 col-md-4 mb-4">
      <div className="cardH" style={{width:"18rem",height:"12rem"}}>
        <div className="card-body">
        <img src="https://www.achieversit.com/assets/images/srana/writen-test.jpeg" style={{width:"19rem",height:"13rem"}} alt=""/>
        </div>
      </div>
    </div>

    <div className="col-12 col-sm-6 col-md-4 mb-4">
      <div className="cardH" style={{width:"18rem",height:"12rem"}}>
        <div className="card-body">
        <img src="https://www.achieversit.com/assets/images/srana/workshop.jpeg" style={{width:"19rem",height:"13rem"}} alt=""/>
        </div>
      </div>
    </div>

    <div className="col-12 col-sm-6 col-md-4 mb-4">
      <div className="cardH" style={{width:"18rem",height:"12rem"}}>
        <div className="card-body">
        <img src="https://www.achieversit.com/assets/images/srana/workshop-tech.jpeg" style={{width:"19rem",height:"13rem"}} alt=""/>
        </div>
      </div>
    </div>

    <div className="col-12 col-sm-6 col-md-4 mb-4">
      <div className="cardH" style={{width:"18rem",height:"12rem"}}>
        <div className="card-body">
        <img src="https://www.achieversit.com/assets/images/srana/workshop-presentation.jpeg" style={{width:"19rem",height:"13rem"}} alt=""/>
        </div>
      </div>
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
          <p className='card-text text-center'>#1, 4th Main Rd, Extension, Ayyappa Layout, Chandra Layout, Marathahalli, Bengaluru, Karnataka 560037</p>
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

export default Intern