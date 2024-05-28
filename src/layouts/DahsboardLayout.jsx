import { Link, Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        <Outlet />
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
          {/* Sidebar content here */}
          <li>
            <Link to={"home"}>Dashboard</Link>
          </li>
          <li>
            <Link to={"all-products"}>All Products</Link>
          </li>
          <li>
            <Link to={"add-products"}>Add Product</Link>
          </li>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
        </ul>
      </div>
    </div>

    // <div className="grid grid-cols-12">
    //   <div className="col-span-2 bg-gray-300 min-h-screen p-12">
    //     <ul>
    //       <li className="border border-black p-4 text w-full">
    //         <Link to={"home"}>Dashboard</Link>
    //       </li>
    //       <li className="border border-black p-4 text w-full">
    //         <Link to={"all-products"}>All Products</Link>
    //       </li>
    //       <li className="border border-black p-4 text w-full">
    //         <Link to={"add-products"}>Add Product</Link>
    //       </li>
    //       <li className="border border-black p-4 text w-full">
    //         <Link to={"/"}>Home</Link>
    //       </li>
    //     </ul>
    //   </div>
    //   <div className="col-span-10 p-20">
    //     <Outlet />
    //   </div>
    // </div>
  );
};

export default DashboardLayout;
