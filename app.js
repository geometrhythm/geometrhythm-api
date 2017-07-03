const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/v1/rhythms/:rhythm', (req, res) => {
  res.json({ rhythmLength: req.params.rhythm.length });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`);
});

module.exports = app;
