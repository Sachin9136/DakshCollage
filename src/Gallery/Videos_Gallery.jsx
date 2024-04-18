import React from 'react';
import Videos_GalleryApi from "./Videos_GalleryApi";

const Videos_Gallery = () => {
  return (
    <div>
        <main role="main"> 
            <section>
            <div className="col-sm-12 d-flex align-items-center justify-content-center banner-img w-100">
                <div className="text-white h1">Video Gallery</div>
            </div>
            </section>
            {/* Banner */}
            <section className='mt-5'> 
                <div className="block inner-pages pt-0">
                <div className="container">
                    <div className="row">
                    <Videos_GalleryApi />
                    </div>
                </div>
                </div>
            </section>
            {/* gallery */}
        </main>
    </div>
  )
}

export default Videos_Gallery
