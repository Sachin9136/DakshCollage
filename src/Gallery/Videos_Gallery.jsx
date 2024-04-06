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
                    {/* <ul className="paginationz">
                        <li className="prev">
                        <a href="#" title="">
                            <i className="fa fa fa-caret-left" />
                        </a>
                        </li>
                        <li>
                        <a href="#" title="">
                            1
                        </a>
                        </li>
                        <li>
                        <a className="active" href="#" title="">
                            2
                        </a>
                        </li>
                        <li>
                        <a href="#" title="">
                            3
                        </a>
                        </li>
                        <li>
                        <a href="#" title="">
                            4
                        </a>
                        </li>
                        <li className="space">.......</li>
                        <li>
                        <a href="#" title="">
                            13
                        </a>
                        </li>
                        <li className="next">
                        <a href="#" title="">
                            <i className="fa fa fa-caret-right" />
                        </a>
                        </li>
                    </ul> */}
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
