const UrlModel = require('./models');

const datbase = [];

const UrlShortenerController = {
  createShortUrl: (req, res) => {
    const fullUrl = ''; // TODO get this from request body
    const instance = new UrlModel(fullUrl);
  },

  getUniqueShortUrl: (req, res) => {
    // TODO return HTTP code 200 with the element
    // TODO return 404 if the element is not found
    const id = '';
    return res.status(200).json({ data: database[id] });
  },

  redirectToOriginalUrl: (req, res) => {}
};

module.exports = UrlShortenerController;
