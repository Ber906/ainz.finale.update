const express = require('express');
const fs = require('fs');
const { spawn } = require("child_process");
const chalk = require('chalk');
const path = require('path');
const axios = require("axios");
const app = express();
const PingMonitor = require('ping-monitor');
const port = process.env.PORT || 5110;
const pingOptions = {
  website: `https://lxr7f3-${port}csb.app/`,
  title: 'Ainz', 
  interval: 1 // minutes
};

// Create a new Ping Monitor instance
const monitor = new PingMonitor(pingOptions);

monitor.on('up', (res) => {
  const pingTime = res.ping ? `${res.ping}ms` : 'N/A';
  console.log(chalk.green.bold(`${res.website} is UP. Ping Time: ${pingTime}`));
});

monitor.on('down', (res) => {
  console.log(chalk.red.bold(`${res.website} is DOWN. Status Message: ${res.statusMessage}`));
});

monitor.on('error', (error) => {
  console.log(chalk.red(`An error has occurred: ${error}`));
});

monitor.start();

app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'html/website.html')));

const http = require('http');
const { Server } = require("socket.io");
const httpServer = http.createServer(app);
const io = new Server(httpServer);

io.on('connection', (socket) => {
  console.log('New client connected');
  sendLiveData(socket);

  socket.on('disconnect', () => {
    console.log('Client disconnected');
  });
});

function startBot() {
  const child = spawn("node", ["--trace-warnings", "--async-stack-traces", "system.js"], {
      cwd: __dirname,
      stdio: "inherit",
      shell: true
  });

  child.on("close", (codeExit) => {
    console.log(`Bot process exited with code: ${codeExit}`);
    if (codeExit !== 0) {
       setTimeout(startBot, 3000); 
    }
  });

  child.on("error", (error) => {
    console.error(`An error occurred starting the bot: ${error}`);
  });
}

startBot(); 

httpServer.listen(port, () => {
  console.log(`Server with real-time updates running on http://localhost:${port}`);
});

module.exports = app;
