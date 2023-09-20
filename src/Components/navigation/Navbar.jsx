import React from 'react'
import { Logo } from '../../Assets/Assets'
import {  HiOutlineSearch, HiOutlineUser, HiOutlineShoppingCart, HiOutlineHeart } from "react-icons/hi"
import { NavLink } from 'react-router-dom'

//this component is not responsive for mobile

const Navbar = () => {
  
  const navBarElement = [
    {
      path: "/home",
      name: 'Home'
    },
    {
      path: "/shop",
      name: 'Shops'
    },
    {
      path: "/BritishBrands",
      name: 'British Brands'
    },
    {
      path: "/SubscriptionAndRewards",
      name: 'Subscription and Rewards'
    },
    {
      path: "/ContactUs",
      name: 'Contact Us'
    },
    
  ]


  const icons = [
    {
      path: "/",
      icon: < HiOutlineSearch/>
    },
    {
      path: "/",
      icon: < HiOutlineUser/>
    },
    {
      path: "/",
      icon: < HiOutlineHeart/>
    },
    {
      path: "/",
      icon: < HiOutlineShoppingCart/>
    }
  ]

  return (
    <header className=' box-border h-24 w-full'>
      <section className=' bg-primary w-full h-10'></section>
      <section className=' bg-white w-full h-14 flex flex-row items-center justify-between px-10 gap-10 '>
      {/* Brand Logo */}
        <a href='https://walkerssupermarket.co.uk/' className='h-16'>
          <img src={Logo} alt='Walker Supermarket' className='object-contain w-full h-full'/>
        </a>
        <nav className='flex gap-80 font-poppins'>
          <div className='flex'>
            <section className='flex gap-6 font-semibold'>

              {
                navBarElement.map((item, index) => (

                <NavLink
                    to={item.path}  
                    key={index}                
                >
                  <div className='hover:bg-slate-400 p-4'>{item.name}</div>
                </NavLink>
                  )
                )
              }


              {/* <NavLink
                  to='/Shop'                  
              >
                <div className='hover:bg-slate-400 p-4'>Shop</div>
              </NavLink>

              <NavLink
                  to='/BritishBrands'                  
              >
                <div className='hover:bg-slate-400 p-4'>British Brands</div>
              </NavLink>

              <NavLink
                  to='/SubscriptionAndRewards'                  
              >
                <div className='hover:bg-slate-400 p-4'>Subscription and Rewards</div>
              </NavLink>

              <NavLink
                  to='/ContactUs'                  
              >
                <div className='hover:bg-slate-400 p-4'>Contact Us</div>
              </NavLink> */}
            </section>
          </div>
          <div>
            <section className='flex gap-6 font-semibold'>

              {
                icons.map((item, index) => (

                  <NavLink
                      to={item.path}
                      key={index}                  
                  >
                    <div className='text-lg font-medium p-4 hover:bg-slate-400'>{item.icon}</div>
                  </NavLink>
                ))
              }
              

              {/* <li className='hover:bg-slate-400 p-4'><button>icon</button></li>
              <li className='hover:bg-slate-400 p-4'><button>icon</button></li>
              <li className='hover:bg-slate-400 p-4'><button>icon</button></li>
              <li className='hover:bg-slate-400 p-4'><button>icon</button></li> */}
            </section>
          </div>
        </nav>
      </section>
    </header>
  )
}

export default Navbar