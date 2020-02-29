// const os = require('os')

function getIPAdress() {
  // let localIPAddress = '118.190.211.78'
  // const interfaces = os.networkInterfaces()
  // for (const devName in interfaces) {
  //   const iface = interfaces[devName]
  //   for (let i = 0; i < iface.length; i++) {
  //     const alias = iface[i]
  //     if (alias.family === 'IPv4' && alias.address !== '127.0.0.1' && !alias.internal) {
  //       localIPAddress = alias.address
  //     }
  //   }
  // }
  return '118.190.211.78'
}

module.exports = {
  getIPAdress
}