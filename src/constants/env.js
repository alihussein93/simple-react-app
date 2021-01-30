let baseURL = '';
let portNumber = 0;
let ENVIRONMENT = {};

switch (process.env.NODE_ENV) {
  case 'development':
    baseURL = 'http://localhost';
    portNumber = 1337;
    break;
  default:
    break;
}

ENVIRONMENT = {
  baseURL,
  portNumber
};

export default ENVIRONMENT;
