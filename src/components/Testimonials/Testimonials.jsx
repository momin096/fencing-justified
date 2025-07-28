import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Testimonials = () => {
    const testimonials = [
        {
            name: "Samuel Varughese",
            text: "I had initial issue with stock availability and delivery. Once the product arrived on site the work was completed very fast (400ft). Value for money and easy to install. Happy with the product.",
        },
        {
            name: "Alicia Gomez",
            text: "Great experience! The service was outstanding, and the product quality exceeded expectations. Definitely will recommend to friends and family.",
        },
        {
            name: "Michael Lee",
            text: "Quick installation and friendly staff. Everything went smoothly from order to delivery. Totally worth it! Definitely will recommend to friends and family.",
        },
    ];

    return (
        <div className="w-full py-12 bg-white my-20 px-5 ">
           
            <h2 className="text-3xl font-bold text-center mb-10">
                Why Customers Love <span className="text-blue-600">Us?</span>
            </h2>

            <div className="flex flex-col md:flex-row items-center justify-center gap-8 max-w-5xl mx-auto">
                
               
                <div className="flex-1 w-full max-w-xl">
                    <Swiper
                        modules={[Navigation, Pagination]}
                        navigation
                        pagination={{ clickable: true }}
                        spaceBetween={20}
                        slidesPerView={1}
                        loop={true}             
                        className="w-full"
                    >
                        {testimonials.map((item, index) => (
                            <SwiperSlide key={index}>
                                <div className="bg-gray-50 rounded-xl shadow-md p-10 relative">

                                   
                                    <div className="text-green-500 text-9xl mb-3">❝</div>

                                    
                                    <p className="text-gray-700 text-base leading-relaxed mb-4 text-shadow-md">
                                        {item.text}
                                    </p>

                                   
                                    <h3 className="font-bold text-gray-900 text-xl">
                                        - {item.name}
                                    </h3>

                                  
                                    <div className="mt-4 border-t border-dotted border-gray-300 pt-4"></div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                <div className="flex-shrink-0">
                    <div className="bg-white rounded-xl shadow-md p-2 border border-gray-200">
                        <img
                            src="https://i.ibb.co/9H0140Km/fdasdfdsa.png" 
                            alt="Happy Customer"
                            className="w-60 h-72 md:w-72 md:h-80 rounded-xl object-cover"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;
