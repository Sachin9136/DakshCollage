import React from 'react';
import { MDBCarousel, MDBCarouselItem, MDBCarouselCaption } from 'mdb-react-ui-kit';
import banner1 from "../../../img/slide1-1.jpg";
import banner2 from "../../../img/slide1-01.jpg";
import banner3 from "../../../img/slide1-02.jpg";

export default function App() { 
  return (
    <MDBCarousel showIndicators showControls fade>
      <MDBCarouselItem itemId={1}>
        <img src={banner1} className='d-block w-100' alt='...' />
        <MDBCarouselCaption className="">
          {/* <h5>First slide label</h5> */}
          <h1 className='display-1 text-light fw-boldest'>Best Education For Better World</h1>
        </MDBCarouselCaption>
      </MDBCarouselItem>

      <MDBCarouselItem itemId={2}>
        <img src={banner2} className='d-block w-100' alt='...' />
        <MDBCarouselCaption>
          {/* <h5>Second slide label</h5> */}
          <h1 className='display-1 text-light fw-boldest'>Lorem ipsum dolor sit amet.</h1>
        </MDBCarouselCaption>
      </MDBCarouselItem>

      <MDBCarouselItem itemId={3}>
        <img src={banner3} className='d-block w-100' alt='...' />
        <MDBCarouselCaption>
          {/* <h5>Third slide label</h5> */}
          <h1 className='display-1 text-light fw-boldest'>Praesent commodo cursus magna</h1>
        </MDBCarouselCaption>
      </MDBCarouselItem>
    </MDBCarousel>
  );
}