import {Link, useNavigate} from 'react-router-dom';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { signinStart, signinSuccess, signinFailure } from '../redux/user/userSlice';

export default function SignIn() {
  const [formData, setFormData] = useState({});
  const {loading, error} = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFormData(
      {
        ...formData,
        [e.target.id]: e.target.value,
      }
    )
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(signinStart());
      const res = await fetch('/api/auth/login',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
        const data = await res.json();
        console.log(data);
        if(data.status === false) {
          dispatch(signinFailure(data.message));
          return;
        }
        dispatch(signinSuccess(data.user));
        navigate('/');
    } catch (error) {
        dispatch(signinFailure(error.message));
    }
}

  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center font-semibold my-7'>SignIn</h1>
      <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
        <input type="email" placeholder='Email' className='border-2 border-gray-300 p-2 rounded-md' id="email" onChange={handleChange}/>
        <input type="password" placeholder='Password' className='border-2 border-gray-300 p-2 rounded-md' id="password" onChange={handleChange}/>
        <button disabled={loading} className='bg-blue-500 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-95'>{loading ? 'Loading...' : 'Sign In'}</button>
      </form>
      <div className="flex gap-2">
          <p>Dont have an account?</p>
          <Link to={'/signup'}>
            <span className='text-blue-700'>Sign up</span>
          </Link>
      </div>
      {error && <p className='text-red-500 text-center'>{error}</p>}
    </div>
  );
}

