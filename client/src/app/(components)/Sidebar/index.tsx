'use client'
import React from 'react'
import { Menu } from 'lucide-react'

const SideBar = () => {
  return (
    <div>
        {/* Top Logo 部分 */}
         <div className='flex gap-3 justify-between md:justify-normal items-center pt-8'>
             <div>Logo</div>
             <h1 className='font-extrabold text-2xl'>Shack Shop</h1>
             <button className='md:hidden px-3 py-3 bg-gray-200 rounded-full hover:bg-blue-200'
                onClick={()=>{}}
                >
                    <Menu size={24} className="w-4 h-4"/>
              </button>
         </div>
         {/* Link 部分 */}
         <div className='flex-grow mt-8'>
            {/* 各個連結部分 */}

         </div>
           {/* FOOTER 部分 */}
         <div className=''>
              <p className="text-center text-xs text-gray-500">&copy; 2024  Shack Market</p>
         </div>
    </div>
  )
}

export default SideBar
