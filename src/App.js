import React, {useState} from 'react'
import './App.css';
import Register from './components/Register';
import Login from './components/Login';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [user, setUser] = useState({
    username: '',
    role_id: '',
    token: null
  })
  function loginUser(person) {
    setUser(person)
  }
  function sig() {
    setUser({
      username: '',
    role_id: '',
    token: null
    })
  }
  return (
    <div className="App">
      {user.token ? <Register user={user} sig={sig}/> : <Login log={loginUser}/>}      
    </div>
  );
}

export default App;
