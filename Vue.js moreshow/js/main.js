const thumbnailList = {
  "count": 10,
  "articles": [
    { "thumbnail": "./images/load-more/thumbnail_01.jpg" },
    { "thumbnail": "./images/load-more/thumbnail_02.jpg" },
    { "thumbnail": "./images/load-more/thumbnail_03.jpg" },
    { "thumbnail": "./images/load-more/thumbnail_04.jpg" },
    { "thumbnail": "./images/load-more/thumbnail_05.jpg" },
    { "thumbnail": "./images/load-more/thumbnail_06.jpg" },
    { "thumbnail": "./images/load-more/thumbnail_07.jpg" },
    { "thumbnail": "./images/load-more/thumbnail_08.jpg" },
    { "thumbnail": "./images/load-more/thumbnail_09.jpg" },
    { "thumbnail": "./images/load-more/thumbnail_10.jpg" },
  ]
}

const loadNum = 3;
var vm = new Vue({
  el: '#app',
  data: {
    articles: [],
    hasNext: true
  },
  methods: {
    load: function () {
      var self = this;
      self.articles = self.articles.concat(thumbnailList.articles.slice(self.articles.length, self.articles.length + loadNum));
      if (self.articles.length >= thumbnailList.count) {
        self.hasNext = false;
      }
    }
  },
  mounted: function () {
    this.load();
  }
});