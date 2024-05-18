import './App.css';
import { Route ,Routes} from "react-router-dom";
import Home from "./Home/Home";
import Navbar from "./Componanats/Navbar/Navbar";
import Footer from "./Componanats/Navbar/Footer/Footer";
import About from "../src/About/About";

import Academic from "./Academic/Academic";
import Courses from "./Academic/Courses";
import Single_Courses from "./Single_Courses/Single_Courses";
import Photo_Gallery from "../src/Gallery/Photo_Gallery";
import Press_Release from "../src/Gallery/Press_Release";
import Videos_Gallery from "../src/Gallery/Videos_Gallery";
import Admission_Form from "./Admission_Form/Admission_Form";
import Blog from "../src/Blog/Blog";
import Single_Blog from "../src/Single_Blog/Single_blog";
import Download from "../src/Student/Download";
import Broshure from "../src/Student/Broshure";
import Syllabus from "../src/Student/Syllabus";
import Study_Materials from "../src/Student/Study_Materials";
import Alumni_Association from "../src/Student/Alumni_Association";
import Anti_Ragging from "../src/Student/Anti_Ragging";
import Contact from "../src/Contact/Contact";
import Quick_Payment from "../src/Contact/Quick_Payment";

import Facilities from './Facilities/Facilities';

import MedicalFacility from "./Medical_Facilities/MedicalFacility";

import Department from "../src/Departments/Department";

import ComplainAndFeedback from "../src/Complain_Feedback/Complain_Feedback";

import Signup from "../src/Signup/Signup";
import Login from "../src/Login/Login";

import Addmisssion_Portal from "../src/Addmission_Portal/Addmission_Portal";

import Student_Pdf from "../src/Student/Student";

import TopToScroll from "./TopToScroll";
import Enterance_Form from "../src/Componanats/Entrence_Form/Entrence_Form";
import PrivacyPolicy from './Componanats/Navbar/Footer/Privacy_Policy';
import Image from './Gallery/images';



function App() {
  return (
    <div>
      
      <Navbar/> 
      <Enterance_Form />
      <TopToScroll/> 
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/about/:id" element={<About/>} />

          <Route path="/academic/:id" element={<Academic />} />

          <Route path="/courses" element={<Courses />} />
          <Route path="/single_courses/:id" element={<Single_Courses />} />

          <Route path="/photo_gallery" element={<Photo_Gallery />} />
          <Route path="/videos_gallery" element={<Videos_Gallery />} />
          <Route path="/press_release" element={<Press_Release />} />

          <Route path="/addmission_form/:id" element={<Admission_Form />} />

          <Route path="/blog" element={<Blog />} />
          <Route path="/single_blog/:id" element={<Single_Blog />} />

          <Route path="/download" element={<Download />} />
          <Route path="/broshure" element={<Broshure />} />
          <Route path="/syllabus" element={<Syllabus />} />
          <Route path="/study_materials" element={<Study_Materials />} />
          <Route path="/alumni_association" element={<Alumni_Association />} />
          <Route path="/anti_ragging" element={<Anti_Ragging />} />

          <Route path="/contact" element={<Contact />} />
          <Route path="/quick_payment" element={<Quick_Payment />} />

          <Route path="/facilities/:id" element={<Facilities />} />

          <Route path="/medicalaFacility/:id" element={<MedicalFacility />} />

          <Route path="/department/:id" element={<Department />} />
          <Route path="/images/:id" element={<Image/>} />

          <Route path="/complain_feedback" element={<ComplainAndFeedback />} /> 

          <Route path="/signup" element={<Signup />} /> 

          <Route path="/login" element={<Login />} /> 

          <Route path="/addmisssion_portal" element={<Addmisssion_Portal />} /> 

          <Route path="/student_Pdf/:id" element={<Student_Pdf />} /> 
          <Route path="/enterance_form" element={<Enterance_Form />} /> 
          <Route path="/Privacy_policy" element={<PrivacyPolicy />} /> 
          
        </Routes>
      <Footer />
    </div>
  );
}

export default App;
