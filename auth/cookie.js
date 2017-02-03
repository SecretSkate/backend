function ensureLoggedIn(req, res, next) {
  console.log(req.signedCookies);
  if (req.signedCookies.skater_id) {
    next();
  } else {
    res.status(401);
    next(new Error('unauthorized'));
  }
}

module.exports = {
  ensureLoggedIn
}
