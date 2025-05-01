{/*import React from 'react'

import { Header } from './partials/Header.comp'
import { Footer } from './partials/Footer.comp'

export const DefaultLayout = ({children}) => {
  return (
    <div className='default-layout'>
    <div className='header mb-2'><Header/></div>
    <main className='main'>{children}</main>
    <div className='footer'><Footer/></div>
        
      
    </div>
  )
}*/}
import React from 'react';
import { Outlet } from 'react-router-dom';

import { Header } from './partials/Header.comp';
import { Footer } from './partials/Footer.comp';

export const DefaultLayout = () => {
  return (
    <div className='default-layout'>
      <div className='header mb-2'><Header /></div>
      <main className='main'>
        <Outlet /> {/* C'est ici que les pages enfants apparaîtront */}
      </main>
      <div className='footer'><Footer /></div>
    </div>
  );
};

