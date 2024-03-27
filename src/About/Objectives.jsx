import React from 'react';
import Objectives_img from "../img/slide2-02.jpg"

const Objectives = () => {
  return (
    <div>
      <div className="container py-5">
        <div className="row d-flex justify-content-center">
            <div className="col-sm-12 col-md-10 col-lg-10">
                <h1 className='text-center'>Objectives</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus, veritatis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas vero praesentium aut odit molestiae ea rem, sit deserunt obcaecati accusantium. Et repellendus nam debitis. Sint, perferendis! Voluptates repellat, esse vitae accusamus saepe illo voluptatibus quisquam at? Voluptatum sequi, aperiam sit totam dolorum obcaecati quis dolor quam aliquid, neque, blanditiis eos!</p>
                <img src={Objectives_img} alt="" />
            </div>
        </div>
      </div>
    </div>
  )
}

export default Objectives
