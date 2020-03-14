const crypto = require('crypto');

const _getRandomString = () => crypto.randomBytes(2).toString('hex');

class UrlModel {
  fullUrl = '';
  code = '';

  constructor(url) {
    this.fullUrl = url;
    this.code = _getRandomString();
  }
}

module.exports = UrlModel;
