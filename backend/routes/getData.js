const data = require('../data/movie');

module.exports = (req, res) => {
    res.send(data);
};