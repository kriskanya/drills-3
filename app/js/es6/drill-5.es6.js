/* jshint unused:false */
/* global _:true */

(function(){
  'use strict';

  $(document).ready(init);

  function init(){
    $('#go').click(getBoxOffice);
  }

  function getBoxOffice(){
    // var film = ('#go').val().trim();
    var url = 'http://api.rottentomatoes.com/api/public/v1.0/lists/movies/box_office.json?limit=16&country=us&apikey=w9ezdya99wzb8ztk9vnht5ss&callback=?';
    $.getJSON(url, getMovies);
    // ar url = 'http://api.wunderground.com/api/e8dcaa06f5ec42ae/conditions/q/'+zip+'.json?callback=?';

  }

  // function getMovies(data){
  //
  //   var poster;
  //   var title;
  //
  //   for (var i = 0; i < 16; i++){
  //     var $img = $('<img>');
  //     var $div = $('<div id = "smallDiv">' + title + '</div>');
  //     var $bigDiv = $('<div id = "bigDiv">');
  //
  //     poster = data.movies[i].posters.detailed;
  //     title = data.movies[i].title;
  //
  //     $img.attr('src', poster);
  //     $div.append($img);
  //     $bigDiv.append($div);
  //
  //     $('body').append($bigDiv);
  //   }
  // }

  function getMovies(data){
    // var filmsArray = data.movies.posters.detailed.map(x=>`<img src = x>${x}`);
    // console.log(filmsArray);
    console.log(data);
  }


})();


// var inputNumbers = $('#input').val().split(',').map(x=>x.trim());
// var y = _.range(inputNumbers[0], inputNumbers[1], inputNumbers[2]).map(x=>Math.pow(x,3)).map(x=>`<div class='newClass'>${x}</div>`).forEach(x=>$('body').append(x));
