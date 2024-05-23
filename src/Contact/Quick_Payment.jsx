import React from 'react';
import Qr from "../img/dakshschoolofnursing@sbi-1.png";

const Quick_Payment = () => {
  return (
    <div className="container pb-5">
      <div className="row">
        <div className="col-12">
          <div className='page-header'>
            <h1 className='text-center'>Quick Payment</h1>
          </div>
        </div>
      </div>
      <div className="row d-flex justify-content-center shadow">
        <div className="col-sm-12 col-md-4 col-lg-4 d-flex justify-content-center">
          <img src={Qr} alt="" />
        </div>
        <div className="col-sm-12 col-md-6 col-lg-6 d-flex align-items-center ">
          <div>
            <p>Name : <b>Daksh School of Nursing</b></p>
            <p>Bank Name : <b>SBI</b></p>
            <p>Account No. : <b>38318320000</b></p>
            <p>Ifsc Code : <b>SBIN0018597</b></p>
            <p>UPI Id : <b>dakshschoolofnursing@sbi</b></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Quick_Payment
