import React, {useEffect, useState, useContext} from "react";
import { KeycloakContext } from '../KeycloakProvider';

export default function FilteredInvoicesTable ({headers, id}) {

    const keycloak = useContext(KeycloakContext)
    const [invoicesData, setInvoicesData] = useState([]);
  
    
  
    useEffect(() => {
      // Only fetch if token is available
      if (keycloak?.token) {
       // console.log('Keycloak token:', keycloak.token);
  
        fetch(`http://192.168.1.4:8080/api/invoices?vehicleId=${id}`, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${keycloak.token}`,
            'Content-Type': 'application/json',
          },
        })
          .then(response => {
            if (!response.ok) {
              throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
          })
          .then(data => {
            // Assuming response is paginated: { content: [...] }
            setInvoicesData(data.content);
          })
          .catch(error => {
            console.error('Error fetching vehicles data:', error);
          });
      }
    }, [keycloak,id]);
  
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