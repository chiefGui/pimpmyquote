var Backbone = require('backbone');

module.exports = Backbone.Model.extend({
  initialize: function (options) {
    this.user = options.user;
  },
  urlRoot: function () {
    return 'http://graph.facebook.com/' + this.user;
  }
});