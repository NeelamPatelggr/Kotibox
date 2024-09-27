import React from 'react'

import location from './home/photos/location.png'
import fac from './home/photos/fac.png'
import ins from './home/photos/ins.png'
import lin from './home/photos/lin.png'
import twi from './home/photos/twi.png'
import pin from './home/photos/pin.png'
import you from './home/photos/you.png'
import star from './home/photos/star.png'



import { Link } from 'react-router-dom'; // Import Link from react-router-dom

function AngularTraining() {
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




    <h1 className='container mt-4'>Angular Course Training</h1><hr className='container' style={{width:"70rem"}}/>

<section className="container mt-4" style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "20px" }}>
  <div className="text-start" style={{ flex: "1 1 300px", display: "flex", justifyContent: "center" }}>
    <img 
      src="https://www.tcaindia.in//BackendImages/SAPCourseImage/angular-js-bannerImage-.jpg" 
      style={{ height: "300px", width: "100%", maxWidth: "20rem", objectFit: "cover" }} 
      alt="Angular Course"
    />
  </div>

  <div className="text-start pt-3 px-5" style={{ flex: "1 1 300px", maxWidth: "600px" }}>
    <p>
      Our Angular Course is designed to help you master the popular JavaScript framework, Angular.
      Whether you're a beginner or an experienced developer, this course will provide you with the
      knowledge and skills needed to build dynamic and responsive web applications. With hands-on
      exercises and real-world examples, join us and take your web development skills to the next level
      with our comprehensive Angular Course.
    </p>

    <div className="text-center rating-container" style={{ display: "flex", justifyContent: "center", gap: "10px", fontSize: "12px", width: "100%", height:"40px", maxWidth: "400px", boxShadow: "0 0 3px", border: "none", marginTop: "20px", padding: "10px" }}>
      <div className="text-start stars" style={{ display: "flex", gap: "5px" }}>
        <img src={star} style={{ width: "15px" }} alt="star" />
        <img src={star} style={{ width: "15px" }} alt="star" />
        <img src={star} style={{ width: "15px" }} alt="star" />
        <img src={star} style={{ width: "15px" }} alt="star" />
        <img src={star} style={{ width: "15px" }} alt="star" />
      </div>

      <div className="learners pt-1">
        <p>6k+ satisfied learners.</p>
      </div>

      <div className="pt-1">
        <Link className="link active" style={{ textDecoration: "none" }} to="#">Read Reviews</Link>
      </div>
    </div>
  </div>
</section>





    <section className='container mt-4'>
        <h1 className=''>Why Should You Take Angular Course Training?</h1>
        <div className='container pt-3' style={{display:"flex", justifyContent:"space-evenly"}}>
            <p style={{width:"320px"}}>Angular is one of the most in-demand skills for frontend developers, with many job openings requiring proficiency in Angular.</p>
            <p style={{width:"320px"}}>According to Statista, AngularJS future scope will be great as it is one of the greatest web frameworks used by software engineers throughout the world.</p>
            <p style={{width:"320px"}}>Average salary for a Angular Developer in India is 5.7 Lakhs per year (?47.4k per month). Salary estimates are based on 6.8k latest salaries</p>
        </div>
        
    </section>




    <section className='container-fluid  mt-5' style={{backgroundColor:"black", width:"100%",height:"57px",color:"white", paddingTop:"15px", display:"flex",justifyContent:"center",gap:"50px"}}>
        <p>Curriculam</p>
        <p>Course Details</p>
        <p>Certification</p>
        <p>Reviews</p>
        <p>Projects</p>
        <p>Features</p>
        <p>FAQ's</p>

    </section>



    <section className='container mt-4'>
    <h1>Angular Course Training Curriculum</h1>
    <hr style={{ width: "100%", maxWidth: "100%" }} />

    <div className="accordion accordion-flush" id="accordionFlushExample" style={{ width: "100%", maxWidth: "100%", boxShadow: "0 0 2px", margin: "0 auto" }}>
        {/* Accordion Item 1 */}
        <div className="accordion-item">
            <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne" style={{ backgroundColor: "lightgrey" }}>
                    <strong>Introduction</strong>
                </button>
            </h2>
            <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                <div className="accordion-body">
                    These Angular docs help you learn and utilize the Angular platform and framework, from your first application to optimizing complex enterprise applications.
                </div>
            </div>
        </div>
        <br />

        {/* Accordion Item 2 */}
        <div className="accordion-item">
            <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo" style={{ backgroundColor: "lightgrey" }}>
                    <strong>Why Angular</strong>
                </button>
            </h2>
            <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                <div className="accordion-body">
                    <p>Topics:</p>
                    <ul>
                        <li>User Experience similar to a Desktop Application</li>
                        <li>Productivity and scalability</li>
                        <li>Performance & unit testing</li>
                        <li>Community and support</li>
                        <li>Full-featured Framework</li>
                        <li>Mobile App Development support</li>
                    </ul>
                </div>
            </div>
        </div>
        <br />

        {/* Accordion Item 3 */}
        <div className="accordion-item">
            <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree" style={{ backgroundColor: "lightgrey" }}>
                    <strong>Understanding Angular Versions</strong>
                </button>
            </h2>
            <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                <div className="accordion-body">
                    <p>Topics:</p>
                    <ul>
                        <li>AngularJS (Angular 1.x)</li>
                        <li>Angular 2</li>
                        <li>Angular 4</li>
                        <li>Angular 5</li>
                        <li>Angular 6</li>
                        <li>Angular 7</li>
                    </ul>
                </div>
            </div>
        </div>
        <br />

        {/* Accordion Item 4 */}
        <div className="accordion-item">
            <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour" style={{ backgroundColor: "lightgrey" }}>
                    <strong>Typescript & ES6</strong>
                </button>
            </h2>
            <div id="flush-collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                <div className="accordion-body">
                    <p>Topics:</p>
                    <ul>
                        <li>Introduction</li>
                        <li>What is Typescript</li>
                        <li>Why Typescript</li>
                        <li>Setup and installation</li>
                        <li>IDE support</li>
                        <li>Scoping using Let and Const Keywords (ES6)</li>
                    </ul>
                </div>
            </div>
        </div>
        <br />

        {/* Accordion Item 5 */}
        <div className="accordion-item">
            <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive" style={{ backgroundColor: "lightgrey" }}>
                    <strong>Power of Types</strong>
                </button>
            </h2>
            <div id="flush-collapseFive" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                <div className="accordion-body">
                    <p>Topics:</p>
                    <ul>
                        <li>Introduction</li>
                        <li>Type inference</li>
                        <li>Type Annotations</li>
                        <li>Number</li>
                        <li>Boolean</li>
                        <li>String</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</section>



<section className='container-fluid mt-4'>
    <div className='row justify-content-between align-items-center' style={{ backgroundColor: "skyblue", minHeight: "430px", padding: "20px" }}>
        
        {/* Left Section */}
        <div className='col-md-6 text-white text-start' style={{ paddingTop: "20px" }}>
            <h2>Angular Course Training Certification</h2>
            <p><strong>AchieversIT Angular Course Training Certificate Holders work at 2000+ companies.</strong></p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                <button className="btn btn-light text-primary mb-2 me-md-2" type="button" style={{ border: "none" }}>Get In Touch</button>
                <button type="button" className="btn btn-outline-light mb-2">Get Sample Certificate</button>
            </div>
        </div>

        {/* Right Section */}
        <div className='col-md-6 text-center'>
            <img 
                src="https://www.achieversit.com/assets/images/certificate.png" 
                className="img-fluid" 
                style={{ maxHeight: "400px", width: "100%", paddingTop: "10px" }} 
                alt="Angular Course"
            />
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
          <p className='card-text text-center'>#63, 1st Floor, 16th Main, 8th Cross BTM 1st Stage, BTM Layout, Bengaluru, Karnataka</p>
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

export default AngularTraining