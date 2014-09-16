var $                 = require('jquery')
    , Backbone        = require('backbone')
    , UserModel       = require('../models/UserModel')
    , UserProfileView = require('./UserProfileView');

module.exports = Backbone.View.extend({
  el: '.index',
  model: UserModel,
  events: {
    'blur #facebook': 'showUser',
    'keyup #quote': 'typeQuote'
  },
  initialize: function () {
    this.focus();
  },
  focus: function () {
    this.$('#facebook').focus();
  },
  showUser: function (element) {
    this.facebook = $(element.currentTarget).val();

    this.getUser().fetch().done(function (user) {
      new UserProfileView({ user: user });
    });
  },
  getUser: function () {
    var concept = this.facebook.split('/')
        , result  = concept[concept.length - 1];

    return new this.model({ slug: result });
  },
  typeQuote: function (element) {
    var content = $(element.currentTarget).val();

    $('.text').html(content);
  }
});