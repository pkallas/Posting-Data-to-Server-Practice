const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const server = app.listen(3000, function(){
  console.log("Listening on port %s...", server.address().port)
});

app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (request, response) => {
  response.send('This is working so far')
})

app.get('/form-get', (request, response, next) => {
  response.sendFile(path.join(__dirname + '/form-get.html'))
})

app.get('/form-post', (request, response, next) => {
  response.sendFile(path.join(__dirname + '/form-post.html'))
})

app.get('/submit-form', (request, response, next) => {
  let submittedData = request.body;
  response.json(submittedData);
})

app.post('/submit-form', (request, response, next) => {
  response.json({
    'body-params': request.body,
    'query-params': request.query
  });
})
