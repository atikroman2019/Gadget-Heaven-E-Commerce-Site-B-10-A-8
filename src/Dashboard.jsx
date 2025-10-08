import React, { useEffect, useState } from "react";
import { IoTrashOutline } from "react-icons/io5";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("cart");
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  // ✅ Load cart & wishlist data from localStorage
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    const storedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    setCart(storedCart);
    setWishlist(storedWishlist);
  }, []);

  // ✅ Calculate total price
  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

  // ✅ Sort cart by price (descending)
  const handleSortByPrice = () => {
    const sortedCart = [...cart].sort((a, b) => b.price - a.price);
    setCart(sortedCart);
  };

  // ✅ Remove from cart
  const handleRemoveFromCart = (id) => {
    const updated = cart.filter((item) => item.product_id !== id);
    setCart(updated);
    localStorage.setItem("cart", JSON.stringify(updated));
  };

  // ✅ Remove from wishlist
  const handleRemoveFromWishlist = (id) => {
    const updated = wishlist.filter((item) => item.product_id !== id);
    setWishlist(updated);
    localStorage.setItem("wishlist", JSON.stringify(updated));
  };

  // ✅ UI for each item card
  const renderCard = (item, isCart = false) => (
    <div
      key={item.product_id}
      className="bg-white rounded-xl shadow-md p-4 flex flex-col sm:flex-row items-center justify-between gap-4"
    >
      <div className="flex items-center gap-4">
        <img
          src={item.product_image}
          alt={item.product_title}
          className="w-24 h-24 object-contain bg-gray-100 rounded-lg"
        />
        <div>
          <h3 className="font-bold text-lg">{item.product_title}</h3>
          <p className="text-gray-600 text-sm mb-1">
            {item.description.slice(0, 60)}...
          </p>
          <p className="font-semibold text-[#9538E2]">Price: ${item.price}</p>
        </div>
      </div>

      <button
        onClick={() =>
          isCart
            ? handleRemoveFromCart(item.product_id)
            : handleRemoveFromWishlist(item.product_id)
        }
        className="text-red-600 hover:text-red-800 transition"
      >
        <IoTrashOutline size={22} />
      </button>
    </div>
  );

  return (
    <div className="bg-[#D7D7D7] min-h-screen py-10 px-4">
      {/* Header */}
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold mb-3">Dashboard</h2>
        <p className="text-gray-700">
          Manage your <span className="font-semibold">Cart</span> and{" "}
          <span className="font-semibold">Wish List</span> easily.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex justify-center gap-4 mb-8">
        <button
          onClick={() => setActiveTab("cart")}
          className={`px-6 py-2 rounded-lg font-semibold ${
            activeTab === "cart"
              ? "bg-[#9538E2] text-white"
              : "bg-white text-[#9538E2] border border-[#9538E2]"
          }`}
        >
          Cart ({cart.length})
        </button>

        <button
          onClick={() => setActiveTab("wishlist")}
          className={`px-6 py-2 rounded-lg font-semibold ${
            activeTab === "wishlist"
              ? "bg-[#9538E2] text-white"
              : "bg-white text-[#9538E2] border border-[#9538E2]"
          }`}
        >
          Wishlist ({wishlist.length})
        </button>
      </div>

      {/* ===== CART TAB ===== */}
      {activeTab === "cart" && (
        <div className="max-w-5xl mx-auto space-y-4">
          {cart.length > 0 ? (
            <>
              <div className="flex justify-between items-center mb-4">
                <p className="font-semibold text-lg">
                  Total Price:{" "}
                  <span className="text-[#9538E2] font-bold">${totalPrice}</span>
                </p>
                <button
                  onClick={handleSortByPrice}
                  className="bg-[#9538E2] text-white px-4 py-2 rounded-lg text-sm hover:bg-[#7e27c3]"
                >
                  Sort by Price ↓
                </button>
              </div>

              {cart.map((item) => renderCard(item, true))}
            </>
          ) : (
            <p className="text-center text-gray-600">No items in cart.</p>
          )}
        </div>
      )}

      {/* ===== WISHLIST TAB ===== */}
      {activeTab === "wishlist" && (
        <div className="max-w-5xl mx-auto space-y-4">
          {wishlist.length > 0 ? (
            wishlist.map((item) => renderCard(item, false))
          ) : (
            <p className="text-center text-gray-600">
              No items in wishlist yet.
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default Dashboard;
