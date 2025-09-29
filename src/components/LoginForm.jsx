import { useState, useRef } from "react";

export default function LoginForm ({handleLogin}) {


  const email = useRef();
  const password = useRef();

  function submitForm (event) {
    event.preventDefault();
  
    const inputEmail = email.current.value;
    const inputPassword = password.current.value;
    console.log(inputEmail,inputPassword);
    handleLogin();
  }


  return (
    
 <main className="d-flex vh-100 py-4 bg-body-tertiary"> 

    <div className="form-signin m-auto ">
  {" "}
  <form style={{width: '330px'}} onSubmit={submitForm}>
    {" "}
   
    <h2 className="d-flex justify-content-start h4 mb-4 fw-bold">Please Login</h2>{" "}
    <div className="form-floating">
      {" "}
      <input
        type="email"
        className="form-control"
        id="email"
        name="email"
        ref={email}
        placeholder="name@example.com"
        required
      />{" "}
      <label htmlFor="email">Email</label>{" "}
    </div>{" "}
    <div className="form-floating">
      {" "}
      <input
        type="password"
        className="form-control"
        id="password"
        ref={password}
        placeholder="Password"
        name="password"
        required

      />{" "}
      <label htmlFor="password">Password</label>{" "}
    </div>{" "}
    <div className="form-check text-start my-3">
      {" "}
      <input
        className="form-check-input"
        type="checkbox"
        value="remember-me"
        id="checkDefault"
      />{" "}
      <label className="form-check-label" htmlFor="checkDefault">
        Remember me
      </label>{" "}
    </div>{" "}
    <button  className="btn btn-secondary w-100 py-2" type="submit">
      Login
    </button>{" "}
    <p className="d-flex mt-5 mb-3 text-body-secondary">© 2017–2025</p>{" "}
  </form>{" "}
</div>
</main>
  )
}


