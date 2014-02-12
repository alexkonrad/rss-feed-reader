NewReader.Routers.Feeds = Backbone.Router.extend({
  routes: {
    "" : "index",
    ":id/entries" : "show",
    ":feed_id/entries/:id" : "showEntry"
  },

  initialize: function(options) {
    this.$rootEl = options.$rootEl;
  },

  index: function() {
    var that = this;
    NewReader.feeds.fetch({
      success: function () {
        var indexView = new NewReader.Views.FeedsIndexView({
          collection: NewReader.feeds
        });
        that._swapView(indexView);
      }

    });


  },
  show: function(id) {
    var that= this;

    that._getFeed(id, function(feed) {
      var feedShowView = new NewReader.Views.FeedShowView({
        model: feed
      });

      that._swapView(feedShowView);
    });
  },

  showEntry: function(feed_id, id) {
    var that = this;
    console.log("hit")
    that._getEntry(feed_id, id, function(entry) {
      var entryShowView = new NewReader.Views.EntryShowView({
        model: entry
      });

      that._swapView(entryShowView);
    });

  },

  _getEntry: function(feed_id, id, callback) {
    this._getFeed(feed_id, function(feed) {
      var entries = feed.get('entries');
      var entry = entries.get(id);
      callback(entry);
    })
  },

  _getFeed: function(id, callback) {
    var feed = NewReader.feeds.get(id);
    if (!feed) {
      feed = new NewReader.Models.Feed({id: id});
      feed.collection = NewReader.feeds;
      feed.fetch({
        success: function() {
          NewReader.feeds.add(feed);
          callback(feed);
        }
      })
    } else {
      callback(feed);
    }
  },
  _swapView: function (view) {
    this._currentView && this._currentView.remove();
    this._currentView = view;
    this.$rootEl.html(view.render().$el);
  }
});


