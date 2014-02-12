NewReader.Views.EntryShowView = Backbone.View.extend({
  tagName: "p",
  template: JST["entries/show"],
  render: function () {
    var content = this.template({
      entry: this.model
    });
    this.$el.html(content);
    return this;
  }
})