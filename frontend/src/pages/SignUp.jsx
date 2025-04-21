import {Link} from 'react-router-dom';

export default function SignUp() {
  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center font-semibold my-7'>SignUp</h1>
      <form className='flex flex-col gap-4'>
        <input type="text" placeholder='Username' className='border-2 border-gray-300 p-2 rounded-md' />
        <input type="email" placeholder='Email' className='border-2 border-gray-300 p-2 rounded-md' />
        <input type="password" placeholder='Password' className='border-2 border-gray-300 p-2 rounded-md' />
        <input type="password" placeholder='Confirm Password' className='border-2 border-gray-300 p-2 rounded-md' />
        <button className='bg-blue-500 text-white p-2 rounded-md uppercase hover:opacity-95'>Sign Up</button>
      </form>
      <div className="flex gap-2">
          <p>Don't have an account?</p>
          <Link to={'/sign-in'}>
            <span className='text-blue-700'>Sign in</span>
          </Link>
      </div>
    </div>
  )
}

