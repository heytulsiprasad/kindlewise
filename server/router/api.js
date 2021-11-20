const express = require('express');
const fetch = require('isomorphic-fetch');
const btoa = require('btoa');

const router = express.Router();

const { convert, addParsedKindleContent } = require('../utils/index.js');

router.post('/upload-file', async (req, res) => {
  const kindleExport = req.files.kindleExport;
  const kindleExportData = req.files.kindleExport.data.toString('utf8');
  const authToken = req.headers['x-notion-token'];
  const blockToken = req.headers['x-block-token'];

  // When there are no files
  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).send('No files were uploaded.');
  }

  // When uploaded file is of type html
  if (blockToken && kindleExport.mimetype === 'text/html') {
    const parsedData = convert(kindleExportData);

    // Use notion credentials to write the data to notion
    await addParsedKindleContent(parsedData, authToken, blockToken);

    const response = {
      title: parsedData.volume.title,
      time: new Date().toDateString(),
    };

    return res.send(response);
  }

  return res.json({ result: 'Ok' });
});

router.post('/user-credential', async (req, res) => {
  const redirect_uri = req.body.redirect_uri;
  const grant_type = req.body.grant_type;
  const code = req.body.code;

  const response = await fetch('https://api.notion.com/v1/oauth/token', {
    method: 'POST',
    headers: {
      Authorization:
        'Basic ' +
        btoa(
          `${process.env.NOTION_CLIENT_ID}:${process.env.NOTION_CLIENT_SECRET}`
        ),
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      grant_type: grant_type,
      code: code,
      redirect_uri: redirect_uri,
    }),
  });

  const responseData = await response.json();

  return res.json(responseData);
});

module.exports = router;
