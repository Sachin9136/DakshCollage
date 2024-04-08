import React from 'react';

const Alumni_Feedback_Form = () => {
  return (
    <div>
        <div>
            <form
            method="post" className="comment-form contact__form ">
            <div
                className="alert alert-success contact__msg"
                style={{ display: "none" }}
                role="alert"
            >
                Your message was sent successfully.
            </div>
            <div className="row">
                <div className="col-sm-12 col-md-6 col-lg-6 mb-2">
                <p className="comment-form-subject">
                    <label htmlFor="subject">
                    Email
                    </label>
                    <input
                    placeholder="Type Your Email"
                    className="form-control"
                    id="email"
                    name="email"
                    type="email"
                    defaultValue=""
                    required=""
                    />
                </p>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-6 mb-2">
                <p className="comment-form-subject">
                    <label htmlFor="Name">
                    Name
                    </label>
                    <input
                    placeholder="Name"
                    className="form-control"
                    id="name"
                    name="name"
                    type="text"
                    defaultValue=""
                    required=""
                    />
                </p>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-6 mb-2">
                <p className="comment-form-subject">
                    <label htmlFor="Course">
                    Course
                    </label>
                    <input
                    placeholder="Course"
                    className="form-control"
                    id="course"
                    name="course"
                    type="text"
                    defaultValue=""
                    required=""
                    />
                </p>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-6 mb-2">
                <p className="comment-form-subject">
                    <label htmlFor="Batch">
                    Batch
                    </label>
                    <input
                    placeholder="Batch"
                    className="form-control"
                    id="batch"
                    name="batch"
                    type="text"
                    defaultValue=""
                    required=""
                    />
                </p>
                </div>
                <div className=" border rounded-3 mb-2 py-3">
                <p>Present Working </p>
                <div class="form-check form-check-inline-block mb-2">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                    <label class="form-check-label" for="inlineRadio1">Yes</label>
                </div>
                <div class="form-check form-check-inline-block mb-2">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                    <label class="form-check-label" for="inlineRadio2">No</label>
                </div>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-6 mb-2">
                <p className="comment-form-subject">
                    <label htmlFor="Post/Designation">
                    If Yes Post/Designation
                    </label>
                    <input
                    placeholder="Post / Designation"
                    className="form-control"
                    id="Post-Designation"
                    name="batch"
                    type="text"
                    defaultValue=""
                    required=""
                    />
                </p>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-6 mb-2">
                <p className="comment-form-subject">
                    <label htmlFor="Post/Designation">
                    Institute / Organization
                    </label>
                    <input
                    placeholder="Institute / Organization"
                    className="form-control"
                    id="Post-Designation"
                    name="batch"
                    type="text"
                    defaultValue=""
                    required=""
                    />
                </p>
                </div>
                <div className=" border rounded-3 mb-2 py-3">
                <p>1. The curriculum prescribed for your degree during your term in the college was adequate. </p>
                <div class="form-check form-check-inline-block mb-2">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                    <label class="form-check-label" for="inlineRadio1">Strongly Agree</label>
                </div>
                <div class="form-check form-check-inline-block mb-2">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                    <label class="form-check-label" for="inlineRadio2">Agree</label>
                </div>
                <div class="form-check form-check-inline-block mb-2">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3" />
                    <label class="form-check-label" for="inlineRadio3">Neutral</label>
                </div>
                <div class="form-check form-check-inline-block mb-2">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio4" value="option4" />
                    <label class="form-check-label" for="inlineRadio4">Disagree</label>
                </div>
                <div class="form-check form-check-inline-block mb-2">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio5" value="option5" />
                    <label class="form-check-label" for="inlineRadio5">Strongly DIsagree</label>
                </div>
                </div>
                <div className=" border rounded-3 mb-2 py-3">
                <p>2. The quality of education imparted in the college was effective for your job profile / employability.</p>
                <div class="form-check form-check-inline-block mb-2">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                    <label class="form-check-label" for="inlineRadio1">Strongly Agree</label>
                </div>
                <div class="form-check form-check-inline-block mb-2">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                    <label class="form-check-label" for="inlineRadio2">Agree</label>
                </div>
                <div class="form-check form-check-inline-block mb-2">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3" />
                    <label class="form-check-label" for="inlineRadio3">Neutral</label>
                </div>
                <div class="form-check form-check-inline-block mb-2">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio4" value="option4" />
                    <label class="form-check-label" for="inlineRadio4">Disagree</label>
                </div>
                <div class="form-check form-check-inline-block mb-2">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio5" value="option5" />
                    <label class="form-check-label" for="inlineRadio5">Strongly DIsagree</label>
                </div>
                </div>
                <div className=" border rounded-3 mb-2 py-3">
                <p>3. The curriculum brings a balance between theory and practical learning.</p>
                <div class="form-check form-check-inline-block mb-2">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                    <label class="form-check-label" for="inlineRadio1">Strongly Agree</label>
                </div>
                <div class="form-check form-check-inline-block mb-2">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                    <label class="form-check-label" for="inlineRadio2">Agree</label>
                </div>
                <div class="form-check form-check-inline-block mb-2">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3" />
                    <label class="form-check-label" for="inlineRadio3">Neutral</label>
                </div>
                <div class="form-check form-check-inline-block mb-2">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio4" value="option4" />
                    <label class="form-check-label" for="inlineRadio4">Disagree</label>
                </div>
                <div class="form-check form-check-inline-block mb-2">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio5" value="option5" />
                    <label class="form-check-label" for="inlineRadio5">Strongly DIsagree</label>
                </div>
                </div>
                <div className=" border rounded-3 mb-2 py-3">
                <p>4. The curriculum is well-structured to achieve the learning outcomes.</p>
                <div class="form-check form-check-inline-block mb-2">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                    <label class="form-check-label" for="inlineRadio1">Strongly Agree</label>
                </div>
                <div class="form-check form-check-inline-block mb-2">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                    <label class="form-check-label" for="inlineRadio2">Agree</label>
                </div>
                <div class="form-check form-check-inline-block mb-2">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3" />
                    <label class="form-check-label" for="inlineRadio3">Neutral</label>
                </div>
                <div class="form-check form-check-inline-block mb-2">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio4" value="option4" />
                    <label class="form-check-label" for="inlineRadio4">Disagree</label>
                </div>
                <div class="form-check form-check-inline-block mb-2">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio5" value="option5" />
                    <label class="form-check-label" for="inlineRadio5">Strongly DIsagree</label>
                </div>
                </div>
                <div className=" border rounded-3 mb-2 py-3">
                <p>5. The curriculum fulfills your expectation in terms of professional growth/ excellence.</p>
                <div class="form-check form-check-inline-block mb-2">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                    <label class="form-check-label" for="inlineRadio1">Strongly Agree</label>
                </div>
                <div class="form-check form-check-inline-block mb-2">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                    <label class="form-check-label" for="inlineRadio2">Agree</label>
                </div>
                <div class="form-check form-check-inline-block mb-2">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3" />
                    <label class="form-check-label" for="inlineRadio3">Neutral</label>
                </div>
                <div class="form-check form-check-inline-block mb-2">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio4" value="option4" />
                    <label class="form-check-label" for="inlineRadio4">Disagree</label>
                </div>
                <div class="form-check form-check-inline-block mb-2">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio5" value="option5" />
                    <label class="form-check-label" for="inlineRadio5">Strongly DIsagree</label>
                </div>
                </div>
                <div className=" border rounded-3 mb-2 py-3">
                <p>6. The curriculum fulfils the objectives of the program.</p>
                <div class="form-check form-check-inline-block mb-2">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                    <label class="form-check-label" for="inlineRadio1">Strongly Agree</label>
                </div>
                <div class="form-check form-check-inline-block mb-2">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                    <label class="form-check-label" for="inlineRadio2">Agree</label>
                </div>
                <div class="form-check form-check-inline-block mb-2">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3" />
                    <label class="form-check-label" for="inlineRadio3">Neutral</label>
                </div>
                <div class="form-check form-check-inline-block mb-2">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio4" value="option4" />
                    <label class="form-check-label" for="inlineRadio4">Disagree</label>
                </div>
                <div class="form-check form-check-inline-block mb-2">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio5" value="option5" />
                    <label class="form-check-label" for="inlineRadio5">Strongly DIsagree</label>
                </div>
                </div>
                <div className=" border rounded-3 mb-2 py-3">
                <p>7. The curriculum addresses human values/ social values/ professional ethics etc</p>
                <div class="form-check form-check-inline-block mb-2">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                    <label class="form-check-label" for="inlineRadio1">Strongly Agree</label>
                </div>
                <div class="form-check form-check-inline-block mb-2">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                    <label class="form-check-label" for="inlineRadio2">Agree</label>
                </div>
                <div class="form-check form-check-inline-block mb-2">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3" />
                    <label class="form-check-label" for="inlineRadio3">Neutral</label>
                </div>
                <div class="form-check form-check-inline-block mb-2">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio4" value="option4" />
                    <label class="form-check-label" for="inlineRadio4">Disagree</label>
                </div>
                <div class="form-check form-check-inline-block mb-2">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio5" value="option5" />
                    <label class="form-check-label" for="inlineRadio5">Strongly DIsagree</label>
                </div>
                </div>
                <div className=" border rounded-3 mb-2 py-3">
                <p>8. The curriculum inculcates attributes like personality development/ professional skills, etc.</p>
                <div class="form-check form-check-inline-block mb-2">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                    <label class="form-check-label" for="inlineRadio1">Strongly Agree</label>
                </div>
                <div class="form-check form-check-inline-block mb-2">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                    <label class="form-check-label" for="inlineRadio2">Agree</label>
                </div>
                <div class="form-check form-check-inline-block mb-2">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3" />
                    <label class="form-check-label" for="inlineRadio3">Neutral</label>
                </div>
                <div class="form-check form-check-inline-block mb-2">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio4" value="option4" />
                    <label class="form-check-label" for="inlineRadio4">Disagree</label>
                </div>
                <div class="form-check form-check-inline-block mb-2">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio5" value="option5" />
                    <label class="form-check-label" for="inlineRadio5">Strongly DIsagree</label>
                </div>
                </div>
                <div className=" border rounded-3 mb-2 py-3">
                <p>9. The curriculum is accessible to current trends and practices with respect to emerging needs of the society</p>
                <div class="form-check form-check-inline-block mb-2">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                    <label class="form-check-label" for="inlineRadio1">Strongly Agree</label>
                </div>
                <div class="form-check form-check-inline-block mb-2">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                    <label class="form-check-label" for="inlineRadio2">Agree</label>
                </div>
                <div class="form-check form-check-inline-block mb-2">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3" />
                    <label class="form-check-label" for="inlineRadio3">Neutral</label>
                </div>
                <div class="form-check form-check-inline-block mb-2">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio4" value="option4" />
                    <label class="form-check-label" for="inlineRadio4">Disagree</label>
                </div>
                <div class="form-check form-check-inline-block mb-2">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio5" value="option5" />
                    <label class="form-check-label" for="inlineRadio5">Strongly DIsagree</label>
                </div>
                </div>
                <div className=" border rounded-3 mb-2 py-3">
                <p>10. The curriculum facilitates overall holistic development.</p>
                <div class="form-check form-check-inline-block mb-2">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                    <label class="form-check-label" for="inlineRadio1">Strongly Agree</label>
                </div>
                <div class="form-check form-check-inline-block mb-2">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                    <label class="form-check-label" for="inlineRadio2">Agree</label>
                </div>
                <div class="form-check form-check-inline-block mb-2">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3" />
                    <label class="form-check-label" for="inlineRadio3">Neutral</label>
                </div>
                <div class="form-check form-check-inline-block mb-2">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio4" value="option4" />
                    <label class="form-check-label" for="inlineRadio4">Disagree</label>
                </div>
                <div class="form-check form-check-inline-block mb-2">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio5" value="option5" />
                    <label class="form-check-label" for="inlineRadio5">Strongly DIsagree</label>
                </div>
                </div>
                <div className="col-sm-12">
                <p className="comment-form-comment">
                    <label htmlFor="comment"></label>
                    <textarea
                    placeholder="Any Suggestions"
                    className="form-control"
                    id="suggestions"
                    name="message"
                    cols={45}
                    rows={5}
                    required=""
                    defaultValue={""}
                    />
                </p>
                </div>
            </div>
            <p className="form-submit">
                <button type="submit" className="submit btn btn-primary">
                Send Message
                </button>
            </p>
            </form>
        </div>
    </div>
  )
}

export default Alumni_Feedback_Form
