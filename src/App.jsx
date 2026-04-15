import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { ProductsPage } from "./pages/ProductsPage";
import { CartPage } from "./pages/CartPage";
import { AboutPage } from "./pages/AboutPage";

function App() {
  return (
    <div className="relative min-h-screen">
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
