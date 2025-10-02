import React, {useEffect, useState, useContext} from "react";
import { KeycloakContext } from '../KeycloakProvider';
import { getInvoices } from "./services/invoiceService";

export default function InvoicesDataTable ({headers}) {

    const keycloak = useContext(KeycloakContext)
    const [invoicesData, setInvoicesData] = useState([]);
   
     
 
    useEffect( () => {
   // Only get if token is available
   if (keycloak?.token) {
    
      async function fetchInvoices () {
        const data = await getInvoices(keycloak.token);
        setInvoicesData(data || []);
      };

      fetchInvoices();
    }
   }, [keycloak]);

   console.log(invoicesData);

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
        {invoicesData.map((invoice, index )=> (
       <tr key={index}>
          <td>{invoice.vehicleId}</td>
          <td>{invoice.invoiceId}</td>
          <td>{invoice.vehicleDisplayName}</td>
          <td>{invoice.serviceDate}</td>
          <td>{invoice.totalCost}</td>
          <td>{invoice.taskCount}</td>
          <td>
            <div>
             <button className="btn btn-secondary btn-sm px-3 me-1">Edit</button>
           <button className="btn btn-secondary btn-sm">Delete</button>
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