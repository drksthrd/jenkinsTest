const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, '../client/dist')));

const port = 8000;

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});