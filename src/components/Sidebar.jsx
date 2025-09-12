import React, { useState } from "react";
import Form from "./Form";

export default function Sidebar () {
const [formRender, setFormRender] = useState(false);

  function renderForm () {
   setFormRender(true);
  }

  return (

   <div className="d-flex"> 
    <div className="d-flex flex-column col-2 p-3 text-bg-dark my-1 align-items-stretch " style={{width: '300px', height: '100vh'}}> 

   <div className="dropdown py-4">
    <button className="btn btn-secondary btn-lg dropdown-toggle max-auto px-5"  type="button" data-bs-toggle="dropdown" >Vehicles</button>
   
    <ul className="dropdown-menu">
     <li><a className="dropdown-item" href="#">Mazda</a></li>
     <li><a className="dropdown-item" href="#">Toyota</a></li>
     <li><a className="dropdown-item" href="#">Honda</a></li>
     <li><a className="dropdown-item" href="#">Suzuki</a></li>
     <li><button type="submit" onClick={renderForm}  className="mx-2"> + Add a new Vehicle</button></li>
    </ul>
   </div>
    
   
    
    <hr/>
    
    <ul className="nav nav-pills flex-column mb-auto pt-3"> 

<li> <a href="#" className="nav-link bg-secondary text-white active">
Dashboard
</a> </li> 
<li> <a href="#" className="nav-link text-white">
Orders
</a> </li>
<li> <a href="#" className="nav-link text-white"> 
Products
</a> </li> 
<li> <a href="#" className="nav-link text-white"> 
Customers
</a> </li> </ul>

</div>


{formRender? <Form /> : undefined}

</div>
  )
}