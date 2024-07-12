import { Routes, Route, Outlet } from "react-router-dom";
import Navbar from "./components/Layout/Navbar";
import Home from "./components/Pages/Home";
import NotFound from "./components/Pages/NotFound";
import Footer from "./components/Layout/Footer";
import ProductDetails from "./components/Pages/Product-Details";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/product-details/:id" element={<ProductDetails />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
}

function Layout() {
  return (
    <div className="mt-4">
      <div className="max-w-7xl ml-2 mr-2 lg:mx-auto">
        <Navbar />
        <br />
        <Outlet />
        <br />
      </div>
      <Footer />
    </div>
  );
}
