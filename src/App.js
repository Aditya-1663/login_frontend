
import './App.css';
import Login from './components/Login';
import CreateUser from './components/CreateUser';

import {
  BrowserRouter as Router,
  
  Route,  Routes
  
} from "react-router-dom";
import { Profiler } from 'react';
import Profile from './components/Profile';
import Edit from './components/Edit';
import Password from './components/Password';
function App() {
  return (
   <> 
   
    <Router>
   <Routes>
         
         <Route path="/register" element={<CreateUser/>} />
         <Route path="/" element={<Login/>}/>
         <Route path="/profile" element={<Profile/>}/>
         <Route path="/edit" element={<Edit/>}/>
         <Route path="/setpassword" element={<Password></Password>}/>
        
      
         {/* <Login/> */}
         {/* <CreateUser/> */}
         </Routes>
   
   </Router>
   </>
  );
}

export default App;
