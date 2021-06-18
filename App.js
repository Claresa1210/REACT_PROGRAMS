import React,{useState} from 'react';
import LoginForms from './components/LoginForms';

function App() {
 const administrator = {
   email: "admin@admin.com",
   password: "admin 123"
  }

  const[user,setUser]=useState({name:"", email:""});
  const[error,setError]=useState("");

  const Login = details=>{
    console.log(details);
    
    const Logout =() => {
       setUser({name:"", email:""});
  }
  }
return  (
    <div className="App">
      {(user.email!="") ?(
                  <div className="welcome">
                    <h2> Welcome, <span>{user.name}</span></h2>
                    <button onClick={Logout}>logout</button>
                    </div>
                    ) :(
                      <LoginForms Login={Login} error={error}/>
                    )}
    </div>
  );

}
export default App;
