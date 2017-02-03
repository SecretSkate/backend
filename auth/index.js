const express = require('express');
const bcrypt = require('bcrypt');


const router = express.Router();
const User = require('../db/query.js');

router.get('/', (req, res) => {
  res.json({
    message: 'cool-beans'
  });
});

function validUser(user) {
  const validEmail = typeof skater.email == 'string'  &&
                      skater.email.trim() != '';
  const validPassword = typeof skater.password == 'string' &&
                        skater.password.trim() != '' &&
                        skater.password.trim().length >= 6;
  return validEmail && validPassword;
}

function validName(skater) {
  return typeof skater.name == 'string'  &&
                skater.name.trim() != '';
}

router.post('/signup', (req, res, next) => {
  console.log(req.body);
  if (validUser(req.body) && validName(req.body)) {
    User
      .getOneByEmail(req.body.email)
      .then(user => {
        if (!user) {
          bcrypt.hash(req.body.password, 8)
            .then(hash => {
              const user = {
                email: req.body.email,
                password: hash,
                name: req.body.name
              };
              User
                .createNewUser(user)
                .then(id => {
                  setUserIdCookie(req, res, id);
                  res.json({
                    id,
                    message: 'created'
                  });
                });
            });
        } else {
          next(new Error('Email in use!'));
        }
      });
  } else {
    next(new Error('invalid user'));
  }
});

function setUserIdCookie(req, res, id) {
  res.cookie('skater_id', id, {
    httpOnly: true,
    signed: true,
    secure: req.app.get('env') != 'development'
  });
}


router.post('/login', (req, res, next) => {
  if (validUser(req.body)) {
    User
      .getOneByEmail(req.body.email)
      .then(user => {
        if (user) {
          bcrypt.compare(req.body.password, skater.password)
                .then(result => {
                  if (result) {
                    setUserIdCookie(req, res, skater.id);
                    res.json({
                      id: skater.id,
                      message: 'logged in!'
                    });
                  } else {
                    next(new Error('Invalid password'));
                  }
                });
        } else {
          next(new Error('Not a user'));
        }
      });
  } else {
    next(new Error('Invalid login'));
  }
});


router.get('/logout', (req, res) => {
  res.clearCookie('skater_id');
  res.json({
    message: 'Bye!'
  });
});

module.exports = router;
