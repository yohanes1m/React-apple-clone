import Main from "./Component/Main/Main";

import "./commonResource/css/styles.css";
import "./commonResource/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import Mac from "./Pages/Mac/Mac";
import Four04 from "./Pages/Four04/Four04";
// import Iphone from "./Pages/Iphone/iphone";
import { Route, Routes } from "react-router-dom";
import SharedLayout from "./Component/SharedLayout";
import Iphone from "./Pages/Iphone/Iphone";
import Productpage from "./Pages/Productpage/Productpage";
import Product from "./Component/Product";
import Ipad from "./Pages/Ipad/Ipad";
import Tv from "./Pages/Tv/Tv";
import Watch from "./Pages/Watch/Watch";
import Music from "./Pages/Music/Music";
import Support from "./Pages/Support/Support";
import Search from "./Pages/Search/Search";
import Cart from "./Pages/Cart/Cart";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route path="/" element={<Main />} />
          <Route path="mac" element={<Mac />} />
          <Route path="iphone" element={<Iphone />} />
          <Route path="iphone/:productID" element={<Productpage />} />
          <Route path="/ipad" element={<Ipad />} />
          <Route path="/tv" element={<Tv />} />
          <Route path="/watch" element={<Watch />} />
          <Route path="/music" element={<Music />} />
          <Route path="/support" element={<Support />} />
          <Route path="/search" element={<Search />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<Four04 />} />
        </Route>
      </Routes>
      {/* <Product/> */}
    </>
  );
}

export default App;
