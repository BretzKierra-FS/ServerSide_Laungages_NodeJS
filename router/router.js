const express = require('express');
const router = express.Router();

// http://localhost:3000/exercise
router.get('/', (req, res, next) => {
  res.status(200).json({
    message: 'Successful - GET',
    metadata: {
      hostname: req.hostname,
      method: req.method,
    },
  });
});

/*If called..
http://localhost:3000/excercise/34
34 should be ID : for Get BY ID
*/

//Get by ID
router.get('/:id', (req, res, next) => {
  const id = req.params.id;
  res.status(200).json({
    message: 'Successful - GET by ID ',
    id: id,
    metadata: {
      hostname: req.hostname,
      method: req.method,
    },
  });
});

// Post
router.post('/post', (req, res, next) => {
  res.status(200).json({
    message: 'Successful - POST',
    metadata: {
      hostname: req.hostname,
      method: req.method,
    },
  });
});

// Put
router.put('/put/:id', (req, res, next) => {
  const id = req.params.id;
  res.status(200).json({
    message: 'Successful - PUT',
    id: id,
    metadata: {
      hostname: req.hostname,
      method: req.method,
    },
  });
});

//Delete
router.delete('/delete/:id', (req, res, next) => {
  const id = req.params.id;
  res.status(200).json({
    message: 'Sucessful - Delete',
    id: id,
    metadata: {
      hostname: req.hostname,
      method: req.method,
    },
  });
});

module.exports = router;
