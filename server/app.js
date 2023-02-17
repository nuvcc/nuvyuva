const express = require('express');
const path = require('path');

const app = express();

// Serve static files from the build folder
app.use(express.static(path.join(__dirname, '../build')));

// Route all requests to the React app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../build/index.html'));
});

// Start the server
app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});