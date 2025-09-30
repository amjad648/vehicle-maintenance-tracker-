import React, {useState} from "react";
import Form from "./Form";
import VehicleDataTable from "./VehicleDataTable";
import Hero from './Hero';
import InvoicesDataTable from "./InvoicesDataTable";
import FilteredInvoicesTable from "./FilteredInvoicesTable";

export default function Sidebar () {
  const [activeView, setActiveView] = useState('hero');
  const [selectedVehicleId, setSelectedVehicleId] = useState(null);

  function renderForm () {
   setActiveView(prev => prev === 'form' ? 'hero' : 'form');
  
  };

  function renderVehiclesData () {
    setActiveView(prev => prev === 'vehicles' ? 'hero' : 'vehicles');
    
  };

  function renderInvoicesData () {
    setActiveView(prev => prev === 'invoices' ? 'hero' : 'invoices');
   
  }
 
  function renderFilteredInvoices(vehicleId) {
    setSelectedVehicleId(vehicleId);
    setActiveView(prev => prev === 'filteredInvoices' ? 'hero' : 'filteredInvoices');
  }

  const renderContent = () => {
    
    switch (activeView) {
      case 'form':
        return <Form />;
      case 'vehicles':
        return <VehicleDataTable headers={['Vehicle ID','Make','Model','Reg No.','Action']} handleInvoices={(vehicleId) => renderFilteredInvoices(vehicleId)} />;
      case 'invoices':
        return <InvoicesDataTable headers={[ 'Vehicle ID','Invoice ID', 'Vehicle Name', 'Service Date', 'Total Cost', 'Tasks', 'Action']} />;
      case 'filteredInvoices':
        return <FilteredInvoicesTable headers={[ 'Vehicle ID','Invoice ID', 'Vehicle Name', 'Service Date', 'Total Cost', 'Tasks', 'Action']} id={selectedVehicleId}/>
      default:
        return <Hero />;
    }
  };

  return (
   <>
   <div className="d-flex"> 

    <div className="d-flex flex-column col-2 p-3 text-bg-dark mt-5 align-items-stretch rounded-end" style={{width: '300px', height: '100vh'}}> 

    <button type="button" onClick={renderVehiclesData}  className="m-3 btn btn-secondary p-3 fs-5">Vehicles Data</button>

    <button type="button" onClick={renderInvoicesData}  className="m-3 btn btn-secondary p-3 fs-5">Invoices Data</button>
    
    <hr/>
    
     <button type="button" onClick={renderForm}  className="m-3 p-3 fs-5 btn btn-secondary"><strong>+</strong> Add a new Vehicle</button>

    </div>

    { renderContent() }

  </div>
  </>
  );
}