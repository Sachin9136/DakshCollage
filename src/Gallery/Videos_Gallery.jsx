import React from 'react';
import Videos_GalleryApi from "./Videos_GalleryApi";

const Videos_Gallery = () => {
  return (
    <div>
        <main role="main"> 
            <section>
                <div className="page-header">
                    <h1 className='text-center'>Video Gallery</h1>
                </div>
            </section>
            {/* Banner */}
            <section>
                <div className="block inner-pages">
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
