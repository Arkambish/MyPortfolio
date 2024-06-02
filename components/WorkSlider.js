import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import { BsArrowRight } from "react-icons/bs";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import Image from "next/image";
import Link from "next/link";
import { imageConfigDefault } from "next/dist/shared/lib/image-config";

const workSlides = {
  slides: [
    {
      images: [
        {
          title: "title",
          path: "/pro1.jpg",
          url: "https://github.com/Arkambish/BlogWeb",
        },
        {
          title: "title",
          path: "/thumb2.jpg",
          url: "#", // Add a URL for this image
        },
        {
          title: "title",
          path: "/thumb3.jpg",
          url: "#", // Add a URL for this image
        },
        {
          title: "title",
          path: "/thumb4.jpg",
          url: "#", // Add a URL for this image
        },
      ],
    },
    {
      images: [
        {
          title: "title",
          path: "/thumb4.jpg",
          url: "#", // Add a URL for this image
        },
        {
          title: "title",
          path: "/pro1.jpg",
          url: "https://github.com/Arkambish/BlogWeb",
        },
        {
          title: "title",
          path: "/thumb2.jpg",
          url: "#", // Add a URL for this image
        },
        {
          title: "title",
          path: "/thumb3.jpg",
          url: "#", // Add a URL for this image
        },
      ],
    },
  ],
};

const WorkSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="h-[280px] sm-h-[480px]"
    >
      {workSlides.slides.map((slide, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="grid grid-cols-2 grid-rows-2 gap-12 h-fit cursor-pointer">
              {slide.images.map((image, index) => {
                return (
                  <Link href={image.url} target="_blank" key={index}>
                    <div className="relative rounded-lg overflow-hidden flex items-center justify-center group ">
                      <div className="flex items-center justify-center relative overflow-hidden group">
                        <Image
                          src={image.path}
                          width={500}
                          height={300}
                          alt=""
                        />

                        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700"></div>
                        <div className="absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300">
                          <div className="flex items-center gap-x-2 text-[13px] tracking-[0.2em] uppercase">
                            <div className="delay-100  ">live</div>
                            <div className="translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150">
                              project
                            </div>
                            <div className=" text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200">
                              <BsArrowRight />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default WorkSlider;
