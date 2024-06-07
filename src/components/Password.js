import React from 'react'
import './Style/Login.css'
export default function Password() {
  return (
    <div class="body">
    <div class="container my">
        
        <form action="" method="post">
            <h3 class="title">Login</h3>
            <div class="field">
                <label for="username">Email:</label>
                <input type="text" name="username" id="username" placeholder="Enter your username"/>
            </div>
            <div class="field">
                <label for="password">Password:</label>
                <input type="password" name="password" id="password" placeholder="Enter your password"/>
            </div>
            <div class="field">
                <label for="password">Confirm Password:</label>
                <input type="password" name="password" id="password" placeholder="Enter your password"/>
            </div>
            <div class="field-checkbox">
               
                <p><a href="/">Forget Password</a></p>
            </div>

            <button>LOGIN</button>
        </form>
        <p>Doesn't have an account? <a href="/">Create One</a></p>
    </div>
    
</div>
  )
}
