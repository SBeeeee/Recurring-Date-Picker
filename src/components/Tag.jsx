import React from 'react'
import { Sparkles } from 'lucide-react'
import Heading from './Heading';

function Tag() {
  return (
    <>
    <div className="bg-blue-600 flex items-center text-amber-100 justify-center border-amber-100 rounded-2xl p-1 px-2 w-52 mx-auto">
      <Sparkles size={18}/>
      <div className="ml-2">Premium Date Picker</div>

    </div>
    <Heading/>
</>
  )
}

export default Tag
