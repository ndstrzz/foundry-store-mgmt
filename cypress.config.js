const { defineConfig } = require("cypress");
const { spawn } = require("child_process");

let server;
let baseUrl;

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      require('@cypress/code-coverage/task')(on, config);

      on("task", {
        // Start the server
        startServer() {
          return new Promise((resolve, reject) => {
            if (server) {
              // If the server is already running, return the existing base URL
              resolve(baseUrl);
            }

            // Start the server with `spawn` and capture its output
            server = spawn("node", ["-r","nyc","index-test.js"]);
            server.stdout.on("data", (data) => {
              const output = data.toString();
              console.log(output); // Log server output for debugging

              if (output.includes("Server is running on")) {
                const portMatch = output.match(/http:\/\/localhost:(\d+)/);
                if (portMatch) {
                  baseUrl = `http://localhost:${portMatch[1]}`;
                  resolve(baseUrl);
                }
              }
            });

            server.stderr.on("data", (data) => {
              console.error("Server error:", data.toString());
              reject(data);
            });
          });
        },
        // Stop the server
        stopServer() {
          if (server) {
            server.kill();
            console.log("Server stopped");
          }
          return null;
        }
      });

      return config;
    }
  }
});
