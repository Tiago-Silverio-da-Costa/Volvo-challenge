import { Block } from 'vcc-ui';
import { useCars } from "../hooks/useCars";
import { CarCard } from "./carCard";
import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css";

const Swipe = () => {
  const cars = useCars();

  return (
    <Swiper
      modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay
      ]}
      loop={true}
      navigation={true}
      pagination={true}
      mousewheel={true}
      keyboard={true}
      parallax={true}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      cssMode={true}
    >
      {cars.map((car, index) =>
        <SwiperSlide key={index}>
          <Block extend={{ padding: 20, justifyContent: "center", display: "flex", gap: "1rem", alignItems: "center", flexDirection: "row" }}>
            <CarCard car={car} key={car.id} />
          </Block>
        </SwiperSlide>
      )}
    </Swiper>
  )
}

export default function HelloWorld() {


  return (
    <Swipe />
  );
};
