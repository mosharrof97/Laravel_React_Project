import { Outlet } from "react-router-dom";
import Header from "./frontend/partial/Header";
import Footer from "./frontend/partial/footer";

const Index = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Index;
