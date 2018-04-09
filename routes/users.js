const express = require('express');
const router = express.Router();


router.get('/:user(\[a-z]+)', (req, res) => {
  res.render('update-user', { user: req.params.user });
});

router.put('/:user(\[a-z]+)', (req, res) => {
  res.send('The new name is ' + req.params.user);
});

router.get('/:id(\\d+)', (req, res) => {
  res.render('delete-user', { id: req.params.id });
});

router.delete('/:id(\\d+)', (req, res) => {
  res.send('No more user with id ' + req.params.id);
});

module.exports = router;