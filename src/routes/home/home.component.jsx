import { Outlet } from "react-router-dom";
import Categories from "../../components/directory/directory.component";

const Home = () => {
  return (
    <div>
      <Categories />
      <Outlet />
    </div>
  );
};

export default Home;
