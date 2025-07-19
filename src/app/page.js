import React from 'react'
import Tag from '../components/Tag'
import Cards from '@/components/Cards'
import Footer from '@/components/Footer'
import CTA from '@/components/CTA'

function page() {
  return (
    <div className="min-h-screen p-4 pt-8 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
     <Tag/>
     <CTA/>
     <Cards/>
     <Footer/>
    </div>
  )
}

export default page
