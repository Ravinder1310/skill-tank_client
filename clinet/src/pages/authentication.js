import React, { useState } from 'react'
import Layout from '../components/layouts/layout'
import Login from './Login';
import Register from './register';
import { useToggle } from '../context/toggle';

const Authentication2 = () => {
    const { isLogin, toggleAuthMode } = useToggle();
  return (
    <Layout>
       <div>
          <div className='changes'>
            <button onClick={() => toggleAuthMode(true)}>Login</button>
            <button onClick={() => toggleAuthMode(false)}>SignUp</button>
          </div>
          {
            isLogin ? <div><Login/></div> : <div><Register/></div>
          }
       </div>
    </Layout>
  )
}

export default Authentication2