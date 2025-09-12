export default function LoginForm ({handleLogin}) {
  return (
    
 <main className="d-flex vh-100 py-4 bg-body-tertiary"> 

    <div className="form-signin m-auto ">
  {" "}
  <form style={{width: '330px'}}>
    {" "}
   
    <h1 className="d-flex justify-content-start h3 mb-3 fw-bold">Please sign in</h1>{" "}
    <div className="form-floating">
      {" "}
      <input
        type="email"
        className="form-control"
        id="floatingInput"
        placeholder="name@example.com"
      />{" "}
      <label htmlFor="floatingInput">Email address</label>{" "}
    </div>{" "}
    <div className="form-floating">
      {" "}
      <input
        type="password"
        className="form-control"
        id="floatingPassword"
        placeholder="Password"
      />{" "}
      <label htmlFor="floatingPassword">Password</label>{" "}
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
    <button onClick={handleLogin} className="btn btn-secondary w-100 py-2" type="submit">
      Sign in
    </button>{" "}
    <p className="d-flex mt-5 mb-3 text-body-secondary">© 2017–2025</p>{" "}
  </form>{" "}
</div>
</main>
  )
}


