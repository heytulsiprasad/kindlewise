const express = require('express');
const cors = require('cors');
const path = require('path');
const fileUpload = require('express-fileupload');

const app = express();

// Logging middleware
if (process.env.NODE_ENV !== 'production') {
  const morgan = require('morgan');
  app.use(morgan('dev'));
}

// Express middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(fileUpload());

// Enable cors
app.use(cors());

app.get('/', (req, res) => {
  res.send('Server is hot and running!');
});

app.get('/notion-redirect', (req, res) => {
  res.sendFile(path.join(__dirname + '/public/index.html'));
});

// Routes
const api = require('./router/api');
app.use('/api', api);

const PORT = 5000 || process.env.PORT;

app.listen(PORT, () =>
  console.log(`Server started listening on http://localhost:${PORT}`)
);
