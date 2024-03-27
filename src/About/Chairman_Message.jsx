import React from 'react';
import chairman from "../img/course-list5.jpg";

const Chairman_Message = () => {
  return (
    <div>
      <div className="container py-5">
        <div className="row py-5">
            <div className="col-sm-12 col-md-6 col-lg-6 chairman">
                <img src={chairman} alt="" />
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6">
                <div>
                    <h1>Chairman Message</h1>
                    <h5>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores ducimus reiciendis qui sapiente quae dignissimos consequuntur, nostrum nisi, nam assumenda, necessitatibus quis hic! Molestiae expedita provident ipsum alias deleniti dolor illum id officia temporibus repellendus qui praesentium, necessitatibus corporis, commodi, vitae adipisci vel numquam sed rerum placeat aliquam culpa distinctio!</h5>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Chairman_Message
