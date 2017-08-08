const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');


if (process.env.NODE_ENV === 'test'){
  app.EXPRESS_APP = true;
  module.exports = app;
} else app.listen(3000, () => {
    console.log('http://localhost:3000')
});

app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (request, response, next) => {
  response.send('This is working so far')
})

app.get('/form-get', (request, response, next) => {
  response.sendFile(path.join(__dirname + '/form-get.html'))
})

app.get('/form-post', (request, response, next) => {
  response.sendFile(path.join(__dirname + '/form-post.html'))
})

app.get('/submit-form', (request, response, next) => {
  response.json({
    'body-params': request.body,
    'query-params': request.query
  })
})

app.post('/submit-form', (request, response, next) => {
  response.json({
    'body-params': request.body,
    'query-params': request.query
  });
})
