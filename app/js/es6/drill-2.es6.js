/* jshint unused:false */
/* global _:true */

(function(){
  'use strict';

  $(document).ready(init);

  function init(){
    $('#go').click(arrowFunction);
  }

  function arrowFunction(){
    var numbers = $('#numbers').val();
    numbers = numbers.split(',').map(n=>Math.pow(n,2)).map(append);

    //Chyld's code for the same thing:
    // $('#squares').val().split(',').map(x=>x*x).map(x=>`<div>${x}</div>`).forEach(x=>$('#container').append(x));
  }

  function append(input){
    var $div = $('<div>');
    $div.addClass('newDiv');
    $div.append(input);
    $('body').append($div);
  }


/*
These are equal to each other:
     numbers = numbers.split(',').map(function(n){return n.trim();});     //old ES5
    numbers = numbers.split(',').map(n=>n.trim());          //new ES6

=> means you are creating a function
n =>   ____   function(n){}    _____  these are identical
*/

})();
