var $                 = require('jquery')
    , _               = require('underscore')
    , Backbone        = require('backbone');

module.exports = Backbone.View.extend({
  el: '.user',
  initialize: function (options) {
    this.user = options.user;

    this.template = _.template($('#user-template').html());

    this.render();
  },
  render: function () {
    this.$el.html(this.template({ user: this.user }));
  }
});