var Backbone    = require('backbone')
    , IndexView = require('./views/IndexView');

module.exports = Backbone.Router.extend({
  routes: {
    '': 'index'
  },
  index: function () {
    new IndexView;
  }
});