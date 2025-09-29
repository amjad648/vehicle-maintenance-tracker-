import React, { useContext } from 'react';
import { KeycloakContext } from '../KeycloakProvider';

const Profile = () => {
  const keycloak = useContext(KeycloakContext);

  return (
    <div>
      <h2 className='fw-semibold text-secondary'>Welcome,   {keycloak.tokenParsed?.preferred_username}<span><button onClick={() => keycloak.logout()}className='btn btn-secondary ms-5'>Logout</button></span></h2>
     
    </div>
  );
};

export default Profile;