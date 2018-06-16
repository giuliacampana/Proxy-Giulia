const axios = require('axios');
const express = require('express');
const morgan = require('morgan');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'public')));


app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`);
});

app.get('/overview/:id', (req, res) => {
	const id = req.params.id;
  axios
    .get(`http://localhost:3002/api/overview/${id}`)
    .then(response => res.send(response.data))
    .catch(err => res.send(`Cannot get /overview/:id, ${err}`));
})

app.get('/hostels', (req, res) => {
  axios
    .get('http://localhost:3002/api/hostels')
    .then(response => res.send(response.data))
    .catch(err => res.send(`Cannot get /hostels ${err}`));
})

app.get('/hostels/:id/info', (req, res) => {
	const id = req.params.id;
  axios
    .get(`http://localhost:3002/api/hostels/${id}/info`)
    .then(response => res.send(response.data))
    .catch(err => res.send(`Cannot get /hostels ${err}`));
})