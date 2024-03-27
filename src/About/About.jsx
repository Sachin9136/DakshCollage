import React from 'react';
import about_img from "../img/slide2-01.jpg"

const About = () => {
  return (
    <div>
      <div className="container py-5">
      <div className="row">
            <div className="col-sm-12 col-md-10 col-lg-10">
                <h1 className='text-center pb-5'>About Us</h1>
            </div>
        </div>
        <div className="row">
            <div className="col-sm-12 col-md-6 col-lg-5">
                <img src={about_img} alt="" />
            </div>
            <div className="col-sm-12 col-md-6 col-lg-5">
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam quae, tempore beatae laboriosam eligendi molestiae provident sed rerum quaerat architecto quasi corrupti saepe, dolor neque at voluptas, necessitatibus perferendis molestias.</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default About
