/* jshint unused:false */
/* global _:true */

(function(){
  'use strict';

  $(document).ready(init);

  function init(){
    $('#go').click(moment);
  }

  function moment(){
    var userInput = $('#input').val();
    var userOutput = moment(userInput, 'YYYYMMDD').fromNow();
    $('#output').text(userOutput);

  }

// moment("20111031", "YYYYMMDD").fromNow();
//
//   function append(input){
//
//   }


/*
These are equal to each other:
     numbers = numbers.split(',').map(function(n){return n.trim();});     //old ES5
    numbers = numbers.split(',').map(n=>n.trim());          //new ES6

=> means you are creating a function
n =>   ____   function(n){}    _____  these are identical
*/

})();
