const { Router } = require('express');
const { cats } = require('../cats-data');

module.exports = Router()

  .get('/cats', (req, res) => {
    const filteredData = cats.map((cat) => {
      return { id: cat.id, name: cat.name };
    });
    res.json(filteredData);
  });
