const express = require('express');
const app = express();

app.use(express.json());

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
  if (!res.body.name || req.body.name.length < 3) {
    // 400 Bad Request
    res.status(400).send('Name is required and should be minimum 3 characters.');
    return;
  }
  const server = {
    id: servers.length + 1,
    name: req.body.name
  };
  servers.push(server);
  res.send(server);
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`))
