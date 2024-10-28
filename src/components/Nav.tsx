import React from 'react'
import Image from 'next/image'
import Logo from '../../public/Logo.png'
import Search from '../../public/Search.png'
import Cart from '../../public/Cart.png'
import Favorities from '../../public/Favorites.png'
import User from '../../public/User.png'


export default function Nav() {
  return (
    <>
    <div className="w-full border-b flex justify-between pt-4 pr-40 pb-4 pl-40 bg-[#ffff] ">
        
        <Image
        src={Logo}
        alt=''
        width={65.4}
        height={22.87}
        />
        
        <Image 
        src={Search}
        alt=''
        width={24}
        height={24}
        className='ml-40'
        />
        <div className=" w-[47px] h-[18px] opacity-50 text-[14px] leading-[18px] text-[#656565] mr-40">Search
        </div>
        <div className="w-[369px] h-[19] flex gap-[52px]">
            <h3 className="">Home</h3>
            <h3 className="">About</h3>
            <h3 className="">Contact</h3>
            <h3 className="">Blog</h3>
        </div>
        <Image 
        src={Favorities}
        alt=''
        />
        <Image 
        src={Cart}
        alt=''
        />
        <Image 
        src={User}
        alt=''
        />

                

    </div>

    
    </>
  )
}
