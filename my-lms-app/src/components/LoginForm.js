import React, { useState, useEffect } from 'react';

function LoginForm() {
    const [users, setUsers] = useState([])
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');

    function validateLogin(event){
        const messageBox = document.getElementById("messageBox")

        const userFound = users.find(
            (user) => user.username === username && user.email === email
        );
        console.log(users)
        
        if(username.length === 0){
            messageBox.textContent = 'You must enter a Username'
        }

        else if(email.length === 0){
            messageBox.textContent = 'You must enter a Password'
        }

        else if (email.length > 0 && email.length < 8){
            messageBox.textContent = 'Password must be at least 8 characters'
        }
        else if (userFound){
            console.log("User found")
            messageBox.textContent = 'Login successful☺! Redirecting...';
            messageBox.className = 'message-box';
            messageBox.style.display = 'block';
            setTimeout(() => {window.location.href = '/';}, 2000);
        }
        else {
            console.log("User not found")
            messageBox.textContent = 'Invalid username or password! Please try again.';
            messageBox.className = 'message-box';
            messageBox.style.display = 'block'; 
        }
    }

    function fetchData() {
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
    }      

    useEffect(() => {
        fetchData();
    },[]);  
        
  return (
    <div style={{display: 'flex', flexDirection: 'column', textAlign: 'center'}}>
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
            <button type="submit" onClick={validateLogin} style={{backgroundColor: '#008000', color: 'white', padding: '10px 15px', border: 'none', cursor: 'pointer', fontSize: '16px', borderRadius: '5px'}}>Login</button>
        </div>
        <br></br><br></br>
        <a href="#">Forgot Password?</a>
        <div id="messageBox" className="message-box"></div>
    </div>
  );
}

export default LoginForm