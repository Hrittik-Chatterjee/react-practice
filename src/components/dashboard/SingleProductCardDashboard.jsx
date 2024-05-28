/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SingleProductCardDashboard = ({ shoe, onDelete }) => {
  const { id, title, brand, price, description, image_url } = shoe;

  const handleDelete = async () => {
    await fetch(`http://localhost:3000/shoes/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        onDelete(id);
      });
    toast.success("Successfully deleted", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      transition: Bounce,
      theme: "dark",
    });
  };

  return (
    <div className="card w-96  h-4/5 bg-base-100 shadow-xl">
      <ToastContainer />
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
        <div className="card-actions justify-end">
          <button className="btn btn-xs bg-indigo-500 text-white">
            <Link to={`/products/${id}`}>See details</Link>
          </button>
          <button className="btn bg-green-600 btn-xs text-white">
            <Link to={`edit/${id}`}>Edit</Link>
          </button>
          <button
            onClick={() => document.getElementById("my_modal_5").showModal()}
            className="btn btn-xs bg-red-500 text-white"
          >
            Delete
          </button>

          <dialog
            id="my_modal_5"
            className="modal modal-bottom sm:modal-middle"
          >
            <div className="modal-box">
              <h3 className="font-bold text-lg">CONFIRM DELETATION</h3>
              <p className="py-4">
                Click CONFIRM DELETE button to delete or click close button to
                CLOSE
              </p>
              <div className="modal-action">
                <form method="dialog">
                  <button
                    onClick={handleDelete}
                    className="btn btn-sm btn-error"
                  >
                    Confirm Delete
                  </button>

                  {/* if there is a button in form, it will close the modal */}
                  <button className="btn btn-sm ml-2 border-none  btn-warning">
                    Close
                  </button>
                </form>
              </div>
            </div>
          </dialog>
        </div>
      </div>
    </div>
  );
};

export default SingleProductCardDashboard;
