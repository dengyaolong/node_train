var app = require('express')();
var superagent = require('superagent');
var cheerio = require('cheerio');
var util = require('util');

app.get('/', function(req, res, next) {
  superagent.get('https://cnodejs.org/')
    .end(function(err, sres){
      if(err) return next(err);
      var $ = cheerio.load(sres.text);
      var items = [];
      $('#topic_list .cell').each(function (idx, element){
        var $topic = $(element).find(".topic_title");
        var $author = $(element).find(".user_avatar>img");
        items.push({
          title: $topic.attr('title'),
          href: $topic.attr('href'),
          author: $author.attr('title'),
        });
      });
      res.send(items);
    })
  
})

module.exports = app;
