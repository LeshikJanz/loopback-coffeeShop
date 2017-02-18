module.exports = function(app) {

  app.get('/hello', function(req, res) {
    res.send('Hello, its me');
  });

  var router = app.loopback.Router();
  router.get('/ping', function(req, res) {
    res.send('pongaroo');
  });
  app.use(router);
}
