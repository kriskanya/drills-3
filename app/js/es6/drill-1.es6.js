/* jshint unused:false */
/* global _:true */

(function(){
  'use strict';

  $(document).ready(init);

  function init(){
    $('#go').click(makeString);
  }

  function makeString(){
    var first = $('#first').val().toLowerCase();
    var last = $('#last').val().toLowerCase();
    var movie = $('#movie').val().toUpperCase();

    $('#output').text(`${first} ${last} loves ${movie}`);
  }



})();
