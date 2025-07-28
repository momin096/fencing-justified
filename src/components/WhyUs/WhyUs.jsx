import { BiBadgeCheck } from "react-icons/bi";
import { PiUserCircleDashed } from "react-icons/pi";
import { FaConnectdevelop } from "react-icons/fa";


const WhyUs = () => {
    return (
        <div className="py-16 bg-white text-center px-4 max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Why Us</h2>
            <p className="text-gray-700 max-w-2xl mx-auto mb-12">
                We specialize in delivering durable and innovative fencing solutions built to last. With a focus on quality and trust, we help secure spaces across industries and communities.
            </p>

            <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto mt-30">
                {/* Card 1 */}
                <div className="bg-gradient-to-tr from-white to-blue-300  shadow-md rounded-xl px-6 py-16 text-left">
                    <div className="text-3xl text-black mb-4">
                        <BiBadgeCheck className="text-5xl" />
                    </div>
                    <h3 className="text-lg font-bold mb-2">
                        Unmatched Durability with Corrosion-Free Technology
                    </h3>
                    <p className="text-sm text-gray-600">
                        Our JF-270 barbed wire features a robust 270 GSM zinc coating, ensuring superior resistance against rust and corrosion. Paired with stainless steel binding wire, our fencing solutions are designed to withstand harsh environmental conditions, offering longevity and reliability.
                    </p>
                </div>
                {/* Card 2 */}
                <div className="bg-gradient-to-bl from-blue-600 to-blue-950 text-white shadow-md rounded-xl p-6 text-left md:relative md:bottom-16">
                    <div className="text-3xl text-white mb-4">
                        <PiUserCircleDashed className="text-5xl" />
                    </div>
                    <h3 className="text-lg font-bold mb-2">Customer-Centric Approach</h3>
                    <p className="text-sm text-white">
                        At JF Products, customer satisfaction is paramount. Our team prides itself on delivering timely services, maintaining transparent communication, and ensuring a seamless purchasing experience. Our commitment to excellence is reflected in the positive feedback from our valued clients.
                    </p>
                </div>

                {/* Card 3 */}
                <div className="bg-gradient-to-tr from-white to-blue-300  shadow-md rounded-xl p-6 text-left">
                    <div className="text-3xl text-black mb-4">
                        <FaConnectdevelop className="text-5xl" />
                    </div>
                    <h3 className="text-lg font-bold mb-2">Innovative and Diverse Product Range</h3>
                    <p className="text-sm text-gray-600">
                        We offer a wide array of fencing solutions, including Polyhex Mesh, Australian Trellis, and GI Poultry Mesh, catering to various needs from agricultural to residential applications. Our products combine functionality with aesthetic appeal, ensuring both security and style.
                    </p>
                </div>
            </div>

            {/* Contact Button */}
            <div className="mt-10">
                <button className="bg-lime-500 hover:bg-lime-600 text-white px-6 py-2 rounded-full transition-all">
                    Contact Us
                </button>
            </div>
        </div>
    );
};

export default WhyUs;
