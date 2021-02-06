import './App.css';
import Navbar from './SharedComponents/UIComponent/Navbar/Navbar';
import ProductsPage from './User/Pages/Products/ProductsPage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import StoreControl from './Admin/Pages/StoreControl/StoreControl';
import Cart from './User/Pages/Cart/Cart';
import Auth from './User/Pages/Auth/Auth';
import Orders from './User/Pages/Orders/Orders';
import AdminOrders from './Admin/Pages/Orders/AdminOrders';
import Admin from './Admin/Pages/LandingPage/Admin'

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/admin/store'>
          <StoreControl />
        </Route>
        <Route path='/admin/orders'>
          <AdminOrders />
        </Route>
        <Route path='/admin'>
          <Admin />
        </Route>
        <Route path='/cart'>
          <Navbar />
          <Cart />
        </Route>
        <Route path='/store'>
          <Navbar />
          <ProductsPage />
        </Route>
        <Route path='/orders'>
          <Navbar />
          <Orders />
        </Route>
        <Route path='/'>
          <Auth />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
