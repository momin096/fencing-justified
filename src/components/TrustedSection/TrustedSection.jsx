import { GiStarsStack } from "react-icons/gi";
import { CiFaceSmile } from "react-icons/ci";
import { FiTruck } from "react-icons/fi";


const TrustedSection = () => {
    return (
        <div className="p-5">
            <div className="bg-gradient-to-r from-[#01264D] via-[#063C7C] to-[#01264D] text-white rounded-2xl p-8 my-10 max-w-7xl mx-auto py-20 ">
                <h2 className="text-center text-xl md:text-3xl font-semibold mb-10">
                    Trusted by over 6K+ customers
                </h2>

                <div className="flex flex-col md:flex-row items-center justify-around gap-10 text-center">
                    {/* Premium Products */}
                    <div className="flex  items-center gap-2 justify-center">
                        <div className="bg-white text-black p-2 rounded-full mb-2">
                            <GiStarsStack className="text-4xl" />
                        </div>
                        <div className="text-start">
                            <p className="font-medium">Premium</p>
                            <p className="text-sm text-gray-200">Products</p>
                        </div>
                    </div>

                    {/* Google Review */}
                    <div className="flex  items-center gap-2 justify-center">
                        <div className="bg-white text-black p-2 rounded-full mb-2">
                            <CiFaceSmile className="text-4xl" />
                        </div>
                        <div className="text-start">
                            <p className="font-medium">4000+</p>
                            <p className="text-sm text-gray-200">Google Review</p>
                        </div>
                    </div>

                    {/* Delivery */}
                    <div className="flex  items-center gap-2 justify-center">
                        <div className="bg-white text-black p-2 rounded-full mb-2">
                            <FiTruck className="text-4xl" />
                        </div>
                        <div className="text-start">
                            <p className="font-medium">Delivery</p>
                            <p className="text-sm text-gray-200">Across India</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TrustedSection;
