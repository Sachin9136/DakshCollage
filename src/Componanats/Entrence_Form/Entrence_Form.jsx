import React, { useState } from 'react';
import { useDispatch} from "react-redux";
import { entrenceExamFormApi } from '../../Redux-toolkit/Slice/FormSlice';

const Entrence_form = () => {

const dispatch = useDispatch();
// const [image, setImage] = useState("");
const [name, setName] = useState("");
const [fatherName, setFatherName] = useState("");
const [MotherName, setMotherName] = useState("");
const [Dob, setDob] = useState("");
const [qualification, setQualification] = useState("");
const [nameofschool, setNameofschool] = useState("");
const [board, setBoard] = useState("");
const [year, setYear] = useState("");
const [roll, setRoll] = useState("");
const [marks, setMarks] = useState("");
const [twelfthNameofschool, setTwelfthNameofschool] = useState("");
const [twelfthBoard, setTwelfthBoard] = useState("");
const [twelfthYear, setTwelfthYear] = useState("");
const [twelfthRoll, setTwelfthRoll] = useState("");
const [twelfthMarks, setTwelfthMarks] = useState("");
const [curseApplied, setCurseApplied] = useState("");
const [religion, setReligion] = useState("");
const [nationality, setNationality] = useState("");
const [maritalStatus, setMaritalStatus] = useState("");
const [caste, setCaste] = useState("");
const [address, setAddress] = useState("");
const [pincode, setPincode] = useState("");
const [currentAddress, setCurrentAddress] = useState("");
const [currentPincode, setCurrentPincode] = useState("");
const [EmailID, setEmailID] = useState("");
const [mobile, setMobile] = useState("");
const [gaurdianmobile, setGaurdianmobile] = useState("");

    const handlesubmit = (e) => {
        e.preventDefault()
        // const data = new FormData() 
        // data.append("name",name)
        // data.append("email",email) 
        // data.append("phone",phone)
        // data.append("resaon",resaon)
        const data = {
        name: name,
        fatherName: fatherName,
        MotherName: MotherName,
        Dob:Dob,
        qualification:qualification,
        nameofschool:nameofschool,
        board:board,
        year:year,
        roll:roll,
        marks:marks,
        twelfthNameofschool:twelfthNameofschool,
        twelfthBoard:twelfthBoard,
        twelfthYear:twelfthYear,
        twelfthRoll:twelfthRoll,
        twelfthMarks:twelfthMarks,
        curseApplied:curseApplied,
        religion:religion,
        nationality:nationality,
        maritalStatus:maritalStatus,
        caste:caste,
        address:address,
        pincode:pincode,
        currentAddress:currentAddress,
        currentPincode:currentPincode,
        EmailID:EmailID,
        mobile:mobile,
        gaurdianmobile:gaurdianmobile,
            
            // image :image
        }
        // console.log(data)
        dispatch(entrenceExamFormApi(data))
        setName("")
        setFatherName("")
        setMotherName("")
        setDob("")
        setQualification("")
        setNameofschool("")
        setBoard("")
        setYear("")
        setRoll("")
        setMarks("")
        setTwelfthNameofschool("")
        setTwelfthBoard("")
        setTwelfthYear("")
        setTwelfthRoll("")
        setTwelfthMarks("")
        setCurseApplied("")
        setReligion("")
        setNationality("")
        setMaritalStatus("")
        setCaste("")
        setAddress("")
        setPincode("")
        setCurrentAddress("")
        setCurrentPincode("")
        setEmailID("")
        setMobile("")
        setGaurdianmobile("")
    }

  return (
    <div>
        <div>
            <form
            method="post"
            onSubmit={handlesubmit}
            className="comment-form contact__form ">
            <div
                className="alert alert-success contact__msg"
                style={{ display: "none" }}
                role="alert"
            >
                Your message was sent successfully.
            </div>
            <div className="row">
                <div className="col-sm-12">
                <p className="comment-form-subject">
                    <label htmlFor="subject">
                    Name
                    </label>
                    <input 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Type Your Name"
                    className="form-control"
                    id="name"
                    name="name"
                    type="text"
                    defaultValue=""
                    required=""
                    />
                </p>
                </div>
                <div className="col-sm-12">
                <p className="comment-form-subject">
                    <label htmlFor="subject">
                    Father Name
                    </label>
                    <input 
                    value={fatherName}
                    onChange={(e) => setFatherName(e.target.value)}
                    placeholder="Type Your Father Name"
                    className="form-control"
                    id="fatherName"
                    name="fatherName"
                    type="text"
                    defaultValue=""
                    required=""
                    />
                </p>
                </div>
                <div className="col-sm-12">
                <p className="comment-form-subject">
                    <label htmlFor="subject">
                    Mother Name
                    </label>
                    <input
                    value={MotherName}
                    onChange={(e) => setMotherName(e.target.value)}
                    placeholder="Department"
                    className="form-control"
                    id="MotherName"
                    name="MotherName"
                    type="text"
                    defaultValue=""
                    required=""
                    />
                </p>
                </div>
                <div className="col-sm-12">
                <p className="comment-form-comment">
                    <label htmlFor="comment">
                    Date of Birth
                    </label>
                    <textarea
                    value={Dob}
                    onChange={(e) => setDob(e.target.value)}
                    placeholder="Type Your DOB"
                    className="form-control"
                    id="Dob"
                    name="Dob"
                    cols={45}
                    rows={5}
                    required=""
                    defaultValue={""}
                    />
                </p>
                </div>
                <div className="col-sm-12">
                <p className="comment-form-subject">
                    <label htmlFor="subject">
                    Qualification
                    </label>
                    <input 
                    value={qualification}
                    onChange={(e) => setQualification(e.target.value)}
                    placeholder="Type Your Qualification"
                    className="form-control"
                    id="qualification"
                    name="qualification"
                    type="text"
                    defaultValue=""
                    required=""
                    />
                </p>
                </div>
                <div className="col-sm-12">
                <p className="comment-form-subject">
                    <label htmlFor="subject">
                    School Name
                    </label>
                    <input 
                    value={nameofschool}
                    onChange={(e) => setNameofschool(e.target.value)}
                    placeholder="Type Your School Name"
                    className="form-control"
                    id="nameofschool"
                    name="nameofschool"
                    type="text"
                    defaultValue=""
                    required=""
                    />
                </p>
                </div>
                <div className="col-sm-12">
                <p className="comment-form-subject">
                    <label htmlFor="subject">
                    Board Name
                    </label>
                    <input
                    value={board}
                    onChange={(e) => setBoard(e.target.value)}
                    placeholder="Type of Board Name"
                    className="form-control"
                    id="board"
                    name="board"
                    type="text"
                    defaultValue=""
                    required=""
                    />
                </p>
                </div>
                <div className="col-sm-12">
                <p className="comment-form-comment">
                    <label htmlFor="comment">
                    Passing year
                    </label>
                    <textarea
                    value={year}
                    onChange={(e) => setYear(e.target.value)}
                    placeholder="Type Your Passing year"
                    className="form-control"
                    id="year"
                    name="year"
                    cols={45}
                    rows={5}
                    required=""
                    defaultValue={""}
                    />
                </p>
                </div>
                <div className="col-sm-12">
                <p className="comment-form-subject">
                    <label htmlFor="subject">
                    Roll Number
                    </label>
                    <input 
                    value={roll}
                    onChange={(e) => setRoll(e.target.value)}
                    placeholder="Type Your Roll Number"
                    className="form-control"
                    id="roll"
                    name="roll"
                    type="text"
                    defaultValue=""
                    required=""
                    />
                </p>
                </div>
                <div className="col-sm-12">
                <p className="comment-form-subject">
                    <label htmlFor="subject">
                    Marks
                    </label>
                    <input 
                    value={marks}
                    onChange={(e) => setMarks(e.target.value)}
                    placeholder="Type Your Marks"
                    className="form-control"
                    id="marks"
                    name="marks"
                    type="text"
                    defaultValue=""
                    required=""
                    />
                </p>
                </div>
                <div className="col-sm-12">
                <p className="comment-form-subject">
                    <label htmlFor="subject">
                    Name of School
                    </label>
                    <input
                    value={twelfthNameofschool}
                    onChange={(e) => setTwelfthNameofschool(e.target.value)}
                    placeholder="Name of School"
                    className="form-control"
                    id="twelfthNameofschool"
                    name="twelfthNameofschool"
                    type="text"
                    defaultValue=""
                    required=""
                    />
                </p>
                </div>
                <div className="col-sm-12">
                <p className="comment-form-subject">
                    <label htmlFor="subject">
                    Twelfth Board
                    </label>
                    <input 
                    value={twelfthBoard}
                    onChange={(e) => setTwelfthBoard(e.target.value)}
                    placeholder="Type Your Twelfth Board Year"
                    className="form-control"
                    id="twelfthBoard"
                    name="twelfthBoard"
                    type="text"
                    defaultValue=""
                    required=""
                    />
                </p>
                </div>
                <div className="col-sm-12">
                <p className="comment-form-subject">
                    <label htmlFor="subject">
                    Twelfth Passing Year
                    </label>
                    <input 
                    value={twelfthYear}
                    onChange={(e) => setTwelfthYear(e.target.value)}
                    placeholder="Type Your Twelfth Passing Year"
                    className="form-control"
                    id="twelfthYear"
                    name="twelfthYear"
                    type="text"
                    defaultValue=""
                    required=""
                    />
                </p>
                </div>
                <div className="col-sm-12">
                <p className="comment-form-subject">
                    <label htmlFor="subject">
                    Twelfth Roll Number
                    </label>
                    <input 
                    value={twelfthRoll}
                    onChange={(e) => setTwelfthRoll(e.target.value)}
                    placeholder="Type Your Twelfth Roll Number"
                    className="form-control"
                    id="twelfthRoll"
                    name="twelfthRoll"
                    type="text"
                    defaultValue=""
                    required=""
                    />
                </p>
                </div>
                <div className="col-sm-12">
                <p className="comment-form-subject">
                    <label htmlFor="subject">
                    Twelfth Marks
                    </label>
                    <input
                    value={twelfthMarks}
                    onChange={(e) => setTwelfthMarks(e.target.value)}
                    placeholder="Type Your Twelfth Marks"
                    className="form-control"
                    id="twelfthMarks"
                    name="twelfthMarks"
                    type="text"
                    defaultValue=""
                    required=""
                    />
                </p>
                </div>
                <div className="col-sm-12">
                <p className="comment-form-subject">
                    <label htmlFor="subject">
                    Curse Applied
                    </label>
                    <input 
                    value={curseApplied}
                    onChange={(e) => setCurseApplied(e.target.value)}
                    placeholder="Type Your Curse Applied"
                    className="form-control"
                    id="curseApplied"
                    name="curseApplied"
                    type="text"
                    defaultValue=""
                    required=""
                    />
                </p>
                </div>
                <div className="col-sm-12">
                <p className="comment-form-subject">
                    <label htmlFor="subject">
                    Religion
                    </label>
                    <input 
                    value={religion}
                    onChange={(e) => setReligion(e.target.value)}
                    placeholder="Type Your Religion"
                    className="form-control"
                    id="religion"
                    name="religion"
                    type="text"
                    defaultValue=""
                    required=""
                    />
                </p>
                </div>
                <div className="col-sm-12">
                <p className="comment-form-subject">
                    <label htmlFor="subject">
                    Nationality
                    </label>
                    <input 
                    value={nationality}
                    onChange={(e) => setNationality(e.target.value)}
                    placeholder="Type Your Nationality"
                    className="form-control"
                    id="nationality"
                    name="nationality"
                    type="text"
                    defaultValue=""
                    required=""
                    />
                </p>
                </div>
                <div className="col-sm-12">
                <p className="comment-form-subject">
                    <label htmlFor="subject">
                    Marital Status
                    </label>
                    <input
                    value={maritalStatus}
                    onChange={(e) => setMaritalStatus(e.target.value)}
                    placeholder="Type Your Marital Status"
                    className="form-control"
                    id="maritalStatus"
                    name="maritalStatus"
                    type="text"
                    defaultValue=""
                    required=""
                    />
                </p>
                </div>
                
                <div className="col-sm-12">
                <p className="comment-form-subject">
                    <label htmlFor="subject">
                    Caste
                    </label>
                    <input 
                    value={caste}
                    onChange={(e) => setCaste(e.target.value)}
                    placeholder="Type Your Caste"
                    className="form-control"
                    id="caste"
                    name="caste"
                    type="text"
                    defaultValue=""
                    required=""
                    />
                </p>
                </div>
                <div className="col-sm-12">
                <p className="comment-form-subject">
                    <label htmlFor="subject">
                    Address
                    </label>
                    <input 
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder="Type Your Address"
                    className="form-control"
                    id="address"
                    name="address"
                    type="text"
                    defaultValue=""
                    required=""
                    />
                </p>
                </div>
                <div className="col-sm-12">
                <p className="comment-form-subject">
                    <label htmlFor="subject">
                    Pincode
                    </label>
                    <input 
                    value={pincode}
                    onChange={(e) => setPincode(e.target.value)}
                    placeholder="Type Your Pincode"
                    className="form-control"
                    id="pincode"
                    name="pincode"
                    type="text"
                    defaultValue=""
                    required=""
                    />
                </p>
                </div>
                <div className="col-sm-12">
                <p className="comment-form-subject">
                    <label htmlFor="subject">
                    Current Address
                    </label>
                    <input
                    value={currentAddress}
                    onChange={(e) => setCurrentAddress(e.target.value)}
                    placeholder="Type Your Current Address"
                    className="form-control"
                    id="currentAddress"
                    name="currentAddress"
                    type="text"
                    defaultValue=""
                    required=""
                    />
                </p>
                </div>
                <div className="col-sm-12">
                <p className="comment-form-subject">
                    <label htmlFor="subject">
                    Current Pincode
                    </label>
                    <input 
                    value={currentPincode}
                    onChange={(e) => setCurrentPincode(e.target.value)}
                    placeholder="Type Your Current Pincode"
                    className="form-control"
                    id="currentPincode"
                    name="currentPincode"
                    type="text"
                    defaultValue=""
                    required=""
                    />
                </p>
                </div>
                <div className="col-sm-12">
                <p className="comment-form-subject">
                    <label htmlFor="subject">
                    Email
                    </label>
                    <input 
                    value={EmailID}
                    onChange={(e) => setEmailID(e.target.value)}
                    placeholder="Type Your Email"
                    className="form-control"
                    id="EmailID"
                    name="EmailID"
                    type="text"
                    defaultValue=""
                    required=""
                    />
                </p>
                </div>
                <div className="col-sm-12">
                <p className="comment-form-subject">
                    <label htmlFor="subject">
                    Mobile Number
                    </label>
                    <input 
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)}
                    placeholder="Type Your Mobile"
                    className="form-control"
                    id="mobile"
                    name="mobile"
                    type="text"
                    defaultValue=""
                    required=""
                    />
                </p>
                </div>
                <div className="col-sm-12">
                <p className="comment-form-subject">
                    <label htmlFor="subject">
                    <i className="fa fa-pencil-alt" />
                    </label>
                    <input
                    value={gaurdianmobile}
                    onChange={(e) => setGaurdianmobile(e.target.value)}
                    placeholder="Type Your Gaurdian Mobile"
                    className="form-control"
                    id="gaurdianmobile"
                    name="gaurdianmobile"
                    type="text"
                    defaultValue=""
                    required=""
                    />
                </p>
                </div>
            </div>
            <p className="form-submit">
                <button type="submit" className="submit btn btn-success">
                    Send Message
                </button>
            </p>
            </form>
        </div>
    </div>
  )
}

export default Entrence_form
