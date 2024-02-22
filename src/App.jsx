import {BrowserRouter as Router ,Route, Routes} from 'react-router-dom';
import HomePage from "./mainRoutes/HomePage";
import CategoryPage from "./mainRoutes/CategoryPage";
import ProductDetailsPage from "./mainRoutes/ProductDetailsPage";
import SubCategories from './mainRoutes/SubCategories';
import CartPage from './mainRoutes/CartPage';
import WishList from './mainRoutes/WishList';

function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/Category/:CategoryName" element={<CategoryPage/>}/>
        <Route path="/Category/:CategoryName/:SubName" element={<SubCategories/>}/>
        <Route path="/product/:SubName/:productId" element={<ProductDetailsPage/>}/>
        <Route path="/cart" element={<CartPage/>}/>
        <Route path="/Wishlist" element={<WishList/>}/>
      </Routes>
    </Router>
    </>

  )
}

export default App
