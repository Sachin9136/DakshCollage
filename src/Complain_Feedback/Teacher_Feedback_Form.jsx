import React from 'react'

const Teacher_Feedback_Form = () => {
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
                    <label htmlFor="Designation">
                    Designation
                    </label>
                    <input
                    placeholder="Designation"
                    className="form-control"
                    id="Designation"
                    name="Designation"
                    type="text"
                    defaultValue=""
                    required=""
                    />
                </p>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-6 mb-2">
                <p className="comment-form-subject">
                    <label htmlFor="Department">
                    Department
                    </label>
                    <input
                    placeholder="Department"
                    className="form-control"
                    id="Department"
                    name="Department"
                    type="text"
                    defaultValue=""
                    required=""
                    />
                </p>
                </div>
                <div className=" border rounded-3 mb-2 py-3">
                <p>1. The Program and course Outcome are clearly stated. </p>
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
                <p>2. The curriculum provides the freedom for testing and assessment of students.</p>
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
                <p>3. The curriculum provides the freedom to adapt new techniques of teaching.</p>
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
                <p>4. The books prescribed as reference material are relevant, updated and appropriate.</p>
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
                <p>5. Demonstrations in the lab are related to the real life application.</p>
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
                <p>6. Assessment pattern is adequate to do formative and summative evaluation. </p>
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
                <p>7. The Curriculum has a good balance of theory and application.</p>
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
                <p>8. The curriculum helps in developing personality by inculcating soft skills, life skills and employability skills. </p>
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
                <p>9. Curriculum helps in updating knowledge and innovative thinking. </p>
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
                <p>10. The opinion of the faculty members is considered during curriculum revision. </p>
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

export default Teacher_Feedback_Form
