 import React, { useState } from "react";
 import './Login.css';


function Login () {
     const[Name, setName]=useState("")
     const[email, setEmail]=useState("")
     const[location, setLocation]=useState("")

    function handleSubmit(){


        const data ={
                 Name: Name,
            email: email,
             location : location,

        }
      console.log(data);

        alert(data);     }

    return (
        <div className="background">             <div className="Background">

         <div className="formbackground">
         <form className="form" onSubmit={handleSubmit}>
           
          <div className="Login">
         <h2>Login to AgriAce</h2>

             </div>

             <div className="AgriAce">

          <input type="text" required value={Name} onChange={e => setName(e.target.value)} placeholder="Company Name"/> <br/>
           <input type="email" required value={email} onChange={e => setEmail(e.target.value)} placeholder="Company Email"/> <br/>

           <input type="text" required value={location} onChange={e => setLocation(e.target.value)} placeholder="Company Location"/> <br/>


          <button className="button" type="submit" >Login</button>
         <p>You want to go back home?
           <a href="/">Home</a>
          </p>

         
            </div>



           </form>
         </div>
         
         </div>
            
           </div>


  

         )
 }
 export default Login;