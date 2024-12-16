import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";

import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";

import "./Project.css";

const Project = () => {
  const projects = [
    {
      image: "./project1.png",
      title: "Energency Sound Classification using DNN",
      info: "A Flask-based application designed to recognize and classify emergency sounds in real-time, helping to improve safety and responsiveness during critical situations.",
      github: "https://github.com/Prabhat8055/Emergency_Sound_classifiaction",
    },
    {
      image: "./project2.png",
      title: "Image Text Evaluation",
      info: "A Flask-based application designed to breathe new life into old, outdated documentation. It simplifies and modernizes the presentation of legacy documents by applying advanced formatting and readability filters. ",
      github: "https://github.com/Prabhat8055/ImageTextEval_Horizontal_Scroll",
    },
    {
      image: "./project3.png",
      title: "Hand Written Word Conversion using CNN",
      info: "A deep learning-based application designed to convert handwritten text into digital format using a Convolutional Neural Network (CNN).",
      github: "https://github.com/Prabhat8055/GSAP_HandWritten_word_conversion_website",
    },
    {
      image: "./project4.png",
      title: "Personal Portfolio-Website",
      info: "A React base Personal protfolio Hosted on vercel ",
      github: "https://github.com/Prabhat8055/",
    },
  ];

  return (
    <div id="projects">
      <h1 className="headding">My Work</h1>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        spaceBetween={10}
        slidesPerView={3}
        coverflowEffect={{
          rotate: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: ".swiper-pagination", clickable: true }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper-container"
      >
        {projects.map((project, index) => (
          <SwiperSlide key={index}>
            <div className="project-slide">
              <img
                src={project.image}
                alt={`Project ${index + 1}`}
                className="img"
              />
              <h3>{project.title}</h3>
              <p>{project.info}</p>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="github-button"
              >
                View on GitHub
              </a>
            </div>
          </SwiperSlide>
        ))}
        <div className="slider-controller">
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
  );
};

export default Project;
