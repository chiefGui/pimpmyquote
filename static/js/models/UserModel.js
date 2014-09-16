var Backbone = require('backbone');

module.exports = Backbone.Model.extend({
  initialize: function (options) {
    this.slug = options.slug;
  },
  urlRoot: function () {
    return 'http://graph.facebook.com/' + this.slug;
  }
});