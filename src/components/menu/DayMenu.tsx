import { FC, useEffect, useState } from "react";
import { IMenuProduct } from "../../types";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import connection from "../../lib/hub";
interface Props {
  products: IMenuProduct[];
}

const DayMenu: FC<Props> = ({ products }) => {
  const [productos, setProductos] = useState(products);
  useEffect(() => {
    // Escucha el evento de disponibilidad
    connection.on("disponibilidad", (data) => {
      console.log("data", data);
      console.log(productos.find((p) => p.idProducto === data.id));
      setProductos((prevProducts) => {
        return prevProducts.map((product) =>
          product.idProducto === data.id
            ? {
                ...product,
                producto: {
                  ...product.producto,
                  disponible: data.disponibilidad,
                },
              }
            : product
        );
      });
    });

    // Limpia el evento cuando el componente se desmonte
    return () => {
      connection.off("disponibilidad");
    };
  }, [productos]);

  return (
    <Swiper
      className="h-[50vh]"
      loop
      spaceBetween={500}
      slidesPerView={1}
      scrollbar={{ draggable: true }}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      // breakpoints={{
      //   640: {
      //     slidesPerView: 2,
      //     spaceBetween: 20,
      //   },
      //   768: {
      //     slidesPerView: 2,
      //     spaceBetween: 40,
      //   },
      //   1024: {
      //     slidesPerView: 3,
      //     spaceBetween: 10,
      //   },
      // }}
      pagination={{
        clickable: true,
      }}
      navigation
      modules={[Navigation, Pagination, Autoplay]}
    >
      {productos
        ?.filter((p) => p.producto.disponible)
        ?.map(({ producto }) => (
          <SwiperSlide
            key={producto.id}
            className="flex items-center justify-center "
          >
            <div className="flex flex-col items-center gap-x-4   md:flex-row">
              <img
                src={`https://pwabrd.labsystec.net/producto/${producto.id}.webp?lastUpdate=${producto.lastUpdate}`}
                alt={producto.nombre}
                className="w-full h-64 object-contain "
              />
              <div className="bg-white rounded-md mt-4  w-full p-4">
                <p className=" text-2xl font-semibold mb-2">
                  {producto.nombre}
                </p>
                <p className="text-center text-white rounded-md text-3xl font-semibold bg-green-600 w-fit px-4 py-2">
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
