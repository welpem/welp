import React from "react";
import "./Landing.css";
import WOS from '../WOS/WOS'
function Landing() {
  return (
    <div className="landing">
      Landing Component
      <h1> Welp </h1>
      <p>
        Welp is a platform for hard-working people to review the customers that
        they love and hate. The worst of the worst can be placed on the Wall of
        Shame to warn others.
      </p>
      <input placeholder="Email Address"/>
      <input placeholder="Password"/>
      <button>Log in</button>
      <button>Register</button>
      <p>continue as a guest</p>
      <WOS />
    </div>
  );
}

export default Landing;
