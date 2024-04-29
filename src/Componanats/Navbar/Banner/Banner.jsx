import React from 'react';
import { MDBCarousel, MDBCarouselItem, MDBCarouselCaption } from 'mdb-react-ui-kit';
import banner1 from "../../../img/1.png";
import banner2 from "../../../img/2.png";
import banner3 from "../../../img/4.png";

export default function App() { 
  return (
    <> 
    <div className="container-fluid">
      <div className="row p-0 m-0">
        <div className="col-12 marquee-section">
        <marquee behavior="scroll" direction="left" scrollamount="3">
          This is a movable text using the marquee tag.
        </marquee>
        </div>
      </div>
    </div>
    <MDBCarousel showIndicators showControls fade>
      <MDBCarouselItem itemId={1}>
        <img src={banner1} className='d-block w-100' alt='...' />
        <MDBCarouselCaption className="">
          {/* <h5>First slide label</h5> */}
          <h1 className=' text-light fw-bold bg-dark-rgba'>Best Education For All Courses</h1>
        </MDBCarouselCaption>
      </MDBCarouselItem>

      <MDBCarouselItem itemId={2}>
        <img src={banner2} className='d-block w-100' alt='...' />
        <MDBCarouselCaption>
          {/* <h5>Second slide label</h5> */}
          {/* <h1 className=' text-light fw-bold bg-dark-rgba'>College Faculty and Students</h1> */}
        </MDBCarouselCaption>
      </MDBCarouselItem>

      <MDBCarouselItem itemId={3}>
        <img src={banner3} className='d-block w-100' alt='...' />
        <MDBCarouselCaption>
          {/* <h5>Third slide label</h5> */}
          <h1 className=' text-light fw-bold bg-dark-rgba'>Learn With Practicals</h1>
        </MDBCarouselCaption>
      </MDBCarouselItem>
    </MDBCarousel>
    </>
  );
}