import React from 'react';
import Photo_GalleryApi from "./Photo_GalleryApi";

const Photo_Gallery = () => {
  return (
    <div>
        <section>
            <div className="page-header banner-img d-flex justify-content-center align-items-center">
                <h1 className='text-light'>Photo Gallery</h1>
            </div>
        </section>
        <section>
            <div className="block inner-pages">
            <div className="container">
                <div className="row">
                    <Photo_GalleryApi />
                </div>
            </div>
            </div>
        </section>
    </div>
  )
}

export default Photo_Gallery
