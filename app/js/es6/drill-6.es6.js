/*jshint camelcase: false */
/* jshint unused:false */
/* global _:true */

(function(){
  'use strict';

  $(document).ready(init);

  function init(){
    $('#get').click(criticsLove);
  }

  function criticsLove(){
    var url = 'http://api.rottentomatoes.com/api/public/v1.0/lists/movies/box_office.json?limit=' + $('#numOfMovies').val() + '&country=us&apikey=w9ezdya99wzb8ztk9vnht5ss&callback=?';
    $.getJSON(url, getScore);
  }

  //$('#output').text(`${first} ${last} loves ${movie}`);

  function getScore(data){
    console.log(data);
    var z = data.movies;
    // var inputNumMovies = z.split(',').map(x=>x.trim()).map(x=>x*1);
    var $score = $('#score').val();
    for(var i = 0; i < z.length; i++) {
    var criticsScore = getCriticsScore(data, i);

      if(criticsScore >= $score){
        append(data, i, criticsScore);
      }
    }
  }

  function getCriticsScore(jsonInput, i){
    return jsonInput.movies[i].ratings.critics_score;
  }

  function append(jsonInput, i, criticsScore){
    var $div = $('<div class = "newDiv">');
    $div.append(jsonInput.movies[i].title + ' - ' + criticsScore + '%');
    $('body').append($div);
  }

      // var y = inputNumMovies.map(x=>`<div class='newClass'>${x}</div>`).forEach(x=>('body').append(x));


    //
    //
    //
    // var inputNumbers = $('#input').val().split(',').map(x=>x.trim());
    // var y = _.range(inputNumbers[0], inputNumbers[1], inputNumbers[2]).map(x=>Math.pow(x,3)).map(x=>`<div class='newClass'>${x}</div>`).forEach(x=>$('body').append(x));

    //



})();
