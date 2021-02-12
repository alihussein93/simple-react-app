let baseURL = '';
let portNumber = 0;
let tokenExpiration = 1500;

let ENVIRONMENT = {};

switch (process.env.NODE_ENV) {
  case 'development':
    baseURL = 'http://localhost';
    portNumber = 1337;
    tokenExpiration = 3600;
    break;
  default:
    break;
}

ENVIRONMENT = {
  baseURL,
  portNumber,
  tokenExpiration
};

export default ENVIRONMENT;
