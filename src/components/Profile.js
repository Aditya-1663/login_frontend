import React, { useState, useEffect } from 'react';
import { Link,useLocation } from 'react-router-dom';
import './Style/profile.css'

export default function Profile() {
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
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch(`${host}/api/auth/getuser`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "auth-token":localStorage.getItem('token'),
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
  
    console.log(data ? data.city : null); 
  return (
    
<div class="body1">
    <div class="outerbox ">
        <div class="innerbox1 ">
            <div class="profilebox ">
                <img src="https://img.freepik.com/premium-photo/male-female-profile-avatar-user-avatars-gender-icons_1020867-75560.jpg?w=740" alt="" srcset=""/></div>
            <div class="editbnt ">
              <Link to="/edit">
                 <button type="button">Edit Profile</button>
                </Link> 
                </div>

        </div>
        <div class="innerbox ">
            <div class="title ">My Profile</div>

            <div class="boxin ">
                <div class="datafield ">
                    <div class="lable ">Name :</div>
                    <div class="lable "> {data?data.name:null}</div>
                </div>
                <div class="datafield ">
                    <div class="lable">Email : {data?data.email:null}</div>
                </div>
                <div class="datafield ">
                    <div class="lable">Mobile Number : {data?data.mobilenumber:null}</div>
                </div>
                <div class="datafield ">
                    <div class="lable">Gender : {data?data.gender:null} </div>
                </div>
                <div class="datafield datain ">
                    <div class="lable">Country :{data.country}</div>
                    <div class="lable">State :{data.state} </div>
                </div>
                <div class="datafield datain ">
                    <div class="lable">City : {data.city}  </div>
                    <div class="lable">Pin Code :  {data.pincode} </div>
                </div>

                <div class="datafield ">
                    <div class="lable">Landmark : {data.address}  </div>
                </div>
                <p><Link to="/setpassword">Change Password</Link></p>
            </div>
        </div>
    </div>
</div>
  )
}
