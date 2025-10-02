import axios from "axios";

const API_BASE = 'http://192.168.1.4:8080/api/vehicles';

export const fetchVehicles = (token) => {
  return axios.get(API_BASE, {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  }).then(res => res.data.content)
  .catch(err => {
    console.error('Error to get vehicles data:' , err);
     
    return [];

  });
}