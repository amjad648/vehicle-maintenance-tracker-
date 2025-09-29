import Keycloak from 'keycloak-js';

const keycloak = new Keycloak({
  url: 'http://192.168.1.4:8081/',
  realm: 'cmt',
  clientId: 'cmt-backoffice',
});

export default keycloak;