import './App.css';
import { Route ,Routes} from "react-router-dom";
import Home from "./Home/Home";
import Navbar from "./Componanats/Navbar/Navbar";
import Footer from "./Componanats/Navbar/Footer/Footer";
import About from "../src/About/About";
import Chairman_Message from "./About/Chairman_Message";
import College_of_Glance from "./About/College_of_Glance";
import Mission_Vision from "./About/Mission_Vision";
import Objectives from "./About/Objectives";
import Management from "./About/Management";
import Mandatatory_Discussion from "./About/Mandatatory_Discussion";
import Admission_Process from "./Academic/Admission_Process";
import Calenders from "./Academic/Calenders";
import Courses from "./Academic/Courses";
import Photo_Gallery from "../src/Gallery/Photo_Gallery";
import Press_Release from "../src/Gallery/Press_Release";
import Videos_Gallery from "../src/Gallery/Videos_Gallery";
import Anant_2022 from "./Admission_Form/Anant-2022";
import Admission_Form from "./Admission_Form/Admission_Form";
import Blog from "../src/Blog/Blog";
import Download from "../src/Student/Download";
import Broshure from "../src/Student/Broshure";
import Syllabus from "../src/Student/Syllabus";
import Study_Materials from "../src/Student/Study_Materials";
import Alumni_Association from "../src/Student/Alumni_Association";
import Anti_Ragging from "../src/Student/Anti_Ragging";
import Contact from "../src/Contact/Contact";
import Quick_Payment from "../src/Contact/Quick_Payment";
import Smart_Classroom from "../src/Facilities/Smart_Classroom";
import Laboratory from "../src/Facilities/Laboratory";
import Hospital from "../src/Facilities/Hospital";
import Hospital_Mess from "../src/Facilities/Hospital_Mess";
import Abortion from "../src/Facilities/Abortion";
import Sports from "../src/Facilities/Sports";
import Librarian_Internet from "../src/Facilities/Librarian_Internet";
import Temple from "../src/Medical_Facilities/Temple";
import Bank_ATM from "../src/Medical_Facilities/Bank_ATM";
import Gym from "../src/Medical_Facilities/Gym";
import Canteen from "../src/Medical_Facilities/Canteen";

import Fundamental_of_Nursing from "../src/Departments/Fundamental_of_Nursing";
import Medical_Surgery from "../src/Departments/Medical_Surgery";
import Obs_Gyne_Nursing from "../src/Departments/Obs_Gyne_Nursing";
import Psychatric_Nursing from "../src/Departments/Psychatric_Nursing";
import Community_Health_Nursing from "../src/Departments/Community_Health_Nursing";



function App() {
  return (
    <div>
      <Navbar/> 
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/about" element={<About/>} />
          <Route path="/chairman_message" element={<Chairman_Message />} />
          <Route path="/college_of_glance" element={<College_of_Glance />} />
          <Route path="/mission_vision" element={<Mission_Vision />} />
          <Route path="/objectives" element={<Objectives />} />
          <Route path="/management" element={<Management />} />
          <Route path="/mandatatory_discussion" element={<Mandatatory_Discussion />} />

          <Route path="/courses" element={<Courses />} />
          <Route path="/admission_process" element={<Admission_Process />} />
          <Route path="/calenders" element={<Calenders />} />

          <Route path="/photo_gallery" element={<Photo_Gallery />} />
          <Route path="/videos_gallery" element={<Videos_Gallery />} />
          <Route path="/press_release" element={<Press_Release />} />

          <Route path="/anant_2022" element={<Anant_2022 />} />
          <Route path="/admission_form" element={<Admission_Form />} />

          <Route path="/blog" element={<Blog />} />

          <Route path="/download" element={<Download />} />
          <Route path="/broshure" element={<Broshure />} />
          <Route path="/syllabus" element={<Syllabus />} />
          <Route path="/study_materials" element={<Study_Materials />} />
          <Route path="/alumni_association" element={<Alumni_Association />} />
          <Route path="/anti_ragging" element={<Anti_Ragging />} />

          <Route path="/contact" element={<Contact />} />
          <Route path="/quick_payment" element={<Quick_Payment />} />

          <Route path="/smart_classroom" element={<Smart_Classroom />} />
          <Route path="/laboratory" element={<Laboratory />} />
          <Route path="/hospital" element={<Hospital />} />
          <Route path="/hospital_mess" element={<Hospital_Mess />} />
          <Route path="/abortion" element={<Abortion />} />
          <Route path="/sports" element={<Sports />} />
          <Route path="/librarian_internet" element={<Librarian_Internet />} />

          <Route path="/temple" element={<Temple />} />
          <Route path="/bank_ATM" element={<Bank_ATM />} />
          <Route path="/gym" element={<Gym />} />
          <Route path="/canteen" element={<Canteen />} />

          <Route path="/fundamental_of_nursing" element={<Fundamental_of_Nursing />} />
          <Route path="/medical_surgery" element={<Medical_Surgery />} />
          <Route path="/obs_gyne_nursing" element={<Obs_Gyne_Nursing />} />
          <Route path="/psychatric_nursing" element={<Psychatric_Nursing />} />
          <Route path="/community_health_nursing" element={<Community_Health_Nursing />} />
          {/* <Route path="/hospital" element={<Hospital />} /> */}
        </Routes>
      <Footer />
    </div>
  );
}

export default App;
