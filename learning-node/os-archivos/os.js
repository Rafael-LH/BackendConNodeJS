const os = require('os')

//Info CPU
// console.log('CPU info', os.cpus());

// IP address and Mac Address
// console.log('IP address', os.networkInterfaces().en0.map(i => i.address));

//Only IP
// console.log('IP address', os.networkInterfaces().en0.map(i => i.address).filter(i => i.indexOf('192') > -1));

// console.log("Memory free in bites", os.freemem());

// console.log("OS Type ", os.type());

// console.log("OS Version", os.release());

console.log("User Info", os.userInfo());



