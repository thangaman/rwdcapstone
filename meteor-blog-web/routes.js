Router.configure({
  layoutTemplate: 'layout'
});
Router.route('/', function () {
  this.render('home');
});
Router.route('/about', function () {
  this.render('about');
});
Router.route('/blog', function () {
  this.render('blog');
});
Router.route('/custom-blog', function () {
  this.render('custom-blog');
});

