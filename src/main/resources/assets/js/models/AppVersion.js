define([
  "Backbone"
], function(Backbone) {
  "use strict";

  var AppVersion = Backbone.Model.extend({
    idAttribute: "version",

    initialize: function(options) {
      this.options = options;
    },

    getVersion: function() {
      return Date.parse(this.get("version"));
    },

    url: function() {
      return "/v2/apps/" + this.options.appId + "/versions/" + this.get("version");
    }
  });

  return AppVersion;
});
