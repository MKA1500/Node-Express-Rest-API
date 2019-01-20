const Joi = require('joi');
const express = require('express');
const app = express();

app.use(express.json());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


let servers = [
    {
      name: 'Testserver',
      capacity: 10,
      id: 1
    },
    {
      name: 'Liveserver',
      capacity: 100,
      id: 2
    },
    {
      name: 'Liveserver 2',
      capacity: 90,
      id: 3
    }
  ];

let apiTest = {};

app.post('/api/http-test', (req, res) => {
  apiTest = req.body;
  res.send('POSTED:' + apiTest);
});

app.get('/api/http-test', (req, res) => {
  res.send(apiTest);
});

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/api/servers', (req, res) => {
  res.send(servers);
});

app.get('/api/servers/:id', (req, res) => {
  const server = servers.find(c => c.id === parseInt(req.params.id));
  if (!server) {
    res.status(404).send('The server with a given ID was not found');
  } else {
    res.send(server);
  }
});

app.post('/api/servers', (req, res) => {
  if (!res.body.name || !(req.body.capacity > 0)) {
    // 400 Bad Request
    // res.status(400).send('Name is required and should be minimum 3 characters.');
    return;
  }
  const server = {
    id: servers.length + 1,
    name: req.body.name,
    capacity: req.body.capacity
  };
  servers.push(server);
  res.send(server);
  // const schema = {
  //   name: Joi.string().min(3).required()
  // };
  //
  // const result = Joi.validate(req.body, schema);
  // if (result.error) {
  //   res.status(400).send(result.error);
  //   return;
  // }
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`))
