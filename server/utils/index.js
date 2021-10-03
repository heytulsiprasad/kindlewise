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

module.exports = { convert };
