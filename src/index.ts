
import express from 'express';
import http from 'http';

const app = express();
const port = 9000;
const server = http.createServer(app);

app.get('/', (req, res) => {
  res.send('Hello World!');
});


server.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});


// app.listen(port, () => {
//   return console.log(`Express is listening at http://localhost:${port}`);
// });