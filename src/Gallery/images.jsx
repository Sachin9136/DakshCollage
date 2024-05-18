import React, { useState, useEffect } from "react";
import { getImageCategory } from "../Componanats/api/api_base";
import axios from "axios";
import { useParams } from "react-router-dom";

const Image = () => {
    const {id} = useParams();
    const [images, setImages] = useState([]);
   console.log(id)
    const getImageApi = async () => {
        try {
            const response = await axios.get(`${getImageCategory}/${id}`);
            setImages(response.data.data);
        } catch (error) {
            console.error("Error fetching blogs:", error);
        }
    };
    console.log(images)
    useEffect(() => {
        getImageApi();
    }, []);

    const capitalizeFirstLetter = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    };

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return `${date.getDate()} ${date.toLocaleString('default', { month: 'short' })} ${date.getFullYear()}`;
    };

    return (
        <>
            <div>
                <section>
                    <div className="page-header banner-img d-flex justify-content-center align-items-center">
                        <h1 className='text-light'>Gallery</h1>
                    </div>
                </section>
                <section>
                    <div className="block inner-pages">
                        <div className="container">
                            <div className="row">
                                {images.map((image, index) => (
                                    <div key={index} className="col-sm-12 col-md-6 col-lg-4">
                                        <div className="rounded d-flex justify-content-center image-container">
                                            <img className="rounded" src={image.GelleryImage} alt="Avatar" />
                                            <div className="middle">
                                                <div className="image_title">{capitalizeFirstLetter(image.title)}</div>
                                                <div className="image_title">{formatDate(image.createdAt)}</div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Image;
