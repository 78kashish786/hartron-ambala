import React from 'react'
import Logo from '../Assets/logo.png'
function Header() {
  const Menu =[
    {
      name:'Home',
    },
    {
      name:'About',
    },
    {
      name:'Course',
    },
    {
      name:'Contact',
    },
  ]
  return (
    <nav className='sticky top-0 flex justify-between items-center px-16 py-4 bg-black text-white '>
      <div className='flex gap-10 items-center '>
        <img src={Logo} alt="//"/>
        <ul className='flex gap-5'>
          {Menu&&Menu.map((item,index)=>{
            return(
              <li key={index}>
                {item.name}
              </li>
            )
          })}
        </ul>
      </div>
      <div className='flex gap-8'>
        <button className='px-2 py-1 border border-gray-700 rounded-[5px] text-sm '>Feedback</button>
        <button className='p-1 border border-gray-700 rounded-[5px] text-sm '>Login</button>
      </div>
    </nav>
  )
}

export default Header


