import React from 'react';
import "./addmission-portal.css";
import logo_img from "../img/Logo-Daksh-School-1.png";
const token = localStorage.getItem("accessToken")

const Addmission_Portal = () => {

    const logout = ()=>{
        localStorage.removeItem("accessToken")
   }

  return (
    <div className='bg-image-addmission-portal py-5'>
        <div className="container">
        <div className="row pb-4">
                <div className="col-12 d-flex justify-content-center">
                    <img className='rounded-4' src={logo_img} alt="" width={150}/>
                </div>
            </div>
        </div>
        <div className="container py-5 bg-white border rounded">
            <div className="row">
                <div className="col-sm-12 col-md-12 col-lg-12 ">
                <ul className="nav nav-pills mb-3 d-flex justify-content-evenly " id="pills-tab" role="tablist">
                <li className="nav-item" role="presentation">
                        <button
                            className="nav-link active border mb-2"
                            id="pills-home1-tab"
                            data-bs-toggle="pill"
                            data-bs-target="#pills-home1"
                            type="button"
                            role="tab"
                            aria-controls="pills-home1"
                            aria-selected="true"
                        >
                            ANM PROSPECTUS
                        </button>
                </li>
                <li className="nav-item" role="presentation">
                        <button
                            className="nav-link border mb-2"
                            id="pills-home-tab"
                            data-bs-toggle="pill"
                            data-bs-target="#pills-home"
                            type="button"
                            role="tab"
                            aria-controls="pills-home"
                            aria-selected="true"
                        >
                            GNM PROSPECTUS
                        </button>
                </li>
                <li className="nav-item" role="presentation">
                <button
                    className="nav-link border mb-2"
                    id="pills-profile-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-profile"
                    type="button"
                    role="tab"
                    aria-controls="pills-profile"
                    aria-selected="false"
                >
                    BSC NURSING (H) PROSPECTUS 
                </button>
                </li>
                <li className="nav-item" role="presentation">
                <button
                    className="nav-link border mb-2"
                    id="pills-contact-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-contact"
                    type="button"
                    role="tab"
                    aria-controls="pills-contact"
                    aria-selected="false"
                >
                    MSC PROSPECTUS
                </button>
                </li>
                <li className="nav-item" role="presentation">
                <button
                    className="nav-link border mb-2"
                    id="pills-disabled-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-disabled"
                    type="button"
                    role="tab"
                    aria-controls="pills-disabled"
                    aria-selected="false"
                    disabled=""
                >
                    BSC NURSING (POST BASIC) PROSPECTUS
                </button>
                </li>
            </ul>
            <div className="tab-content" id="pills-tabContent">
                <div
                className="tab-pane fade show active"
                id="pills-home1"
                role="tabpanel"
                aria-labelledby="pills-home1-tab"
                tabIndex={0}>
                    <div>
                        <div className='text-center py-5'>
                            <a href="https://res.cloudinary.com/dazqqmrku/image/upload/v1713037950/Pdf/ufwwdqe07qzgw8aldvbs.pdf" target='_blank'>
                                <button className="btn btn-success border">
                                    Download ANM PROSPECTUS
                                </button>
                            </a>
                        </div>
                        <h5 className='text-center'>Auxiliary Nurse Midwife (ANM) Overview</h5>
                        <p className='px-2'>An Auxiliary Nurse Midwife (ANM) plays a vital role in the healthcare system, particularly in rural and underserved areas. They are trained to provide a wide range of maternal and child health services, acting as a bridge between the community and the healthcare system. ANMs are essential in promoting health awareness, delivering basic healthcare services, and assisting in childbirth.</p>
                    </div>
                </div>
                <div
                className="tab-pane fade"
                id="pills-home"
                role="tabpanel"
                aria-labelledby="pills-home-tab"
                tabIndex={0}>
                    <div>
                        <div className='text-center py-5'>
                            <a href="https://res.cloudinary.com/dazqqmrku/image/upload/v1713037950/Pdf/ufwwdqe07qzgw8aldvbs.pdf" target='_blank'>
                                <button className="btn btn-success border">
                                    Download GNM PROSPECTUS
                                </button>
                            </a>
                        </div>
                        <h5 className='text-center'>General Nursing and Midwifery (GNM) Overview</h5>
                        <p className='px-2'>General Nursing and Midwifery (GNM) is a three-and-a-half-year diploma program focused on equipping students with knowledge and skills in nursing and midwifery. The program prepares students to work in various healthcare settings, including hospitals, clinics, and community health centers. This content provides an overview of the GNM curriculum, its importance, core subjects, career opportunities, and the ethical considerations in nursing practice.</p>
                    </div>
                </div>
                <div
                className="tab-pane fade"
                id="pills-profile"
                role="tabpanel"
                aria-labelledby="pills-profile-tab"
                tabIndex={0}
                >
                    <div>
                        <div className='text-center py-5'>
                            <a href="https://res.cloudinary.com/dazqqmrku/image/upload/v1713037950/Pdf/ufwwdqe07qzgw8aldvbs.pdf" target='_blank'>
                                <button className="btn btn-success border">
                                    Download BSC NURSING (H) PROSPECTUS 
                                </button>
                            </a>
                        </div>
                        <h5 className='text-center'>B.Sc. Nursing Overview</h5>
                        <p className='px-2'>The Bachelor of Science in Nursing (B.Sc. Nursing) is a four-year undergraduate program that prepares students to become professional nurses equipped with the knowledge and skills required to provide comprehensive care in various healthcare settings. The program blends theoretical knowledge with practical training, focusing on holistic patient care, community health, and advanced nursing practices. This content provides an overview of the B.Sc. Nursing curriculum, its importance, core subjects, career opportunities, and the ethical considerations in nursing practice.</p>
                    </div>
                </div>
                <div
                className="tab-pane fade"
                id="pills-contact"
                role="tabpanel"
                aria-labelledby="pills-contact-tab"
                tabIndex={0}
                >
                    <div>
                        <div className='text-center py-5'>
                            <a href="https://res.cloudinary.com/dazqqmrku/image/upload/v1713037950/Pdf/ufwwdqe07qzgw8aldvbs.pdf" target='_blank'>
                                <button className="btn btn-success border">
                                    Download MSC PROSPECTUS
                                </button>
                            </a>
                        </div>
                        <h5 className='text-center'>M.Sc. Nursing  Overview</h5>
                        <p className='px-2'>The Master of Science in Nursing (M.Sc. Nursing) is a postgraduate program designed to prepare registered nurses for advanced practice roles in healthcare. This two-year program offers specialized training in various nursing fields, emphasizing advanced clinical skills, research, leadership, and education. This content provides an overview of the M.Sc. Nursing curriculum, its importance, core subjects, career opportunities, and the ethical considerations in advanced nursing practice.</p>
                    </div>
                </div>
                <div
                className="tab-pane fade"
                id="pills-disabled"
                role="tabpanel"
                aria-labelledby="pills-disabled-tab"
                tabIndex={0}
                >
                    <div>
                        <div className='text-center py-5'>
                            <a href="https://res.cloudinary.com/dazqqmrku/image/upload/v1713037950/Pdf/ufwwdqe07qzgw8aldvbs.pdf" target='_blank'>
                                <button className="btn btn-success border">
                                    Download BSC NURSING (POST BASIC) PROSPECTUS
                                </button>
                            </a>
                        </div>
                        <h5 className='text-center'>Post Basic B.Sc. Nursing Overview</h5>
                        <p className='px-2'>The Post Basic Bachelor of Science in Nursing (Post Basic B.Sc. Nursing) is a two-year undergraduate program designed for registered nurses who have completed a General Nursing and Midwifery (GNM) diploma. This program aims to enhance the professional knowledge and skills of nurses, preparing them for advanced roles in healthcare settings. This content provides an overview of the Post Basic B.Sc. Nursing curriculum, its importance, core subjects, career opportunities, and the ethical considerations in advanced nursing practice.</p>
                    </div>
                </div>
            </div>
                </div>
                {/* <div className='col-sm-12 col-md-4 col-lg-5'>
                    <Login />
                </div> */}
            </div>
        </div>
    </div>
  )
}

export default Addmission_Portal
