import React from 'react';
import './Admin.css';
import Button from '../../../SharedComponents/UIComponent/Button/Button';
import Logo from '../../../SharedComponents/UIComponent/Logo/Logo';
import { Link } from 'react-router-dom';
 
const Admin = () => {
  return (
    <div className='admin__main'>
      <div className='login__container_'>
        <Logo />
        <div className='admin__main__text'>
          <h1>ADMIN</h1>
        </div>
        <div class="button"><Link to='/admin/store' className='admin__Link'>
          <Button type='danger' message='VIEW STORE' />
        </Link>
        <Link to='/admin/orders' className='admin__Link'>
          <Button message='CHECK ORDERLIST' />
        </Link>
        </div>
      </div>
    </div>
  );
};
 
export default Admin;