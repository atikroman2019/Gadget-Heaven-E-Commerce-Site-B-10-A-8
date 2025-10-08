import { Link } from "react-router-dom";

const Product = ({ product }) => {
  const { product_id, product_image, product_title, price } = product;

  return (
    <div className="bg-white p-4 rounded-2xl shadow-md text-center">
      <img
        src={product_image}
        alt={product_title}
        className=" h-48 mx-auto rounded-xl mb-4"
      />
      <h3 className="text-lg font-bold">{product_title}</h3>
      <p className="text-purple-600 font-semibold mb-4">${price}</p>

      <Link to={`/product/${product_id}`}>
        <button className="btn bg-[#9538E2] text-white px-4 py-2 rounded-lg">
          View Details
        </button>
      </Link>
    </div>
  );
};

export default Product;
