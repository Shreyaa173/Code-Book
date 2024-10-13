import React from 'react';
import next from "../assets/next.png";
import react from "../assets/react.svg";
import php from "../assets/php.png";
import swift from "../assets/swift.png";
import go from "../assets/go.png";
import Ruby from "../assets/ruby.png";
import node from "../assets/node.png";
import python from "../assets/python.png";
import HTML from "../assets/HTML.png";
import kotlin from "../assets/kotlin.png";
import java from "../assets/java.png";
import Chash from "../assets/Chash.png";
import CSS from "../assets/CSS.png";
import CPP from "../assets/CPP.png";
import JS from "../assets/JS.png";
import c from "../assets/C.png";
import Card from './Card';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
function CourseCards() {
  return (
    <>
      <div className="course-card-sec" id="course-card-sec">
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.8,
        }}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        <SwiperSlide>
          <Card imgurl={java} coursename={"Java"} authorname={"Kunal Kushwaha"} lessons={65} ytlink={"https://www.youtube.com/@kunalkushwaha"} />
        </SwiperSlide>

        <SwiperSlide>
          <Card imgurl={c} coursename={"C"} authorname={"Sandeep Jain"} lessons={50} ytlink={"https://www.youtube.com/@sandeepjain"} />
        </SwiperSlide>

        <SwiperSlide>
          <Card imgurl={CPP} coursename={"CPP"} authorname={"Gaurav Sen"} lessons={45} ytlink={"https://www.youtube.com/@gkcs"} />
        </SwiperSlide>

        <SwiperSlide>
          <Card imgurl={Chash} coursename={"C#"} authorname={"Anuj Bhaiya"} lessons={40} ytlink={"https://www.youtube.com/@AnujBhaiya"} />
        </SwiperSlide>

        <SwiperSlide>
          <Card imgurl={Ruby} coursename={"Ruby"} authorname={"Bhavin Patel"} lessons={55} ytlink={""} />
        </SwiperSlide>

        <SwiperSlide>
          <Card imgurl={python} coursename={"Python"} authorname={"Tanay Pratap"} lessons={70} ytlink={"https://www.youtube.com/@tanaypratap"} />
        </SwiperSlide>

        <SwiperSlide>
          <Card imgurl={CSS} coursename={"CSS"} authorname={"Prateek Narang"} lessons={60} ytlink={""} />       
        </SwiperSlide>

        <SwiperSlide>
          <Card imgurl={CSS} coursename={"CSS"} authorname={"Prateek Narang"} lessons={60} ytlink={"https://www.youtube.com/@PrateekNarang27/playlists"} />
            </SwiperSlide>

            <SwiperSlide>
          <Card imgurl={go} coursename={"Go"} authorname={"Akash Thakur"} lessons={35} ytlink={""} />
        </SwiperSlide>

        <SwiperSlide>
          <Card imgurl={HTML} coursename={"HTML"} authorname={"Vishal Kumar"} lessons={25} ytlink={"https://www.youtube.com/@tbhvishalkumar"} />
        </SwiperSlide>

        <SwiperSlide>
          <Card imgurl={JS} coursename={"Javascript"} authorname={"Nikhil Malankar"} lessons={55} ytlink={"https://www.youtube.com/@nikmlnkr"} />
        </SwiperSlide>

        <SwiperSlide>
          <Card imgurl={kotlin} coursename={"Kotlin"} authorname={"Sanket Singh"} lessons={42} ytlink={"https://www.youtube.com/@SanketSingh1"} />
        </SwiperSlide>

        <SwiperSlide>
          <Card imgurl={node} coursename={"Node.js"} authorname={"Hitesh Choudhary"} lessons={50} ytlink={"https://www.youtube.com/@HiteshCodeLab"} />
        </SwiperSlide>

        <SwiperSlide>
          <Card imgurl={swift} coursename={"Swift"} authorname={"Kunal Kushwaha"} lessons={65} ytlink={"https://www.youtube.com/@kunalkushwaha"} />
        </SwiperSlide>

        <SwiperSlide>
          <Card imgurl={php} coursename={"PHP"} authorname={"Anurag Tiwari"} lessons={65} ytlink={""} />
        </SwiperSlide>

        <SwiperSlide>
          <Card imgurl={react} coursename={"React"} authorname={"Amman Dhattarwal"} lessons={65} ytlink={"https://www.youtube.com/@AmanDhattarwal"} />
        </SwiperSlide>

        <SwiperSlide>
          <Card imgurl={php} coursename={"PHP"} authorname={"Anurag Tiwari"} lessons={65} ytlink={"https://www.youtube.com/@anuragtiwarime"} />
         </SwiperSlide>

          <SwiperSlide>
          <Card imgurl={react} coursename={"React.js"} authorname={"Amman Dhattarwal"} lessons={65} ytlink={"https://www.youtube.com/watch?v=gY5sGvq-8h8"} />
            </SwiperSlide>

          <SwiperSlide>
          <Card imgurl={next} coursename={"Next.js"} authorname={"College Wallah"} lessons={25} ytlink={"https://www.youtube.com/@CollegeWallahbyPW"} />
        </SwiperSlide>

        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
      </div>
    </>
  );
}

export default CourseCards;

