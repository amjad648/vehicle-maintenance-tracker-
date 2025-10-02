import axios from "axios";
 
const API_BASE = 'http://192.168.1.4:8080/api/invoices';

export function getInvoices (token) {
 return axios.get(API_BASE, {
  headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },

  }).then(response => response.data.content)
    .catch((error) => {
   console.error('Error to get invoices data:', error);
   return[];

 });
};


export function getInvoicesById (id, token) {
  console.log("Fetching invoices for vehicle ID:", id);
  console.log("Using token:", token);
  
  return axios.get(`${API_BASE}?vehicleId=${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },

  }).then(response => response.data.content)
  .catch((error) => {
 console.error('Error to get invoices data:', error);
 return [];

  });
};