import React from 'react';

import { Link } from 'react-router-dom';

export function Login({setIsLoginCallback}){
  /**
   * Handle the login feature.
   */
  const handleLogin = () => {
    setIsLoginCallback(true);
  }

  return (
    <div className="jumbotron jumbotron-fluid login-body pd-0">
      <div className="container-fluid pd-0">
        <div className="row">
          <div className="login-main col-sm">
            <section className="login-left">
              <p>Welcome Back!</p>
              <h1>Login to your account</h1>
              <div className="login-entry">
                <label htmlFor="email_input"></label><input type="email" placeholder="Email" name="email" />
              </div>
              <div className="login-entry">
                <label htmlFor="password_input"></label><input type="password" placeholder="Password" name="password" />
              </div>
              <div>
                <Link onClick={handleLogin} to="/" aria-label="login" className="login-btn btn btn-success">Login</Link>
              </div>
            </section>
          </div>
          <section className="login-side col-sm" >
            <img src="img/loginPic.png" alt="two people holding jigsaw puzzle piece"/>
          </section>
        </div>
      </div>
    </div>
  );
}