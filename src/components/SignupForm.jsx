export default function SignupForm () {
  return (
    <main className="d-flex vh-100  bg-body-tertiary"> 

    <form className="d-flex row text-start g-3 vh-50 p-5 bg-body-tertiary m-auto" style={{width: '50%'}}>
   
    <div className="col-md-6">
    <label htmlFor="first-name" className="form-label ms-2">First Name</label>
    <input type="text" className="form-control" id="first-name" name="first-name"/>
  </div>
  <div className="col-md-6">
    <label htmlFor="last-name" className="form-label ms-2">Last Name</label>
    <input type="text" className="form-control" id="last-name" name="last-name"/>
  </div>
  <div className="col-md-6">
    <label htmlFor="inputEmail4" className="form-label ms-2">Email</label>
    <input type="email" className="form-control" id="inputEmail4" name="email"/>
  </div>
  <div className="col-md-6">
    <label htmlFor="inputPassword4" className="form-label ms-2">Password</label>
    <input type="password" className="form-control" id="inputPassword4" name="password"/>
  </div>
  <div className="col-12">
    <label htmlFor="address" className="form-label ms-2">Address</label>
    <input type="text" className="form-control" id="address" name='address' placeholder="1234 Main St"/>
  </div>
 
  <div className="col-md-6">
    <label htmlFor="inputCity" className="form-label ms-2">City</label>
    <input type="text" className="form-control" id="inputCity" name="city"/>
  </div>
  <div className="col-md-4">
    <label htmlFor="inputState" className="form-label ms-2">State</label>
    <select id="inputState" className="form-select">
      <option >Choose...</option>
      <option>...</option>
    </select>
  </div>
 
  <div className="col-12">
    <div className="form-check">
      <input className="form-check-input" type="checkbox" id="gridCheck"/>
      <label className="form-check-label" htmlFor="gridCheck">
        Check me out
      </label>
    </div>
  </div>
  <div className="col-12">
    <button type="submit" className="btn btn-secondary">Sign in</button>
  </div>
</form>
</main>
  )
}