var Backbone    = require('backbone')
    , IndexView = require('./views/IndexView');

module.exports = Backbone.Router.extend({
  routes: {
    '': 'index',
    '(:user/)(:quote)': 'specific'
  },
  index: function () {
    new IndexView;
  },
  specific: function (user, quote) {
    quote = quote || false;

    new IndexView({ user: user, quote: quote });
  }
});