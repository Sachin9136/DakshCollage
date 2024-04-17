import React from 'react';
import Enterence_Form from "../Componanats/Entrence_Form/Entrence_Form";
const Addmission_Portal = () => {
  return (
    <div>
        <div className="container py-5 mb-5">
            <div className="row">
                <div className="col-sm-12 col-md-12 col-lg-12 ">
                <ul className="nav nav-pills mb-3 d-flex justify-content-evenly " id="pills-tab" role="tablist">
                <li className="nav-item" role="presentation">
                        <button
                            className="nav-link active border mb-2"
                            id="pills-home-tab"
                            data-bs-toggle="pill"
                            data-bs-target="#pills-home"
                            type="button"
                            role="tab"
                            aria-controls="pills-home"
                            aria-selected="true"
                        >
                            GNM PROSPECTUS
                        </button>
                </li>
                <li className="nav-item" role="presentation">
                <button
                    className="nav-link border mb-2"
                    id="pills-profile-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-profile"
                    type="button"
                    role="tab"
                    aria-controls="pills-profile"
                    aria-selected="false"
                >
                    BSC NURSING (H) PROSPECTUS 
                </button>
                </li>
                <li className="nav-item" role="presentation">
                <button
                    className="nav-link border mb-2"
                    id="pills-contact-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-contact"
                    type="button"
                    role="tab"
                    aria-controls="pills-contact"
                    aria-selected="false"
                >
                    MSC / NPCC PROSPECTUS
                </button>
                </li>
                <li className="nav-item" role="presentation">
                <button
                    className="nav-link border mb-2"
                    id="pills-disabled-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-disabled"
                    type="button"
                    role="tab"
                    aria-controls="pills-disabled"
                    aria-selected="false"
                    disabled=""
                >
                    BSC NURSING (POST BASIC) PROSPECTUS
                </button>
                </li>
            </ul>
            <div className="tab-content" id="pills-tabContent">
                <div
                className="tab-pane fade show active"
                id="pills-home"
                role="tabpanel"
                aria-labelledby="pills-home-tab"
                tabIndex={0}>
                    <div>
                        <Enterence_Form />
                        <div className='text-center py-5'>
                            <a href="https://res.cloudinary.com/dazqqmrku/image/upload/v1713037950/Pdf/ufwwdqe07qzgw8aldvbs.pdf" target='_blank'>
                                <button className="btn btn-success border">
                                    Download GNM PROSPECTUS
                                </button>
                            </a>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque velit sint laudantium dolorem a fugiat, ipsum delectus dolores repellendus, voluptates consequatur laboriosam excepturi. Laborum recusandae repellendus totam repellat sapiente consequatur illum ab sit, odit, quia esse cumque? Quasi magnam necessitatibus quos eum vero? Excepturi autem voluptas dolor nobis, odio magnam officiis quam. Natus beatae est quod facere sequi alias rem, in dolorum laborum asperiores, error optio nesciunt! Exercitationem praesentium nesciunt voluptas molestias adipisci quos, nemo quod qui aliquam. Enim dignissimos, dolor deserunt dolore suscipit quibusdam vero? Quod vel obcaecati numquam ullam voluptate odit, suscipit nesciunt laborum ex perspiciatis, dolores minima.</p>
                    </div>
                </div>
                <div
                className="tab-pane fade"
                id="pills-profile"
                role="tabpanel"
                aria-labelledby="pills-profile-tab"
                tabIndex={0}
                >
                    <div>
                        <div className='text-center py-5'>
                            <a href="https://res.cloudinary.com/dazqqmrku/image/upload/v1713037950/Pdf/ufwwdqe07qzgw8aldvbs.pdf" target='_blank'>
                                <button className="btn btn-success border">
                                    Download BSC NURSING (H) PROSPECTUS 
                                </button>
                            </a>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque velit sint laudantium dolorem a fugiat, ipsum delectus dolores repellendus, voluptates consequatur laboriosam excepturi. Laborum recusandae repellendus totam repellat sapiente consequatur illum ab sit, odit, quia esse cumque? Quasi magnam necessitatibus quos eum vero? Excepturi autem voluptas dolor nobis, odio magnam officiis quam. Natus beatae est quod facere sequi alias rem, in dolorum laborum asperiores, error optio nesciunt! Exercitationem praesentium nesciunt voluptas molestias adipisci quos, nemo quod qui aliquam. Enim dignissimos, dolor deserunt dolore suscipit quibusdam vero? Quod vel obcaecati numquam ullam voluptate odit, suscipit nesciunt laborum ex perspiciatis, dolores minima.</p>
                    </div>
                </div>
                <div
                className="tab-pane fade"
                id="pills-contact"
                role="tabpanel"
                aria-labelledby="pills-contact-tab"
                tabIndex={0}
                >
                    <div>
                        <div className='text-center py-5'>
                            <a href="https://res.cloudinary.com/dazqqmrku/image/upload/v1713037950/Pdf/ufwwdqe07qzgw8aldvbs.pdf" target='_blank'>
                                <button className="btn btn-success border">
                                    Download MSC / NPCC PROSPECTUS
                                </button>
                            </a>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque velit sint laudantium dolorem a fugiat, ipsum delectus dolores repellendus, voluptates consequatur laboriosam excepturi. Laborum recusandae repellendus totam repellat sapiente consequatur illum ab sit, odit, quia esse cumque? Quasi magnam necessitatibus quos eum vero? Excepturi autem voluptas dolor nobis, odio magnam officiis quam. Natus beatae est quod facere sequi alias rem, in dolorum laborum asperiores, error optio nesciunt! Exercitationem praesentium nesciunt voluptas molestias adipisci quos, nemo quod qui aliquam. Enim dignissimos, dolor deserunt dolore suscipit quibusdam vero? Quod vel obcaecati numquam ullam voluptate odit, suscipit nesciunt laborum ex perspiciatis, dolores minima.</p>
                    </div>
                </div>
                <div
                className="tab-pane fade"
                id="pills-disabled"
                role="tabpanel"
                aria-labelledby="pills-disabled-tab"
                tabIndex={0}
                >
                    <div>
                        <div className='text-center py-5'>
                            <a href="https://res.cloudinary.com/dazqqmrku/image/upload/v1713037950/Pdf/ufwwdqe07qzgw8aldvbs.pdf" target='_blank'>
                                <button className="btn btn-success border">
                                    Download BSC NURSING (POST BASIC) PROSPECTUS
                                </button>
                            </a>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque velit sint laudantium dolorem a fugiat, ipsum delectus dolores repellendus, voluptates consequatur laboriosam excepturi. Laborum recusandae repellendus totam repellat sapiente consequatur illum ab sit, odit, quia esse cumque? Quasi magnam necessitatibus quos eum vero? Excepturi autem voluptas dolor nobis, odio magnam officiis quam. Natus beatae est quod facere sequi alias rem, in dolorum laborum asperiores, error optio nesciunt! Exercitationem praesentium nesciunt voluptas molestias adipisci quos, nemo quod qui aliquam. Enim dignissimos, dolor deserunt dolore suscipit quibusdam vero? Quod vel obcaecati numquam ullam voluptate odit, suscipit nesciunt laborum ex perspiciatis, dolores minima.</p>
                    </div>
                </div>
            </div>
                </div>
                {/* <div className='col-sm-12 col-md-4 col-lg-5'>
                    <Login />
                </div> */}
            </div>
        </div>
    </div>
  )
}

export default Addmission_Portal
