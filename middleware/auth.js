module.exports = function(req, res, next) {
  console.log(req.session)
  if(!req.session.isAuthenticated) {
     res.status(401)
  }
  next()
};