const WebSocket = require('ws');

// Create a WebSocket server
const wss = new WebSocket.Server({ port: 8080 });

// Shared counter variable
let counter = 0;

// Broadcast the counter value to all connected clients
function broadcastCounter() {
  const message = JSON.stringify({ type: 'counter', value: counter });
  wss.clients.forEach(client => client.send(message));
}

// Handle WebSocket connections
wss.on('connection', ws => {
  // Send the current counter value to the newly connected client
  ws.send(JSON.stringify({ type: 'counter', value: counter }));

  // Handle messages from clients
  ws.on('message', message => {
    const data = JSON.parse(message);
    if (data.type === 'increment') {
      counter++;
    } else if (data.type === 'decrement') {
      counter--;
    }
    // Broadcast the updated counter value to all clients
    broadcastCounter();
  });
});

// Start the server
console.log('WebSocket server is running on port 8080');
```
