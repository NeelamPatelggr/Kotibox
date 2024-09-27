import React from 'react'
import dev from './home/photos/dev.png'
import mobile from './home/photos/mobile.png'
import mobile1 from './home/photos/mobile1.png'
import coding from './home/photos/coding.png'
import currency from './home/photos/currency.png'
import programme from './home/photos/programme.png'
import datatypes from './home/photos/datatypes.png'
import laptop1 from './home/photos/laptop1.png'
import cloud from './home/photos/cloud.png'
import cyber from './home/photos/cyber.png'
import laptop2 from './home/photos/laptop2.png'
import tick from './home/photos/tick.png'
import infinity from './home/photos/infinity.png'
import tttt from './home/photos/tttt.png'
import question from './home/photos/question.png'
import python from './home/photos/python.png'
import location from './home/photos/location.png'

import fac from './home/photos/fac.png'
import ins from './home/photos/ins.png'
import lin from './home/photos/lin.png'
import twi from './home/photos/twi.png'
import pin from './home/photos/pin.png'
import you from './home/photos/you.png'

import homepge from '../component/homepge.css'
import { Link } from 'react-router-dom'


 






function Home() {
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




<div id="carouselExampleIndicators" class="carousel slide">
  <div class="carousel-indicators">
    <button type="button1" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button2" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button3" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
    <button type="button4" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
    <button type="button5" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://trisectinstitute.com/wp-content/uploads/2021/12/best-angular-training.png" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item active">
      <img src="https://trisectinstitute.com/wp-content/uploads/2021/12/best-react-js-training-institute-1.png" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item active">
      <img src="https://rooman.net/wp-content/uploads/2021/11/python-programing-banner.jpg" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item active">
      <img src="https://systechgroup.in/wp-content/uploads/2021/02/Amazon-Web-Service-AWS-Course-Preview.png" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item active">
      <img src="https://infidata.in/assets/img/courses/web-development-training-in-bangalore.jpg" className="d-block w-100" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>



<section className="row mb-5 justify-content-center text-center ">
  <div className="col-md-4 mb-4 px-5 custom-card-width3">
    <div className="card1">
      <div className="card-body1">
        <p className="card-text1">BECOME AN UI DEVELOPER</p>
      </div>
    </div>
  </div>
  <div className="col-md-4 mb-4 px-5 custom-card-width3">
    <div className="card4">
      <div className="card-body1">
        <p className="card-text1">BECOME AN ANGULAR DEVELOPER</p>
      </div>
    </div>
  </div>
  <div className="col-md-4 mb-4 px-5 custom-card-width3">
    <div className="card5">
      <div className="card-body1">
        <p className="card-text1">BECOME A REACT JS DEVELOPER</p>
      </div>
    </div>
  </div>
</section>




<section className='container px-5'>
  <h1>Discover Top Categories</h1>
  
  <div className="row mb-5 justify-content-space-between px-5 pt-5">
    <div className="col-md-2 mb-4 custom-card-width1">
      <div className="cardT text-center">
        <div className="card-body3">
          <img src={dev} className="text-center" alt="DevOps"/>
          <p>DevOps</p>
        </div>
      </div>
    </div>

    <div className="col-md-2 mb-4 custom-card-width1">
      <div className="cardT text-center">
        <div className="card-body3">
          <img src={coding} className="text-center" alt="Front-End"/>
          <p>Front-End</p>
        </div>
      </div>
    </div>

    <div className="col-md-2 mb-4 custom-card-width1">
      <div className="cardT text-center">
        <div className="card-body3">
          <img src={mobile} className="text-center" alt="Mobile App Development"/>
          <p>Mobile App Dev</p>
        </div>
      </div>
    </div>

    <div className="col-md-2 mb-4 custom-card-width1">
      <div className="cardT text-center">
        <div className="card-body3">
          <img src={currency} className="text-center" alt="Digital Marketing"/>
          <p>Digital Marketing</p>
        </div>
      </div>
    </div>

    <div className="col-md-2 mb-4 custom-card-width1">
      <div className="cardT text-center">
        <div className="card-body3">
          <img src={programme} className="text-center" alt="Programs and Frameworks"/>
          <p>Programs &Framework</p>
        </div>
      </div>
    </div>

    <div className="col-md-2 mb-4 custom-card-width1">
      <div className="cardT text-center">
        <div className="card-body3">
          <img src={datatypes} className="text-center" alt="Data Types"/>
          <p>Data Types</p>
        </div>
      </div>
    </div>

    <div className="col-md-2 mb-4 custom-card-width1">
      <div className="cardT text-center">
        <div className="card-body3">
          <img src={laptop1} className="text-center" alt="Software Testing"/>
          <p>Software Testing</p>
        </div>
      </div>
    </div>

    <div className="col-md-2 mb-4 custom-card-width1">
      <div className="cardT text-center">
        <div className="card-body3">
          <img src={cloud} className="text-center" alt="Cloud Computing"/>
          <p>Cloud Computing</p>
        </div>
      </div>
    </div>

    <div className="col-md-2 mb-4 custom-card-width1">
      <div className="cardT text-center">
        <div className="card-body3">
          <img src={cyber} className="text-center" alt="Cyber Security"/>
          <p>Cyber Security</p>
        </div>
      </div>
    </div>

    <div className="col-md-2 mb-4 custom-card-width1">
      <div className="cardT text-center">
        <div className="card-body3">
          <img src={mobile1} className="text-center" alt="Artificial Intelligence"/>
          <p>Artificial Intelligence</p>
        </div>
      </div>
    </div>

    <div className="col-md-2 mb-4 custom-card-width1">
      <div className="cardT text-center">
        <div className="card-body3">
          <img src={python} className="text-center" alt="Python"/>
          <p>Python</p>
        </div>
      </div>
    </div>

    <div className="col-md-2 mb-4 custom-card-width1">
      <div className="cardT text-center">
        <div className="card-body3">
          <img src={laptop2} className="text-center" alt="Big Data"/>
          <p>Big Data</p>
        </div>
      </div>
    </div>
  </div>  
</section>



<div className='container-fluid text-center pt-5' id='blue'>
  <p>Enroll, Learn, Grow, Repeat! Get ready to achieve your learning goals with Achievers IT</p>
  <button type='button' className='text-center' id='button'>CONTACT US</button>
</div>


<section className='container pt-4'>
  <h1 className="text-center">Achievers IT Edge</h1>
  
  <div className='row justify-content-center px-5 pt-4'>
    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
      <div className="cardA text-start">
        <div className="card-body2">
          <img src={tick} className="card-img-top d-block mx-auto" alt="Real Time Doubt Resolution"/>
          <h6 className="card-title text-center">Real Time Doubt Resolution</h6>
          <p className='card-text text-center'>With Live Instructors</p>
        </div>
      </div>
    </div>

    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
      <div className="cardA text-start">
        <div className="card-body2">
          <img src={infinity} className="card-img-top d-block mx-auto" alt="Infinite Learning Access"/>
          <h6 className="card-title text-center">Infinite Learning Access</h6>
          <p className='card-text text-center'>Access Anytime, Anywhere</p>
        </div>
      </div>
    </div>

    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
      <div className="cardA text-start">
        <div className="card-body2">
          <img src={tttt} className="card-img-top d-block mx-auto" alt="Expert Mentors"/>
          <h6 className="card-title text-center">Expert Mentors</h6>
          <p className='card-text text-center'>Learn from the Best</p>
        </div>
      </div>
    </div>

    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
      <div className="cardA text-start">
        <div className="card-body2">
          <img src={question} className="card-img-top d-block mx-auto" alt="Interactive Q&A"/>
          <h6 className="card-title text-center">Interactive Q&A</h6>
          <p className='card-text text-center'>Engage with Mentors</p>
        </div>
      </div>
    </div>
  </div>
</section>




 <section className='mt-2'>
  <div className='container-fluid text-center pt-4' id='url'>
    <h1 id='heading'>Why We are on TOP 1</h1>
    <p id='heading2'>More people train with AcheiversIT because of ourcommitment to quality, Placement Support, and Real-time Training.</p>

    <section className="card-container">
  <div className="cardC">
    <div className="card-body3">
      <h2>135+</h2>
      <p className="card-text">TRENDING COURSES</p>
    </div>
  </div>
  <div className="cardC">
    <div className="card-body3">
    <h2>60+</h2>
      <p className="card-text">IT Companies are tied-UP to hire our trained students</p>
    </div>
  </div>
  <div className="cardC">
    <div className="card-body3">
    <h2>25+</h2>
      <p className="card-text">Students attend Interviews every day through our Placement Cell</p>
    </div>
  </div>
  <div className="cardC">
    <div className="card-body3">
    <h2>3+</h2>
      <p className="card-text">Of our students Get Jobs every day in Bangalore and India</p>
    </div>
  </div>
</section>


  </div>
 </section>


 <section className='container-fluid'>
  <div className='text-start pt-5 px-5' id='fill'>
    <p>Acheivers IT ! for business</p>
    <p id='big'>No more dull edges in your company.Make your employees into masters....</p>
    <p>Nurture talent with instructor-led courses on trending technologies</p>
    <button type='button' className='text-center' id='button2'>CONTACT US</button>
  </div>
 </section>


 <section className="container mt-5 mx-auto">
  <h1 className="text-start">Our Corporate Clients</h1>
  <div className="row justify-content-center pt-5" id='image'>
    <div className="col-md-2 col-sm-4 col-6 text-center mb-4">
      <img src="https://www.achieversit.com/assets/images/ui_Development_training.png" className="img-fluid" alt="UI Development" />
    </div>
    <div className="col-md-2 col-sm-4 col-6 text-center mb-4">
      <img src="https://www.achieversit.com/assets/images/php_development_training.png" className="img-fluid" alt="PHP Development" />
    </div>
    <div className="col-md-2 col-sm-4 col-6 text-center mb-4">
      <img src="https://www.achieversit.com/assets/images/angualr_development_training.png" className="img-fluid" alt="Angular Development" />
    </div>
    <div className="col-md-2 col-sm-4 col-6 text-center mb-4">
      <img src="https://www.achieversit.com/assets/images/aws_development_training.png" className="img-fluid" alt="AWS Development" />
    </div>
    <div className="col-md-2 col-sm-4 col-6 text-center mb-4">
      <img src="https://www.achieversit.com/assets/images/boostrap_development%20.png" className="img-fluid" alt="Bootstrap Development" />
    </div>
    <div className="col-md-2 col-sm-4 col-6 text-center mb-4">
      <img src="https://www.achieversit.com/assets/images/react_development_training.png" className="img-fluid" alt="React Development" />
    </div>
    <div className="col-md-2 col-sm-4 col-6 text-center mb-4">
      <img src="https://www.achieversit.com/assets/images/python_development_traning.png" className="img-fluid" alt="Python Development" />
    </div>
    <div className="col-md-2 col-sm-4 col-6 text-center mb-4">
      <img src="https://www.achieversit.com/assets/images/software_development_training.png" className="img-fluid" alt="Software Development" />
    </div>
    <div className="col-md-2 col-sm-4 col-6 text-center mb-4">
      <img src="https://www.achieversit.com/assets/images/web_development_training.png" className="img-fluid" alt="Software Development" />
    </div>
    <div className="col-md-2 col-sm-4 col-6 text-center mb-4">
      <img src="https://www.achieversit.com/assets/images/angularjs_training.png" className="img-fluid" alt="Software Development" />
    </div>
    <div className="col-md-2 col-sm-4 col-6 text-center mb-4">
      <img src="https://www.achieversit.com/assets/images/new-cisco-logo-png-1.png" className="img-fluid" alt="Web Development" />
    </div>
    <div className="col-md-2 col-sm-4 col-6 text-center mb-4">
      <img src="https://www.achieversit.com/assets/images/software_training_courses.png" className="img-fluid" alt="Software Training Courses" />
    </div>
  </div>
</section>


<section className='container-fluid text-center mt-5' id='bg'>
  <div className='text-start pt-5 px-5' id='text'>
  <h1 className='text-center'>KNOW US BETTER FOR YOUR FUTURE !</h1>
  <p>We, AchieversIT are here to assist you in gaining the best deal of knowledge and landing at your dream job. Fresher or experienced, we always have a hope to hop into new domains and fields to quicken up the pace in our career growth. AchieversIT is dedicated to its services to enhance your skills to make a better move towards a better future in your career.</p>
  <p>AchieversIT has been delivering outstanding quality training in IT sector courses. 8 years of experience in furnishing qualitative training, AchieversIT has gained its own fame in leading an individual to land at their dream job.</p>
  <p>Are you looking out for a job or job switch? Despite the fact that your background relates to technical or non-technical, you can always find a choice for you with us. AchieversIT is your best training partner to help you move forward in your career with confidence and ample amount of knowledge. AchieversIT provides different trainings to boost up your vocation, namely :</p>
  <h5 className='text-start'>1. Front-end-Course</h5>
  <p>User Interface Development ; Web Interface Development ; Angular Training ; ReactJS Development ; VueJS Development ; BootStrap Development ; Material Development.</p>
  <ul>
    <li>AchieversIT can be listed out as the best UI Development training centre, whereas locates UI Development training in Bangalore ; UI Development training in Marathahalli ; also benefits as UI training online and UI Developer training.</li>
    <li>AchieversIT stands out as the best Angular Development training centre, whereas locates Angular Development training in Bangalore ; Angular training in Marathahalli; also benefits as Angular training online and Angular online training. Also the courses come with variations like Angular UI Bootstrap ; AngularJS UI Bootstrap ; Angular JavaScript ; JavaScript AngularJS.</li>
    <li>AchieversIT is stated as the best ReactJS training centre, whereas locates ReactJS training in Bangalore ; ReactJS development training in Bangalore; React training in BTM; ReactJS training in Marathahalli; also benefits as ReactJS training online and ReactJS online training ; React training ; React native training.</li>
  </ul>
  <h5 className='text-start'>3. Mobile Development Courses :</h5>
  <p>Android App Development ; IOS App App Development ; Windows App Development ; Hybrid App Development.</p>
  <h5 className='text-start'>4.Full Stack Development Courses:</h5>
  <p>Java Full Stack Training ; Net Full Stack Training ; Node.JS Full Stack Training ; PHP Full Stack Training ; MEAN Full Stack Training ; MERN Full Stack Training.</p>
  <h5 className='text-start'>5. Digital Marketing Courses:</h5>
  <p>Digital Marketing ; Affiliate Marketing ; Email Marketing ; Google Analytics ; Lead Generation ; Remarketing ; Search Engine Optimization ; SMS Marketing ; Social Media Marketing ; WordPress.</p>
  <h5 className='text-start'>6.Database Programming Courses :</h5>
  <p>MySQL Training ; Oracle Training ; Mongo DB Training ; NoSQL Training ; PostgreSQL Training.</p>
  <h5 className='text-start'>7.Project Management Courses :</h5>
  <p>Microsoft.NET ; PHP ; Python ; Ruby ; Java</p>
  <h5 className='text-start'>8. Back-end Courses:</h5>
  <p>Prince2 Training ; PMP Training ; Six Sigma Training.</p>
  <h4 className='text-center'>Apart from imparting skills and knowledge, AchieversIT comes up with flexible modes of training :</h4>
  <ol>
  <li> Classroom Training in Bangalore</li>
  <li>Live Virtual Training with Instructor-Led Sessions</li>
  <li>Self-Study (e-Learning)</li></ol>
  <h4 className='text-center'>You can choose your mode of training according to your comfort and achieve your courses with certifications.</h4>
  <h5>Perks and advantages of learning with AchieversIT :</h5>
  <ol>
    <li>90 hours of training</li>
    <li>Reasonable course fees</li>
    <li>200 hours of lab practical sessions under experts’ mentorship</li>
    <li>Hands-on experience with case studies with real-time examples</li>
    <li>24*7 access and support by the team</li>
    <li>Industry experts & Certified trainers</li>
    <li>100% placement support</li>
    <li>Industry-aligned curriculum with current market trends and needs</li>
    <li>Extra hours of inputs for non-technical individuals</li>
    <li>Flexible mode of learning</li>
  </ol>
  <h4 className='text-center'>You get to attend JOB-Oriented training with real-time knowledge and live projects which comes at an affordable price with effective Instructor-led sessions.</h4>
  <p className='text-center'>We, at AchieversIT strive to deliver our best efforts; and concentrate and help you in achieving your dream job you always wished for. We are dedicated to deliver excellence and impart knowledge to the individuals aspiring a career in not only IT sectors but also in various other fields like Digital Marketing, Project Management etc. Our curriculum for all the courses is reviewed systematically to keep our candidates at the cutting edges of technologies.</p>
  </div>
  <div className=' container text-start' id='form'>
    <h5>Impressed by Us? Enroll Now</h5>
    <p>Structure your learning and get a certificate to prove it.</p>

 
    <form className="row g-2 align-items-center">
      <div className="col-md">
        <input type="email" className="form-control" placeholder="Email" required />
      </div>
      <div className="col-md">
        <input type="tel" className="form-control" placeholder="Contact Number" required />
      </div>
      <div className="col-md">
        <input type="text" className="form-control" placeholder="Captcha text" required />
      </div>
      <div className="col-md-auto">
        <button type="submit" className="btn btn-primary">Reach Us</button>
      </div>
    </form>
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
          <Link to="/home" className="footer-link"><strong>Home</strong></Link><br />
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

export default Home