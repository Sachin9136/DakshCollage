import React from 'react';
import {Link} from "react-router-dom";
import Step1 from "../img/step1.png";
import Step2 from "../img/step2.png";
import Step3 from "../img/step3.png";
import Step4 from "../img/step4.png";

const Blog = () => {
  return (
    <div>
        <main role="main">
            <section className='blog-bg d-flex align-items-center justify-content-center'>
                <div className="">
                    <h1 className='text-white'>Approvals</h1>
                </div>
            </section>
            {/* Banner */}
            <section>
                <div className="block inner-pages">
                <div className="container">
                <div className="row">
                  <div className="col-md-6 col-lg-3">
                    <div className="step-wrap border rounded p-3 mb-5">
                      <div className="text-center">
                        <figure>
                          <img src={Step1} alt="" width="150px" height="150px"/>
                        </figure>
                      </div>
                      <div className="step">
                        <i>1</i>
                        <h3>
                          <a href="https://state.bihar.gov.in/health/CitizenHome.html" target="blank" >Health Department</a>
                        </h3>
                        <span>Government Of Bihar</span>
                        <p>
                          Patna, Bihar
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-3">
                    <div className="step-wrap border rounded p-3 mb-5">
                      <div className="text-center">
                        <figure>
                          <img src={Step2} alt="" width="150px" height="150px"/>
                        </figure>
                      </div>
                      <div className="step">
                        <i>2</i>
                        <h3>
                          <a href="https://bnrcpatna.com/" target="blank" >Bihar Nursing Registration Council</a>
                        </h3>
                        <span>Patna, Bihar</span>
                        
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-3">
                    <div className="step-wrap border rounded p-3 mb-5">
                      <div className="text-center">
                        <figure>
                          <img src={Step3} alt="" width="150px" height="150px" />
                        </figure>
                      </div>
                      <div className="step">
                        <i>3</i>
                        <h3>
                          <a href="https://buhs.ac.in/WP/BHUEDU/Default.aspx" target="blank" >Bihar University of Health Science</a>
                        </h3>
                        <span>Patna, Bihar</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-3">
                    <div className="step-wrap border rounded p-3 mb-5">
                      <div className="text-center">
                        <figure>
                          <img src={Step4} alt="" width="150px" height="150px" />
                        </figure>
                      </div>
                      <div className="step">
                        <i>3</i>
                        <h3>
                          <a href="https://www.indiannursingcouncil.org/" target="blank" >Indian Nursing Council Delhi</a>
                        </h3>
                        <span>New Delhi, Delhi</span>
                      </div>
                    </div>
                  </div>
                </div>
                </div>
                </div>
            </section>
        </main>
    </div>
  )
}

export default Blog
