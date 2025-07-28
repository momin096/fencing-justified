import { useState } from "react";
import { TbBrandGoogleMaps } from "react-icons/tb";

const branches = [
    {
        name: "COIMBATORE",
        address: "JRR Towers (2nd Floor), Pattalamma Temple Rd, Basavanagudi, Bangalore, 560004",
        mapImage: "https://i.ibb.co/gZkYXGHM/india-map-2019.jpg",
    },
    {
        name: "CHENNAI",
        address: "Chennai Office, Anna Salai, Chennai, Tamil Nadu",
        mapImage: "https://i.ibb.co/gZkYXGHM/india-map-2019.jpg",
    },
    {
        name: "HYDERABAD",
        address: "Hyderabad Office, Banjara Hills, Hyderabad",
        mapImage: "https://i.ibb.co/gZkYXGHM/india-map-2019.jpg",
    },
    {
        name: "GOA",
        address: "Goa Office, Panaji",
        mapImage: "https://i.ibb.co/gZkYXGHM/india-map-2019.jpg",
    },
    {
        name: "KOCHI",
        address: "Kochi Office, MG Road",
        mapImage: "https://i.ibb.co/gZkYXGHM/india-map-2019.jpg",
    },
    {
        name: "MUMBAI",
        address: "Mumbai Office, Andheri East",
        mapImage: "https://i.ibb.co/gZkYXGHM/india-map-2019.jpg",
    },
];

const Contact = () => {
    const [activeBranch, setActiveBranch] = useState(branches[0]);

    return (
        <div className="w-full bg-white py-12 px-4 sm:px-6 lg:px-12">
            
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 mb-6">
                {branches.map((branch) => (
                    <button
                        key={branch.name}
                        onClick={() => setActiveBranch(branch)}
                        className={`flex flex-col items-center transition text-sm sm:text-base ${
                            activeBranch.name === branch.name
                                ? "text-green-700 font-bold"
                                : "text-gray-600"
                        }`}
                    >
                        <div
                            className={`w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center rounded-md mb-2 border ${
                                activeBranch.name === branch.name
                                    ? "bg-green-100 border-green-400"
                                    : "bg-gray-100 border-gray-300"
                            }`}
                        >
                            <TbBrandGoogleMaps className="text-2xl sm:text-3xl" />
                        </div>
                        {branch.name}
                    </button>
                ))}
            </div>

            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
                
                <div className="bg-gradient-to-tl from-blue-950 to-blue-700 rounded-2xl p-6 sm:p-8 text-white shadow-lg">
                    <h3 className="text-xl sm:text-2xl font-bold mb-6">Contact Us</h3>

                    <form className="flex flex-col gap-4">
                        <input
                            type="text"
                            placeholder="Your Name"
                            className="p-3 rounded-lg bg-blue-700 text-white placeholder-gray-300 focus:outline-none w-full"
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            className="p-3 rounded-lg bg-blue-700 text-white placeholder-gray-300 focus:outline-none w-full"
                        />
                        <input
                            type="tel"
                            placeholder="Phone *"
                            className="p-3 rounded-lg bg-blue-700 text-white placeholder-gray-300 focus:outline-none w-full"
                        />
                        <textarea
                            placeholder="Write message"
                            rows="4"
                            className="p-3 rounded-lg bg-blue-700 text-white placeholder-gray-300 focus:outline-none w-full"
                        ></textarea>

                        <button className="bg-lime-400 text-black font-semibold py-2 rounded-lg hover:bg-lime-500 transition">
                            Submit
                        </button>
                    </form>
                </div>

                <div className="flex flex-col">
                    <img
                        src={activeBranch.mapImage}
                        alt={`${activeBranch.name} map`}
                        className="w-full h-64 sm:h-80 md:h-[22rem] object-cover rounded-xl shadow-sm"
                    />

                    <div className="bg-white border rounded-xl shadow-md p-4 mt-3 flex items-start gap-2">
                        <div className="text-blue-900 text-xl">📍</div>
                        <p className="text-gray-700 text-sm sm:text-base">
                            <strong>{activeBranch.address.split(",")[0]}</strong>
                            {activeBranch.address.replace(activeBranch.address.split(",")[0], "")}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
