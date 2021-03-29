const path = require('path');
const express = require('express');
const app = express();

app.use(express.urlencoded({extended: true}));

app.use(express.static(path.join(__dirname, '../public')));

app.get('*', (req, res, next) => {
  res.sendFile(path.join(__dirname, '../public/index.html'))
});

app.use((err, req, res, next) => {
  if(process.env.NODE_ENV !== 'test') console.error(err.stack);
  res.status(err.status || 500).send(err.message || 'Internal server error');
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {console.log(`Listening on port ${PORT}`)});
