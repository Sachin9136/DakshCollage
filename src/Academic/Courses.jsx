import React from 'react'

const Courses = () => {
  return (
    <div>
      <main role="main">
  <section>
    <div className="sub-head">
      <div
        className="bg-image"
        style={{ backgroundImage: "url(assets/images/slide1-1.jpg)" }}
      />
      <div className="sub-meta">
        <h1>Our Courses</h1>
        <ul className="pager">
          <li>
            <a href="#" title="">
              Home
            </a>
          </li>
          <li>Our Courses</li>
        </ul>
      </div>
    </div>
  </section>
  {/* Banner */}
  <section>
    <div className="block inner-pages">
      <div className="container">
        <div className="row">
          <div className="col-md-11 col-xl-10 mx-auto">
            <div className="course-page">
              <div id="options">
                <div className="option-isotop">
                  <ul
                    id="filter2"
                    className="option-set default"
                    data-option-key="filter"
                  >
                    <li>
                      <a
                        href="#trending"
                        data-option-value=".trending"
                        className="selected"
                        title="Trending Now"
                      >
                        Trending Now
                      </a>
                    </li>
                    <li>
                      <a
                        href="#popular"
                        data-option-value=".popular"
                        title="Most Popular "
                      >
                        Most Popular
                      </a>
                    </li>
                    <li>
                      <a
                        href="#recent"
                        data-option-value=".recent"
                        title="Most Recent"
                      >
                        Most Recent
                      </a>
                    </li>
                    <li>
                      <a
                        href="#certified"
                        data-option-value=".certified"
                        title="Most Certified"
                      >
                        Most Certified
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              {/* FILTER BUTTONS */}
              <ul className="row masonry">
                <li className="col-sm-6 col-lg-4 trending certified">
                  <div className="pop-course">
                    <div className="course-thumb">
                      <img src="assets/images/course1.jpg" alt="" />
                      <span>$24.99</span>
                      <a href="course-detail.html" className="butn">
                        Start Now
                      </a>
                    </div>
                    <div className="course-meta">
                      <div className="course-author">
                        <img src="assets/images/author.png" alt="" />
                        <span>Sarah Johnson</span>
                      </div>
                      <h2>a broad range of topics educational policy</h2>
                      <a href="#">
                        <i className="fa fa-download" />
                        <span>95</span>
                      </a>
                      <a href="#">
                        <i className="fa fa-comments" />
                        <span>2</span>
                      </a>
                    </div>
                  </div>
                </li>
                <li className="col-sm-6 col-lg-4 trending recent">
                  <div className="pop-course">
                    <div className="course-thumb">
                      <img src="assets/images/course2.jpg" alt="" />
                      <span>$24.99</span>
                      <a href="course-detail.html" className="butn">
                        Start Now
                      </a>
                    </div>
                    <div className="course-meta">
                      <div className="course-author">
                        <img src="assets/images/author.png" alt="" />
                        <span>Sarah Johnson</span>
                      </div>
                      <h2>University, including in Education</h2>
                      <a href="#">
                        <i className="fa fa-download" />
                        <span>95</span>
                      </a>
                      <a href="#">
                        <i className="fa fa-comments" />
                        <span>2</span>
                      </a>
                    </div>
                  </div>
                </li>
                <li className="col-sm-6 col-lg-4 trending popular">
                  <div className="pop-course">
                    <div className="course-thumb">
                      <img src="assets/images/course3.jpg" alt="" />
                      <span>$24.99</span>
                      <a href="course-detail.html" className="butn">
                        Start Now
                      </a>
                    </div>
                    <div className="course-meta">
                      <div className="course-author">
                        <img src="assets/images/author.png" alt="" />
                        <span>Sarah Johnson</span>
                      </div>
                      <h2>art of teaching, planning management in schools</h2>
                      <a href="#">
                        <i className="fa fa-download" />
                        <span>95</span>
                      </a>
                      <a href="#">
                        <i className="fa fa-comments" />
                        <span>2</span>
                      </a>
                    </div>
                  </div>
                </li>
                <li className="col-sm-6 col-lg-4 trending trending">
                  <div className="pop-course">
                    <div className="course-thumb">
                      <img src="assets/images/course4.jpg" alt="" />
                      <span>$24.99</span>
                      <a href="course-detail.html" className="butn">
                        Start Now
                      </a>
                    </div>
                    <div className="course-meta">
                      <div className="course-author">
                        <img src="assets/images/author.png" alt="" />
                        <span>Sarah Johnson</span>
                      </div>
                      <h2>authority in English For language teaching</h2>
                      <a href="#">
                        <i className="fa fa-download" />
                        <span>95</span>
                      </a>
                      <a href="#">
                        <i className="fa fa-comments" />
                        <span>2</span>
                      </a>
                    </div>
                  </div>
                </li>
                <li className="col-sm-6 col-lg-4 trending certified">
                  <div className="pop-course">
                    <div className="course-thumb">
                      <img src="assets/images/course5.jpg" alt="" />
                      <span>$24.99</span>
                      <a href="course-detail.html" className="butn">
                        Start Now
                      </a>
                    </div>
                    <div className="course-meta">
                      <div className="course-author">
                        <img src="assets/images/author.png" alt="" />
                        <span>Sarah Johnson</span>
                      </div>
                      <h2>courses explore the practice of teaching</h2>
                      <a href="#">
                        <i className="fa fa-download" />
                        <span>95</span>
                      </a>
                      <a href="#">
                        <i className="fa fa-comments" />
                        <span>2</span>
                      </a>
                    </div>
                  </div>
                </li>
                <li className="col-sm-6 col-lg-4 trending recent">
                  <div className="pop-course">
                    <div className="course-thumb">
                      <img src="assets/images/course6.jpg" alt="" />
                      <span>$24.99</span>
                      <a href="course-detail.html" className="butn">
                        Start Now
                      </a>
                    </div>
                    <div className="course-meta">
                      <div className="course-author">
                        <img src="assets/images/author.png" alt="" />
                        <span>Sarah Johnson</span>
                      </div>
                      <h2>offers online education courses covering</h2>
                      <a href="#">
                        <i className="fa fa-download" />
                        <span>95</span>
                      </a>
                      <a href="#">
                        <i className="fa fa-comments" />
                        <span>2</span>
                      </a>
                    </div>
                  </div>
                </li>
                <li className="col-sm-6 col-lg-4 popular">
                  <div className="pop-course">
                    <div className="course-thumb">
                      <img src="assets/images/course7.jpg" alt="" />
                      <span>$24.99</span>
                      <a href="course-detail.html" className="butn">
                        Start Now
                      </a>
                    </div>
                    <div className="course-meta">
                      <div className="course-author">
                        <img src="assets/images/author.png" alt="" />
                        <span>Sarah Johnson</span>
                      </div>
                      <h2>a broad range of topics educational policy</h2>
                      <a href="#">
                        <i className="fa fa-download" />
                        <span>95</span>
                      </a>
                      <a href="#">
                        <i className="fa fa-comments" />
                        <span>2</span>
                      </a>
                    </div>
                  </div>
                </li>
                <li className="col-sm-6 col-lg-4 recent">
                  <div className="pop-course">
                    <div className="course-thumb">
                      <img src="assets/images/course8.jpg" alt="" />
                      <span>$24.99</span>
                      <a href="course-detail.html" className="butn">
                        Start Now
                      </a>
                    </div>
                    <div className="course-meta">
                      <div className="course-author">
                        <img src="assets/images/author.png" alt="" />
                        <span>Sarah Johnson</span>
                      </div>
                      <h2>University, including in Education</h2>
                      <a href="#">
                        <i className="fa fa-download" />
                        <span>95</span>
                      </a>
                      <a href="#">
                        <i className="fa fa-comments" />
                        <span>2</span>
                      </a>
                    </div>
                  </div>
                </li>
                <li className="col-sm-6 col-lg-4 certified">
                  <div className="pop-course">
                    <div className="course-thumb">
                      <img src="assets/images/course9.jpg" alt="" />
                      <span>$24.99</span>
                      <a href="course-detail.html" className="butn">
                        Start Now
                      </a>
                    </div>
                    <div className="course-meta">
                      <div className="course-author">
                        <img src="assets/images/author.png" alt="" />
                        <span>Sarah Johnson</span>
                      </div>
                      <h2>art of teaching, planning management in schools</h2>
                      <a href="#">
                        <i className="fa fa-download" />
                        <span>95</span>
                      </a>
                      <a href="#">
                        <i className="fa fa-comments" />
                        <span>2</span>
                      </a>
                    </div>
                  </div>
                </li>
                <li className="col-sm-6 col-lg-4 recent">
                  <div className="pop-course">
                    <div className="course-thumb">
                      <img src="assets/images/course10.jpg" alt="" />
                      <span>$24.99</span>
                      <a href="course-detail.html" className="butn">
                        Start Now
                      </a>
                    </div>
                    <div className="course-meta">
                      <div className="course-author">
                        <img src="assets/images/author.png" alt="" />
                        <span>Sarah Johnson</span>
                      </div>
                      <h2>authority in English For language teaching</h2>
                      <a href="#">
                        <i className="fa fa-download" />
                        <span>95</span>
                      </a>
                      <a href="#">
                        <i className="fa fa-comments" />
                        <span>2</span>
                      </a>
                    </div>
                  </div>
                </li>
                <li className="col-sm-6 col-lg-4 popular">
                  <div className="pop-course">
                    <div className="course-thumb">
                      <img src="assets/images/course11.jpg" alt="" />
                      <span>$24.99</span>
                      <a href="course-detail.html" className="butn">
                        Start Now
                      </a>
                    </div>
                    <div className="course-meta">
                      <div className="course-author">
                        <img src="assets/images/author.png" alt="" />
                        <span>Sarah Johnson</span>
                      </div>
                      <h2>courses explore the practice of teaching</h2>
                      <a href="#">
                        <i className="fa fa-download" />
                        <span>95</span>
                      </a>
                      <a href="#">
                        <i className="fa fa-comments" />
                        <span>2</span>
                      </a>
                    </div>
                  </div>
                </li>
                <li className="col-sm-6 col-lg-4 certified">
                  <div className="pop-course">
                    <div className="course-thumb">
                      <img src="assets/images/course12.jpg" alt="" />
                      <span>$24.99</span>
                      <a href="course-detail.html" className="butn">
                        Start Now
                      </a>
                    </div>
                    <div className="course-meta">
                      <div className="course-author">
                        <img src="assets/images/author.png" alt="" />
                        <span>Sarah Johnson</span>
                      </div>
                      <h2>offers online education courses covering</h2>
                      <a href="#">
                        <i className="fa fa-download" />
                        <span>95</span>
                      </a>
                      <a href="#">
                        <i className="fa fa-comments" />
                        <span>2</span>
                      </a>
                    </div>
                  </div>
                </li>
              </ul>
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
      </div>
    </div>
  </section>
  {/* feature */}
</main>

    </div>
  )
}

export default Courses
