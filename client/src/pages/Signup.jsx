import {Link} from 'react-router-dom'

function Signup() {
  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center font-semibold my-7'>Sign Up</h1>
      <form className='flex flex-col gap-4' >
      <input type='text' placeholder='username' className='border p-3 rounded-lg' id='username' />
      <input type='text' placeholder='email' className='border p-3 rounded-lg' id='email' />
      <input type='text' placeholder='password' className='border p-3 rounded-lg' id='password' />
      <button className="bg-slate-700 p-3 rounded-lg uppercase hover:opacity-95 max-w-lg text-white disabled:opacity-80">Sign Up</button>
      </form>
      <div className='flex gap-2 my-4'>
        <p>Have and account?</p>
        <Link to={"/sign-up"} className='text-blue-700'>Sign in</Link>
      </div>
    </div>
  )
}

export default Signup