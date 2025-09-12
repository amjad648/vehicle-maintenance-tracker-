import React, {useState} from "react";
import {modelsByMake} from "../util/modelByMake.js"

export default function Form () {
  const [make, setMake] = useState('');
  const [model, setModel] = useState('');

  function handleSubmit (e) {
    e.preventDefault();

    const fd = new FormData(e.target);
    const data = Object.fromEntries(fd.entries());
    console.log(data);
    
  }

 const modelOptions = make? Object.keys(modelsByMake[make]) : [];
 const variantOptions = make && model ? modelsByMake[make][model] : [];
  
  return (
    <form onSubmit={handleSubmit} className="min-vh-100 d-flex col align-items-center justify-content-center p-3">
      <div className="w-100 bg-white d-flex justify-content-center">
    
  <div className='text-warning-emphasis p-3' style={{ width: '100%', maxWidth: '500px' }}>
  <h3 className="text-center mb-1 text-secondary ">Vehicle Information</h3>

    {/* ---Make Select--- */}

   <div className="form-floating mb-1"> 
   <select className="form-select form-select-lg mb-1" style={{height: '65px'}}
        name='make'
        value={make}
        onChange={ e => {
          setMake(e.target.value);
          setModel('');
        }}
        required
        >

  <option value='' disabled></option>

  {Object.keys(modelsByMake).map((makeKey) => (
     <option key={makeKey} value={makeKey}>
      {makeKey.charAt(0).toUpperCase() + makeKey.slice(1)}
     </option>
  ) )}
  {/* <option value="other">other</option> */}
</select>
<label>Make</label>
</div>
 
 

   {/* --- Model Select --- */}

    <div className="form-floating mb-1"> 
      <select className="form-select form-select-lg " style={{height: '65px'}}
        name='model'
        value={model}
        onChange={(e) => setModel(e.target.value)}
        disabled={!make}
        required
        >    

   <option value="" disabled></option>

   { modelOptions.map( modelName => (
    <option key={modelName} value={modelName}>{modelName}</option>
   ))}
      </select>
      <label>Model</label>
    </div>    
     
     {/* --- Variant Select --- */}
   

  <div className="form-floating mb-1">
  <select className="form-select form-select-lg mb-1" style={{height: '65px'}}
  name="variant"
  disabled= {!model}
  required
  >
    <option value='' disabled></option>
    {variantOptions.map(variant => (
      <option key={variant} value={variant}>{variant}</option>
    ))}
  </select>
    <label>Variant</label> 
  </div>




  <div className="form-floating mb-2 shadow">
    <input type="text" className="form-control" id='registration' placeholder="" name='registration' required style={{height: '65px'}}/>
    <label htmlFor="registration">Registration Number</label> 
  </div>

  <button type="submit"  className="btn btn-lg btn-secondary mb-2 p-2">Submit data</button>
  </div>
  </div>
 
</form>
  )
}