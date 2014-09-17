var Backbone        = require('backbone')
    , ea            = require('../ea')
    , QuoteView     = require('./QuoteView')
    , SidebarView   = require('./SidebarView');

module.exports = Backbone.View.extend({
  initialize: function (options) {
    options = options || false;

    if (options) {
      if (undefined !== options.user) this.user = options.user;

      options.quote && (this.quote = options.quote);

      new QuoteView({ user: this.user, quote: this.quote });
    };

    this.render();
  },
  setQuote: function (content) {
    ea.trigger('typeQuote', content);
  },
  render: function () {
    new SidebarView;
  }
});