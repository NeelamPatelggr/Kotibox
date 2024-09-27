import React from 'react'

import location from './home/photos/location.png'
import fac from './home/photos/fac.png'
import ins from './home/photos/ins.png'
import lin from './home/photos/lin.png'
import twi from './home/photos/twi.png'
import pin from './home/photos/pin.png'
import you from './home/photos/you.png'
import star from './home/photos/star.png'
import ggl from './home/photos/ggl.png'


import '../component/reviews.css';


import { Link } from 'react-router-dom'; // Import Link from react-router-dom

function Reviews() {
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
    <img src="https://images.pexels.com/photos/4427905/pexels-photo-4427905.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" style={{height:'400px',objectFit:"cover"}} className="d-block w-100" alt="..."/>
    </div>


    <section className='text-start mt-5 mx-5'>
      <div className='text-start' id='flex'>

        <div className='text-start'>
        <div className="cardS" style={{ borderColor: "black", borderWidth: "1px" }}>
  <div className="card-header">
    <img src="https://www.achieversit.com/assets/images/ajayreddy.png" alt="profile" className="rounded-circle" style={{ width: "70px", height: "70px", marginRight: "10px" }}/>
    <h5 className="m-0">Ajay Reddy</h5>
    <div className='text-start' style={{marginLeft:"15rem"}}>
    <img src={star}  style={{width:"25px"}} className="social-icon" alt=""/>
    <img src={star}  style={{width:"25px"}} className="social-icon" alt=""/>
    <img src={star}  style={{width:"25px"}} className="social-icon" alt=""/>
    <img src={star}  style={{width:"25px"}} className="social-icon" alt=""/>
    <img src={star}  style={{width:"25px"}} className="social-icon" alt=""/>
    </div>
  </div>
  <div className="card-bodyS">
    <p className="card-text">"I had completed UI Development course from AchieversIT Training institute in BTM and my experience with AchieversIT was very good. All my Senior advisors and mentors was supportive, kindness, and shared all knowledge. It would had been impossible without there guidence to achieve my goal. Thanking to AchieversIT Training Institution for helpful, supportive, friendly. I have secure good knowledge and behaviour from all my Faculty and thier Support throughout my course." </p>
  </div>
</div>

<div className="cardS" style={{ borderColor: "black", borderWidth: "1px", height:"20rem" }}>
  <div className="card-header">
    <img src="https://www.achieversit.com/assets/images/vanim.png" alt="profile" className="rounded-circle" style={{ width: "70px", height: "70px", marginRight: "10px" }}/>
    <h5 className="m-0">Vani M</h5>
    <div className='text-start' style={{marginLeft:"18rem"}}>
    <img src={star}  style={{width:"25px"}} className="social-icon" alt=""/>
    <img src={star}  style={{width:"25px"}} className="social-icon" alt=""/>
    <img src={star}  style={{width:"25px"}} className="social-icon" alt=""/>
    <img src={star}  style={{width:"25px"}} className="social-icon" alt=""/>
    <img src={star}  style={{width:"25px"}} className="social-icon" alt=""/>
    </div>
  </div>
  <div className="card-bodyS">
    <p className="card-text">""AchieversIT is the best academy for SEO and social media. I have just completed a 2 month advance course in SEO and Social Media that was amazing experience. All the teachers and staff very nice and polite. They provide me a lot of facilities. Their fee is also affordable for anyone. So if you are looking for an institution for Digital Marketing to get quality service, i would recommend AchieversIT. Faculties are realtime experts and staff are very friendly. If you have any issue you can clear it with any trainer without any hesitation. Also if you have completed your course and you have any query or any doubt, you can come and attend the class as many as times. That's the best thing i liked in AchieversIT" </p>
  </div>
</div>

<div className="cardS" style={{ borderColor: "black", borderWidth: "1px", height:"14rem" }}>
  <div className="card-header">
    <img src="https://www.achieversit.com/assets/images/vikramadhitya.png" alt="profile" className="rounded-circle" style={{ width: "70px", height: "70px", marginRight: "10px" }}/>
    <h5 className="m-0">vikram adithya</h5>
    <div className='text-start' style={{marginLeft:"14rem"}}>
    <img src={star}  style={{width:"25px"}} className="social-icon" alt=""/>
    <img src={star}  style={{width:"25px"}} className="social-icon" alt=""/>
    <img src={star}  style={{width:"25px"}} className="social-icon" alt=""/>
    <img src={star}  style={{width:"25px"}} className="social-icon" alt=""/>
    <img src={star}  style={{width:"25px"}} className="social-icon" alt=""/>
    </div>
  </div>
  <div className="card-bodyS">
    <p className="card-text">AchiversIT provides best quality training on digital marketing with industry standards. I learnt basic to advanced level knowledge with in 2 weeks. Thanks to team AchiversIT. I am planning to learn web developement in near future.</p>
  </div>
</div>

<div className="cardS" style={{ borderColor: "black", borderWidth: "1px", height:"15rem" }}>
  <div className="card-header">
    <img src="https://www.achieversit.com/assets/images/vikasdwivedi.png" alt="profile" className="rounded-circle" style={{ width: "70px", height: "70px", marginRight: "10px" }}/>
    <h5 className="m-0">vikas dwivedi</h5>
    <div className='text-start' style={{marginLeft:"15rem"}}>
    <img src={star}  style={{width:"25px"}} className="social-icon" alt=""/>
    <img src={star}  style={{width:"25px"}} className="social-icon" alt=""/>
    <img src={star}  style={{width:"25px"}} className="social-icon" alt=""/>
    <img src={star}  style={{width:"25px"}} className="social-icon" alt=""/>
    <img src={star}  style={{width:"25px"}} className="social-icon" alt=""/>
    </div>
  </div>
  <div className="card-bodyS">
    <p className="card-text">"emo was really good. Apart from technical we should focus on personal development skills what Murli has suggested to us. It was very nice taking up from communication, cousres enquiry and market stuff right which technologies are booming clearing doubt about what thing's are required in market nowadays. It was really good. I personally recommend to visit this place once. </p>
  </div>
</div>

<div className="cardS" style={{ borderColor: "black", borderWidth: "1px", height:"14rem" }}>
  <div className="card-header">
    <img src="https://www.achieversit.com/assets/images/vasubantu.png" alt="profile" className="rounded-circle" style={{ width: "70px", height: "70px", marginRight: "10px" }}/>
    <h5 className="m-0">vasu bantu</h5>
    <div className='text-start' style={{marginLeft:"15rem"}}>
    <img src={star}  style={{width:"25px"}} className="social-icon" alt=""/>
    <img src={star}  style={{width:"25px"}} className="social-icon" alt=""/>
    <img src={star}  style={{width:"25px"}} className="social-icon" alt=""/>
    <img src={star}  style={{width:"25px"}} className="social-icon" alt=""/>
    <img src={star}  style={{width:"25px"}} className="social-icon" alt=""/>
    </div>
  </div>
  <div className="card-bodyS">
    <p className="card-text">"As we have taken corporate training and we felt happy with their training and the execution model. A special thanks to Murali and Karthik for their continuous support. I found AchiversIT is the best training providers in the field of AWS & DevOps. Thanks for your services.we are planning to do more trainings with AchiversIT in the future." </p>
  </div>
</div>

<div className="cardS" style={{ borderColor: "black", borderWidth: "1px", height:"15rem" }}>
  <div className="card-header">
    <img src="https://www.achieversit.com/assets/images/savadarimanasa.png" alt="profile" className="rounded-circle" style={{ width: "70px", height: "70px", marginRight: "10px" }}/>
    <h5 className="m-0">savadari manasa</h5>
    <div className='text-start' style={{marginLeft:"13rem"}}>
    <img src={star}  style={{width:"25px"}} className="social-icon" alt=""/>
    <img src={star}  style={{width:"25px"}} className="social-icon" alt=""/>
    <img src={star}  style={{width:"25px"}} className="social-icon" alt=""/>
    <img src={star}  style={{width:"25px"}} className="social-icon" alt=""/>
    <img src={star}  style={{width:"25px"}} className="social-icon" alt=""/>
    </div>
  </div>
  <div className="card-bodyS">
    <p className="card-text">"As I was looking many places to get training on front-end development using reactjs, we attended many demos but not satisfied then at last we attended demo at AchieversIT then we found AchieversIT is the best place to join . After enrolling they teach reactjs, redux and jest frameworks with live examples. I should be thankful to Murali and Mohan sir for they professional delivery." </p>
  </div>
</div>
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

export default Reviews