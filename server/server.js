const express = require('express');
const app = express();

const port = process.env.PORT || 8080;

app.get('/', (req, res) => {
  res.send('GET hit');
});

app.post('/login', (req, res) => {
  res.send('POST hit');
});

app.listen(port, () => {
  console.log('Example app is listening on port ' + port);
});
