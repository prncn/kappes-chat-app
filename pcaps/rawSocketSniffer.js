const sniff = require('raw-socket-sniffer');
sniff('127.0.0.1', (packet) => console.log(packet));