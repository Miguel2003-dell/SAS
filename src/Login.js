import React, { useState } from 'react'
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

function Login() {
    const [usuario, setEmail] = useState('')
    const [password, setPassword] = useState('')

    function handleSubmit(event) {
        event.preventDefault();
        axios.post('http://localhost:3001/login', {usuario, password})
        .then(res => console.log(res))
        .catch(err => console.log(err));
    }
  return (
    <div className='d-flex vh-100 justify-content-center bg-primary align-items-center'>
        <div className='p-3 bg-white w-25'>
            <form onSubmit={handleSubmit}>
                <div className='mb-3'>
                    <label htmlFor="text">Email</label>
                    <input type="text" placeholder='Enter User' className='form-control' onChange={e => setEmail(e.target.value)}/>
                </div>
                <div className='mb-3'>
                    <label htmlFor="password">Password</label>
                    <input type="password" placeholder='Enter Password' className='form-control' onChange={e => setPassword(e.target.value)}/>
                </div>
                <button className='btn btn-success'>Login</button>
            </form>
        </div>
    </div>
  )
}

export default Login