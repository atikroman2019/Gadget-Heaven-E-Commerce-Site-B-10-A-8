import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Dashboard = () => {
  const navigate = useNavigate();

  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [activeTab, setActiveTab] = useState("cart");
  const [total, setTotal] = useState(0);
  const [showModal, setShowModal] = useState(false);


  useEffect(() => {
    document.title = "Dashboard | Gadget Heaven";
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    const savedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    setCart(savedCart);
    setWishlist(savedWishlist);
    updateTotal(savedCart);
  }, []);

  const updateTotal = (cartItems) => {
    const sum = cartItems.reduce((acc, item) => acc + item.price, 0);
    setTotal(sum);
  };
  const handleSort = () => {
    const sorted = [...cart].sort((a, b) => b.price - a.price);
    setCart(sorted);
  };
  const handlePurchase = () => {
    if (cart.length === 0) return;

    setShowModal(true);
    setCart([]);
    setTotal(0);
    localStorage.setItem("cart", JSON.stringify([]));
  };

  const handleDeleteFromWishlist = (id) => {
    const updated = wishlist.filter((item) => item.product_id !== id);
    setWishlist(updated);
    localStorage.setItem("wishlist", JSON.stringify(updated));
    toast.info("❌ Removed from wishlist", { autoClose: 1500 });
  };

  return (
    <div className="bg-[#D7D7D7] min-h-screen py-10 px-6">
      <h2 className="text-3xl font-bold text-center text-[#9538E2] mb-8">
        Dashboard
      </h2>
      <div className="flex justify-center gap-6 mb-8">
        <button
          onClick={() => setActiveTab("cart")}
          className={`px-5 py-2 rounded-lg font-semibold ${activeTab === "cart" ? "bg-[#9538E2] text-white" : "bg-white"
            }`}
        >
          Cart
        </button>
        <button
          onClick={() => setActiveTab("wishlist")}
          className={`px-5 py-2 rounded-lg font-semibold ${activeTab === "wishlist" ? "bg-[#9538E2] text-white" : "bg-white"
            }`}
        >
          Wish List
        </button>
      </div>
      <div className="max-w-6xl mx-auto bg-white shadow-md rounded-2xl p-6">
        {activeTab === "cart" ? (
          <>
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-semibold">
                Total Price: <span className="text-[#9538E2]">${total}</span>
              </h3>
              <button
                onClick={handleSort}
                className="bg-[#9538E2] text-white px-4 py-2 rounded-lg hover:bg-[#7e27c3]"
              >
                Sort by Price
              </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {cart.length > 0 ? (
                cart.map((item) => (
                  <div
                    key={item.product_id}
                    className="p-4 border rounded-xl shadow-sm bg-gray-50"
                  >
                    <img
                      src={item.product_image}
                      alt={item.product_title}
                      className="rounded-lg h-40 w-full object-contain mb-3"
                    />
                    <h4 className="font-semibold">{item.product_title}</h4>
                    <p className="text-sm text-gray-600">${item.price}</p>
                  </div>
                ))
              ) : (
                <p className="text-center text-gray-500 col-span-3">
                  No items in cart.
                </p>
              )}
            </div>
            <div className="text-center mt-10">
              <button
                onClick={handlePurchase}
                disabled={cart.length === 0}
                className={`px-8 py-3 rounded-lg font-semibold ${cart.length === 0
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-[#9538E2] text-white hover:bg-[#7e27c3]"
                  }`}
              >
                Purchase
              </button>

            </div>
          </>
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {wishlist.length > 0 ? (
                wishlist.map((item) => (
                  <div
                    key={item.product_id}
                    className="p-4 border rounded-xl shadow-sm bg-gray-50 flex flex-col justify-between"
                  >
                    <img
                      src={item.product_image}
                      alt={item.product_title}
                      className="rounded-lg h-40 w-full object-contain mb-3"
                    />
                    <div>
                      <h4 className="font-semibold">{item.product_title}</h4>
                      <p className="text-sm text-gray-600">${item.price}</p>
                    </div>
                    <button
                      onClick={() => handleDeleteFromWishlist(item.product_id)}
                      className="mt-3 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
                    >
                      Delete
                    </button>
                  </div>
                ))
              ) : (
                <p className="text-center text-gray-500 col-span-3">
                  No items in wishlist.
                </p>
              )}
            </div>
          </>
        )}
      </div>
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-8 rounded-2xl shadow-lg text-center w-[90%] sm:w-[400px]">
            <h2 className="text-2xl font-bold text-[#9538E2] mb-3">
              🎉 Congratulations!
            </h2>
            <p className="text-gray-700 mb-6">
              Your purchase was successful.Thank you for shopping with us!
            </p>
            <button
              onClick={() => {
                setShowModal(false);
                navigate("/");
              }}
              className="bg-[#9538E2] text-white px-6 py-2 rounded-lg hover:bg-[#7e27c3]"
            >
              Close
            </button>
          </div>
        </div>
      )}

    </div>
  );
};

export default Dashboard;
