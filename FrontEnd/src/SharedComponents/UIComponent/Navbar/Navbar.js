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
      <Link to='/' className='navbar__buttons'>
        <PermIdentityIcon />
        Sign Out
      </Link>
      <Link to='/orders' className='navbar__buttons'>
        <InboxIcon />
        Orders
      </Link>
      <Link to='/cart' className='navbar__buttons'>
        <ShoppingBasketIcon />
        Cart: {state.cart.length}
      </Link>
    </div>
  );
};

export default Navbar;
