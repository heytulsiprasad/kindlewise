const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();

// Logging middleware
if (process.env.NODE_ENV !== 'production') {
  const morgan = require('morgan');
  app.use(morgan('dev'));
}

// Express middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Enable cors
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/notion-redirect', (req, res) => {
  res.sendFile(path.join(__dirname + '/public/index.html'));
});

const PORT = 5000 || process.env.PORT;

app.listen(PORT, () =>
  console.log(`Server started listening on http://localhost:${PORT}`)
);
