// Generated by CoffeeScript 1.3.3
var docpadConfig;

docpadConfig = {
  templateData: {
    site: {
      title: "CoffeeScript for Server Side Devs",
      description: "All Things Open, Oct 24, 2013",
      keywords: ""
    },
    generateSlidesMenu: false,
    getPreparedTitle: function() {
      if (this.document.title) {
        return "" + this.document.title + " | " + this.site.title;
      } else {
        return this.site.title;
      }
    },
    getPreparedDescription: function() {
      return this.document.description || this.site.description;
    },
    getPreparedKeywords: function() {
      return this.site.keywords.concat(this.document.keywords || []).join(', ');
    },
    plugins: {
      marked: {
        markedOptions: {
          sanitize: true,
          gfm: true,
          highlight: function(code, lang, callback) {
            var caller,
              _this = this;
            caller = function(err, result) {
              if (err) {
                callback(err);
              }
              return callback(null, result.toString());
            };
            return pygmentize({
              lang: lang,
              format: 'html'
            }, code, caller);
          }
        }
      }
    }
  },
  collections: {
    slides: function(database) {
      var query, sorting;
      query = {
        tags: {
          $has: 'slide'
        },
        slideOrder: {
          $exists: true
        }
      };
      sorting = {
        slideOrder: 1
      };
      return database.findAllLive(query, sorting);
    }
  }
};

module.exports = docpadConfig;