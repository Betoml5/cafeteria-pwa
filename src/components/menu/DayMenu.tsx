import { FC } from "react";
import { IMenuProduct } from "../../types";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
interface Props {
  products: IMenuProduct[];
}

const DayMenu: FC<Props> = ({ products }) => {
  return (
    <Swiper
      className="h-[50vh]"
      loop
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
      scrollbar={{ draggable: true }}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      breakpoints={{
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 10,
        },
      }}
      pagination={{
        clickable: true,
      }}
      navigation
      modules={[Navigation, Pagination, Autoplay]}
    >
      {products.map(({ producto }) => (
        <SwiperSlide
          key={producto.id}
          className="flex items-center justify-center "
        >
          <div className="flex flex-col items-center gap-x-4 md:flex-row">
            <img
              src={`https://pwabrd.labsystec.net/producto/${producto.id}.webp`}
              alt={producto.nombre}
              className="w-full h-64 object-contain "
            />
            <div className="w-full">
              <p className="text-center text-lg font-semibold">
                {producto.nombre}
              </p>
              <p className="text-center text-lg font-semibold">
                ${producto.precio.toFixed(2)}
              </p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default DayMenu;
