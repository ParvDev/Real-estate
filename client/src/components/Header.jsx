import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className='bg-slate-200 shadow-md'>
        <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
            <Link to="/">
            <h1 className='font-bold text-sm sm:text-xl flex flex-wrap '>
                <span className='text-slate-500'>
                    Random
                </span>
                <span className='text-slate-700'>
                    Estate
                </span>
            </h1>
            </Link>
            
            <form className='bg-slate-100 rounded-lg p-3 flex items-center'>
                <input type="text" placeholder='Search...' className='bg-transparent focus: outline-none w-24 sm:w-64'/>
                <FaSearch className='text-slate-600'/>
            </form>
            <ul className='flex gap-6'>
                <Link to="/">
                    <li className='text-slate-600 hidden sm:inline hover:underline'>Home</li>
                </Link>
                <Link to="/about">
                    <li className='text-slate-600 hidden sm:inline hover:underline'>About</li>
                </Link>
                <Link to="signin">
                    <li className='text-slate-600 sm:inline hover:underline'>Sign in</li>
                </Link>
            </ul>
        </div>

    </header>
  )
}

export default Header