import { useLoaderData, useParams } from "react-router-dom";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { IoStar } from "react-icons/io5";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";

const ProductDetails = () => {
  const products = useLoaderData();
  const { productId } = useParams();
  const product = products.find((p) => p.product_id === parseInt(productId));

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#D7D7D7]">
        <h1 className="text-2xl font-bold">Product not found.</h1>
      </div>
    );
  }

  const {
    product_id,
    product_title,
    product_image,
    description,
    price,
    rating,
    availability,
    Specification,
  } = product;

  const [wishlist, setWishlist] = useState([]);
  const [cart, setCart] = useState([]);
  const [isInWishlist, setIsInWishlist] = useState(false);


  useEffect(() => {
    const savedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    setWishlist(savedWishlist);
    setIsInWishlist(savedWishlist.some((item) => item.product_id === product_id));

    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(savedCart);
  }, [product_id]);

  const handleAddToCart = () => {
    const newCart = [...cart, product];
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
    toast.success("🛒 Added to Cart!");
  };

  const handleAddToWishlist = () => {
    if (isInWishlist) return;
    const newWishlist = [...wishlist, product];
    setWishlist(newWishlist);
    localStorage.setItem("wishlist", JSON.stringify(newWishlist));
    setIsInWishlist(true);
    toast.success("💖 Added to Wishlist!");
  };

  useEffect(() => {
    document.title = `${product_title} | Gadget Heaven`;
  }, [product_title]);

  return (
    <div className="bg-[#D7D7D7] min-h-screen pb-20">
      <div className="bg-[#9538E2] text-white text-center py-12 px-4">
        <h2 className="text-3xl font-bold mb-4">Product Details</h2>
        <p className="max-w-2xl mx-auto mb-20 text-sm lg:text-base">
          Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
        </p>
      </div>

      <div className="flex justify-center -mt-20 px-4 sm:px-6">

        <div className="w-full max-w-5xl bg-white rounded-2xl shadow-xl p-4 sm:p-6 flex flex-col lg:flex-row gap-6 items-start">
          <div className="w-full lg:w-1/2 flex justify-center flex-shrink-0 mb-4 lg:mb-0">
            <img
              src={product_image}
              alt={product_title}
              className="rounded-xl w-full max-w-xs h-auto max-h-80 object-contain bg-gray-100 p-3"
            />
          </div>
          <div className="w-full lg:w-1/2">
            <h3 className="text-2xl sm:text-3xl font-bold mb-2">{product_title}</h3>
            <p className="text-lg font-semibold text-[#9538E2] mb-2">
              Price: ${price}
            </p>

            <p
              className={`inline-block mb-3 px-3 py-1 text-sm rounded-full font-medium ${availability
                ? "bg-green-100 text-green-600"
                : "bg-red-100 text-red-600"
                }`}
            >
              {availability ? "In Stock" : "Out of Stock"}
            </p>

            <p className="text-gray-600 text-base mb-4">{description}</p>

            <div className="mb-4">
              <h4 className="font-bold text-base mb-2">Specification:</h4>
              <ul className="list-disc list-inside text-gray-700 text-sm space-y-1 pl-4">
                {Specification.map((spec, i) => (
                  <li key={i}>{spec}</li>
                ))}
              </ul>
            </div>

            <div className="mb-4">
              <h4 className="font-bold text-base mb-1">Rating:</h4>
              <div className="flex items-center gap-1 text-yellow-500">
                {[...Array(5)].map((_, i) => (
                  <IoStar key={i} />
                ))}
                <span className="ml-2 text-black text-sm font-medium">
                  {rating}
                </span>
              </div>
            </div>

            <div className="flex gap-3 mt-4">
              <button
                onClick={handleAddToCart}
                className="bg-[#9538E2] text-white px-5 py-2 rounded-lg text-base font-semibold hover:bg-[#7e27c3] transition flex-grow sm:flex-grow-0"
              >
                Add To Cart
              </button>

              <button
                onClick={handleAddToWishlist}
                disabled={isInWishlist}
                className={`p-3 rounded-full ${isInWishlist
                  ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                  : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                  } flex items-center justify-center`}
              >
                <MdOutlineFavoriteBorder size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;