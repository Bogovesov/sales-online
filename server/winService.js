var Service = require('node-windows').Service;

// Create a new service object
var svc = new Service({
  name:'SalesService',
  description: 'The sales service',
  script: 'C:\\Users\\admin\\Documents\\JS\\sales-online\\server\\index.js'
});

// Listen for the "install" event, which indicates the
// process is available as a service.
svc.on('install',function(){
  svc.start();
});

svc.install();