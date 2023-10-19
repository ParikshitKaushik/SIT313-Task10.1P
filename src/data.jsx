import React from "react" 
import './data.css'
function Data() {
    return (
      <form id="email-registration" action="/" method="post">
        <div className="x">
          <h1>DEV@Deakin</h1>
          <div className="input-container">
            <input id="emailInput" name="email" type="email" placeholder="subscribe" />
            <span className="post-text">Post</span>
            <span className="login-text">Login</span>
          </div>
        </div>
      </form>
    );
  }
  

export default Data;