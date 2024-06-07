import './Style/CreateUser.css'
import React,{useState} from 'react'
import {useNavigate,Link} from 'react-router-dom';
export default function CreateUser() {
    const navigate = useNavigate();
    const host="https://login-backend-zjog.onrender.com";
    const [cardential,setcardential]=useState({name:"",email:"",
        password:"",
        gender:"",
        city:"",
        state:"",
        mobilenumber:"",
        pincode:"",
        address:"",

    })
    const handlesubmit=async(e)=>{
        e.preventDefault();
        if(cardential.confimepassword!=cardential.password){alert("password ans confime password should be same ")
            return;
        }
        const response = await fetch(`${host}/api/auth/createuser`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              
            },
            body: JSON.stringify({
                name:cardential.name,
                email:cardential.email,
                password:cardential.password,
                mobilenumber:cardential.mobilenumber,
                gender:cardential.gender,
                state:cardential.state,
                city:cardential.city,
                pincode:cardential.pincode,
                address:cardential.address,
            })
          });
          const json=await response.json();
          console.log(json)

          if(json.success){
            // save the token and redirect
            localStorage.setItem('token',json.authtoken)
           navigate("/")
           alert( " account has be created successfully")
          }
          else{
            alert(json.success+",/n account not be created")
          } 
          }
          const onchange=(e)=>{
            setcardential({...cardential,[e.target.name] : e.target.value})
          }
  return (
    <div className='body'>
    <div className="container ">
    {/* <!-- <h3 className="title">Welcome to login page</h3> --> */}
    <form onSubmit={handlesubmit} action="" method="post">
        <h3 className="title">Create Account</h3> 
        <div className="field">
            <label for="username">Name:</label>
            <input type="text"  required name="name" value={cardential.name} onChange={onchange} id="username" placeholder="Enter your username"/>
        </div>
        <div className="field">
            <label for="username">Email:</label>
            <input type="email" required name="email" value={cardential.email} onChange={onchange} id="username" placeholder="Enter your username"/>
        </div>
        <div className="field">
            <label for="username">Mobile Number:</label>
            <input type="number" required name="mobilenumber" value={cardential.mobilenumber} onChange={onchange} id="username" placeholder="Enter your moblie number"/>
        <label for="username">Gender:</label>
       
            <div className='radiobnt'>

            <input   className="custom-radio" type="radio" style={{width:'2000px'}} id="male" name="gender"  value="male"  checked={cardential.gender === 'male'} onChange={onchange}/>
            </div>
             <label for="male">Male</label>
            <div className='radiobnt'>
  
                <input className="custom-radio" type="radio" id="female" name="gender" value="female" checked={cardential.gender === 'female'} onChange={onchange}/>
            </div>
                <label for="female">Female</label>
        </div>
        <div className="field">
            <label for="username">Country:</label>
            <input type="text"required name="country" value={cardential.country} onChange={onchange} id="username" placeholder="Enter your username"/>
            <label for="username">State:</label>
            <input type="text" required name="state" value={cardential.state} onChange={onchange} id="username" placeholder="Enter your username"/>
        </div>
        <div className="field">
            <label for="username">City:</label>
            <input type="text" required name="city" value={cardential.city} onChange={onchange}  id="username" placeholder="Enter your Address"/>
            <label for="username">Pin Code:</label>
            <input type="number" required name="pincode" value={cardential.pincode} onChange={onchange} id="username" placeholder="Enter your Address"/>
        </div>
        <div className="field ">
            <label className="">Address:</label>
            <input className="" type='textarea' required name="address" value={cardential.address} onChange={onchange}  placeholder="Enter your password"/>
            </div>
                <div className="field">
                    <label for="username">Password:</label>
                    <input type="password" required name="password" value={cardential.password} onChange={onchange} id="username" placeholder="Enter your username"/>
                <label for="password">Comfime Password:</label>
                <input type="password" required name="confimepassword" value={cardential.confimepassword} onChange={onchange} id="password" placeholder="Enter your password"/>
                </div>
        <div className="field-checkbox">
           
            <p><Link to="/"></Link></p>
        </div>


        {/* <!-- Submit Button --> */}
        <button type="submit">Register Now</button>
    </form>
    <p>I have an account? <Link to="/">Login </Link></p>
</div></div>
  )
}
