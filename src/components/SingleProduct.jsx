/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const SingleProduct = ({ shoe }) => {
  const { id, title, brand, price, description, image_url } = shoe;

  return (
    <div className="card w-96  h-4/5 bg-base-100 shadow-xl">
      <figure className="relative w-full">
        <img src={image_url} alt="Shoes" className="h-72 w-full object-fill" />
      </figure>
      <div className="card-body flex flex-col justify-between">
        <div>
          <h2 className="card-title">{title}</h2>
          <h3 className="text-xl font-semibold">{brand}</h3>
          <h3 className="text-xl font-semibold">{price}</h3>
          <p className="text-sm overflow-hidden overflow-ellipsis h-16">
            {description}
          </p>
        </div>
        <div className="card-actions justify-end mt-2">
          {" "}
          {/* Reduced margin-top */}
          <button className="btn btn-primary">
            <Link to={`/products/${id}`}>See details</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
