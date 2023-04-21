import React, {useState} from 'react'
import axios from 'axios'

function Login(props) {
    const {log} = props
    const [data, setData] = useState({
        username: '',
        password: ''
    })
    const [err, setErr] = useState('')
    function change(e) {
        const {name, value} = e.target
        setData({...data, [name]: value})
    }
    function loginHandle(person) {
        log(person)
    }
    function submit(e) {
        e.preventDefault()
        const person = data
        axios.post('http://localhost:9000/api/users/login', person)
        .then(res => {
            loginHandle(res.data)
        })    
        .catch(err => {
            console.log(err)
            setErr(err.response.data.message)
        })
    }

    return(
        <div className='container-fluid'>
            <div className='row'>
                <div className='col col-4'></div>
                <div className='col col-4'>
                    <form onSubmit={submit}>
                        <h4>{err}</h4>
                        <div className='row'>
                            <label className='form-label'>Username:
                                <input
                                    className='form-control form-control-sm'
                                    type='text'
                                    name='username'
                                    value={data.username}
                                    onChange={change}
                                    />
                            </label>
                        </div>
                        <div className='row'>
                            <label className='form-label'>
                                Password:
                                <input 
                                    type='password'
                                    className='form-control form-control-sm'
                                    name='password'
                                    value={data.password}
                                    onChange={change}
                                />
                            </label>
                        </div>
                        <div className='row'>
                            <button className='btn btn-success'>Submit</button>
                        </div>
                    </form>
                </div>
                <div className='col col-4'></div>
            </div>
        </div>
    )
}

export default Login