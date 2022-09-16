import axios from 'axios';
const {PORT, IPV4IP} = require('../../clientConfig');
export default axios.create({
  baseURL: `http://${IPV4IP}:${PORT}`,
});

console.log('The app is connected to: ' + 'IP:' + IPV4IP + ' PORT:' + PORT);
