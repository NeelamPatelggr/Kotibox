import React from 'react';
import location from './home/photos/location.png'
import fac from './home/photos/fac.png'
import ins from './home/photos/ins.png'
import lin from './home/photos/lin.png'
import twi from './home/photos/twi.png'
import pin from './home/photos/pin.png'
import you from './home/photos/you.png'

import '../component/Placement.css';




import { Link } from 'react-router-dom'; // Import Link from react-router-dom



function Placement() {
  return (
    <>

<nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <Link className="navbar-brand" to="">
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
    <img src="https://images.pexels.com/photos/5668887/pexels-photo-5668887.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" style={{height:'400px',objectFit:"cover"}} className="d-block w-100" alt="..."/>
    </div>



    <section className='container'>
      <div className='text-start pt-5'>
        <h1 style={{color:'red'}}>Job Support at AchieversIT</h1>
        <p>Our IT On-Job Support mission is to up skill the beginners in IT with the ability to solve their Real-time complex project requirements. We at AchieversIT, assist and render job support services in more than 50+ IT Courses.</p>
        <p>If you are one of those, struggling to survive in the job due to lack of technical abilities or those got a new project and stressed about the work assigned then write to us. We put forward our best skilled IT consultant, to guide you in achieving the best result in your work and furnish your deliverables.</p>
        <h1 className='pt-5' style={{color:'red'}}>What do we promise?</h1>
        <p>We are here to better solve your work-related complications.</p>
        <ul>
          <li>Our services are reliable and affordable that meets client needs.</li>
          <li>Our consultants are real-time professionals with abundant experience in the IT industry on various skills. They provide complete exposure of your job-related issues.</li>
          <li>We impart knowledge and skills in a practical way and make resource understand the technology workflow.</li>
          <li>Our real-time expert’s guidelines help you handle critical situations at the job.</li>
          <li>Our consultants guide you to solve the particular task within a given amount of time.</li>
          <li>We offer students effective tools to achieve success.</li>
        </ul>

        <h1 className='pt-5'style={{color:'red'}}>Why do we use it?</h1>
        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using.,</p>
      </div>

      <div className='container'>
        <h1 className='text-center pt-4' id='new'>New Placement Board</h1>
        <div className=' row container' id='flex'>

        <div className="col-12 col-sm-6 col-md-4 mb-4"> 
        <div className="card">
        <div className="card-inner">
          <div className="card-front">
            <img src="https://www.achieversit.com/assets/images/suchitha.jpg" style={{width:"250px", height:"250px"}}/>
          </div>
          <div className="card-back text-center pt-4">
            <p>Name: Sujitha</p>
            <p>Company: Photon</p>
            <p>Designation: React Developer</p>
            <p>Package: 8.25 LPA</p>
          </div>
          </div>
        </div>
      </div>
      
      <div className="col-12 col-sm-6 col-md-4 mb-4">
      <div className="card">
        <div className="card-inner">
          <div className="card-front">
            <img src="https://www.achieversit.com/assets/images/naveen.jpg" style={{width:"250px", height:"250px"}}/>
          </div>
          <div className="card-back text-center pt-4">
            <p>Name: Naveen</p>
            <p>Company: Photon</p>
            <p>Designation: React Developer</p>
            <p>Package: 8.5 LPA</p>
          </div>
        </div>
      </div>
      </div>

      <div className="col-12 col-sm-6 col-md-4 mb-4">
      <div className="card">
        <div className="card-inner">
          <div className="card-front">
            <img src="https://www.achieversit.com/assets/images/gayatri.jpg" style={{width:"250px", height:"250px"}}/>
          </div>
          <div className="card-back text-center pt-4">
            <p>Name: Gayatri</p>
            <p>Company: Brillio</p>
            <p>Designation: UI Developer</p>
            <p>Package: 7.25 LPA</p>
          </div>
        </div>
      </div>
      </div>

      <div className="col-12 col-sm-6 col-md-4 mb-4">
      <div className="card">
        <div className="card-inner">
          <div className="card-front">
            <img src="https://www.achieversit.com/assets/images/abhishek.jpg" style={{width:"250px", height:"250px"}}/>
          </div>
          <div className="card-back text-center pt-4">
            <p>Name: Abhishek</p>
            <p>Company: IBM</p>
            <p>Designation: UI Developer</p>
            <p>Package: 9.5 LPA</p>
          </div>
        </div>
      </div>
      </div>

      <div className="col-12 col-sm-6 col-md-4 mb-4">
      <div className="card">
        <div className="card-inner">
          <div className="card-front">
            <img src="https://www.achieversit.com/assets/images/MANIKANTH.jpg" style={{width:"250px", height:"250px"}}/>
          </div>
          <div className="card-back text-center pt-4">
            <p>Name: Manikanth P</p>
            <p>Company:IBM</p>
            <p>Designation: UI Developer</p>
            <p>Package: 6 LPA</p>
          </div>
        </div>
      </div>
      </div>

      <div className="col-12 col-sm-6 col-md-4 mb-4">
      <div className="card">
        <div className="card-inner">
          <div className="card-front">
            <img src="https://www.achieversit.com/assets/images/jithendra.jpg" style={{width:"250px", height:"250px"}}/>
          </div>
          <div className="card-back text-center pt-4">
            <p>Name: Jithendra</p>
            <p>Company: CenturyLink</p>
            <p>Designation: UI Developer</p>
            <p>Package: 7.25 LPA</p>
          </div>
        </div>
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
  );
}

export default Placement;
