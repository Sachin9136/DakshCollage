import React, { useState } from 'react';
import { useDispatch} from "react-redux";
import { studentFeedbackFormApi } from '../Redux-toolkit/Slice/FormSlice';

const StudentFeedbackForm = () => {

    const dispatch = useDispatch();
    // const [image, setImage] = useState("");
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [year, setYear] = useState("");
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
    const [question11, setQuestion11] = useState("");
    const [question12, setQuestion12] = useState("");
    const [question13, setQuestion13] = useState("");
    const [question14, setQuestion14] = useState("");
    const [question15, setQuestion15] = useState("");
    const [question16, setQuestion16] = useState("");
    const [question17, setQuestion17] = useState("");
    const [question18, setQuestion18] = useState("");
    const [question19, setQuestion19] = useState("");
    const [question20, setQuestion20] = useState("");
    
    const handlesubmit = (e) => {
        e.preventDefault()
        // const data = new FormData()
        // data.append("name",name)
        // data.append("email",email)
        // data.append("phone",phone)
        // data.append("resaon",resaon)
        const data = {
            email: email,
            name: name,
            year: year,
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
            question10:  question10,
            question11:  question11,
            question12: question12,
            question13: question13,
            question14: question14,
            question15:  question15,
            question16:  question16,
            question17: question17,
            question18: question18,
            question19: question19,
            question20: question20
            // image :image
        }
        // console.log(data)
        dispatch(studentFeedbackFormApi(data))
        setName("")
        setEmail("")
        setYear("")
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
        setQuestion11("")
        setQuestion12("")
        setQuestion13("")
        setQuestion14("")
        setQuestion15("")
        setQuestion16("")
        setQuestion17("")
        setQuestion18("")
        setQuestion19("")
        setQuestion20("")
    }

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
                    <label htmlFor="Email">
                    Email
                    </label>
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
                    <label htmlFor="Name">
                    Name
                    </label>
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
                    <label htmlFor="Year">
                    Year
                    </label>
                    <input
                    value={year}
                    onChange={(e) => setYear(e.target.value)}
                    placeholder="Year"
                    className="form-control"
                    id="year"
                    name="year"
                    type="number"
                    defaultValue=""
                    required=""
                    />
                </p>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-6 mb-2">
                <p className="comment-form-subject">
                    <label htmlFor="Programme">
                    Programme
                    </label>
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
                <div className="col-sm-12 col-md-6 col-lg-6 mb-2">
                <p className="comment-form-subject">
                    <label htmlFor="Batch">
                    Batch
                    </label>
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
                <div className=" border rounded-3 mb-2 py-3">
                    <p>1. The curriculum is up-to-date, need based and application oriented. </p>
                    <div class="form-check form-check-inline-block mb-2">
                        <input value={question1} onChange={(e) => setQuestion1(e.target.value)} class="form-check-input" type="radio" name="inlineRadioOptions" id="setQuestion1"/>
                        <label class="form-check-label" for="inlineRadio1">Strongly Agree</label>
                    </div>
                    <div class="form-check form-check-inline-block mb-2">
                        <input value={question1} onChange={(e) => setQuestion1(e.target.value)} class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" />
                        <label class="form-check-label" for="inlineRadio2">Agree</label>
                    </div>
                    <div class="form-check form-check-inline-block mb-2">
                        <input value={question1} onChange={(e) => setQuestion1(e.target.value)} class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3"/>
                        <label class="form-check-label" for="inlineRadio3">Neutral</label>
                    </div>
                    <div class="form-check form-check-inline-block mb-2">
                        <input value={question1} onChange={(e) => setQuestion1(e.target.value)} class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio4" />
                        <label class="form-check-label" for="inlineRadio4">Disagree</label>
                    </div>
                    <div class="form-check form-check-inline-block mb-2">
                        <input value={question1} onChange={(e) => setQuestion1(e.target.value)} class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio5"/>
                        <label class="form-check-label" for="inlineRadio5">Strongly DIsagree</label>
                    </div>
                </div>
                <div className=" border rounded-3 mb-2 py-3">
                <p>2. The curriculum provide scope for acquiring strong knowledge and intellectual growth. </p>
                <div class="form-check form-check-inline-block mb-2">
                        <input value={question2} onChange={(e) => setQuestion2(e.target.value)} class="form-check-input" type="radio" name="inlineRadioOptions" id="setQuestion1"/>
                        <label class="form-check-label" for="inlineRadio1">Strongly Agree</label>
                    </div>
                    <div class="form-check form-check-inline-block mb-2">
                        <input value={question2} onChange={(e) => setQuestion2(e.target.value)} class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" />
                        <label class="form-check-label" for="inlineRadio2">Agree</label>
                    </div>
                    <div class="form-check form-check-inline-block mb-2">
                        <input value={question2} onChange={(e) => setQuestion2(e.target.value)} class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3"/>
                        <label class="form-check-label" for="inlineRadio3">Neutral</label>
                    </div>
                    <div class="form-check form-check-inline-block mb-2">
                        <input value={question2} onChange={(e) => setQuestion2(e.target.value)} class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio4" />
                        <label class="form-check-label" for="inlineRadio4">Disagree</label>
                    </div>
                    <div class="form-check form-check-inline-block mb-2">
                        <input value={question2} onChange={(e) => setQuestion2(e.target.value)} class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio5"/>
                        <label class="form-check-label" for="inlineRadio5">Strongly DIsagree</label>
                    </div>
                </div>
                <div className=" border rounded-3 mb-2 py-3">
                <p>3. The curriculum enables rich practical experience in the clinicals and labs for enhancement of knowledge and skills.</p>
                <div class="form-check form-check-inline-block mb-2">
                        <input value={question3} onChange={(e) => setQuestion3(e.target.value)} class="form-check-input" type="radio" name="inlineRadioOptions" id="setQuestion1"/>
                        <label class="form-check-label" for="inlineRadio1">Strongly Agree</label>
                    </div>
                    <div class="form-check form-check-inline-block mb-2">
                        <input value={question3} onChange={(e) => setQuestion3(e.target.value)} class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" />
                        <label class="form-check-label" for="inlineRadio2">Agree</label>
                    </div>
                    <div class="form-check form-check-inline-block mb-2">
                        <input value={question3} onChange={(e) => setQuestion3(e.target.value)} class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3"/>
                        <label class="form-check-label" for="inlineRadio3">Neutral</label>
                    </div>
                    <div class="form-check form-check-inline-block mb-2">
                        <input value={question3} onChange={(e) => setQuestion3(e.target.value)} class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio4" />
                        <label class="form-check-label" for="inlineRadio4">Disagree</label>
                    </div>
                    <div class="form-check form-check-inline-block mb-2">
                        <input value={question3} onChange={(e) => setQuestion3(e.target.value)} class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio5"/>
                        <label class="form-check-label" for="inlineRadio5">Strongly DIsagree</label>
                    </div>
                </div>
                <div className=" border rounded-3 mb-2 py-3">
                    <p>4. The curriculum facilitates development of analytical and problem-solving skill.</p>
                    <div class="form-check form-check-inline-block mb-2">
                        <input value={question4} onChange={(e) => setQuestion4(e.target.value)} class="form-check-input" type="radio" name="inlineRadioOptions" id="setQuestion1"/>
                        <label class="form-check-label" for="inlineRadio1">Strongly Agree</label>
                    </div>
                    <div class="form-check form-check-inline-block mb-2">
                        <input value={question4} onChange={(e) => setQuestion4(e.target.value)} class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" />
                        <label class="form-check-label" for="inlineRadio2">Agree</label>
                    </div>
                    <div class="form-check form-check-inline-block mb-2">
                        <input value={question4} onChange={(e) => setQuestion4(e.target.value)} class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3"/>
                        <label class="form-check-label" for="inlineRadio3">Neutral</label>
                    </div>
                    <div class="form-check form-check-inline-block mb-2">
                        <input value={question4} onChange={(e) => setQuestion4(e.target.value)} class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio4" />
                        <label class="form-check-label" for="inlineRadio4">Disagree</label>
                    </div>
                    <div class="form-check form-check-inline-block mb-2">
                        <input value={question4} onChange={(e) => setQuestion4(e.target.value)} class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio5"/>
                        <label class="form-check-label" for="inlineRadio5">Strongly DIsagree</label>
                    </div>
                </div>
                <div className=" border rounded-3 mb-2 py-3">
                    <p>5. The curriculum inculcates soft skills including communication skill.</p>
                    <div class="form-check form-check-inline-block mb-2">
                        <input value={question5} onChange={(e) => setQuestion5(e.target.value)} class="form-check-input" type="radio" name="inlineRadioOptions" id="setQuestion1"/>
                        <label class="form-check-label" for="inlineRadio1">Strongly Agree</label>
                    </div>
                    <div class="form-check form-check-inline-block mb-2">
                        <input value={question5} onChange={(e) => setQuestion5(e.target.value)} class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" />
                        <label class="form-check-label" for="inlineRadio2">Agree</label>
                    </div>
                    <div class="form-check form-check-inline-block mb-2">
                        <input value={question5} onChange={(e) => setQuestion5(e.target.value)} class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3"/>
                        <label class="form-check-label" for="inlineRadio3">Neutral</label>
                    </div>
                    <div class="form-check form-check-inline-block mb-2">
                        <input value={question5} onChange={(e) => setQuestion5(e.target.value)} class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio4" />
                        <label class="form-check-label" for="inlineRadio4">Disagree</label>
                    </div>
                    <div class="form-check form-check-inline-block mb-2">
                        <input value={question5} onChange={(e) => setQuestion5(e.target.value)} class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio5"/>
                        <label class="form-check-label" for="inlineRadio5">Strongly DIsagree</label>
                    </div>
                </div>
                <div className=" border rounded-3 mb-2 py-3">
                <p>6. Assignment/ Projects given are relevant, useful and help in improving the understanding and application of the subject matter throughout the curriculum.</p>
                <div class="form-check form-check-inline-block mb-2">
                        <input value={question6} onChange={(e) => setQuestion6(e.target.value)} class="form-check-input" type="radio" name="inlineRadioOptions" id="setQuestion1"/>
                        <label class="form-check-label" for="inlineRadio1">Strongly Agree</label>
                    </div>
                    <div class="form-check form-check-inline-block mb-2">
                        <input value={question6} onChange={(e) => setQuestion6(e.target.value)} class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" />
                        <label class="form-check-label" for="inlineRadio2">Agree</label>
                    </div>
                    <div class="form-check form-check-inline-block mb-2">
                        <input value={question6} onChange={(e) => setQuestion6(e.target.value)} class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3"/>
                        <label class="form-check-label" for="inlineRadio3">Neutral</label>
                    </div>
                    <div class="form-check form-check-inline-block mb-2">
                        <input value={question6} onChange={(e) => setQuestion6(e.target.value)} class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio4" />
                        <label class="form-check-label" for="inlineRadio4">Disagree</label>
                    </div>
                    <div class="form-check form-check-inline-block mb-2">
                        <input value={question6} onChange={(e) => setQuestion6(e.target.value)} class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio5"/>
                        <label class="form-check-label" for="inlineRadio5">Strongly DIsagree</label>
                    </div>
                </div>
                <div className=" border rounded-3 mb-2 py-3">
                <p>7. Curriculum is enriched with diverse teaching learning methods like lecture method, panel discussion, class discussion, etc. for good learning outcomes.</p>
                <div class="form-check form-check-inline-block mb-2">
                        <input value={question7} onChange={(e) => setQuestion7(e.target.value)} class="form-check-input" type="radio" name="inlineRadioOptions" id="setQuestion1"/>
                        <label class="form-check-label" for="inlineRadio1">Strongly Agree</label>
                    </div>
                    <div class="form-check form-check-inline-block mb-2">
                        <input value={question7} onChange={(e) => setQuestion7(e.target.value)} class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" />
                        <label class="form-check-label" for="inlineRadio2">Agree</label>
                    </div>
                    <div class="form-check form-check-inline-block mb-2">
                        <input value={question7} onChange={(e) => setQuestion7(e.target.value)} class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3"/>
                        <label class="form-check-label" for="inlineRadio3">Neutral</label>
                    </div>
                    <div class="form-check form-check-inline-block mb-2">
                        <input value={question7} onChange={(e) => setQuestion7(e.target.value)} class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio4" />
                        <label class="form-check-label" for="inlineRadio4">Disagree</label>
                    </div>
                    <div class="form-check form-check-inline-block mb-2">
                        <input value={question7} onChange={(e) => setQuestion7(e.target.value)} class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio5"/>
                        <label class="form-check-label" for="inlineRadio5">Strongly DIsagree</label>
                    </div>
                </div>
                <div className=" border rounded-3 mb-2 py-3">
                <p>8. Participation in learning strategies like seminar, workshop, conference and research project, etc promotes sense of responsibility.</p>
                <div class="form-check form-check-inline-block mb-2">
                        <input value={question8} onChange={(e) => setQuestion8(e.target.value)} class="form-check-input" type="radio" name="inlineRadioOptions" id="setQuestion1"/>
                        <label class="form-check-label" for="inlineRadio1">Strongly Agree</label>
                    </div>
                    <div class="form-check form-check-inline-block mb-2">
                        <input value={question8} onChange={(e) => setQuestion8(e.target.value)} class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" />
                        <label class="form-check-label" for="inlineRadio2">Agree</label>
                    </div>
                    <div class="form-check form-check-inline-block mb-2">
                        <input value={question8} onChange={(e) => setQuestion8(e.target.value)} class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3"/>
                        <label class="form-check-label" for="inlineRadio3">Neutral</label>
                    </div>
                    <div class="form-check form-check-inline-block mb-2">
                        <input value={question8} onChange={(e) => setQuestion8(e.target.value)} class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio4" />
                        <label class="form-check-label" for="inlineRadio4">Disagree</label>
                    </div>
                    <div class="form-check form-check-inline-block mb-2">
                        <input value={question8} onChange={(e) => setQuestion8(e.target.value)} class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio5"/>
                        <label class="form-check-label" for="inlineRadio5">Strongly DIsagree</label>
                    </div>
                </div>
                <div className=" border rounded-3 mb-2 py-3">
                <p>9. The curriculum provides opportunity for co- curricular activities.</p>
                <div class="form-check form-check-inline-block mb-2">
                        <input value={question9} onChange={(e) => setQuestion9(e.target.value)} class="form-check-input" type="radio" name="inlineRadioOptions" id="setQuestion1"/>
                        <label class="form-check-label" for="inlineRadio1">Strongly Agree</label>
                    </div>
                    <div class="form-check form-check-inline-block mb-2">
                        <input value={question9} onChange={(e) => setQuestion9(e.target.value)} class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" />
                        <label class="form-check-label" for="inlineRadio2">Agree</label>
                    </div>
                    <div class="form-check form-check-inline-block mb-2">
                        <input value={question9} onChange={(e) => setQuestion9(e.target.value)} class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3"/>
                        <label class="form-check-label" for="inlineRadio3">Neutral</label>
                    </div>
                    <div class="form-check form-check-inline-block mb-2">
                        <input value={question9} onChange={(e) => setQuestion9(e.target.value)} class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio4" />
                        <label class="form-check-label" for="inlineRadio4">Disagree</label>
                    </div>
                    <div class="form-check form-check-inline-block mb-2">
                        <input value={question9} onChange={(e) => setQuestion9(e.target.value)} class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio5"/>
                        <label class="form-check-label" for="inlineRadio5">Strongly DIsagree</label>
                    </div>
                </div>
                <div className=" border rounded-3 mb-2 py-3">
                <p>10. The curriculum is effective in developing human/social values and professional ethics required for organization.</p>
                <div class="form-check form-check-inline-block mb-2">
                        <input value={question10} onChange={(e) => setQuestion10(e.target.value)} class="form-check-input" type="radio" name="inlineRadioOptions" id="setQuestion1"/>
                        <label class="form-check-label" for="inlineRadio1">Strongly Agree</label>
                    </div>
                    <div class="form-check form-check-inline-block mb-2">
                        <input value={question10} onChange={(e) => setQuestion10(e.target.value)} class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" />
                        <label class="form-check-label" for="inlineRadio2">Agree</label>
                    </div>
                    <div class="form-check form-check-inline-block mb-2">
                        <input value={question10} onChange={(e) => setQuestion10(e.target.value)} class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3"/>
                        <label class="form-check-label" for="inlineRadio3">Neutral</label>
                    </div>
                    <div class="form-check form-check-inline-block mb-2">
                        <input value={question10} onChange={(e) => setQuestion10(e.target.value)} class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio4" />
                        <label class="form-check-label" for="inlineRadio4">Disagree</label>
                    </div>
                    <div class="form-check form-check-inline-block mb-2">
                        <input value={question10} onChange={(e) => setQuestion10(e.target.value)} class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio5"/>
                        <label class="form-check-label" for="inlineRadio5">Strongly DIsagree</label>
                    </div>
                </div>
                <div className=" border rounded-3 mb-2 py-3">
                <p>11. The syllabus and learning material of curriculum are adequate in terms of quality.</p>
                <div class="form-check form-check-inline-block mb-2">
                        <input value={question11} onChange={(e) => setQuestion11(e.target.value)} class="form-check-input" type="radio" name="inlineRadioOptions" id="setQuestion1"/>
                        <label class="form-check-label" for="inlineRadio1">Strongly Agree</label>
                    </div>
                    <div class="form-check form-check-inline-block mb-2">
                        <input value={question11} onChange={(e) => setQuestion11(e.target.value)} class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" />
                        <label class="form-check-label" for="inlineRadio2">Agree</label>
                    </div>
                    <div class="form-check form-check-inline-block mb-2">
                        <input value={question11} onChange={(e) => setQuestion11(e.target.value)} class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3"/>
                        <label class="form-check-label" for="inlineRadio3">Neutral</label>
                    </div>
                    <div class="form-check form-check-inline-block mb-2">
                        <input value={question11} onChange={(e) => setQuestion11(e.target.value)} class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio4" />
                        <label class="form-check-label" for="inlineRadio4">Disagree</label>
                    </div>
                    <div class="form-check form-check-inline-block mb-2">
                        <input value={question11} onChange={(e) => setQuestion11(e.target.value)} class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio5"/>
                        <label class="form-check-label" for="inlineRadio5">Strongly DIsagree</label>
                    </div>
                </div>
                <div className=" border rounded-3 mb-2 py-3">
                <p>12. Library is well equipped in terms of computerized infrastructure and electronic standard software.</p>
                <div class="form-check form-check-inline-block mb-2">
                        <input value={question12} onChange={(e) => setQuestion12(e.target.value)} class="form-check-input" type="radio" name="inlineRadioOptions" id="setQuestion1"/>
                        <label class="form-check-label" for="inlineRadio1">Strongly Agree</label>
                    </div>
                    <div class="form-check form-check-inline-block mb-2">
                        <input value={question12} onChange={(e) => setQuestion12(e.target.value)} class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" />
                        <label class="form-check-label" for="inlineRadio2">Agree</label>
                    </div>
                    <div class="form-check form-check-inline-block mb-2">
                        <input value={question12} onChange={(e) => setQuestion12(e.target.value)} class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3"/>
                        <label class="form-check-label" for="inlineRadio3">Neutral</label>
                    </div>
                    <div class="form-check form-check-inline-block mb-2">
                        <input value={question12} onChange={(e) => setQuestion12(e.target.value)} class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio4" />
                        <label class="form-check-label" for="inlineRadio4">Disagree</label>
                    </div>
                    <div class="form-check form-check-inline-block mb-2">
                        <input value={question12} onChange={(e) => setQuestion12(e.target.value)} class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio5"/>
                        <label class="form-check-label" for="inlineRadio5">Strongly DIsagree</label>
                    </div>
                </div>
                <div className=" border rounded-3 mb-2 py-3">
                <p>13. Textbooks and reference material recommended in the syllabus are relevant and updated.</p>
                <div class="form-check form-check-inline-block mb-2">
                        <input value={question13} onChange={(e) => setQuestion13(e.target.value)} class="form-check-input" type="radio" name="inlineRadioOptions" id="setQuestion1"/>
                        <label class="form-check-label" for="inlineRadio1">Strongly Agree</label>
                    </div>
                    <div class="form-check form-check-inline-block mb-2">
                        <input value={question13} onChange={(e) => setQuestion13(e.target.value)} class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" />
                        <label class="form-check-label" for="inlineRadio2">Agree</label>
                    </div>
                    <div class="form-check form-check-inline-block mb-2">
                        <input value={question13} onChange={(e) => setQuestion13(e.target.value)} class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3"/>
                        <label class="form-check-label" for="inlineRadio3">Neutral</label>
                    </div>
                    <div class="form-check form-check-inline-block mb-2">
                        <input value={question13} onChange={(e) => setQuestion13(e.target.value)} class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio4" />
                        <label class="form-check-label" for="inlineRadio4">Disagree</label>
                    </div>
                    <div class="form-check form-check-inline-block mb-2">
                        <input value={question13} onChange={(e) => setQuestion13(e.target.value)} class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio5"/>
                        <label class="form-check-label" for="inlineRadio5">Strongly DIsagree</label>
                    </div>
                </div>
                <div className=" border rounded-3 mb-2 py-3">
                <p>14. Teaching learning process enables clear understanding of the course content.</p>
                <div class="form-check form-check-inline-block mb-2">
                        <input value={question14} onChange={(e) => setQuestion14(e.target.value)} class="form-check-input" type="radio" name="inlineRadioOptions" id="setQuestion1"/>
                        <label class="form-check-label" for="inlineRadio1">Strongly Agree</label>
                    </div>
                    <div class="form-check form-check-inline-block mb-2">
                        <input value={question14} onChange={(e) => setQuestion14(e.target.value)} class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" />
                        <label class="form-check-label" for="inlineRadio2">Agree</label>
                    </div>
                    <div class="form-check form-check-inline-block mb-2">
                        <input value={question14} onChange={(e) => setQuestion14(e.target.value)} class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3"/>
                        <label class="form-check-label" for="inlineRadio3">Neutral</label>
                    </div>
                    <div class="form-check form-check-inline-block mb-2">
                        <input value={question14} onChange={(e) => setQuestion14(e.target.value)} class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio4" />
                        <label class="form-check-label" for="inlineRadio4">Disagree</label>
                    </div>
                    <div class="form-check form-check-inline-block mb-2">
                        <input value={question14} onChange={(e) => setQuestion14(e.target.value)} class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio5"/>
                        <label class="form-check-label" for="inlineRadio5">Strongly DIsagree</label>
                    </div>
                </div>
                <div className=" border rounded-3 mb-2 py-3">
                <p>15. Methods and criteria of assessment and grading are clearly communicated before the commencement of the term/ semester.</p>
                <div class="form-check form-check-inline-block mb-2">
                        <input value={question15} onChange={(e) => setQuestion15(e.target.value)} class="form-check-input" type="radio" name="inlineRadioOptions" id="setQuestion1"/>
                        <label class="form-check-label" for="inlineRadio1">Strongly Agree</label>
                    </div>
                    <div class="form-check form-check-inline-block mb-2">
                        <input value={question15} onChange={(e) => setQuestion15(e.target.value)} class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" />
                        <label class="form-check-label" for="inlineRadio2">Agree</label>
                    </div>
                    <div class="form-check form-check-inline-block mb-2">
                        <input value={question15} onChange={(e) => setQuestion15(e.target.value)} class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3"/>
                        <label class="form-check-label" for="inlineRadio3">Neutral</label>
                    </div>
                    <div class="form-check form-check-inline-block mb-2">
                        <input value={question15} onChange={(e) => setQuestion15(e.target.value)} class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio4" />
                        <label class="form-check-label" for="inlineRadio4">Disagree</label>
                    </div>
                    <div class="form-check form-check-inline-block mb-2">
                        <input value={question15} onChange={(e) => setQuestion15(e.target.value)} class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio5"/>
                        <label class="form-check-label" for="inlineRadio5">Strongly DIsagree</label>
                    </div>
                </div>
                <div className=" border rounded-3 mb-2 py-3">
                <p>16. Examinations are conducted in a fair, disciplined and organized manner.</p>
                <div class="form-check form-check-inline-block mb-2">
                        <input value={question16} onChange={(e) => setQuestion16(e.target.value)} class="form-check-input" type="radio" name="inlineRadioOptions" id="setQuestion1"/>
                        <label class="form-check-label" for="inlineRadio1">Strongly Agree</label>
                    </div>
                    <div class="form-check form-check-inline-block mb-2">
                        <input value={question16} onChange={(e) => setQuestion16(e.target.value)} class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" />
                        <label class="form-check-label" for="inlineRadio2">Agree</label>
                    </div>
                    <div class="form-check form-check-inline-block mb-2">
                        <input value={question16} onChange={(e) => setQuestion16(e.target.value)} class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3"/>
                        <label class="form-check-label" for="inlineRadio3">Neutral</label>
                    </div>
                    <div class="form-check form-check-inline-block mb-2">
                        <input value={question16} onChange={(e) => setQuestion16(e.target.value)} class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio4" />
                        <label class="form-check-label" for="inlineRadio4">Disagree</label>
                    </div>
                    <div class="form-check form-check-inline-block mb-2">
                        <input value={question16} onChange={(e) => setQuestion16(e.target.value)} class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio5"/>
                        <label class="form-check-label" for="inlineRadio5">Strongly DIsagree</label>
                    </div>
                </div>
                <div className=" border rounded-3 mb-2 py-3">
                <p>17. The curriculum follows fair assessment and evaluation process for grading.</p>
                <div class="form-check form-check-inline-block mb-2">
                        <input value={question17} onChange={(e) => setQuestion17(e.target.value)} class="form-check-input" type="radio" name="inlineRadioOptions" id="setQuestion1"/>
                        <label class="form-check-label" for="inlineRadio1">Strongly Agree</label>
                    </div>
                    <div class="form-check form-check-inline-block mb-2">
                        <input value={question17} onChange={(e) => setQuestion17(e.target.value)} class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" />
                        <label class="form-check-label" for="inlineRadio2">Agree</label>
                    </div>
                    <div class="form-check form-check-inline-block mb-2">
                        <input value={question17} onChange={(e) => setQuestion17(e.target.value)} class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3"/>
                        <label class="form-check-label" for="inlineRadio3">Neutral</label>
                    </div>
                    <div class="form-check form-check-inline-block mb-2">
                        <input value={question17} onChange={(e) => setQuestion17(e.target.value)} class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio4" />
                        <label class="form-check-label" for="inlineRadio4">Disagree</label>
                    </div>
                    <div class="form-check form-check-inline-block mb-2">
                        <input value={question17} onChange={(e) => setQuestion17(e.target.value)} class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio5"/>
                        <label class="form-check-label" for="inlineRadio5">Strongly DIsagree</label>
                    </div>
                </div>
                <div className=" border rounded-3 mb-2 py-3">
                <p>18. Guidance and counseling for academic improvement are involved in curriculum.</p>
                <div class="form-check form-check-inline-block mb-2">
                        <input value={question18} onChange={(e) => setQuestion18(e.target.value)} class="form-check-input" type="radio" name="inlineRadioOptions" id="setQuestion1"/>
                        <label class="form-check-label" for="inlineRadio1">Strongly Agree</label>
                    </div>
                    <div class="form-check form-check-inline-block mb-2">
                        <input value={question18} onChange={(e) => setQuestion18(e.target.value)} class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" />
                        <label class="form-check-label" for="inlineRadio2">Agree</label>
                    </div>
                    <div class="form-check form-check-inline-block mb-2">
                        <input value={question18} onChange={(e) => setQuestion18(e.target.value)} class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3"/>
                        <label class="form-check-label" for="inlineRadio3">Neutral</label>
                    </div>
                    <div class="form-check form-check-inline-block mb-2">
                        <input value={question18} onChange={(e) => setQuestion18(e.target.value)} class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio4" />
                        <label class="form-check-label" for="inlineRadio4">Disagree</label>
                    </div>
                    <div class="form-check form-check-inline-block mb-2">
                        <input value={question18} onChange={(e) => setQuestion18(e.target.value)} class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio5"/>
                        <label class="form-check-label" for="inlineRadio5">Strongly DIsagree</label>
                    </div>
                </div>
                <div className=" border rounded-3 mb-2 py-3">
                <p>19. Clinical practise and assignment like demostration, health education and case study enhance practical skills</p>
                <div class="form-check form-check-inline-block mb-2">
                        <input value={question19} onChange={(e) => setQuestion19(e.target.value)} class="form-check-input" type="radio" name="inlineRadioOptions" id="setQuestion1"/>
                        <label class="form-check-label" for="inlineRadio1">Strongly Agree</label>
                    </div>
                    <div class="form-check form-check-inline-block mb-2">
                        <input value={question19} onChange={(e) => setQuestion19(e.target.value)} class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" />
                        <label class="form-check-label" for="inlineRadio2">Agree</label>
                    </div>
                    <div class="form-check form-check-inline-block mb-2">
                        <input value={question19} onChange={(e) => setQuestion19(e.target.value)} class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3"/>
                        <label class="form-check-label" for="inlineRadio3">Neutral</label>
                    </div>
                    <div class="form-check form-check-inline-block mb-2">
                        <input value={question19} onChange={(e) => setQuestion19(e.target.value)} class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio4" />
                        <label class="form-check-label" for="inlineRadio4">Disagree</label>
                    </div>
                    <div class="form-check form-check-inline-block mb-2">
                        <input value={question19} onChange={(e) => setQuestion19(e.target.value)} class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio5"/>
                        <label class="form-check-label" for="inlineRadio5">Strongly DIsagree</label>
                    </div>
                </div>
                <div className=" border rounded-3 mb-2 py-3">
                <p>20. Integration of value added and add on courses increase scope of job opportunity. </p>
                <div class="form-check form-check-inline-block mb-2">
                        <input value={question20} onChange={(e) => setQuestion20(e.target.value)} class="form-check-input" type="radio" name="inlineRadioOptions" id="setQuestion1"/>
                        <label class="form-check-label" for="inlineRadio1">Strongly Agree</label>
                    </div>
                    <div class="form-check form-check-inline-block mb-2">
                        <input value={question20} onChange={(e) => setQuestion20(e.target.value)} class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" />
                        <label class="form-check-label" for="inlineRadio2">Agree</label>
                    </div>
                    <div class="form-check form-check-inline-block mb-2">
                        <input value={question20} onChange={(e) => setQuestion20(e.target.value)} class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3"/>
                        <label class="form-check-label" for="inlineRadio3">Neutral</label>
                    </div>
                    <div class="form-check form-check-inline-block mb-2">
                        <input value={question20} onChange={(e) => setQuestion20(e.target.value)} class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio4" />
                        <label class="form-check-label" for="inlineRadio4">Disagree</label>
                    </div>
                    <div class="form-check form-check-inline-block mb-2">
                        <input value={question20} onChange={(e) => setQuestion20(e.target.value)} class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio5"/>
                        <label class="form-check-label" for="inlineRadio5">Strongly DIsagree</label>
                    </div>
                </div>
                <div className="col-sm-12">
                <p className="comment-form-comment">
                    <label htmlFor="comment"></label>
                    <textarea
                    value={suggestion} onChange={(e) => setSuggestion(e.target.value)}
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
                <button onClick={handlesubmit} type="submit" className="submit btn btn-primary">
                Send Message
                </button>
            </p>
            </form>
        </div>
    </div>
  )
}

export default StudentFeedbackForm
