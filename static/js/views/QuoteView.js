var $                 = require('jquery')
    , _               = require('underscore')
    , Backbone        = require('backbone')
    , ea              = require('../ea')
    , UserModel       = require('../models/UserModel');

module.exports = Backbone.View.extend({
  el: '.quote',
  model: UserModel,
  initialize: function (options) {
    this.quote = options.quote;
    options.user && this.fetchUser(options.user);

    this.template = _.template($('#quote-template').html());

    ea.on('typeQuote', this.typeQuote);
    ea.on('changeUser', this.fetchUser);

    this.render();
  },
  render: function (user) {
    user = this.user || user;

    var self = this;

    user.done(function (user) {
      self.prepareTemplate(user, self.quote);
    });
  },
  fetchUser: function (user) {
    new UserModel({ user: user }).fetch({ reset: true });
    console.log(this);
  },
  prepareTemplate: function (user, quote) {
    this.$el.html(this.template({ user: user, quote: quote }));
  },
  typeQuote: function (content) {
    $('.context p').html(content);
  }
});