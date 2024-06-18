import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar,FloatingLabel} from "flowbite-react";
function Header() {
  return (
    <div>
        <Navbar className='border '>
            <div className='w-full grid grid-cols-4 gap-1'>
                <div className='flex justify-center'>
                    <Link to='/' className='self-center whitespace-nowrap text-2xl  font-semibold dark:text-white'>
                    <span className='px-2 bg-gradient-to-r from-indigo-400 via-purple to-pink-400 rounded-lg text-white '>
                    Pranav's 
                    </span>
                    Blogs
                    </Link>
                </div>
                <div >
                    <div className='w-52'>
                        <form className='hidden lg:inline' >
                            <FloatingLabel variant="outlined" label="Search" />
                        </form>
                        

                    </div>
                    
                </div>
                <div className='flex justify-center'>
                    <div className='grid grid-cols-3 w-52'>
                        <div className=' flex items-center justify-center' >
                            <Link to='/'>Home</Link>
                        </div>
                        <div className=' flex items-center justify-center'>
                        <Link to='/about'>About</Link>
                        </div>
                        <div className=' flex items-center justify-center'>
                            <Link to='/projects'>Projects</Link>
                        </div>
                    </div>

                </div>
                
                <div className=' relative'>
                    <div className='flex absolute right-3 top-2'>
                        <h1 className='border border-solid rounded-3xl w-4 px-8 py-2'>hi</h1>
                        <h1 className='border border-solid rounded-full w-4 px-6 py-2'>hi</h1>
                    </div>

                </div>
                
            </div>
            

        </Navbar>

      
    </div>
  )
}

export default Header
