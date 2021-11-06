const express = require('express');

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
  if (kindleExport.mimetype === 'text/html') {
    const parsedData = convert(kindleExportData);

    // Use notion credentials to write the data to notion
    // await addParsedKindleContent(parsedData, authToken, blockToken);

    const response = {
      title: parsedData.volume.title,
      time: new Date().toDateString(),
    };

    return res.send(response);
  }

  return res.json({ result: 'Ok' });
});

module.exports = router;
