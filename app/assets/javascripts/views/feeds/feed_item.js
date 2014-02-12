NewReader.Views.FeedItemView = Backbone.View.extend({
  tagName: "li",
  template: JST["feeds/item"],
  events: {
    "click .favorite" : "favorite"
  },
  initialize: function() {
  },
  render: function() {
    var content = this.template({feed: this.model});
    this.$el.html(content);
    return this;
  },
  favorite: function(event) {
    alert(this.model.escape('title'));

    this.model.save({is_favorite: !this.model.get('is_favorite')}, {
      success: alert("Great")
    })

  }

})