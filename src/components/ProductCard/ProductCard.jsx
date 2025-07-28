
const ProductCard = ({ image, title, price, buttonLabel }) => {
    return (
        <div className="bg-gray-100 rounded-xl p-3 shadow  transition space-y-7 py-5">
            <img src={image} alt={title} className="w-full h-40 object-cover mb-2 rounded-xl" />
            <h2 className="text-sm font-semibold">{title}</h2>
            <p className="text-gray-700 text-sm mb-2">{price}</p>
            <button className="bg-lime-400 text-black text-sm px-4 py-1 rounded-2xl hover:bg-lime-500">
                {buttonLabel}
            </button>
        </div>
    );
};

export default ProductCard;
