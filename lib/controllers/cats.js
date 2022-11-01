const { Router } = require('express');
const { cats } = require('../cats-data');

module.exports = Router()
  .get('/cats/:id', (req, res) => {
    let match;
    for (const cat of cats) {
      if (cat.id === req.params.id) {
        match = cat;
      }
    }

    return res.json(match);
  })

  .get('/cats', (req, res) => {
    const filteredData = cats.map((cat) => {
      return { id: cat.id, name: cat.name };
    });
    res.json(filteredData);
  });
