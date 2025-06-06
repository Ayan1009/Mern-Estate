import {Link, useNavigate} from 'react-router-dom';
import React, { useState } from 'react'

export default function SignUp() {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

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
      setLoading(true);
      const res = await fetch('/api/auth/signup',
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
          setLoading(false);
          setError(data.message);
          return;
        }
        setLoading(false);
        setError(null);
        navigate('/signin');
    } catch (error) {
        setLoading(false);
        setError(error.message);
    }
}

  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center font-semibold my-7'>SignUp</h1>
      <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
        <input type="text" placeholder='Username' className='border-2 border-gray-300 p-2 rounded-md' id="username" onChange={handleChange}/>
        <input type="email" placeholder='Email' className='border-2 border-gray-300 p-2 rounded-md' id="email" onChange={handleChange}/>
        <input type="password" placeholder='Password' className='border-2 border-gray-300 p-2 rounded-md' id="password" onChange={handleChange}/>
        <button disabled={loading} className='bg-blue-500 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-95'>{loading ? 'Loading...' : 'Sign Up'}</button>
      </form>
      <div className="flex gap-2">
          <p>Don't have an account?</p>
          <Link to={'/signin'}>
            <span className='text-blue-700'>Sign in</span>
          </Link>
      </div>
      {error && <p className='text-red-500 text-center'>{error}</p>}
    </div>
  );
}

