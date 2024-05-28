const AddProducts = () => {
  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   const form = e.target;
  //   const id = form.id.value;
  //   const title = form.title.value;
  //   const brand = form.brand.value;
  //   const price = form.price.value;
  //   const description = form.description.value;
  //   const image_url = form.image_url.value;

  //   const data = { id, title, brand, price, description, image_url };

  //   await fetch("http://localhost:3000/shoes", {
  //     method: "POST",
  //     headers: {
  //       "Content-type": "application/json",
  //     },
  //     body: JSON.stringify(data),
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //       form.reset();
  //     });
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;

    const title = form.title.value;
    const brand = form.brand.value;
    const price = form.price.value;
    const description = form.description.value;
    const image_url = form.image_url.value;
    const id = form.id.value;

    const data = { title, brand, price, description, image_url, id };

    await fetch("http://localhost:3000/shoes", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        form.reset();
      });
  };

  return (
    <div>
      <h1 className="text-5xl font-bold text-center">Add a Product</h1>

      <div className="my-16">
        <form>
          <div className="mt-2">
            <input
              className="bg-gray-100 p-4 w-full border border-black rounded-lg"
              type="text"
              name="title"
              placeholder="Title"
            />
          </div>
          <div className="mt-2">
            <input
              className="bg-gray-100 p-4 w-full border border-black rounded-lg"
              type="text"
              name="brand"
              placeholder="Brand"
            />
          </div>
          <div className="mt-2">
            <input
              className="bg-gray-100 p-4 w-full border border-black rounded-lg"
              type="number"
              name="price"
              placeholder="Price"
            />
          </div>
          <div className="mt-2">
            <input
              className="bg-gray-100 p-4 w-full border border-black rounded-lg"
              type="text"
              name="description"
              placeholder="Description"
            />
          </div>
          <div className="mt-2">
            <input
              className="bg-gray-100 p-4 w-full border border-black rounded-lg"
              type="text"
              name="image_url"
              placeholder="Image URL"
            />
          </div>
          <div className="mt-2">
            <input
              className="bg-gray-100 p-4 w-full border border-black rounded-lg"
              type="text"
              name="id"
              placeholder="ID"
            />
          </div>
        </form>
        <div className="mt-2 flex justify-center items-center">
          <input
            onClick={() => document.getElementById("my_modal_5").showModal()}
            className="btn mt-4 w-full bg-red-500 text-white p-4"
            type="submit"
            value="Add product"
          />
        </div>
        <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
          <div className="modal-box">
            <h3 className="font-bold text-lg">CONFIRM DELETATION</h3>
            <p className="py-4">
              Click CONFIRM DELETE button to delete or click close button to
              CLOSE
            </p>
            <div className="modal-action">
              <div method="dialog">
                <button
                  onSubmit={handleSubmit}
                  className="btn btn-sm btn-error"
                >
                  Confirm Delete
                </button>

                {/* if there is a button in form, it will close the modal */}
                <button className="btn btn-sm ml-2 border-none  btn-warning">
                  Close
                </button>
              </div>
            </div>
          </div>
        </dialog>
      </div>
    </div>
  );
};

export default AddProducts;
