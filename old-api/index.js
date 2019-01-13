const express = require('express');

// set up express up
const app = express();

app.use('/api', require('./routes/api'));

// listen for requests
app.listen(process.env.port || 4000, function(){
  console.log('listening for requests');
});
