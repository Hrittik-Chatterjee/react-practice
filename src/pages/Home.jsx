import { useLoaderData } from "react-router-dom";

import Banner from "../components/home/Banner";
import Products from "../components/home/Products";
import Stats from "../components/home/Stats";

const Home = () => {
  const data = useLoaderData();
  return (
    <div>
      <Banner />
      <Products data={data} />
      <Stats />
    </div>
  );
};

export default Home;
