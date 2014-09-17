var $                 = require('jquery')
    , Backbone        = require('backbone')
    , ea              = require('../ea')
    , QuoteView       = require('./QuoteView');

module.exports = Backbone.View.extend({
  el: '.sidebar',
  events: {
    'blur #facebook': 'getUser',
    'keyup #quote': 'typeQuote'
  },
  initialize: function () {
    this.$('#facebook').focus();
  },
  getUser: function (element) {
    var concept = $(element.currentTarget).val().split('/')
        , user  = concept[concept.length - 1];

    ea.trigger('changeUser', user);
  },
  typeQuote: function (element) {
    var content   = $(element.currentTarget).val()
        , length  = content.length;

    new QuoteView;

    ea.trigger('typeQuote', content);

    this.count(length);
  },
  count: function (length) {
    this.$('.count-number').html(length);
  }
});