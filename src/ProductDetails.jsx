import { useLoaderData, useParams } from "react-router-dom";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { IoStar } from "react-icons/io5";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";

const ProductDetails = () => {
  const products = useLoaderData();
  const { productId } = useParams();
  const product = products.find((p) => p.product_id === parseInt(productId));

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

  // ✅ Local state
  const [wishlist, setWishlist] = useState([]);
  const [cart, setCart] = useState([]);
  const [isInWishlist, setIsInWishlist] = useState(false);

  // ✅ Load previous wishlist from localStorage
  useEffect(() => {
    const savedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    setWishlist(savedWishlist);
    setIsInWishlist(savedWishlist.some((item) => item.product_id === product_id));

    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(savedCart);
  }, [product_id]);

  // ✅ Add to Cart
  const handleAddToCart = () => {
    const newCart = [...cart, product];
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
    toast.success("🛒 Added to Cart!");
  };

  // ✅ Add to Wishlist
  const handleAddToWishlist = () => {
    if (isInWishlist) return; // prevent duplicate
    const newWishlist = [...wishlist, product];
    setWishlist(newWishlist);
    localStorage.setItem("wishlist", JSON.stringify(newWishlist));
    setIsInWishlist(true);
    toast.success("💖 Added to Wishlist!");
  };

  return (
    <div className="bg-[#D7D7D7] min-h-screen pb-20">
      {/* Header */}
      <div className="bg-[#9538E2] text-white text-center py-12 px-4">
        <h2 className="text-3xl font-bold mb-4">Product Details</h2>
        <p className="max-w-2xl mx-auto text-sm lg:text-base">
          Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
        </p>
      </div>

      {/* Product Card */}
      <div className="flex justify-center -mt-20">
        <div className="max-w-5xl bg-white rounded-2xl shadow-md p-6 lg:flex gap-6 items-center h-[400px] overflow-hidden">
          {/* Product Image */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <img
              src={product_image}
              alt={product_title}
              className="rounded-xl w-[250px] h-[300px] object-contain bg-gray-100 p-3"
            />
          </div>

          {/* Product Info */}
          <div className="w-full lg:w-1/2 h-[400px] overflow-y-auto">
            <h3 className="text-xl font-bold mb-2">{product_title}</h3>
            <p className="text-base font-semibold text-[#9538E2] mb-1">
              Price: ${price}
            </p>

            <p
              className={`inline-block mb-2 px-3 py-1 text-xs rounded-full font-medium ${
                availability
                  ? "bg-green-100 text-green-600"
                  : "bg-red-100 text-red-600"
              }`}
            >
              {availability ? "In Stock" : "Out of Stock"}
            </p>

            <p className="text-gray-600 text-sm mb-2">{description}</p>

            <div className="mb-2">
              <h4 className="font-bold text-sm mb-1">Specification:</h4>
              <ul className="list-decimal list-inside text-gray-700 text-sm space-y-1">
                {Specification.map((spec, i) => (
                  <li key={i}>{spec}</li>
                ))}
              </ul>
            </div>

            <div className="mb-3">
              <h4 className="font-bold text-sm mb-1">Rating:</h4>
              <div className="flex items-center gap-1 text-yellow-500">
                {[...Array(5)].map((_, i) => (
                  <IoStar key={i} />
                ))}
                <span className="ml-2 text-black text-xs font-medium">
                  {rating}
                </span>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex gap-2 mt-3">
              <button
                onClick={handleAddToCart}
                className="bg-[#9538E2] text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-[#7e27c3] transition"
              >
                Add To Cart
              </button>

              <button
                onClick={handleAddToWishlist}
                disabled={isInWishlist}
                className={`p-2 rounded-full ${
                  isInWishlist
                    ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                    : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                }`}
              >
                <MdOutlineFavoriteBorder size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
