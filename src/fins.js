'use strict'

/** jsFins is a node.js module that enables the developer to interact with Omron FINS/UDP slaves
 * and masters
 * @module jsFins
 *
 */

/** module:jsFins.client.UDP */
const FinsUdpClient = require('./fins-udp-client.js')

/** module:jsFins.server.UDP */
const FinsUdpServer = require('./fins-udp-server.js')

module.exports = {
  'client': {
    'UDP': FinsUDPClient,
  },
  server: {
    'UDP': FinsUDPServer,
  }
}
