const express = require('express');
const router = express.Router();

router.get('/logged', (req, res) => {
  req.user ? res.render('logged', {userName: req.user.displayName, avatar: req.user.photos[0].value}) : res.redirect('/no-premission');
});

router.get('/profile', (req, res) => {
  req.user ? res.render('profile') : res.redirect('/no-premission');
});

router.get('/profile/settings', (req, res) => {
  req.user ? res.render('settings') : res.redirect('/no-premission');
  });

router.get('/no-permission', (req, res) => {
  res.render('noPermission');
});


module.exports = router;