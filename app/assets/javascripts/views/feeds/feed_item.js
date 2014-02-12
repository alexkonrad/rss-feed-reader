NewReader.Views.FeedItemView = Backbone.View.extend({
  tagName: "li",
  template: JST["feeds/item"],
  initialize: function() {

  },
  render: function() {
    var content = this.template({feed: this.model});
    this.$el.html(content);
    return this;
  },

})