const { Client } = require('@notionhq/client');

const Converter = require('./converter');

/**
 * @param {String} contents - HTML attachment content
 * @returns {Object}
 */

function convert(contents) {
  const converter = new Converter(contents);

  if (converter.valid) {
    return converter.getJSON();
  }

  throw new Error('Email not in compatible format for parsing');
}

/**
 * Modify parsed data to match notion block structure and post to notion API
 * @param {Object} parsedData
 * @param {string} authToken
 * @param {string} blockToken
 * @returns {Object} response
 */

async function addParsedKindleContent(parsedData, authToken, blockToken) {
  const notion = new Client({ auth: authToken });

  const { volume, highlights } = parsedData;
  const title = volume.title;
  const authors = volume.authors.join(', ');

  const highlightBlocks = [];

  Object.keys(highlights).forEach((chapter) => {
    // The chapter title
    highlightBlocks.push(
      ...[
        {
          object: 'block',
          type: 'heading_3',
          heading_3: {
            text: [
              {
                type: 'text',
                text: { content: chapter },
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

    // The highlights from each chapter
    if (highlights[chapter]) {
      highlights[chapter].forEach((highlight) => {
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

        // If notes exists also add that
        if (highlight.notes) {
          highlight.notes.forEach((note) => {
            highlightBlocks.push(
              ...[
                {
                  object: 'block',
                  type: 'callout',
                  callout: {
                    text: [
                      {
                        type: 'text',
                        text: { content: note.content, link: null },
                      },
                    ],
                    icon: {
                      type: 'emoji',
                      emoji: '✍',
                    },
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
        }
      });
    }
  });

  try {
    const response = await notion.blocks.children.append({
      block_id: blockToken,
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
    return response;
  } catch (err) {
    console.error(err);
  }
}

module.exports = { convert, addParsedKindleContent };
