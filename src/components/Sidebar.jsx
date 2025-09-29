import React, {useState} from "react";
import Form from "./Form";
import VehicleDataTable from "./VehicleDataTable";
import Hero from './Hero';
import InvoicesRendering from "./InvoicesRendering";

export default function Sidebar () {
  const [isFormRender, setIsFormRender] = useState(false);
  const [isVehicleData, setIsVehicleData] = useState(false);
  const [invoices, setInvoices] = useState(false);

  function renderForm () {
   setIsFormRender(prevRender => prevRender === false ? true : false);
   setIsVehicleData(false);
   setInvoices(false);
  };

  function renderVehiclesData () {
    setIsVehicleData(prevdata => prevdata === false ? true : false);
    setIsFormRender(false);
    setInvoices(false);
  };

  function renderInvoicesData () {
    setInvoices(prevInvoice => prevInvoice === false ? true : false);
    setIsVehicleData(false);
    setIsFormRender(false);
  }

  const renderContent = () => {
    if (isFormRender) return <Form />;
    if (isVehicleData) return <VehicleDataTable headers={['Vehicle ID','Make','Model','Reg No.','Action']} />;
    if (invoices) return <InvoicesRendering headers={[ 'Vehicle ID','Invoice ID', 'Vehicle Name', 'Service Date', 'Total Cost', 'Tasks', 'Action']} />;
    return <Hero />;
  };

  return (
   <>
   <div className="d-flex"> 

    <div className="d-flex flex-column col-2 p-3 text-bg-dark mt-5 align-items-stretch rounded-end" style={{width: '300px', height: '100vh'}}> 

    <button type="submit" onClick={renderVehiclesData}  className="m-3 btn btn-secondary p-3 fs-5">Vehicles Data</button>

    <button type="submit" onClick={renderInvoicesData}  className="m-3 btn btn-secondary p-3 fs-5">Invoices Data</button>
    
    <hr/>
    
     <button type="submit" onClick={renderForm}  className="m-3 p-3 fs-5 btn btn-secondary"><strong>+</strong> Add a new Vehicle</button>

    </div>

   {/* { isFormRender ? ( 
    <Form /> 
    ) : isVehicleData ? (
    <VehicleDataTable headers={['#ID','Make','Model','User Id','Reg No.','Action']}/>  
    ) : invoices ? (
      <InvoicesRendering headers={['ID #','Invoice ID', 'Vehicle ID', 'Vehicle Name', 'Service Date', 'Total Cost', 'Tasks', 'Action']} /> 
    ) :  ( 
    <Hero /> 
    )
    } */}

    { renderContent() }

  </div>
  </>
  );
}