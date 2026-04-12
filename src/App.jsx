import { Footer } from "./components/Footer";
import { Carousel } from "./components/Carousel";
import { Navbar } from "./components/Navbar";
import { ProductList } from "./components/ProductList";

function App() {
  return (
    <div className="relative min-h-screen">
      <Navbar />
      <Carousel />
      <ProductList />
      <Footer />
    </div>
  );
}

export default App;
