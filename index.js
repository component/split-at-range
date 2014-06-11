/**
 * Splits an HTMLElement at the point marked by the range.
 *
 * @param {HTMLElement} el
 * @param {Range} range
 * @returns {Array} array containing left and right hand sides
 */

function splitAtRange(el, range) {
  var left = document.createRange();
  left.selectNode(el);
  left.setEnd(range.startContainer, range.startOffset);
  var right = document.createRange();
  right.selectNode(el);
  right.setStart(range.startContainer, range.startOffset);
  return [left.cloneContents(), right.cloneContents()];
}

/**
 * Module Exports
 */

module.exports = splitAtRange;
