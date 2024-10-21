'use client'
import React from 'react'
import { Menu,Sun } from 'lucide-react'
import { Bell,Moon} from 'lucide-react'
import { Settings } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center w-full mb-7'>
        {/* 左側的部分 */}
        <div className='flex justify-between items-center gap-5'>
            <button className='px-3 py-3 bg-gray-200 rounded-full hover:bg-blue-200 '
            onClick={()=>{}}
            >
                <Menu className='w-4 h-4' size={24}/>
            </button>
            <div className='relative'>
                <input 
                    type='search'
                    placeholder="請搜尋分類及產品 !"
                    className='pl-10 pr-4 py-2 w-50 md:w-80 border-2 border-gray-300 bg-white rounded-lg focus:outline-none
                    focus:border-blue-500'
                />
                <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-non'>
                    <Bell className='text-gray-500' size={20}/>
                </div>
            </div>
        </div>
        {/* 右側部分 */}
        <div className='flex justify-between items-center gap-5 '>
            <div className='hidden md:flex justify-between items-center gap-5'>
                <div>
                     <button>
                          <Sun className='cursor-pointer tex-gray-500' size={24}/>
                     </button>
                </div>
                <div className='relative'>
                    <Bell className="cursor-pointer text-gray-500" size={24}/>
                    <span className='absolute -top-2 -right-2 inline-flex items-center justify-center px-[0.4rem] py-1 text-xs font-semibold leading-none text-red-100 
                    bg-red-400 rounded-full
                    '>3</span>
                </div>
                <hr className='"w-0 h-7 border border-solid border-l border-gray-300 mx-3'/>
                <div className='flex items-center cursor-pointer gap-3'>
                     <Image
                         className='rounded-full h-full object-cover'
                         width={50}
                         height={50}
                         alt='簡介'
                         src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP-LFRQR8Cty1jQesZGb3OxaKF4DU2usSpLw&s'
                     />
                      <span className="font-semibold">嘎琳</span>
                </div>
                <Link href="/settings">
                     <Settings  className="cursor-pointer text-gray-500" size={24}/>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Navbar
