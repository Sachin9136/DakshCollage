import React, { useEffect } from 'react';
import Photo_GalleryApi from "./Photo_GalleryApi";
import { useDispatch, useSelector } from "react-redux";
import { getallImageCategoryApi } from '../Redux-toolkit/Slice/NavbarSlice';
import { Link } from 'react-router-dom';
const Photo_Gallery = () => {

    const dispatch = useDispatch();
    const { getallcategory } = useSelector((state) => state.navbar);
    useEffect(() => {
        dispatch(getallImageCategoryApi());
    }, []);
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
                            {
                                getallcategory.data && getallcategory.data.map((item) => (

                                    <div className="col-lg-2" key={item._id}>
                                        <Link to={`/images/${item._id}`}>
                                            <div className='text-center'>
                                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaOyaClnjqZCPIY7FPIXcpoxkmbeqJi1oqEu-n_fKHDA&s" className='img-flud rounded' alt="" />
                                                <h6 className='text-center' >{item.CategoryName}</h6>
                                            </div>
                                        </Link>
                                    </div>

                                ))
                            }
                        </div>
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
