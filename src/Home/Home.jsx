import React from 'react';
import Banner from "../Componanats/Navbar/Banner/Banner";
import Courses from "../Academic/Courses";
import Blog from "../Blog/BlogApi";
import helping_img from "../img/help-img.webp";
import PhotoGallery_Slider from "../Componanats/PhotoGallery_Slider/PhotoGallery_Slider";
import Step1 from "../img/step1.png";
import Step2 from "../img/step2.png";
import Step3 from "../img/step3.png";
import topper1 from "../img/topper1.jpg";
import topper2 from "../img/topper2.jpg";
import topper3 from "../img/topper3.jpg";
import topper4 from "../img/topper4.jpg";
import {Link} from "react-router-dom";



const Home = () => {
  return (
    <div>
      <Banner/>
      <div>
        <main role="main"> 
          <section>
            <div className="main-slider">
              <div
                id="rev_slider_1050_1_wrapper"
                className="rev_slider_wrapper fullscreen-container"
                data-alias="webproduct-light"
                data-source="gallery"
                style={{ backgroundColor: "#ebeff2", padding: 0 }}
              >
                <div
                  id="rev_slider_1050_1"
                  className="rev_slider fullscreenbanner"
                  style={{ display: "none" }}
                  data-version="5.4.1"
                >
                  <ul>
                    {" "}
                    {/* SLIDE  */}
                    <li
                      data-index="rs-236"
                      data-transition="fade"
                      data-slotamount={7}
                      data-hideafterloop={0}
                      data-hideslideonmobile="off"
                      data-easein="default"
                      data-easeout="default"
                      data-masterspeed={3000}
                      data-rotate={0}
                      data-fstransition="fade"
                      data-fsslotamount={7}
                      data-saveperformance="off"
                      data-title="Intro"
                      data-param1=""
                      data-param2=""
                      data-param3=""
                      data-param4=""
                      data-param5=""
                      data-param6=""
                      data-param7=""
                      data-param8=""
                      data-param9=""
                      data-param10=""
                      data-description=""
                    >
                      {/* MAIN IMAGE */}
                      <img
                        src="assets/images/slide1-01.jpg"
                        alt=""
                        title="slide1-01.jpg"
                        data-bgposition="center center"
                        data-duration={20000}
                        data-ease="Power1.easeOut"
                        data-blurstart={0}
                        data-blurend={0}
                        data-offsetstart="0 0"
                        data-offsetend="0 0"
                        className="rev-slidebg"
                        data-no-retina=""
                      />
                      {/* LAYERS */}
                      {/* LAYER NR. 1 */}
                      <div
                        className="tp-caption tp-resizeme"
                        id="slide-236-layer-1"
                        data-x="['center','center','center','center']"
                        data-hoffset="['0','0','0','0']"
                        data-y="['middle','middle','middle','middle']"
                        data-voffset="['-50','-85','-70','-60']"
                        data-fontsize="['25','20','20','18']"
                        data-lineheight="['30','30','30','30']"
                        data-letterspacing="['5','4','3','1']"
                        data-width="none"
                        data-height="none"
                        data-whitespace="nowrap"
                        data-type="text"
                        data-responsive_offset="on"
                        data-frames='[{"from":"y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;","mask":"x:0px;y:0px;s:inherit;e:inherit;","speed":1500,"to":"o:1;","delay":500,"ease":"Power3.easeInOut"},{"delay":"wait","speed":1000,"to":"opacity:0;","ease":"nothing"}]'
                        data-textalign="['center','center','center','center']"
                        data-paddingtop="[0,0,0,0]"
                        data-paddingright="[0,0,0,0]"
                        data-paddingbottom="[15,0,0,0]"
                        data-paddingleft="[0,0,0,0]"
                        style={{
                          zIndex: 5,
                          whiteSpace: "nowrap",
                          color: "rgba(255,255,255,1)",
                          fontFamily: '"Roboto"'
                        }}
                      >
                        Best Education Theme In 2019
                      </div>
                      {/* LAYER NR. 2 */}
                      <div
                        className="tp-caption tp-resizeme"
                        id="slide-236-layer-2"
                        data-x="['center','center','center','center']"
                        data-hoffset="['0','0','0','0']"
                        data-y="['middle','middle','middle','middle']"
                        data-voffset="['30','-15','-10','-10']"
                        data-fontsize="['72','60','50','40']"
                        data-fontweight="['800','700','700','700']"
                        data-lineheight="['70','60','50','40']"
                        data-width="none"
                        data-height="none"
                        data-whitespace="nowrap"
                        data-type="text"
                        data-responsive_offset="on"
                        data-frames='[{"from":"y:[-100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;","mask":"x:0px;y:0px;s:inherit;e:inherit;","speed":1500,"to":"o:1;","delay":700,"ease":"Power3.easeInOut"},{"delay":"wait","speed":1000,"to":"opacity:0;","ease":"nothing"}]'
                        data-textalign="['center','center','center','center']"
                        data-paddingtop="[0,0,0,0]"
                        data-paddingright="[0,0,0,0]"
                        data-paddingbottom="[0,0,0,0]"
                        data-paddingleft="[0,0,0,0]"
                        style={{
                          zIndex: 6,
                          whiteSpace: "nowrap",
                          lineHeight: 40,
                          color: "rgba(255,255,255,1)",
                          width: "100%",
                          fontFamily: '"Barlow", sans-serif'
                        }}
                      >
                        Better Education For{" "}
                        <span style={{ display: "block", color: "#00c5b5" }}>
                          Better World
                        </span>
                      </div>
                      {/* LAYER NR. 3 */}
                      <div
                        className="tp-caption rev-btn rev-solid"
                        id="slide-236-layer-3"
                        data-x="['center','center','center','center']"
                        data-hoffset="['0','0','0','0']"
                        data-y="['middle','middle','middle','middle']"
                        data-voffset="['170','90','85','70']"
                        data-width="none"
                        data-height="none"
                        data-whitespace="nowrap"
                        data-type="button"
                        data-actions='[{"event":"click","action":"jumptoslide","slide":"rs-235","delay":""}]'
                        data-responsive_offset="on"
                        data-responsive="off"
                        data-frames='[{"from":"z:0;rX:0deg;rY:0;rZ:0;sX:1.5;sY:1.5;skX:0;skY:0;opacity:0;","speed":1500,"to":"o:1;","delay":2800,"ease":"Power3.easeOut"},{"delay":"wait","speed":1000,"to":"opacity:0;","ease":"Power3.easeOut"},{"frame":"hover","speed":"300","ease":"Linear.easeNone","to":"o:1;rX:0;rY:0;rZ:0;z:0;","style":"c:rgba(255,255,255,1);bc:rgba(255,224,129,1);bw:2px 2px 2px 2px;"}]'
                        data-textalign="['center','center','center','center']"
                        data-paddingtop="[20,15,12,12]"
                        data-paddingright="[46,35,35,35]"
                        data-paddingbottom="[20,15,12,12]"
                        data-paddingleft="[46,35,35,35]"
                        style={{
                          zIndex: 19,
                          whiteSpace: "nowrap",
                          fontSize: 15,
                          lineHeight: 17,
                          fontWeight: 500,
                          background: "#00c5b5",
                          color: "rgba(255,255,255,1)",
                          fontFamily: "Roboto",
                          letterSpacing: 0,
                          borderRadius: 36
                        }}
                      >
                        Start Now
                      </div>
                    </li>
                    {/* SLIDE  */}
                    <li
                      data-index="rs-237"
                      data-transition="slideoverup"
                      data-slotamount={7}
                      data-hideafterloop={0}
                      data-hideslideonmobile="off"
                      data-easein="default"
                      data-easeout="default"
                      data-masterspeed={3000}
                      data-rotate={0}
                      data-saveperformance="off"
                      data-title="The Menu"
                      data-param1=""
                      data-param2=""
                      data-param3=""
                      data-param4=""
                      data-param5=""
                      data-param6=""
                      data-param7=""
                      data-param8=""
                      data-param9=""
                      data-param10=""
                      data-description=""
                    >
                      {/* MAIN IMAGE */}
                      <img
                        src="assets/images/slide1-02.jpg"
                        alt=""
                        title="slide1-02.jpg"
                        data-bgposition="right center"
                        data-duration={3000}
                        data-ease="Power1.easeOut"
                        data-blurstart={0}
                        data-blurend={0}
                        data-offsetstart="0 0"
                        data-offsetend="0 0"
                        className="rev-slidebg"
                        data-no-retina=""
                      />
                      {/* LAYERS */}
                      {/* LAYER NR. 1 */}
                      <div
                        className="tp-caption tp-resizeme"
                        id="slide-237-layer-1"
                        data-x="['center','center','center','center']"
                        data-hoffset="['0','0','0','0']"
                        data-y="['middle','middle','middle','middle']"
                        data-voffset="['-50','-85','-70','-60']"
                        data-fontsize="['25','20','20','18']"
                        data-lineheight="['30','30','30','30']"
                        data-letterspacing="['5','4','3','1']"
                        data-width="none"
                        data-height="none"
                        data-whitespace="nowrap"
                        data-type="text"
                        data-responsive_offset="on"
                        data-frames='[{"from":"y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;","mask":"x:0px;y:0px;s:inherit;e:inherit;","speed":1500,"to":"o:1;","delay":500,"ease":"Power3.easeInOut"},{"delay":"wait","speed":1000,"to":"opacity:0;","ease":"nothing"}]'
                        data-textalign="['center','center','center','center']"
                        data-paddingtop="[0,0,0,0]"
                        data-paddingright="[0,0,0,0]"
                        data-paddingbottom="[15,0,0,0]"
                        data-paddingleft="[0,0,0,0]"
                        style={{
                          zIndex: 5,
                          whiteSpace: "nowrap",
                          color: "rgba(255,255,255,1)",
                          fontFamily: '"Roboto"'
                        }}
                      >
                        Best Education Theme In 2019
                      </div>
                      {/* LAYER NR. 2 */}
                      <div
                        className="tp-caption tp-resizeme"
                        id="slide-237-layer-2"
                        data-x="['center','center','center','center']"
                        data-hoffset="['0','0','0','0']"
                        data-y="['middle','middle','middle','middle']"
                        data-voffset="['30','-15','-10','-10']"
                        data-fontsize="['72','60','50','40']"
                        data-fontweight="['800','700','700','700']"
                        data-lineheight="['70','60','50','40']"
                        data-width="none"
                        data-height="none"
                        data-whitespace="nowrap"
                        data-type="text"
                        data-responsive_offset="on"
                        data-frames='[{"from":"y:[-100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;","mask":"x:0px;y:0px;s:inherit;e:inherit;","speed":1500,"to":"o:1;","delay":700,"ease":"Power3.easeInOut"},{"delay":"wait","speed":1000,"to":"opacity:0;","ease":"nothing"}]'
                        data-textalign="['center','center','center','center']"
                        data-paddingtop="[0,0,0,0]"
                        data-paddingright="[0,0,0,0]"
                        data-paddingbottom="[0,0,0,0]"
                        data-paddingleft="[0,0,0,0]"
                        style={{
                          zIndex: 6,
                          whiteSpace: "nowrap",
                          lineHeight: 40,
                          color: "rgba(255,255,255,1)",
                          width: "100%",
                          fontFamily: '"Barlow", sans-serif'
                        }}
                      >
                        Better Education For{" "}
                        <span style={{ display: "block", color: "#00c5b5" }}>
                          Better World
                        </span>
                      </div>
                      {/* LAYER NR. 3 */}
                      <div
                        className="tp-caption rev-btn rev-solid"
                        id="slide-237-layer-3"
                        data-x="['center','center','center','center']"
                        data-hoffset="['0','0','0','0']"
                        data-y="['middle','middle','middle','middle']"
                        data-voffset="['170','90','85','70']"
                        data-width="none"
                        data-height="none"
                        data-whitespace="nowrap"
                        data-type="button"
                        data-actions='[{"event":"click","action":"jumptoslide","slide":"rs-235","delay":""}]'
                        data-responsive_offset="on"
                        data-responsive="off"
                        data-frames='[{"from":"z:0;rX:0deg;rY:0;rZ:0;sX:1.5;sY:1.5;skX:0;skY:0;opacity:0;","speed":1500,"to":"o:1;","delay":2800,"ease":"Power3.easeOut"},{"delay":"wait","speed":1000,"to":"opacity:0;","ease":"Power3.easeOut"},{"frame":"hover","speed":"300","ease":"Linear.easeNone","to":"o:1;rX:0;rY:0;rZ:0;z:0;","style":"c:rgba(255,255,255,1);bc:rgba(255,224,129,1);bw:2px 2px 2px 2px;"}]'
                        data-textalign="['center','center','center','center']"
                        data-paddingtop="[20,15,12,12]"
                        data-paddingright="[46,35,35,35]"
                        data-paddingbottom="[20,15,12,12]"
                        data-paddingleft="[46,35,35,35]"
                        style={{
                          zIndex: 19,
                          whiteSpace: "nowrap",
                          fontSize: 15,
                          lineHeight: 17,
                          fontWeight: 500,
                          background: "#00c5b5",
                          color: "rgba(255,255,255,1)",
                          fontFamily: "Roboto",
                          letterSpacing: 0,
                          borderRadius: 36
                        }}
                      >
                        Start Now
                      </div>
                    </li>
                  </ul>
                </div>
                {/* END REVOLUTION SLIDER */}
              </div>
            </div>
          </section>
          {/* slider */}
          <section>
            <div className="block no-bottom">
              <div className="container">
                <div className="row">
                  <div className="col-md-6 col-lg-4">
                    <div className="step-wrap">
                      <div className="step-img">
                        <figure>
                          <img src={Step1} alt="" />
                        </figure>
                      </div>
                      <div className="step">
                        <i>1</i>
                        <h3>
                          <Link to="/courses">Sign up For Free</Link>
                        </h3>
                        <span>Consulting Service</span>
                        <p>
                          Remember though that life coaching is about delivering great
                          results{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-4">
                    <div className="step-wrap">
                      <div className="step-img">
                        <figure>
                          <img src={Step2} alt="" />
                        </figure>
                      </div>
                      <div className="step">
                        <i>2</i>
                        <h3>
                          <a href="#">Buy A Course Online</a>
                        </h3>
                        <span>Bachelor Degree, Honours</span>
                        <p>
                          Remember though that life coaching is about delivering great
                          results
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-4">
                    <div className="step-wrap">
                      <div className="step-img">
                        <figure>
                          <img src={Step3} alt="" />
                        </figure>
                      </div>
                      <div className="step">
                        <i>3</i>
                        <h3>
                          <a href="#">Start Online Learning</a>
                        </h3>
                        <span>Course Socialism</span>
                        <p>
                          Remember though that life coaching is about delivering great
                          results{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section>
            <div className="block blackish medium-opacity">
              <div
                className="bg-fixed"
                style={{ backgroundImage: "url(assets/images/bg.jpg)" }}
              />
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-md-12 col-lg-6">
                    <div className="courses-info genrl-block">
                      <h2>
                        Courses from the <span>world’s leading experts</span>
                      </h2>
                      <p>
                        Nullam suscipit id ante bibendum bibendum. Vivamus interdum
                        gravida justo id venenatis. tempus velit sed, lobortis metus.
                        Donec id tincidunt libero, eget dapibus quam. Aenean felis ex,
                        blandit pretium pharetra eu.
                      </p>
                      <Link to="/courses" className="butn with-bg get-login-register border rounded-5">
                        Sign Up Now
                      </Link>
                    </div>
                  </div>
                  <div className="col-md-12 col-lg-6">
                    <ul className="row courses-box">
                      <li className="col-sm-6 col-md-6">
                        <div className="expl-courses blue-clr d-flex">
                          <div className="vertical-text">
                            <span>Explore 263 Courses</span>
                          </div>
                          <div className="expl-right align-self-center">
                            <i className="flaticon-idea" />
                            <h2>
                              <a href="courses.html">Technology</a>
                            </h2>
                          </div>
                        </div>
                      </li>
                      <li className="col-sm-6 col-md-6">
                        <div className="expl-courses green-clr d-flex">
                          <div className="vertical-text">
                            <span>Explore 93 Courses</span>
                          </div>
                          <div className="expl-right align-self-center">
                            <i className="flaticon-lab" />
                            <h2>
                              <a href="courses.html">Science</a>
                            </h2>
                          </div>
                        </div>
                      </li>
                      <li className="col-sm-6 col-md-6">
                        <div className="expl-courses golden-clr d-flex">
                          <div className="vertical-text">
                            <span>Explore 63 Courses</span>
                          </div>
                          <div className="expl-right align-self-center">
                            <i className="flaticon-teacher" />
                            <h2>
                              <a href="courses.html">Humanities</a>
                            </h2>
                          </div>
                        </div>
                      </li>
                      <li className="col-sm-6 col-md-6">
                        <div className="expl-courses purple-clr d-flex">
                          <div className="vertical-text">
                            <span>Explore 23 Courses</span>
                          </div>
                          <div className="expl-right align-self-center">
                            <i className="flaticon-portfolio" />
                            <h2>
                              <a href="courses.html">Marketing</a>
                            </h2>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* explore courses */}
          <section>
            <div className="block no-bottom">
              <div className="container">
                <div className="row justify-content-center align-items-center">
                  <div className="col-sm-12">
                    <div className="row align-items-center">
                      <div className="col-sm-12 col-md-6 col-lg-6">
                        <figure className="grow-img d-flex justify-content-center">
                          <img className='rounded' src={helping_img} alt="" />
                        </figure>
                      </div>
                      <div className="col-sm-12 col-md-6 col-lg-6">
                        <div className="help-people genrl-block">
                          <h2>Helping People Grow Their Careers.</h2>
                          <p>
                            Pellentesque ultrices orci id justo vehicula, non aliquam
                            erat lacinia. Mauris rhoncus venenatis tempor. Proin egestas
                            euismod felis a ullamcorper. Nullam lacus nisi, blandit eget
                            lacus ac, lobortis finibus augue.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* helping people */}
          <section>
            <div className="block">
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-6 col-md-3">
                    <div className="funfact2">
                      <i className="flaticon-idea" />
                      <div className="funfact2-meta">
                        <strong className="counter">25</strong>
                        <span>Years of Experience</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-md-3">
                    <div className="funfact2">
                      <i className="flaticon-mortarboard" />
                      <div className="funfact2-meta">
                        <strong className="counter">12+</strong>
                        <span>Years of Service</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-md-3">
                    <div className="funfact2">
                      <i className="flaticon-student" />
                      <div className="funfact2-meta">
                        <strong className="counter">100+</strong>
                        <span>Student</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-md-3">
                    <div className="funfact2">
                      <i className="flaticon-book" />
                      <div className="funfact2-meta">
                        <strong className="counter">10k</strong>
                        <span>Courses</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* funfact2 */}
          <section>
            <div className="block no-bottom">
              <div
                className="bg-image with-pattern half-height"
                style={{ backgroundImage: "url(assets/images/pattern.jpg)" }}
              />
              <div className="container">
                <div className="heading pb-0">
                  <h2>Popular Courses</h2>
                  <p>Our Online Course Categories</p>
                </div>
              </div>
              <div className="container">
                <div className="row">
                  <div className="col-12">
                  <Courses />
                  </div>
                </div>
              </div>
            </div>
          </section>
          
          <section>
            <div className="block no-bottom">
              <div className="container-fluid">
                <div className="heading">
                  <h2>Education Photos</h2>
                  <p>University is the largest fundraising campaigns</p>
                </div>
                <PhotoGallery_Slider />
                {/* <div className="gallery-car owl-carousel owl-theme d-flex" >
                  <div className="item">
                    <div className="gallery-meta">
                      <img src={helping_img} alt=""/>
                      <a
                        data-fancybox="gallery"
                        href="assets/images/gallery1.jpg"
                        className="icn"
                      >
                        <i className="fa fa-search" />
                      </a>
                    </div>
                  </div>
                  <div className="item">
                    <div className="gallery-meta">
                      <img src={helping_img} alt="" />
                      <a
                        data-fancybox="gallery"
                        href="assets/images/gallery2.jpg"
                        className="icn"
                      >
                        <i className="fa fa-search" />
                      </a>
                    </div>
                  </div>
                  <div className="item">
                    <div className="gallery-meta">
                      <img src={helping_img} alt="" />
                      <a
                        data-fancybox="gallery"
                        href="assets/images/gallery3.jpg"
                        className="icn"
                      >
                        <i className="fa fa-search" />
                      </a>
                    </div>
                  </div>
                  <div className="item">
                    <div className="gallery-meta">
                      <img src={helping_img} alt="" />
                      <a
                        data-fancybox="gallery"
                        href="assets/images/gallery4.jpg"
                        className="icn"
                      >
                        <i className="fa fa-search" />
                      </a>
                    </div>
                  </div>
                  <div className="item">
                    <div className="gallery-meta">
                      <img src={helping_img} alt="" />
                      <a
                        data-fancybox="gallery"
                        href="assets/images/gallery5.jpg"
                        className="icn"
                      >
                        <i className="fa fa-search" />
                      </a>
                    </div>
                  </div>
                  <div className="item">
                    <div className="gallery-meta">
                      <img src={helping_img} alt="" />
                      <a
                        data-fancybox="gallery"
                        href="assets/images/gallery6.jpg"
                        className="icn"
                      >
                        <i className="fa fa-search" />
                      </a>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </section>
          {/* gallery */}
          <section>
            <div className="block no-bottom">
              <div className="container pt-5">
                <div className="heading">
                  <h2>Meet Topers</h2>
                  <p>University is the largest fundraising campaign</p>
                </div>
                <div className="row">
                  <div className="col-sm-12">
                    <div className="student-contain">
                      <div className="row">
                        <div className="col-6 col-md-4 col-lg-3">
                          <div className="students">
                            <figure>
                              <img src={topper3} alt="" />
                            </figure>
                            <h2>
                              <a href="#">Peter Spenser</a>
                            </h2>
                            <span>Copywriter</span>
                            <ul>
                              <li>
                                <a href="#" className="stu-facebook">
                                  <i className="fab fa-facebook-f" />
                                </a>
                              </li>
                              <li>
                                <a href="#" className="stu-google-plus">
                                  <i className="fab fa-google-plus-g" />
                                </a>
                              </li>
                              <li>
                                <a href="#" className="stu-twitter">
                                  <i className="fab fa-twitter" />
                                </a>
                              </li>
                              <li>
                                <a href="#" className="stu-youtube">
                                  <i className="fab fa-youtube" />
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="col-6 col-md-4 col-lg-3">
                          <div className="students">
                            <figure>
                              <img src={topper2} alt="" />
                            </figure>
                            <h2>
                              <a href="#">Louse James</a>
                            </h2>
                            <span>Copywriter</span>
                            <ul>
                              <li>
                                <a href="#" className="stu-facebook">
                                  <i className="fab fa-facebook-f" />
                                </a>
                              </li>
                              <li>
                                <a href="#" className="stu-google-plus">
                                  <i className="fab fa-google-plus-g" />
                                </a>
                              </li>
                              <li>
                                <a href="#" className="stu-twitter">
                                  <i className="fab fa-twitter" />
                                </a>
                              </li>
                              <li>
                                <a href="#" className="stu-youtube">
                                  <i className="fab fa-youtube" />
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="col-6 col-md-4 col-lg-3">
                          <div className="students">
                            <figure>
                              <img src={topper1} alt="" />
                            </figure>
                            <h2>
                              <a href="#">Rackki Kam</a>
                            </h2>
                            <span>Copywriter</span>
                            <ul>
                              <li>
                                <a href="#" className="stu-facebook">
                                  <i className="fab fa-facebook-f" />
                                </a>
                              </li>
                              <li>
                                <a href="#" className="stu-google-plus">
                                  <i className="fab fa-google-plus-g" />
                                </a>
                              </li>
                              <li>
                                <a href="#" className="stu-twitter">
                                  <i className="fab fa-twitter" />
                                </a>
                              </li>
                              <li>
                                <a href="#" className="stu-youtube">
                                  <i className="fab fa-youtube" />
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="col-6 col-md-4 col-lg-3">
                          <div className="students">
                            <figure>
                              <img src={topper4} alt="" />
                            </figure>
                            <h2>
                              <a href="#">Willim Smith</a>
                            </h2>
                            <span>Copywriter</span>
                            <ul>
                              <li>
                                <a href="#" className="stu-facebook">
                                  <i className="fab fa-facebook-f" />
                                </a>
                              </li>
                              <li>
                                <a href="#" className="stu-google-plus">
                                  <i className="fab fa-google-plus-g" />
                                </a>
                              </li>
                              <li>
                                <a href="#" className="stu-twitter">
                                  <i className="fab fa-twitter" />
                                </a>
                              </li>
                              <li>
                                <a href="#" className="stu-youtube">
                                  <i className="fab fa-youtube" />
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <div className="read-all no-top">
                  <a href="#" className="butn1 butn-bg">
                    View All Students
                  </a>
                </div> */}
              </div>
            </div>
          </section>
          {/* students */}
          <section>
            <div className="block">
              <div className="container">
                <div className="heading">
                  <h2>Recent Articles</h2>
                  <p>University is the largest fundraising campaign</p>
                </div>
              </div>
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-sm-12 col-md-10 col-lg-10">
                    <Blog />
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* blog posts */}
        </main>
      </div>
    </div>
  )
}

export default Home
