import React, { useState, useEffect } from 'react';
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
const [Profile, setProfile] = useState(null);
const [signatureofgaurdian, setSignatureofGaurdian] = useState(null);
const [signatureofapplicent, setSignatureofApplicent] = useState(null);

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
        Profile:Profile,
        signatureofgaurdian:signatureofgaurdian,
        signatureofapplicent:signatureofapplicent,
        }
        console.log(Profile);

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
        setProfile("")
        setSignatureofGaurdian("")
        setSignatureofApplicent("")
    }

    useEffect(() => {
        // Function to automatically trigger the modal after 3 seconds of window loading
        const triggerModal = () => {
        setTimeout(() => {
            const modal = new window.bootstrap.Modal(document.getElementById('exampleModal'));
            modal.show();
        }, 3000);
        };

        // Function to hide the "Save changes" button inside the modal on modal show
        const hideSaveButton = () => {
        const modal = document.getElementById('exampleModal');
        if (modal) {
            modal.addEventListener('shown.bs.modal', () => {
            const saveButton = document.getElementById('exampleModalSaveButton');
            if (saveButton) {
                saveButton.style.display = 'none';
            }
            });
        }
        };

        triggerModal();
        hideSaveButton();

        // Clean up event listeners to avoid memory leaks
        return () => {
        const modal = document.getElementById('exampleModal');
        if (modal) {
            modal.removeEventListener('shown.bs.modal', () => {});
        }
        };
    }, []);

    const [selectedDate, setSelectedDate] = useState('');

  // Function to handle changes in the date input
  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // You can handle form submission logic here
    console.log("Selected date:", selectedDate);
  };

console.log(Profile);

  return (
    <div>
      <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" style={{ display: 'none' }}>
        Launch demo modal
      </button>
      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-xl">
          <div className="modal-content">
            <div className="modal-header bg-success">
              <h1 className="modal-title fs-5 text-light" id="exampleModalLabel">Entrance Form</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
                <div>
                    <div className='entrance_form'> 
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
                            <div className="col-sm-12 col-md-12 col-lg-6">
                            <p className="comment-form-subject">
                                <label htmlFor="subject" className="mb-1">
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
                            <div className="col-sm-12 col-md-12 col-lg-6">
                            <p className="comment-form-subject">
                                <label htmlFor="subject" className="mb-1">
                                Profile Image
                                </label>
                                <input 
                                onChange={(e) => setProfile(e.target.value)}
                                className="form-control"
                                id="profile"
                                name="profile"
                                type="file"
                                accept="image/*"
                                required
                            />
                            </p>
                            </div>
                            <div className="col-sm-12 col-md-12 col-lg-6">
                            <p className="comment-form-subject">
                                <label htmlFor="subject" className="mb-1">
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
                            <div className="col-sm-12 col-md-12 col-lg-6">
                            <p className="comment-form-subject">
                                <label htmlFor="subject" className="mb-1">
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
                            <div className="col-sm-12 col-md-12 col-lg-6">
                            <p className="comment-form-subject">
                                <label htmlFor="subject" className="mb-1">
                                Date Of Birth
                                </label>
                                {/* <input 
                                value={Dob}
                                onChange={(e) => setDob(e.target.value)}
                                placeholder="Type Your DOB"
                                className="form-control"
                                id="Dob"
                                name="Dob"
                                type="text"
                                defaultValue=""
                                required=""
                                /> */}
                                <input
                                onChange={(e) => setDob(e.target.value)}
                                className="form-control"
                                type="date"
                                id="Dob"
                                name="Dob"
                                value={Dob}
                                // onChange={handleDateChange}
                            />
                            </p>
                            </div>
                            <div className="col-sm-12 col-md-12 col-lg-6">
                            <p className="comment-form-subject">
                                <label htmlFor="subject" className="mb-1">
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
                            <div className="col-sm-12 col-md-12 col-lg-6">
                            <p className="comment-form-subject">
                                <label htmlFor="subject" className="mb-1">
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
                            <div className="col-sm-12 col-md-12 col-lg-6">
                            <p className="comment-form-subject">
                                <label htmlFor="subject" className="mb-1">
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
                            <div className="col-sm-12 col-md-12 col-lg-6">
                            <p className="comment-form-subject">
                                <label htmlFor="subject" className="mb-1">
                                Passing year
                                </label>
                                <input 
                                value={year}
                                onChange={(e) => setYear(e.target.value)}
                                placeholder="Type Your Passing year"
                                className="form-control"
                                id="year"
                                name="year"
                                type="text"
                                defaultValue=""
                                required=""
                                />
                            </p>
                            </div>
                            <div className="col-sm-12 col-md-12 col-lg-6">
                            <p className="comment-form-subject">
                                <label htmlFor="subject" className="mb-1">
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
                            <div className="col-sm-12 col-md-12 col-lg-6">
                            <p className="comment-form-subject">
                                <label htmlFor="subject" className="mb-1">
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
                            <div className="col-sm-12 col-md-12 col-lg-6">
                            <p className="comment-form-subject">
                                <label htmlFor="subject" className="mb-1">
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
                            <div className="col-sm-12 col-md-12 col-lg-6">
                            <p className="comment-form-subject">
                                <label htmlFor="subject" className="mb-1">
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
                            <div className="col-sm-12 col-md-12 col-lg-6">
                            <p className="comment-form-subject">
                                <label htmlFor="subject" className="mb-1">
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
                            <div className="col-sm-12 col-md-12 col-lg-6">
                            <p className="comment-form-subject">
                                <label htmlFor="subject" className="mb-1">
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
                            <div className="col-sm-12 col-md-12 col-lg-6">
                            <p className="comment-form-subject">
                                <label htmlFor="subject" className="mb-1">
                                Twelfth Marks
                                </label>
                                <input
                                value={twelfthMarks}
                                onChange={(e) => setTwelfthMarks(e.target.value)}
                                placeholder="Type Your Twelfth Marks In %"
                                className="form-control"
                                id="twelfthMarks"
                                name="twelfthMarks"
                                type="text"
                                defaultValue=""
                                required=""
                                />
                            </p>
                            </div>
                            <div className="col-sm-12 col-md-12 col-lg-6">
                            <p className="comment-form-subject">
                                <label htmlFor="subject" className="mb-1">
                                Course Applied
                                </label>
                                {/* <input 
                                value={curseApplied}
                                onChange={(e) => setCurseApplied(e.target.value)}
                                placeholder="Type Your Curse Applied"
                                className="form-control"
                                id="curseApplied"
                                name="curseApplied"
                                type="text"
                                defaultValue=""
                                required=""
                                /> */}
                                <select onChange={(e) => setCurseApplied(e.target.value)} class="form-select" aria-label="Large select example">
                                <option selected>Open this select menu</option>
                                <option value="Anm">ANM</option>
                                <option value="Gnm">GNM</option>
                                <option value="BSCNursing">BSC Nursing</option>
                                <option value="PBBNursing">PBB SC Nursing</option>
                                <option value="MSCNursing">MSC Nursing (Speciality)</option>
                                <option value="Msn">MSN</option>
                                <option value="Obg">OBG</option>
                                <option value="Pediatric">Pediatric</option>
                                <option value="Chn">CHN</option>
                                <option value="Mhn">MHN</option>
                                </select>
                            </p>
                            </div>
                            <div className="col-sm-12 col-md-12 col-lg-6">
                            <p className="comment-form-subject">
                                <label htmlFor="subject" className="mb-1">
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
                            <div className="col-sm-12 col-md-12 col-lg-6">
                            <p className="comment-form-subject">
                                <label htmlFor="subject" className="mb-1">
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
                            <div className="col-sm-12 col-md-12 col-lg-6">
                            <p className="comment-form-subject">
                                <label htmlFor="subject" className="mb-1">
                                Marital Status
                                </label>
                                {/* <input
                                value={maritalStatus}
                                onChange={(e) => setMaritalStatus(e.target.value)}
                                placeholder="Type Your Marital Status"
                                className="form-control"
                                id="maritalStatus"
                                name="maritalStatus"
                                type="text"
                                defaultValue=""
                                required=""
                                /> */}
                                <select onChange={(e) => setMaritalStatus(e.target.value)} class="form-select" aria-label="Large select example">
                                <option selected>Open this select menu</option>
                                <option value="Married">Married</option>
                                <option value="UnMarried">UnMarried</option>
                                <option value="Widow">Widow</option>
                                <option value="Divorce">Divorce</option>
                                </select>
                            </p>
                            </div>
                            <div className="col-sm-12 col-md-12 col-lg-6">
                            <p className="comment-form-subject">
                                <label htmlFor="subject" className="mb-1">
                                Caste
                                </label>
                                {/* <input 
                                value={caste}
                                onChange={(e) => setCaste(e.target.value)}
                                placeholder="Type Your Caste"
                                className="form-control"
                                id="caste"
                                name="caste"
                                type="text"
                                defaultValue=""
                                required=""
                                /> */}
                                <select onChange={(e) => setCaste(e.target.value)} class="form-select" aria-label="Large select example">
                                <option selected>Open this select menu</option>
                                <option value="General">General</option>
                                <option value="Obc">OBC</option>
                                <option value="Sc">SC</option>
                                <option value="St">ST</option>
                                <option value="Bc2">BC2</option>
                                </select>
                            </p>
                            </div>
                            <div className="col-sm-12 col-md-12 col-lg-6">
                            <p className="comment-form-subject">
                                <label htmlFor="subject" className="mb-1">
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
                            <div className="col-sm-12 col-md-12 col-lg-6">
                            <p className="comment-form-subject">
                                <label htmlFor="subject" className="mb-1">
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
                            <div className="col-sm-12 col-md-12 col-lg-6">
                            <p className="comment-form-subject">
                                <label htmlFor="subject" className="mb-1">
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
                            <div className="col-sm-12 col-md-12 col-lg-6">
                            <p className="comment-form-subject">
                                <label htmlFor="subject" className="mb-1">
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
                            <div className="col-sm-12 col-md-12 col-lg-6">
                            <p className="comment-form-subject">
                                <label htmlFor="subject" className="mb-1">
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
                            <div className="col-sm-12 col-md-12 col-lg-6">
                            <p className="comment-form-subject">
                                <label htmlFor="subject" className="mb-1">
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
                            <div className="col-sm-12 col-md-12 col-lg-6">
                            <p className="comment-form-subject">
                                <label htmlFor="subject" className="mb-1">
                                Gaurdian Mobile
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
                            <div className="col-sm-12 col-md-12 col-lg-6">
                            <p className="comment-form-subject">
                                <label htmlFor="subject" className="mb-1">
                                Signature of Gaurdian
                                </label>
                                <input 
                                // value={signatureofgaurdian}
                                onChange={(e) => setSignatureofGaurdian(e.target.files[0])}
                                placeholder="Select your Profile Image"
                                className="form-control"
                                id="signatureofgaurdian"
                                name="signatureofgaurdian"
                                type="file"
                                defaultValue=""
                                required=""
                                />
                            </p>
                            </div>
                            <div className="col-sm-12 col-md-12 col-lg-6">
                            <p className="comment-form-subject">
                                <label htmlFor="subject" className="mb-1">
                                Signature of Applicant
                                </label>
                                <input 
                                // value={signatureofapplicent}
                                onChange={(e) => setSignatureofApplicent(e.target.files[0])}
                                placeholder="Select your Profile Image"
                                className="form-control"
                                id="signatureofapplicent"
                                name="signatureofapplicent"
                                type="file"
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
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" id="exampleModalSaveButton" className="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Entrence_form
