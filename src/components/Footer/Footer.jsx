import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className=" text-white rounded-2xl m-2 sm:m-4">
            <div className="bg-[#003366] rounded-2xl">
                <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">

                    
                    <div>
                        <h2 className="text-xl font-semibold">Join Our JF Products</h2>
                        <p className="text-gray-300 text-sm mt-2">
                            We’ll tell you about store updates and discounts
                        </p>

                        
                        <div className="mt-4">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full p-3 rounded-md bg-[#0d2b55] placeholder-gray-400 focus:outline-none"
                            />
                            <div className="flex items-center gap-2 mt-2">
                                <input type="checkbox" className="accent-lime-400" />
                                <label className="text-gray-300 text-sm">
                                    Yes, subscribe me to your newsletter.
                                </label>
                            </div>
                            <button className="mt-4 bg-white text-black px-6 py-2 rounded-full font-medium hover:bg-gray-100 transition">
                                Join Now
                            </button>
                        </div>

                        
                        <div className="flex items-center gap-3 mt-6">
                            <img
                                src="/logo.png"
                                alt="JF Logo"
                                className="w-14 h-14 object-contain rounded-4xl"
                            />
                            <div>
                                <h4 className="text-white font-semibold">Our Branches</h4>
                                <p className="text-gray-300 text-sm">
                                    Coimbatore, Chennai, Hyderabad, Goa, Kochi
                                </p>
                            </div>
                        </div>
                    </div>

                   
                    <div className="grid grid-cols-2 gap-6">
                        <div>
                            <h3 className="text-lg font-semibold mb-3">Information</h3>
                            <ul className="space-y-2 text-gray-300 text-sm">
                                <li><a href="#" className="hover:text-white">Home</a></li>
                                <li><a href="#" className="hover:text-white">Shop</a></li>
                                <li><a href="#" className="hover:text-white">Our Story</a></li>
                                <li><a href="#" className="hover:text-white">Blogs</a></li>
                                <li><a href="#" className="hover:text-white">Contact</a></li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold mb-3">Helpful</h3>
                            <ul className="space-y-2 text-gray-300 text-sm">
                                <li><a href="#" className="hover:text-white">FAQs</a></li>
                                <li><a href="#" className="hover:text-white">Terms & Conditions</a></li>
                                <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
                                <li><a href="#" className="hover:text-white">Shipping Policy</a></li>
                                <li><a href="#" className="hover:text-white">My Account</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="flex flex-col justify-between md:mt-60">
                        <button className="self-start bg-lime-400 text-black px-6 py-2 rounded-full font-medium hover:bg-lime-500 transition">
                            Contact Us
                        </button>
                    </div>
                </div>

            </div>
            <div className=" mt-4 flex flex-col md:flex-row items-center justify-between px-6 py-4 text-black text-sm container mx-auto">
                <p>Copyright © 2025 JF Products. All rights reserved</p>

                
                <div className="flex gap-4 mt-3 md:mt-0">
                    <a href="#" className="hover:text-white"><FaFacebookF /></a>
                    <a href="#" className="hover:text-white"><FaInstagram /></a>
                    <a href="#" className="hover:text-white"><FaYoutube /></a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
