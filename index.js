const express = require('express');
const path = require('path');
const app = express();

// Serve static files from the "public" folder
app.use(express.static('public'));

// Route to your HTML file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'main.html'));
});

// Start the server on port 3000
app.listen(3000, () => {
  console.log('Slay! Your site is serving on http://localhost:3000');
});
