import Navbar from "../components/Navbar/Navbar";
import ProductSlider from "../components/ProductSlider/ProductSlider";
import Slider from "../components/Slider/Slider";
import TiltedBanner from "../components/TiltedBanner/TiltedBanner";
import TrustedSection from "../components/TrustedSection/TrustedSection";
import WhyUs from "../components/WhyUs/WhyUs";


const agriculturalProducts = [
    {
        image: "https://i.ibb.co/0pYcftxn/images-1.jpg",
        title: "JF Barbed Wire - 270 GSM",
        price: "₹4,995.00",
        buttonLabel: "Shop Now",
    },
    {
        image: "https://i.ibb.co/0pYcftxn/images-1.jpg",
        title: "FGC RustFree Fencing Poles",
        price: "₹499.00 – ₹1,589.00",
        buttonLabel: "Shop Now",
    },
    {
        image: "https://i.ibb.co/0pYcftxn/images-1.jpg",
        title: "JF Barbed Wire - 270 GSM",
        price: "₹4,995.00",
        buttonLabel: "Shop Now",
    },
    {
        image: "https://i.ibb.co/0pYcftxn/images-1.jpg",
        title: "FGC RustFree Fencing Poles",
        price: "₹499.00 – ₹1,589.00",
        buttonLabel: "Shop Now",
    },
    {
        image: "https://i.ibb.co/0pYcftxn/images-1.jpg",
        title: "JF Barbed Wire - 270 GSM",
        price: "₹4,995.00",
        buttonLabel: "Shop Now",
    },
    {
        image: "https://i.ibb.co/0pYcftxn/images-1.jpg",
        title: "FGC RustFree Fencing Poles",
        price: "₹499.00 – ₹1,589.00",
        buttonLabel: "Shop Now",
    },

];

const landscapeProducts = [
    {
        image: "https://i.ibb.co/0pYcftxn/images-1.jpg",
        title: "Antiqo Fence",
        price: "₹10,024.00 – ₹14,884.82",
        buttonLabel: "Shop Now",
    },
    {
        image: "https://i.ibb.co/0pYcftxn/images-1.jpg",
        title: "JF Privezy Grass Wall",
        price: "₹1,648.10 – ₹18,284.10",
        buttonLabel: "Shop Now",
    },
    {
        image: "https://i.ibb.co/0pYcftxn/images-1.jpg",
        title: "Antiqo Fence",
        price: "₹10,024.00 – ₹14,884.82",
        buttonLabel: "Shop Now",
    },
    {
        image: "https://i.ibb.co/0pYcftxn/images-1.jpg",
        title: "JF Privezy Grass Wall",
        price: "₹1,648.10 – ₹18,284.10",
        buttonLabel: "Shop Now",
    },
    {
        image: "https://i.ibb.co/0pYcftxn/images-1.jpg",
        title: "Antiqo Fence",
        price: "₹10,024.00 – ₹14,884.82",
        buttonLabel: "Shop Now",
    },
    {
        image: "https://i.ibb.co/0pYcftxn/images-1.jpg",
        title: "JF Privezy Grass Wall",
        price: "₹1,648.10 – ₹18,284.10",
        buttonLabel: "Shop Now",
    },

];

const Home = () => {
    return (
        <div>
            <Navbar />
            <Slider />

            {/* Products */}
            <div className="max-w-7xl mx-auto">
                <ProductSlider title="Agricultural Products" products={agriculturalProducts} />
                <ProductSlider title="Landscape Products" products={landscapeProducts} />
            </div>

            {/* Trusted Section */}
            <TrustedSection />

            {/* Why Us  Section*/}
            <WhyUs />

            <TiltedBanner />
        </div>
    );
};

export default Home;