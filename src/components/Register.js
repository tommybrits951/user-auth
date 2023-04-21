import React, {useState} from 'react'
import axios from 'axios'


const initData = {
    email: '',
    username: '',
    password: '',
    role_id: 1
}


function Register(props) {
    const [data, setData] = useState(initData)
    const [err, setErr] = useState('')
    const {user, sig} = props
    function change(e) {
        const {name, value} = e.target
        setData({...data, [name]: value})
    }
    function submit(e) {
        e.preventDefault()
        const newUser = {
            old: user,
            user: data
        }
        axios.post('http://localhost:9000/api/users/register', newUser)
        .then(res => {
            console.log(res.data)
        })
        .catch(err => {
            setErr(err)
        })
    }
    function logout() {
        sig()
        localStorage.removeItem('token')
    }
    return(
        <div className='container-fluid'>
            <div className='row'>
                <div className='col col-4'>
                    <h3>Logged In</h3>
                    <h3 className='text-primary'>{user.username}</h3>
                    <button className='btn btn-danger' onClick={logout}>Sign Out</button>
                    </div>
                <div className='col col-4'>
                    <form onSubmit={submit} className='d-flex flex-column'>
                    <label className='from-label'>Username:
                        <input 
                            type='text'
                            className='form-control form-control-sm'
                            name='username'
                            value={data.username}
                            onChange={change}
                        />
                    </label>
                    <label className='form-label'>
                        Email:
                        <input 
                            type='email'
                            className='form-control form-control-sm'
                            name='email'
                            value={data.email}
                            onChange={change}
                        />
                    </label>
                    <label className='form-label'>Password:
                        <input 
                            type='password'
                            className='form-control form-control-sm'
                            name='password'
                            value={data.password}
                            onChange={change}
                        />
                    </label>
                    <h5>Role</h5>
                  {user.role_id === 2 || 3 ? <select className='form-control' name='role_id'>
                        <option value={1}>---Select Role---</option>
                        <option value={1}>Worker</option>
                        <option value={2}>Manager</option>
                        <option value={3}>Owner</option>
                    </select> : null}
                    <button className='btn btn-success'>Submit</button>
                    </form>
                </div>
                <div className='col col-4'></div>
            </div>
        </div>
    )
}

export default Register