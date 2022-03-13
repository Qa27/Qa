import React, { useState } from "react";
import "./App.css"
import LoginF from "./components/LoginF";
import Topbar from "./components/Topbar/Top";
import Right from "./components/Bodypage/right/Right";
import Left from "./components/Bodypage/left/Left";
import Nf from "./components/Bodypage/nf/Nf";

function App() {
  const adminUser = {
    email: "1@admin.com",
    password: "1",
  };
  const [user, setUser] = useState({ name: "", email: "" });
  const [error, setError] = useState("");

  const Login = (details) => {
    console.log(details);
    if (details.email === adminUser.email && details.password === adminUser.password){
      console.log("Logged in");
      setUser({
        name: details.name,
        email: details.email
      }); 
    } else{
      console.log("Details do not match");
      setError("Details do not match");
    }
  }
  return (
    // <div className="App">
    //   {user.email !== "" ? (
        <>
          <Topbar/>
          <div className="Bodybar">
          <Left/>
          <Nf/>
          <Right/>
          </div>
        </>
    //   ) : (
    //     <LoginF Login={Login} error={error} />
    //   )}
    // </div>
  );
}

export default App;
