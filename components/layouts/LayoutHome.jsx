import React from 'react'
import { Navbar } from '../fragment/Navbar'

export const LayoutHome = ({children}) => {
  return (
    <div>
        <Navbar/>
        <section className="px-10 lg:px-24 mt-4">
            {children}
        </section>
    </div>
  )
}
