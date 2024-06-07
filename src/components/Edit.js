import React, { useState, useEffect } from 'react';
import { Link,useLocation,useNavigate } from 'react-router-dom';
import './Style/profile.css'
export default function Edit() {
    const [data, setData] = useState({name:"",email:"",
     
        gender:"",
        city:"",
        state:"",
        mobilenumber:"",
        pincode:"",
        address:"",
        country:""

    });
    const host="https://login-backend-zjog.onrender.com";
    const navigate = useNavigate();
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch(`${host}/api/auth/getuser`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "auth-token":localStorage.getItem('token')
            },
          });
  
          const data = await response.json();
          setData(data);
        } catch (error) {
          console.error("Failed to fetch:", error);
        }
      };
  
      fetchData();
    }, []); 

    const handlesubmit=async(e)=>{
        e.preventDefault();
        
        const response = await fetch(`${host}/api/auth/updateprofile`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "auth-token":localStorage.getItem('token')
              // "auth-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjY2MmE2NTQzZWU2Yjc2MTIxNmFiOWIyIn0sImlhdCI6MTcxNzc0MTE1NH0.1naAcX-emnxwr-uaRlaXZw2CWSp6dRff3xPgHBwM8Qo"
            },
            body: JSON.stringify({
                name:data.name,
                email:data.email,
                mobilenumber:data.mobilenumber,
                gender:data.gender,
                state:data.state,
                city:data.city,
                pincode:data.pincode,
                address:data.address,
            })
          });
          const json=await response.json();
          // alert(response)
          console.log(json)

          if(json.success){
            // save the token and redirect
            localStorage.setItem('token',json.authtoken)
           navigate("/profile")
          //  alert( " account has be  updated ")
          }
          else{
            alert(json.success+",/n account not be updated")
          } 
          }
    const onchange=(e)=>{
        setData({...data,[e.target.name] : e.target.value})
      }
  return (
    <div class="body">
    <div class="outerbox ">
        <div class="innerbox1 ">
            <div class="profilebox ">
                <img src="https://img.freepik.com/premium-photo/male-female-profile-avatar-user-avatars-gender-icons_1020867-75560.jpg?w=740" alt="" srcset=""/></div>
            <div class="editbnt "><button type="button">Edit Profile</button></div>

        </div>
        <div class="innerbox ">
            <div class="title ">My Profile</div>
     <form onSubmit={handlesubmit} action="">
            <div class="boxin ">
                <div class="datafield ">
                    <div class="lable ">Name :
                        <input onChange={onchange} type="text" value={data.name}  name="name" id=""/>
                    </div>
                    {/* <!-- <div class="lable "> Aditya kumar</div> --> */}
                </div>
                <div class="datafield ">
                    <div class="lable">Email :
                        <input onChange={onchange} disabled type="email" value={data.email} name="email" id=""/>
                    </div>
                </div>
                <div class="datafield ">
                    <div class="lable">Mobile Number :
                        <input onChange={onchange} type="number" value={data.mobilenumber} name="mobilenumber" id=""/>
                    </div>
                </div>
                <div class="datafield ">
                    <div class="lable">Gender :
                        <input onChange={onchange} type="text" value={data.gender} name="gender" id=""/>
                    </div>
                </div>
                <div class="datafield datain ">
                    <div class="lable datalable">Country : 
                        <input onChange={onchange} type="text" value={data.country} name="country" id=""/></div>
                    <div class="lable datalable">State : 
                        <input onChange={onchange} type="text" value={data.state} name="state" id=""/></div>
                </div>
                <div class="datafield datain ">
                    <div class="lable datalable">City : <input onChange={onchange} type="text" value={data.city} name="city" id=""/></div>
                    <div class="lable datalable">Pin Code : <input onChange={onchange} type="number" value={data.pincode} name="pincode" id=""/></div>
                </div>

                <div class="datafield ">
                    <div class="lable">Landmark : <input onChange={onchange} type="text" value={data.address} name="address" id=""/></div>
                </div>
            </div>
                <p>
                  <button class="bntedit" type="submit">Save Profile</button></p>
            </form>
        </div>
    </div>
</div>
  )
}
