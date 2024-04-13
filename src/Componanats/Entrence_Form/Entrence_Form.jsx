import React, { useState } from 'react';
import { useDispatch} from "react-redux";
import { entrenceExamFormApi } from '../Redux-toolkit/Slice/FormSlice';

const Entrence_form = () => {

    const dispatch = useDispatch();
    // const [image, setImage] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [department, setDepartment] = useState("");
    const [resaon, setResaon] = useState("");
    const handlesubmit = (e) => {
        e.preventDefault()
        // const data = new FormData() 
        // data.append("name",name)
        // data.append("email",email) 
        // data.append("phone",phone)
        // data.append("resaon",resaon)
        const data = {
            name: name,
            email: email,
            departmentName: department,
            resaon: resaon,
            // image :image
        }
        // console.log(data)
        dispatch(entrenceExamFormApi(data))
        setName("")
        setEmail("")
        setDepartment("")
        setResaon("")
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
                    <i className="fa fa-pencil-alt" />
                    </label>
                    <input 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Type Your Email"
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
                    <i className="fa fa-pencil-alt" />
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
                <div className="col-sm-12">
                <p className="comment-form-subject">
                    <label htmlFor="subject">
                    <i className="fa fa-pencil-alt" />
                    </label>
                    <input
                    value={department}
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
                <div className="col-sm-12">
                <p className="comment-form-comment">
                    <label htmlFor="comment">
                    <i className="fa fa-comment-alt" />
                    </label>
                    <textarea
                    value={resaon}
                    onChange={(e) => setResaon(e.target.value)}
                    placeholder="Type Your Message"
                    className="form-control"
                    id="comment"
                    name="Reason"
                    cols={45}
                    rows={5}
                    required=""
                    defaultValue={""}
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
