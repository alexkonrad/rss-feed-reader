NewReader.Collections.Entries = Backbone.Collection.extend( {
  model: NewReader.Models.Entry,

  url: function() {
    var url = "feeds/" + this.feed_id + "/entries"
    return url;
  },
  //feed_id


  //function = grabs feed id, interpolates

  //'/feeds/:feed_id/entries'

  ///feeds/:feed_id/entries
});