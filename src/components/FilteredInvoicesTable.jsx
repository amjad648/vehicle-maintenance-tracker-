import React, {useEffect, useState, useContext} from "react";
import { KeycloakContext } from '../KeycloakProvider';
import { getInvoicesById } from "./services/invoiceService";

export default function FilteredInvoicesTable ({headers, id}) {
  
    const keycloak = useContext(KeycloakContext)
    const [invoicesData, setInvoicesData] = useState([]);
  
  
    useEffect(() => {
      if (keycloak?.token) {
     async function fetchFilteredInvoices () {
      const data = await getInvoicesById(id,keycloak.token);
      setInvoicesData( data || []);
     }
       
     fetchFilteredInvoices();
    }
    }, [keycloak]);
     
  
    console.log(invoicesData);

    return (
      <div className="w-75 m-5 rounded-top overflow-hidden border">
      <h4 className="m-3">Invoices for Vehicle ID: {id}</h4>
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