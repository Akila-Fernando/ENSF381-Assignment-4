import React, { useState, useEffect, createContext } from 'react';
import AuthMessage from './AuthMessage'

export const AuthContext = createContext();

function LoginForm() {
    const [users, setUsers] = useState([])
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [authMessage, setAuthMessage] = useState({ type: '', message: '' });

    function validateLogin(event){
        const userFound = users.find(
            (user) => user.username === username && user.email === email
        );
        console.log(users)
        
        if(username.length === 0){
            setAuthMessage({ type: 'error', message: 'You must enter a Username' });
        }
        else if(email.length === 0){
            setAuthMessage({ type: 'error', message: 'You must enter a Password' });
        }
        else if (email.length > 0 && email.length < 8){
            setAuthMessage({ type: 'error', message: 'Password must be at least 8 characters' });
        }
        else if (userFound){
            setAuthMessage({ type: 'success', message: 'Login successful! Redirecting...' });
            setTimeout(() => {
                window.location.href = '/courses';
            }, 2000);
        }
        else {
            setAuthMessage({ type: 'error', message: 'Invalid username or password' });
        }
    }      

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => response.json())
        .then((users) => {
            setUsers(users);
            console.log(users)
        })
        .catch((error) => {
        // Handle error if the request was not successful
            console.error('Failed to fetch data:', error.message);
        });
    },[]);  
        
  return (
    <AuthContext.Provider value={authMessage}>
    <div style={{display: 'flex', flexDirection: 'column', textAlign: 'center', marginTop: '30px'}}>
        <form id="loginblock" method="POST" 
        style={{display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: '#d4d4d4', boxShadow: '10px 10px 15px rgba(0, 0, 0, 0.1)', borderRadius: '30px', padding: '30px', margin: '0px 150px 0px 150px'}}>
            <label>Username:</label>
            <input type="text" id="username" name="username" value={username} onChange={(e) => setUsername(e.target.value)} style={{width: '250px', padding: '10px', margin: '10px 0', borderRadius: '5px', border: '3px solid #b2b2b2', backgroundColor: 'lightyellow'}} required></input>
            <br></br><br></br>
            <label>Password: </label>
            <input type="password" id="password" name="password" value={email} onChange={(e) => setEmail(e.target.value)} style={{width: '250px', padding: '10px', margin: '10px 0', borderRadius: '5px', border: '3px solid #b2b2b2', backgroundColor: 'lightyellow'}} required></input>
        </form>
        <br></br>
        <div style={{display: 'flex', justifyContent: 'center'}}>
            <button type="submit" onClick={validateLogin} style={{backgroundColor: '#008000', color: 'white', padding: '10px 15px', border: 'none', cursor: 'pointer', fontSize: '16px', borderRadius: '5px'}}
            onMouseOver={(e) => e.target.style.backgroundColor = '#006600'}
            onMouseOut={(e) => e.target.style.backgroundColor = '#008000'}
            >Login</button>
        </div>
        <br></br>
        <AuthMessage />
        <br></br>
        <a href="#">Forgot Password?</a>
    </div>
    </AuthContext.Provider>
  );
}

export default LoginForm