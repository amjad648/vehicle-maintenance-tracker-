import React, {useEffect, useState, useContext} from "react";
import { KeycloakContext } from '../KeycloakProvider';
import { fetchVehicles } from "./services/vehicleService";

export default function VehicleDataTable ({headers, handleInvoices}) {
  const keycloak = useContext(KeycloakContext)
  const [vehiclesData, setVehiclesData] = useState([]);
 
  
  useEffect(() => {
     // Only get if token is available
    if (keycloak?.token) {
     console.log('Keycloak token:', keycloak.token);

    async function getVehiclesData () {
      const data = await fetchVehicles(keycloak.token)
      setVehiclesData( data || [] );
   };

    getVehiclesData();
  } 
 }, [keycloak]);

  console.log(vehiclesData);

  
  return (
    
  <div className="w-75 m-5 rounded-top overflow-hidden border">
    <table className="table ">
     <thead className="table-dark">
     <tr>
      {headers.map((header, index) => (
        <th key={index}>{header}</th>
      ))}
     </tr>
     </thead>

    <tbody>
      {vehiclesData.map((vehicle, index )=> (
     <tr key={index}>
        <td>{vehicle.id}</td>
        <td>{vehicle.make}</td>
        <td>{vehicle.model}</td>
        <td>{vehicle.registration}</td>
        <td>
          <div>
           <button type="button" className="btn btn-secondary btn-sm px-3 me-1">Edit</button>
           <button type="button" className="btn btn-secondary btn-sm me-1">Delete</button>
           <button type="button" onClick={() => handleInvoices(vehicle.id)} className="btn btn-secondary btn-sm me-1">Invoices</button>
           </div>
        </td>
      
    </tr>
      ))
    }
      
    </tbody>
   </table>
  </div>
  
  )
}