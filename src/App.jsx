import { Footer } from "./components/Footer";
import { Carousel } from "./components/Carousel";
import { Navbar } from "./components/Navbar";
import { ProductList } from "./components/ProductList";

function App() {
  return (
    <>
      <Navbar />
      <Carousel />
      <ProductList />
      <Footer />
    </>
  );
}

export default App;
