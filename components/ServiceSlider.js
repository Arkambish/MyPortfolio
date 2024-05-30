import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// icons
import {
  RxCrop,
  RxPencil2,
  RxDesktop,
  RxReader,
  RxPencil1,
  RxMobile,
  RxArrowTopRight,
} from "react-icons/rx";

// data
const serviceData = [
  {
    icon: <RxDesktop />,
    title: "Development",
    description: "Unleash creativity in web and software engineering.",
  },
  {
    icon: <RxPencil2 />,
    title: "Design",
    description: "Unleash creativity in graphic and user experience design.",
  },
  {
    icon: <RxCrop />,
    title: "Branding",
    description: "Craft a truly unique brand identity that stands out boldly.",
  },

  {
    icon: <RxReader />,
    title: "Content Creating",
    description: "Create engaging content that captivates audiences.",
  },
  {
    icon: <RxPencil1 />,
    title: "Editing",
    description: "Polish content with meticulous precision, care, and finesse.",
  },
];

const ServiceSlider = () => {
  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
      }}
      freeMode={true}
      pagination={{
        clickable: true,
      }}
      modules={[FreeMode, Pagination]}
      className="h-[240x] sm-h-[340px]"
    >
      {serviceData.map((item, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="bg-[rgba(65,47,123,0.15)] mb-3 h-max rounded-lg px-6 py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300">
              <div className="text-4xl text-accent mb-4">{item.icon}</div>
              <div className="mb-8">
                <div className="mb-2 text-lg ">{item.title}</div>
                <p className="max-w-[350px] leading-normal">
                  {item.description}
                </p>
              </div>
              <div>
                <RxArrowTopRight className="group-hover:rotate-45 group-hover:text-accent transition-all duration-300 " />
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default ServiceSlider;
