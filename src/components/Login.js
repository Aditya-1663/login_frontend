
import './Style/Login.css'
import React ,{useState} from 'react'
import {useNavigate,Link} from 'react-router-dom';
export default function Login() {
    const [cardential,setcardential]=useState({email:"",password:""})
    //    let history=useHistory()
    const host="https://login-backend-zjog.onrender.com";
       const navigate = useNavigate();
        const handlesubmit=async(e)=>{
            e.preventDefault();
            const response = await fetch(`${host}/api/auth/login`, {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                  
                },
                body: JSON.stringify({email:cardential.email,password:cardential.password})
              });
              const json=await response.json();
              console.log(json)
              if(json.success){
                // save the token and redirect
                localStorage.setItem('token',json.authtoken)
               navigate("/profile")
              }
              else{
                alert(json.success+", wrong password")
              }
              }
              const onchange=(e)=>{
                setcardential({...cardential,[e.target.name] : e.target.value})
              }
  return (
    <div className='body'>
    <div className="container my">
        {/* <!-- <h3 className="title">Welcome to login page</h3> --> */}
        <form onSubmit={handlesubmit} action="" method="post">
            <h3 className="title">Login</h3>
            <div className="field">
                <label for="username">Email:</label>
                <input type="email" value={cardential.email} name="email"  onChange={onchange} id="username" placeholder="Enter your username"/>
            </div>
            <div className="field">
                <label for="password">Password:</label>
                <input type="password" value={cardential.password} name="password" onChange={onchange} id="password" placeholder="Enter your password"/>
            </div>
            <div className="field-checkbox">
               
                <p><Link to="/setpassword">Forget Password</Link></p>
            </div>


            {/* <!-- Submit Button --> */}
            <button type="submit">LOGIN</button>
        </form>
        <p>Doesn't have an account? <Link to="/register">Create One</Link></p>
    </div>
    
</div>
  )
}
