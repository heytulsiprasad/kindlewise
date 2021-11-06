const cheerio = require('cheerio');

/**
 * Convert email HTML into JSON
 * @param {String} html
 * @returns {Object}
 */
const Converter = function (html) {
  this.html = html;
  this.$ = cheerio.load(this.html);
};

/**
 * Determine whether the given HTML is a valid Kindle notes export
 * @returns {Boolean}
 */
Converter.prototype.valid = function () {
  if (this.html) {
    const notes = this.$('.noteText');
    return notes.length > 0;
  }

  return false;
};

/**
 * Parse the HTML to pull out the volume's title, author, and highlights
 * @returns {Object}
 */
Converter.prototype.getJSON = function () {
  const titleEl = this.$('.bookTitle');
  const authorEl = this.$('.authors');
  const title = titleEl.text().trim();
  const authors = authorEl
    .text()
    .split(';')
    .map((s) => s.trim());

  return {
    volume: {
      title: title,
      authors: authors,
    },
    highlights: this.parseSections(),
  };
};

let globalHighlights = [];

// We've to read from `sectionHeading` then parse within.
// Need to make another layer of abstraction on top of prototype.highlights
Converter.prototype.parseSections = function () {
  const sections = this.$('.sectionHeading');
  const chapters = {};

  sections.each((_index, el) => {
    globalHighlights = [];

    const sectionHeadingEl = this.$(el);
    const sectionHeading = sectionHeadingEl.text().trim();
    const highlights = this.getHighlightsOfCurrentSection(
      sectionHeadingEl.next()
    );

    if (!chapters[sectionHeading]) {
      chapters[sectionHeading] = highlights;
    }
  });

  return chapters;
};

/**
 * Parse the highlights and notes from the HTML until the next sectionHeading
 * @param {cheerio.Element} el - sectionHeading element
 * @returns {Array} highlights
 */

Converter.prototype.getHighlightsOfCurrentSection = function (el) {
  let headingEl = this.$(el);

  if (headingEl.hasClass('noteHeading')) {
    do {
      const color = headingEl.find("span[class^='highlight_']").text().trim();
      const text = headingEl.text().trim();

      const location = text.match(/\s(\d*)$/i) || '';

      const textEl = this.$(headingEl).next();

      if (textEl.hasClass('noteText')) {
        const highlight = {
          color: color,
          content: this.$(textEl).text().trim(),
          location: location[1],
        };

        // If the text is a note then there is no color
        if (!color) {
          globalHighlights[globalHighlights.length - 1]['notes'] = [highlight];
        } else {
          globalHighlights.push(highlight);
        }
      }

      headingEl = this.$(textEl).next();
    } while (headingEl.next().hasClass('noteText'));
  }

  return globalHighlights;
};

module.exports = Converter;
