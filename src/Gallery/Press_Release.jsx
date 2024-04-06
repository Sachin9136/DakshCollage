import React from 'react';
import Press_ReleaseApi from "./Press_ReleaseApi";

const Press_Release = () => {
  return (
    <div>
        <main role="main">
        <section>
                <div className="page-header banner-img d-flex justify-content-center align-items-center">
                        <h1 className='text-light'>Press Release</h1>
                </div>
            </section>
            {/* Banner */}
            <section>
                <div className="block inner-pages">
                    <div className="container">
                        <div className="row">
                            <Press_ReleaseApi />
                        </div>
                    </div>
                </div>
            </section>
            {/* gallery */}
        </main>
    </div>
  )
}

export default Press_Release
