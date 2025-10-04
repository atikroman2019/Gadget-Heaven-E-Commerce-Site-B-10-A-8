

const Product = ({product}) => {
    const {product_title,product_image, price} = product
    return (
        <div className="card bg-base-100 w-[300px] h-[350px] mx-auto shadow-sm">
  <figure className="w-[280px] mx-auto  p-4">
    <img className="w-[250px] bg-none h-[150px]"
      src={product_image}
      alt="Shoes"
     />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{product_title}</h2>
    <p>Price: {price}$</p>
    <div className="card-actions">
      <button className="btn btn-primary">View Details</button>
    </div>
  </div>
</div>
    );
};

export default Product;