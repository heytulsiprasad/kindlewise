const express = require('express');
const { Client } = require('@notionhq/client');

const router = express.Router();

const { convert } = require('../utils/index.js');

async function addParsedKindleContent(parsedData, authToken) {
  const notion = new Client({ auth: authToken });

  const { volume, highlights } = parsedData;
  const title = volume.title;
  const authors = volume.authors.join(', ');

  const highlightBlocks = [];

  highlights.forEach((highlight) => {
    highlightBlocks.push(
      ...[
        {
          object: 'block',
          type: 'paragraph',
          paragraph: {
            text: [
              {
                type: 'text',
                text: { content: highlight.content },
                annotations: {
                  bold: false,
                  italic: false,
                  strikethrough: false,
                  underline: false,
                  code: false,
                  color: `${highlight.color}_background`,
                },
              },
            ],
          },
        },
        {
          object: 'block',
          type: 'paragraph',
          paragraph: {
            text: [
              {
                type: 'text',
                text: { content: '' },
              },
            ],
          },
        },
      ]
    );
  });

  try {
    const response = await notion.blocks.children.append({
      block_id: 'a518fea2c4764f0983a96ff296bee7b4',
      children: [
        {
          object: 'block',
          type: 'heading_1',
          heading_1: {
            text: [
              {
                type: 'text',
                text: { content: title },
              },
            ],
          },
        },
        {
          object: 'block',
          type: 'heading_2',
          heading_2: {
            text: [
              {
                type: 'text',
                text: { content: authors },
              },
            ],
          },
        },
        ...highlightBlocks,
      ],
    });
    console.log(response);

    return response;
  } catch (err) {
    console.error(err);
  }
}

router.post('/upload-file', async (req, res) => {
  const kindleExport = req.files.kindleExport;
  const kindleExportData = req.files.kindleExport.data.toString('utf8');
  const authToken = req.headers['x-notion-token'];

  // When there are no files
  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).send('No files were uploaded.');
  }

  // When uploaded file is of type html
  if (kindleExport.mimetype === 'text/html') {
    const parsedData = convert(kindleExportData);

    // Use notion credentials to write the data to notion
    const response = await addParsedKindleContent(parsedData, authToken);

    return res.send(response);
  }

  return res.json({ result: 'Ok' });
});

module.exports = router;
