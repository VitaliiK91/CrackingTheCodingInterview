/**
 * Returns given string with
 * whitespaces replaced with '%20'
 */
const URLify = (url) => {
  if (!url || url.length < 0) {
    return null;
  }
  let encodedURL = '';
  for (let i = 0; i < url.length; i += 1) {
    if (url.charAt(i) === ' ') {
      encodedURL += '%20';
    } else {
      encodedURL += url.charAt(i);
    }
  }
  return encodedURL;
};

module.exports = URLify;
