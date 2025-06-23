import React from "react";
import { Carousel } from "react-bootstrap";
import bg1 from "../../assets/images/bg_1.jpg";
import bg2 from "../../assets/images/bg_2.jpg";
import bg3 from "../../assets/images/bg_3.jpg";

export default function CarouselComponent() {
  return (
    <Carousel>
      <Carousel.Item>
        <div
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.9)), url(${bg1})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "500px",
          }}
        >
          <div class="container p-5 ">
            <div
              class="row no-gutters slider-text align-items-center justify-content-start p-5"
              data-scrollax-parent="true"
            >
              <div class="col-md-7 ftco-animate mb-md-5">
                <h1 style={{ color: "white" }} class="mb-4">
                  We Are The Best Consulting Agency
                </h1>
                <p>
                  <a href="#" class="btn btn-primary px-4 py-3 mt-3">
                    Our Services
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.9)), url(${bg2})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "500px",
          }}
        >
          <div class="container p-5 ">
            <div
              class="row no-gutters slider-text align-items-center justify-content-start p-5"
              data-scrollax-parent="true"
            >
              <div class="col-md-7 ftco-animate mb-md-5">
                <h1 style={{ color: "white" }} class="mb-4">
                  We Are The Best Consulting Agency
                </h1>
                <p>
                  <a href="#" class="btn btn-primary px-4 py-3 mt-3">
                    Our Services
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.9)), url(${bg3})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "500px",
          }}
        >
          <div class="container p-5 ">
            <div
              class="row no-gutters slider-text align-items-center justify-content-start p-5"
              data-scrollax-parent="true"
            >
              <div class="col-md-7 ftco-animate mb-md-5">
                <h1 style={{ color: "white" }} class="mb-4">
                  We Are The Best Consulting Agency
                </h1>
                <p>
                  <a href="#" class="btn btn-primary px-4 py-3 mt-3">
                    Our Services
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </Carousel.Item>
    </Carousel>
  );
}
