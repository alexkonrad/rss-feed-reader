NewReader.Models.Feed = Backbone.Model.extend({
  urlRoot: '/feeds',
  initialize: function() {
    // this.on("change:entries", this.parseEntries);
    // this.parseEntries();
  },

  // parseEntries: function() {
  //   this.entries = new NewReader.Collections.Entries(this.get('entries'));
  // }

  parse: function(response) {
    var correctEntries = new NewReader.Collections.Entries(response.entries);
//correctEntries.models[0]
    correctEntries.feed_id = response.id;


    response.entries = correctEntries;

    return response;
  }


});
