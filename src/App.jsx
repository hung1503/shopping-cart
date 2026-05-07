import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { ProductsPage } from "./pages/ProductsPage";
import { CartPage } from "./pages/CartPage";
import { AboutPage } from "./pages/AboutPage";
import { ShopProvider } from "./context/ShopContext";
import { ProductDetailPage } from "./pages/ProductDetailPage";

function App() {
  return (
    <ShopProvider>
      <div className="relative min-h-screen">
        <Navbar />
        <div>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/products/:id" element={<ProductDetailPage />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </ShopProvider>
  );
}

export default App;
