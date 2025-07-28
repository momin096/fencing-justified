import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import ProductCard from "../ProductCard/ProductCard";


const slugify = (text) =>
  text.toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]/g, "");

const ProductSlider = ({ title, products }) => {
  const sliderId = slugify(title); 

  return (
    <div className="my-8 relative py-2 lg:py-10 mx-8 md:mx-0">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>

      <Swiper
        modules={[Navigation]}
        navigation={{
          nextEl: `.swiper-button-next-${sliderId}`,
          prevEl: `.swiper-button-prev-${sliderId}`,
        }}
        spaceBetween={20}
        slidesPerView={4}
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 4 },
        }}
      >
        {products.map((product, index) => (
          <SwiperSlide key={index}>
            <ProductCard {...product} />
          </SwiperSlide>
        ))}
      </Swiper>

      
      <div
        className={`swiper-button-prev-${sliderId} absolute top-1/2 -left-4 z-10 text-2xl text-black cursor-pointer bg-white border-gray-400 border-2 rounded-full px-2 pb-1`}
      >
        ←
      </div>
      <div
        className={`swiper-button-next-${sliderId} absolute top-1/2 -right-4 z-10 text-2xl text-black cursor-pointer bg-white border-gray-400 border-2 rounded-full px-2 pb-1`}
      >
        →
      </div>
    </div>
  );
};

export default ProductSlider;
