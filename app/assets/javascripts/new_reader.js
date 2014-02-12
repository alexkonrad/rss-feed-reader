window.NewReader = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    NewReader.feeds = new NewReader.Collections.Feeds();

    new NewReader.Routers.Feeds({
      "$rootEl" : $("#content")
    });
    Backbone.history.start();
  }
};

$(document).ready(function(){
  NewReader.initialize();
});
