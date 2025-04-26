import React from 'react'
import { Header } from './partials/Header.comp'
import { Footer } from './partials/Footer.comp'

export const DefaultLayout = ({children}) => {
  return (
    <div className='default-layout'>
    <div className='header'><Header/></div>
    <main className='main'>{children}</main>
    <div className='footer'><Footer/></div>
        
       
    </div>
  )
}
