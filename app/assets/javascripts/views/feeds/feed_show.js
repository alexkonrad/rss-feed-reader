NewReader.Views.FeedShowView = Backbone.View.extend({
  tagName: "ul",
  template: JST["feeds/show"],
  events: {
    "click button" : "refresh"
  },
  initialize: function() {
    this.listenTo(this.model.get('entries'), "add", this.render)
  },
  render: function() {
    var content = this.template();
    this.$el.html(content);

    var that = this;
    var entries = this.model.get('entries');
    //entries.models because entries is collection.
    entries.models.forEach(function(feedEntry) {
      var view = new NewReader.Views.FeedEntryView({model: feedEntry});
        that.$el.append(view.render().$el);
    });

    return this;
  },
  refresh: function() {
    var entriesCollection = this.model.get('entries');
    entriesCollection.fetch({success:
      alert("hello")
    });

    // feed.fetch({
    //   success: function() {
    //     NewReader.feeds.add(feed);
    //     callback(feed);
    //   }
    // })
  }

})