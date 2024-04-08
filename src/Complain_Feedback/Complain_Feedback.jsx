import React from 'react';
import Complain_form from "../Complain_Feedback/Complain_form";
import StudentFeedbackForm from "../Complain_Feedback/StudentFeedbackForm";
import Alumni_Feedback_Form from "../Complain_Feedback/Alumni_Feedback_Form";
import Teacher_Feedback_Form from "../Complain_Feedback/Teacher_Feedback_Form";

const Complain_Feedback = () => {
  return (
    <div>
      <div className="container-fluid">
        <div className="banner-img d-flex justify-content-center align-items-center">
          <h1 className='text-white'>Complain And Feedback</h1>
        </div>
        <div className="row p-0 m-0 py-5">
          <div className="col-12">
            <div class="d-flex align-items-start border rounded p-3">
              <div className="container">
                <div className="row">
                  <div className="col-sm-12 col-md-3 col-lg-3">
                    <div class="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                      <button class="nav-link active border my-1" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true">Complain</button>
                      <button class="nav-link border my-1" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false">Student Feedback</button>
                      <button class="nav-link border my-1" id="v-pills-disabled-tab" data-bs-toggle="pill" data-bs-target="#v-pills-disabled" type="button" role="tab" aria-controls="v-pills-disabled" aria-selected="false">Alumni Feedback</button>
                      <button class="nav-link border my-1" id="v-pills-messages-tab" data-bs-toggle="pill" data-bs-target="#v-pills-messages" type="button" role="tab" aria-controls="v-pills-messages" aria-selected="false">Teacher Feedback</button>
                      <button class="nav-link border my-1" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-settings" type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false">Health Professional Feedback</button>
                      <button class="nav-link border my-1" id="v-pills-settings-tab6" data-bs-toggle="pill" data-bs-target="#v-pills-settings6" type="button" role="tab" aria-controls="v-pills-settings6" aria-selected="false">Parents Feedback</button>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-9 col-lg-9 border rounded-3 p-3 pt-2 mt-1">
                    <div class="tab-content" id="v-pills-tabContent">
                      <div class="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab" tabindex="0">
                        <div>
                          <h2 className='text-center'>Complaint Form</h2>
                        </div>
                        <Complain_form />
                      </div>
                      <div class="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab" tabindex="0">
                        <div>
                          <h2 className='text-center'>Student Feedback Form</h2>
                        </div>
                        <StudentFeedbackForm />
                      </div>
                      <div class="tab-pane fade" id="v-pills-disabled" role="tabpanel" aria-labelledby="v-pills-disabled-tab" tabindex="0">
                        <div>
                          <h2 className='text-center'>Alumni Feedback Form</h2>
                        </div>
                        <Alumni_Feedback_Form />
                      </div>
                      <div class="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab" tabindex="0">
                        <div>
                          <h2 className='text-center'>Teacher Feedback Form</h2>
                        </div>
                        <Teacher_Feedback_Form />
                      </div>
                      <div class="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab" tabindex="0">5</div>
                      <div class="tab-pane fade" id="v-pills-settings6" role="tabpanel" aria-labelledby="v-pills-settings-tab6" tabindex="0">6</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Complain_Feedback
