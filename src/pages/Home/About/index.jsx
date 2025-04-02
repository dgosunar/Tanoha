import React from "react";
import styled from "styled-components";
import { Layout } from "../../../Layout";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper/modules";
import CompletLogo from "../../../Assets/CompletLogoLight.png";

function About() {
  return (
    <Layout>
      <Container>
        <img
          style={{
            filter: "drop-shadow(5px 5px 10px black)",
            maxHeight: "175px",
          }}
          src={CompletLogo}
          alt="CompletLogo"
        />
        <span className="mediumText">
          Tanoha es una aplicación web desarrollada con React.js que permite la
          gestión eficiente de tareas, notas y hábitos. Su nombre proviene de
          Tasks, Notes, and Habits (o en español: Tareas, Notas y Hábitos).
        </span>
        <div className="mySwiper">
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            pagination={true}
            modules={[EffectCoverflow, Pagination]}
          >
            <SwiperSlide>
              <img
                src={`${process.env.PUBLIC_URL}/Presentación/Img1.jpeg`}
                width="150"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={`${process.env.PUBLIC_URL}/Presentación/Img2.jpeg`}
                width="150"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={`${process.env.PUBLIC_URL}/Presentación/Img3.jpeg`}
                width="150"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={`${process.env.PUBLIC_URL}/Presentación/Img4.jpeg`}
                width="150"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={`${process.env.PUBLIC_URL}/Presentación/Img5.jpeg`}
                width="150"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={`${process.env.PUBLIC_URL}/Presentación/Img6.jpeg`}
                width="150"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={`${process.env.PUBLIC_URL}/Presentación/Img7.jpeg`}
                width="150"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={`${process.env.PUBLIC_URL}/Presentación/Img8.jpeg`}
                width="150"
              />
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="ajajsjada">
          <span className="primarySubtitle">Descripción</span>
          <span>Con Tanoha, puedes:</span>
          <span>
            - Gestionar tareas: Crear, programar y marcar tareas como
            completadas.
          </span>
          <span>
            - Crear y organizar notas: Almacenar información de manera
            estructurada.
          </span>
          <span>
            - Manejar hábitos (Próximamente): Una funcionalidad en desarrollo
            para ayudarte a construir y mantener hábitos positivos.
          </span>
          <span>
            - Espacios de trabajo personalizados: Crea múltiples espacios de
            trabajo con tareas, notas y hábitos independientes para organizar
            mejor tus proyectos y actividades.
          </span>
        </div>
      </Container>
    </Layout>
  );
}

export default About;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 16px;
  width: calc(75% - 50px);
  padding: 21px 50px;
  background-color: rgba(0, 0, 0, 0.6);
  border-radius: 21px;
  overflow: auto;
  scrollbar-width: none;

  @media screen and (max-width: 768px) {
    width: calc(100% - 42px);
    padding: 21px 21px;
  }

  .ajajsjada {
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
  }

  .mySwiper {
    display: flex;
    width: 90%;
    max-width: 700px;
    @media screen and (max-width: 768px) {
      width: 100%;
    }
  }

  .swiper {
    display: flex;
    width: 90%;
    height: 500px;
    max-width: 700px;
    padding-top: 10px;
    padding-bottom: 40px;
    @media screen and (max-width: 768px) {
      width: 100%;
    }
  }

  .swiper-slide {
    background-position: center;
    background-size: cover;
    width: 240px;
    height: 506px;
  }

  .swiper-slide img {
    display: block;
    width: 100%;
  }
`;
