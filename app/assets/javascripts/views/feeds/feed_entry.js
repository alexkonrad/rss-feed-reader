NewReader.Views.FeedEntryView = Backbone.View.extend({
  tagName: "li",
  template: JST["feeds/entry"],
  render: function() {
    var content = this.template({entry: this.model});
    this.$el.html(content);
    return this;
  }
});