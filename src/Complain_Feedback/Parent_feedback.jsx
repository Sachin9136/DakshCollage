import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { parentsFeedbackFormApi } from "../Redux-toolkit/Slice/FormSlice";

const Alumni_Feedback_Form = () => {
  const dispatch = useDispatch();
  // const [image, setImage] = useState("");
  const [email, setEmail] = useState("");
  const [wardName, setWardName] = useState("");
  const [programme, setProgramme] = useState("");
  const [batch, setBatch] = useState("");
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
    //   name: name,
      wardName: wardName,
      programme: programme,
      batch: batch,
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
      question10: question10
      // image :image
    };
    console.log(data);
    dispatch(parentsFeedbackFormApi(data))
    // setName("")
    setEmail("")
    setWardName("")
    setProgramme("")
    setBatch("")
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
                <label htmlFor="WardName">WardName</label>
                <input
                  value={wardName}
                  onChange={(e) => setWardName(e.target.value)}
                  placeholder="Ward Name"
                  className="form-control"
                  id="wardName"
                  name="wardName"
                  type="text"
                  defaultValue=""
                  required=""
                />
              </p>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6 mb-2">
              <p className="comment-form-subject">
                <label htmlFor="Batch">Batch</label>
                <input
                  value={batch}
                  onChange={(e) => setBatch(e.target.value)}
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
            <div className="col-sm-12 col-md-12 col-lg-12 mb-2">
              <p className="comment-form-subject">
                <label htmlFor="Programme">Programme</label>
                <input
                  value={programme}
                  onChange={(e) => setProgramme(e.target.value)}
                  placeholder="Programme"
                  className="form-control"
                  id="programme"
                  name="programme"
                  type="text"
                  defaultValue=""
                  required=""
                />
              </p>
            </div>
            <div className=" border rounded-3 mb-2 py-3">
            <p>1. The curriculum prescribed for your degree during your term in the college was adequate. </p>
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
              <p>2. The quality of education imparted in the college was effective for your job profile / employability.</p>
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
              <p>
                3. The curriculum enables rich practical experience in the
                clinicals and labs for enhancement of knowledge and skills.
              </p>
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
              <p>4. The curriculum is well-structured to achieve the learning outcomes.</p>
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
              <p>5. The curriculum fulfills your expectation in terms of professional growth/ excellence.</p>
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
              <p>6. The curriculum fulfils the objectives of the program.</p>
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
              <p>7. The curriculum addresses human values/ social values/ professional ethics etc</p>
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
              <p>8. The curriculum inculcates attributes like personality development/ professional skills, etc.</p>
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
              <p>9. The curriculum is accessible to current trends and practices with respect to emerging needs of the society</p>
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
              <p>10. The curriculum facilitates overall holistic development.</p>
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
              className="submit btn btn-success"
            >
              Send Message
            </button>
          </p>
        </form>
        </div>
    </div>
  )
}

export default Alumni_Feedback_Form
