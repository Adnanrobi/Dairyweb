import React from 'react';
import Logo from '../Logo/Logo';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import InboxIcon from '@material-ui/icons/Inbox';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { useStateValue } from '../../../StateProvider/StateProvider';
import { Link } from 'react-router-dom';

import './Navbar.css';

const Navbar = () => {
  const [state, dispatch] = useStateValue();

  return (
    <div className='navbar'>
      <div className='navbar__Logo'>
        <Logo />
      </div>
      <div className='navbar__buttons'>
        <PermIdentityIcon />
        Sign In
      </div>
      <div className='navbar__buttons'>
        <InboxIcon />
        Orders
      </div>
      <Link to='/cart' className='navbar__buttons'>
        <ShoppingBasketIcon />
        Cart: {state.cart.length}
      </Link>
    </div>
  );
};

export default Navbar;
