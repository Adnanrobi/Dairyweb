import './App.css';
import Navbar from './SharedComponents/UIComponent/Navbar/Navbar';
import ProductsPage from './User/Pages/Products/ProductsPage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import StoreControl from './Admin/Pages/StoreControl/StoreControl';
import Cart from './User/Pages/Cart/Cart';
import Auth from './User/Pages/Auth/Auth';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/admin/store'>
          <StoreControl />
        </Route>
        <Route path='/cart'>
          <Navbar />
          <Cart />
        </Route>
        <Route path='/store'>
          <Navbar />
          <ProductsPage />
        </Route>
        <Route path='/'>
          <Auth />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
