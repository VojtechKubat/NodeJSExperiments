import cluster from 'cluster';
import { request } from 'https';

if (cluster.isMaster) {

    // Count the machine's CPUs
    var cpuCount = require('os').cpus().length;

    // Create a worker for each CPU
    for (var i = 0; i < 1; i += 1) {        // TODO - replace the 1 with cpuCount
        cluster.fork();
    }

} else {
    var express = require('express');
    var Server = require('./Server');
    var instance = new Server();

    instance.app.listen(3000, () => {
        console.log('Server is listening on port 3000');
    });
}

// TODO - uncomment before deploy
// cluster.on('exit', function (worker) {
//     console.log('Worker %d died :(', worker.id);
//     cluster.fork();
// });
