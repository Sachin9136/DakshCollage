import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { teacherFeedbackFormApi } from "../Redux-toolkit/Slice/FormSlice";

const Teacher_Feedback_Form = () => {
  const dispatch = useDispatch();
  // const [image, setImage] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [Designation, setDesignation] = useState("");
  const [Department, setDepartment] = useState("");
  const [suggestion, setSuggestion] = useState("");
  const [question1, setQuestion1] = useState("");
  const [question2, setQuestion2] = useState("");
  const [question3, setQuestion3] = useState("");
  const [question4, setQuestion4] = useState("");
  const [question5, setQuestion5] = useState("");
  const [question6, setQuestion6] = useState("");
  const [question7, setQuestion7] = useState("");
  const [question8, setQuestion8] = useState("");
  const [question9, setQuestion9] = useState("");
  const [question10, setQuestion10] = useState("");

  const handlesubmit = (e) => {
    e.preventDefault();
    // const data = new FormData()
    // data.append("name",name)
    // data.append("email",email)
    // data.append("phone",phone)
    // data.append("resaon",resaon)
    const data = {
      email: email,
      name: name,
      Designation: Designation,
      Department: Department,
      suggestion: suggestion,
      question1: question1,
      question2: question2,
      question3: question3,
      question4: question4,
      question5: question5,
      question6: question6,
      question7: question7,
      question8: question8,
      question9: question9,
      question10: question10,
      // image :image
    };
    console.log(data);
    dispatch(teacherFeedbackFormApi(data))
    setName("")
    setEmail("")
    setDepartment("")
    setDesignation("")
    setSuggestion("")
    setQuestion1("")
    setQuestion2("")
    setQuestion3("")
    setQuestion4("")
    setQuestion5("")
    setQuestion6("")
    setQuestion7("")
    setQuestion8("")
    setQuestion9("")
    setQuestion10("")
  };
  return (
    <div>
        <div>
            <form method="post" className="comment-form contact__form ">
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
                    <label htmlFor="Email">Email</label>
                    <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
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
                    <label htmlFor="Name">Name</label>
                    <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
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
                    <label htmlFor="Year">Designation</label>
                    <input
                    value={Designation}
                    onChange={(e) => setDesignation(e.target.value)}
                    placeholder="Designation"
                    className="form-control"
                    id="designation"
                    name="designation"
                    type="text"
                    defaultValue=""
                    required=""
                    />
                </p>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-6 mb-2">
                <p className="comment-form-subject">
                    <label htmlFor="Department">Department</label>
                    <input
                    value={Department}
                    onChange={(e) => setDepartment(e.target.value)}
                    placeholder="Department"
                    className="form-control"
                    id="department"
                    name="department"
                    type="text"
                    defaultValue=""
                    required=""
                    />
                </p>
                </div>
                <div className=" border rounded-3 mb-2 py-3">
                <p>1. The Program and course Outcome are clearly stated. </p>
                <div className="form-check form-check-inline-block mb-2">
                    <input value="Strongly Agree" onChange={(e) => setQuestion1(e.target.value)}className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1"/>
                    <label className="form-check-label" htmlFor="inlineRadio1">
                    Strongly Agree
                    </label>
                </div>
                <div className="form-check form-check-inline-block mb-2">
                    <input value="Agree" onChange={(e) => setQuestion1(e.target.value)}
                    className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2"/>
                    <label className="form-check-label" htmlFor="inlineRadio2">
                    Agree
                    </label>
                </div>
                <div className="form-check form-check-inline-block mb-2">
                    <input value="Neutral" onChange={(e) => setQuestion1(e.target.value)}
                    className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3"/>
                    <label className="form-check-label" htmlFor="inlineRadio3">
                    Neutral
                    </label>
                </div>
                <div className="form-check form-check-inline-block mb-2">
                    <input value="Disagree" onChange={(e) => setQuestion1(e.target.value)} className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio4" />
                    <label className="form-check-label" htmlFor="inlineRadio4">
                    Disagree
                    </label>
                </div>
                <div className="form-check form-check-inline-block mb-2">
                    <input value="Strongly Disagree" onChange={(e) => setQuestion1(e.target.value)}
                    className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio5"/>
                    <label className="form-check-label" htmlFor="inlineRadio5">
                    Strongly Disagree
                    </label>
                </div>
                </div>
                <div className=" border rounded-3 mb-2 py-3">
                <p>2. The curriculum provides the freedom for testing and assessment of students.</p>
                <div className="form-check form-check-inline-block mb-2">
                    <input value="Strongly Agree" onChange={(e) => setQuestion2(e.target.value)}className="form-check-input" type="radio" name="inlineRadioOptions2" id="inlineRadio1"/>
                    <label className="form-check-label" htmlFor="inlineRadio1">
                    Strongly Agree
                    </label>
                </div>
                <div className="form-check form-check-inline-block mb-2">
                    <input value="Agree" onChange={(e) => setQuestion2(e.target.value)}
                    className="form-check-input" type="radio" name="inlineRadioOptions2" id="inlineRadio2"/>
                    <label className="form-check-label" htmlFor="inlineRadio2">
                    Agree
                    </label>
                </div>
                <div className="form-check form-check-inline-block mb-2">
                    <input value="Neutral" onChange={(e) => setQuestion2(e.target.value)}
                    className="form-check-input" type="radio" name="inlineRadioOptions2" id="inlineRadio3"/>
                    <label className="form-check-label" htmlFor="inlineRadio3">
                    Neutral
                    </label>
                </div>
                <div className="form-check form-check-inline-block mb-2">
                    <input value="Disagree" onChange={(e) => setQuestion2(e.target.value)} className="form-check-input" type="radio" name="inlineRadioOptions2" id="inlineRadio4" />
                    <label className="form-check-label" htmlFor="inlineRadio4">
                    Disagree
                    </label>
                </div>
                <div className="form-check form-check-inline-block mb-2">
                    <input value="Strongly Disagree" onChange={(e) => setQuestion2(e.target.value)}
                    className="form-check-input" type="radio" name="inlineRadioOptions2" id="inlineRadio5"/>
                    <label className="form-check-label" htmlFor="inlineRadio5">
                    Strongly Disagree
                    </label>
                </div>
                </div>
                <div className=" border rounded-3 mb-2 py-3">
                <p>3. The curriculum provides the freedom to adapt new techniques of teaching.</p>
                <div className="form-check form-check-inline-block mb-2">
                    <input value="Strongly Agree" onChange={(e) => setQuestion3(e.target.value)}className="form-check-input" type="radio" name="inlineRadioOptions3" id="inlineRadio1"/>
                    <label className="form-check-label" htmlFor="inlineRadio1">
                    Strongly Agree
                    </label>
                </div>
                <div className="form-check form-check-inline-block mb-2">
                    <input value="Agree" onChange={(e) => setQuestion3(e.target.value)}
                    className="form-check-input" type="radio" name="inlineRadioOptions3" id="inlineRadio2"/>
                    <label className="form-check-label" htmlFor="inlineRadio2">
                    Agree
                    </label>
                </div>
                <div className="form-check form-check-inline-block mb-2">
                    <input value="Neutral" onChange={(e) => setQuestion3(e.target.value)}
                    className="form-check-input" type="radio" name="inlineRadioOptions3" id="inlineRadio3"/>
                    <label className="form-check-label" htmlFor="inlineRadio3">
                    Neutral
                    </label>
                </div>
                <div className="form-check form-check-inline-block mb-2">
                    <input value="Disagree" onChange={(e) => setQuestion3(e.target.value)} className="form-check-input" type="radio" name="inlineRadioOptions3" id="inlineRadio4" />
                    <label className="form-check-label" htmlFor="inlineRadio4">
                    Disagree
                    </label>
                </div>
                <div className="form-check form-check-inline-block mb-2">
                    <input value="Strongly Disagree" onChange={(e) => setQuestion3(e.target.value)}
                    className="form-check-input" type="radio" name="inlineRadioOptions3" id="inlineRadio5"/>
                    <label className="form-check-label" htmlFor="inlineRadio5">
                    Strongly Disagree
                    </label>
                </div>
                </div>
                <div className=" border rounded-3 mb-2 py-3">
                <p>4. The books prescribed as reference material are relevant, updated and appropriate.</p>
                <div className="form-check form-check-inline-block mb-2">
                    <input value="Strongly Agree" onChange={(e) => setQuestion4(e.target.value)}className="form-check-input" type="radio" name="inlineRadioOptions4" id="inlineRadio1"/>
                    <label className="form-check-label" htmlFor="inlineRadio1">
                    Strongly Agree
                    </label>
                </div>
                <div className="form-check form-check-inline-block mb-2">
                    <input value="Agree" onChange={(e) => setQuestion4(e.target.value)}
                    className="form-check-input" type="radio" name="inlineRadioOptions4" id="inlineRadio2"/>
                    <label className="form-check-label" htmlFor="inlineRadio2">
                    Agree
                    </label>
                </div>
                <div className="form-check form-check-inline-block mb-2">
                    <input value="Neutral" onChange={(e) => setQuestion4(e.target.value)}
                    className="form-check-input" type="radio" name="inlineRadioOptions4" id="inlineRadio3"/>
                    <label className="form-check-label" htmlFor="inlineRadio3">
                    Neutral
                    </label>
                </div>
                <div className="form-check form-check-inline-block mb-2">
                    <input value="Disagree" onChange={(e) => setQuestion4(e.target.value)} className="form-check-input" type="radio" name="inlineRadioOptions4" id="inlineRadio4" />
                    <label className="form-check-label" htmlFor="inlineRadio4">
                    Disagree
                    </label>
                </div>
                <div className="form-check form-check-inline-block mb-2">
                    <input value="Strongly Disagree" onChange={(e) => setQuestion4(e.target.value)}
                    className="form-check-input" type="radio" name="inlineRadioOption4" id="inlineRadio5"/>
                    <label className="form-check-label" htmlFor="inlineRadio5">
                    Strongly Disagree
                    </label>
                </div>
                </div>
                <div className=" border rounded-3 mb-2 py-3">
                <p>5. Demonstrations in the lab are related to the real life application.</p>
                <div className="form-check form-check-inline-block mb-2">
                    <input value="Strongly Agree" onChange={(e) => setQuestion5(e.target.value)}className="form-check-input" type="radio" name="inlineRadioOption5" id="inlineRadio1"/>
                    <label className="form-check-label" htmlFor="inlineRadio1">
                    Strongly Agree
                    </label>
                </div>
                <div className="form-check form-check-inline-block mb-2">
                    <input value="Agree" onChange={(e) => setQuestion5(e.target.value)}
                    className="form-check-input" type="radio" name="inlineRadioOption5" id="inlineRadio2"/>
                    <label className="form-check-label" htmlFor="inlineRadio2">
                    Agree
                    </label>
                </div>
                <div className="form-check form-check-inline-block mb-2">
                    <input value="Neutral" onChange={(e) => setQuestion5(e.target.value)}
                    className="form-check-input" type="radio" name="inlineRadioOption5" id="inlineRadio3"/>
                    <label className="form-check-label" htmlFor="inlineRadio3">
                    Neutral
                    </label>
                </div>
                <div className="form-check form-check-inline-block mb-2">
                    <input value="Disagree" onChange={(e) => setQuestion5(e.target.value)} className="form-check-input" type="radio" name="inlineRadioOption5" id="inlineRadio4" />
                    <label className="form-check-label" htmlFor="inlineRadio4">
                    Disagree
                    </label>
                </div>
                <div className="form-check form-check-inline-block mb-2">
                    <input value="Strongly Disagree" onChange={(e) => setQuestion5(e.target.value)}
                    className="form-check-input" type="radio" name="inlineRadioOption5" id="inlineRadio5"/>
                    <label className="form-check-label" htmlFor="inlineRadio5">
                    Strongly Disagree
                    </label>
                </div>
                </div>
                <div className=" border rounded-3 mb-2 py-3">
                <p>6. Assessment pattern is adequate to do formative and summative evaluation. </p>
                <div className="form-check form-check-inline-block mb-2">
                    <input value="Strongly Agree" onChange={(e) => setQuestion6(e.target.value)}className="form-check-input" type="radio" name="inlineRadioOption6" id="inlineRadio1"/>
                    <label className="form-check-label" htmlFor="inlineRadio1">
                    Strongly Agree
                    </label>
                </div>
                <div className="form-check form-check-inline-block mb-2">
                    <input value="Agree" onChange={(e) => setQuestion6(e.target.value)}
                    className="form-check-input" type="radio" name="inlineRadioOption6" id="inlineRadio2"/>
                    <label className="form-check-label" htmlFor="inlineRadio2">
                    Agree
                    </label>
                </div>
                <div className="form-check form-check-inline-block mb-2">
                    <input value="Neutral" onChange={(e) => setQuestion6(e.target.value)}
                    className="form-check-input" type="radio" name="inlineRadioOption6" id="inlineRadio3"/>
                    <label className="form-check-label" htmlFor="inlineRadio3">
                    Neutral
                    </label>
                </div>
                <div className="form-check form-check-inline-block mb-2">
                    <input value="Disagree" onChange={(e) => setQuestion6(e.target.value)} className="form-check-input" type="radio" name="inlineRadioOption6" id="inlineRadio4" />
                    <label className="form-check-label" htmlFor="inlineRadio4">
                    Disagree
                    </label>
                </div>
                <div className="form-check form-check-inline-block mb-2">
                    <input value="Strongly Disagree" onChange={(e) => setQuestion6(e.target.value)}
                    className="form-check-input" type="radio" name="inlineRadioOption6" id="inlineRadio5"/>
                    <label className="form-check-label" htmlFor="inlineRadio5">
                    Strongly Disagree
                    </label>
                </div>
                </div>
                <div className=" border rounded-3 mb-2 py-3">
                <p>7. The Curriculum has a good balance of theory and application.</p>
                <div class="form-check form-check-inline-block mb-2">
                    <input
                    value="Strongly Agree"
                    onChange={(e) => setQuestion7(e.target.value)}
                    class="form-check-input"
                    type="radio"
                    name="inlineRadioOptions7"
                    id="setQuestion1"
                    />
                    <label class="form-check-label" for="inlineRadio1">
                    Strongly Agree
                    </label>
                </div>
                <div class="form-check form-check-inline-block mb-2">
                    <input
                    value="Agree"
                    onChange={(e) => setQuestion7(e.target.value)}
                    class="form-check-input"
                    type="radio"
                    name="inlineRadioOptions7"
                    id="inlineRadio2"
                    />
                    <label class="form-check-label" for="inlineRadio2">
                    Agree
                    </label>
                </div>
                <div class="form-check form-check-inline-block mb-2">
                    <input
                    value="Neutral"
                    onChange={(e) => setQuestion7(e.target.value)}
                    class="form-check-input"
                    type="radio"
                    name="inlineRadioOptions7"
                    id="inlineRadio3"
                    />
                    <label class="form-check-label" for="inlineRadio3">
                    Neutral
                    </label>
                </div>
                <div class="form-check form-check-inline-block mb-2">
                    <input
                    value="Disagree"
                    onChange={(e) => setQuestion7(e.target.value)}
                    class="form-check-input"
                    type="radio"
                    name="inlineRadioOptions7"
                    id="inlineRadio4"
                    />
                    <label class="form-check-label" for="inlineRadio4">
                    Disagree
                    </label>
                </div>
                <div class="form-check form-check-inline-block mb-2">
                    <input
                    value="Strongly Disagree"
                    onChange={(e) => setQuestion7(e.target.value)}
                    class="form-check-input"
                    type="radio"
                    name="inlineRadioOptions7"
                    id="inlineRadio5"
                    />
                    <label class="form-check-label" for="inlineRadio5">
                    Strongly DIsagree
                    </label>
                </div>
                </div>
                <div className=" border rounded-3 mb-2 py-3">
                <p>8. The curriculum helps in developing personality by inculcating soft skills, life skills and employability skills. </p>
                <div class="form-check form-check-inline-block mb-2">
                    <input
                    value="Strongly Agree"
                    onChange={(e) => setQuestion8(e.target.value)}
                    class="form-check-input"
                    type="radio"
                    name="inlineRadioOptions8"
                    id="setQuestion1"
                    />
                    <label class="form-check-label" for="inlineRadio1">
                    Strongly Agree
                    </label>
                </div>
                <div class="form-check form-check-inline-block mb-2">
                    <input
                    value="Agree"
                    onChange={(e) => setQuestion8(e.target.value)}
                    class="form-check-input"
                    type="radio"
                    name="inlineRadioOptions8"
                    id="inlineRadio2"
                    />
                    <label class="form-check-label" for="inlineRadio2">
                    Agree
                    </label>
                </div>
                <div class="form-check form-check-inline-block mb-2">
                    <input
                    value="Neutral"
                    onChange={(e) => setQuestion8(e.target.value)}
                    class="form-check-input"
                    type="radio"
                    name="inlineRadioOptions8"
                    id="inlineRadio3"
                    />
                    <label class="form-check-label" for="inlineRadio3">
                    Neutral
                    </label>
                </div>
                <div class="form-check form-check-inline-block mb-2">
                    <input
                    value="Disagree"
                    onChange={(e) => setQuestion8(e.target.value)}
                    class="form-check-input"
                    type="radio"
                    name="inlineRadioOptions8"
                    id="inlineRadio4"
                    />
                    <label class="form-check-label" for="inlineRadio4">
                    Disagree
                    </label>
                </div>
                <div class="form-check form-check-inline-block mb-2">
                    <input
                    value="Strongly Disagree"
                    onChange={(e) => setQuestion8(e.target.value)}
                    class="form-check-input"
                    type="radio"
                    name="inlineRadioOptions8"
                    id="inlineRadio5"
                    />
                    <label class="form-check-label" for="inlineRadio5">
                    Strongly DIsagree
                    </label>
                </div>
                </div>
                <div className=" border rounded-3 mb-2 py-3">
                <p>9. Curriculum helps in updating knowledge and innovative thinking. </p>
                <div class="form-check form-check-inline-block mb-2">
                    <input
                    value="Strongly Agree"
                    onChange={(e) => setQuestion9(e.target.value)}
                    class="form-check-input"
                    type="radio"
                    name="inlineRadioOptions9"
                    id="setQuestion1"
                    />
                    <label class="form-check-label" for="inlineRadio1">
                    Strongly Agree
                    </label>
                </div>
                <div class="form-check form-check-inline-block mb-2">
                    <input
                    value="Agree"
                    onChange={(e) => setQuestion9(e.target.value)}
                    class="form-check-input"
                    type="radio"
                    name="inlineRadioOptions9"
                    id="inlineRadio2"
                    />
                    <label class="form-check-label" for="inlineRadio2">
                    Agree
                    </label>
                </div>
                <div class="form-check form-check-inline-block mb-2">
                    <input
                    value="Neutral"
                    onChange={(e) => setQuestion9(e.target.value)}
                    class="form-check-input"
                    type="radio"
                    name="inlineRadioOptions9"
                    id="inlineRadio3"
                    />
                    <label class="form-check-label" for="inlineRadio3">
                    Neutral
                    </label>
                </div>
                <div class="form-check form-check-inline-block mb-2">
                    <input
                    value="Disagree"
                    onChange={(e) => setQuestion9(e.target.value)}
                    class="form-check-input"
                    type="radio"
                    name="inlineRadioOptions9"
                    id="inlineRadio4"
                    />
                    <label class="form-check-label" for="inlineRadio4">
                    Disagree
                    </label>
                </div>
                <div class="form-check form-check-inline-block mb-2">
                    <input
                    value="Strongly DIsagree"
                    onChange={(e) => setQuestion9(e.target.value)}
                    class="form-check-input"
                    type="radio"
                    name="inlineRadioOptions9"
                    id="inlineRadio5"
                    />
                    <label class="form-check-label" for="inlineRadio5">
                    Strongly DIsagree
                    </label>
                </div>
                </div>
                <div className=" border rounded-3 mb-2 py-3">
                <p>10. The opinion of the faculty members is considered during curriculum revision. </p>
                <div class="form-check form-check-inline-block mb-2">
                    <input
                    value="Strongly Agree"
                    onChange={(e) => setQuestion10(e.target.value)}
                    class="form-check-input"
                    type="radio"
                    name="inlineRadioOptions10"
                    id="setQuestion1"
                    />
                    <label class="form-check-label" for="inlineRadio1">
                    Strongly Agree
                    </label>
                </div>
                <div class="form-check form-check-inline-block mb-2">
                    <input
                    value="Agree"
                    onChange={(e) => setQuestion10(e.target.value)}
                    class="form-check-input"
                    type="radio"
                    name="inlineRadioOptions10"
                    id="inlineRadio2"
                    />
                    <label class="form-check-label" for="inlineRadio2">
                    Agree
                    </label>
                </div>
                <div class="form-check form-check-inline-block mb-2">
                    <input
                    value="Neutral"
                    onChange={(e) => setQuestion10(e.target.value)}
                    class="form-check-input"
                    type="radio"
                    name="inlineRadioOptions10"
                    id="inlineRadio3"
                    />
                    <label class="form-check-label" for="inlineRadio3">
                    Neutral
                    </label>
                </div>
                <div class="form-check form-check-inline-block mb-2">
                    <input
                    value="Disagree"
                    onChange={(e) => setQuestion10(e.target.value)}
                    class="form-check-input"
                    type="radio"
                    name="inlineRadioOptions10"
                    id="inlineRadio4"
                    />
                    <label class="form-check-label" for="inlineRadio4">
                    Disagree
                    </label>
                </div>
                <div class="form-check form-check-inline-block mb-2">
                    <input
                    value="Strongly Disagree"
                    onChange={(e) => setQuestion10(e.target.value)}
                    class="form-check-input"
                    type="radio"
                    name="inlineRadioOptions10"
                    id="inlineRadio5"
                    />
                    <label class="form-check-label" for="inlineRadio5">
                    Strongly DIsagree
                    </label>
                </div>
                </div>
                <div className="col-sm-12">
                <p className="comment-form-comment">
                    <label htmlFor="comment"></label>
                    <textarea
                    value={suggestion}
                    onChange={(e) => setSuggestion(e.target.value)}
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
                <button
                onClick={handlesubmit}
                type="submit"
                className="submit btn btn-primary"
                >
                Send Message
                </button>
            </p>
            </form>
        </div>
    </div>
  )
}

export default Teacher_Feedback_Form
