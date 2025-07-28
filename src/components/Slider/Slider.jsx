import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./Slider.css"

const Slider = () => {
    const slides = [
        { id: 1, title: "JF Grass Wall", desc: "The Perfect Blend Of Greenery", image: "https://i.ibb.co/zH6g5VG6/depositphotos-10867133-stock-photo-wall-background-on-green-grass.webp" },
        { id: 2, title: "Premium Turf", desc: "Durable & Realistic Look", image: "https://i.ibb.co/0pYcftxn/images-1.jpg" },
        { id: 3, title: "Artificial Lawn", desc: "Ideal for Indoor & Outdoor", image: "https://i.ibb.co/Cp1yPBkF/images.jpg" },
        { id: 4, title: "JF Fence Green", desc: "Privacy & Nature Combined" , image: "https://i.ibb.co/TqqqVfqf/280-rs-for-each-panel-on-buying-in-bulk-grass-wall-panels-lamansh-2x1-5-ft-size-of-each-panel-artifi.webp"},
        { id: 5, title: "Eco Green Mat", desc: "Environment Friendly", image: "https://i.ibb.co/wN8nMzZv/149435060-green-grass-wall-texture-natural-green-leaves-wall-background-eco-wall.jpg" },
    ];

    return (
        <div className="w-full bg-white relative">
            <Swiper
                slidesPerView={1.6}
                centeredSlides={true}
                loop={true}
                spaceBetween={30}
                navigation={true}
                modules={[Navigation]}
                className="w-full px-4 md:px-10 banner-swiper"
                breakpoints={{
                    768: { slidesPerView: 1.7 },
                    1024: { slidesPerView: 1.6 },
                }}
            >
                {slides.map((slide) => (
                    <SwiperSlide key={slide.id}>
                        <div className="bg-gray-100 rounded-xl p-6 flex flex-col md:flex-row items-center justify-between h-[500px]">
                            <div className="w-full md:w-1/2 flex justify-center">
                                <div className="w-[350px] h-[300px] md:h-[400px] bg-green-400 rounded-xl">
                                    <img className="w-full max-w-[350px] max-h-[300px] md:max-h-[400px] h-full object-cover rounded-xl" src={slide.image} alt="" />
                                </div>
                            </div>
                            <div className="w-full md:w-1/2 text-center md:text-left mt-4 md:mt-0 ml-1">
                                <h2 className="text-2xl font-bold">{slide.title}</h2>
                                <p className="text-gray-600 mt-2">{slide.desc}</p>
                                <button className="mt-4 bg-lime-400 hover:bg-lime-500 text-black px-5 py-2 rounded-full">
                                    Shop Now
                                </button>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Slider;
