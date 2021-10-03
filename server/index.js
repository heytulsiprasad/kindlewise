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
  res.send('Hello World!');
});

app.get('/notion-redirect', (req, res) => {
  res.sendFile(path.join(__dirname + '/public/index.html'));
});

app.post('/upload-file', (req, res) => {
  const htmlInput = req.files.htmlInput;
  // const htmlInputData = req.files.htmlInput.data.toString('utf8');

  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).send('No files were uploaded.');
  }

  if (htmlInput.mimetype === 'text/html') {
    console.log('Received HTML data');
    // console.log(htmlInputData);
  }

  return res.json({ result: 'Ok' });
});

const PORT = 5000 || process.env.PORT;

app.listen(PORT, () =>
  console.log(`Server started listening on http://localhost:${PORT}`)
);
