/* jshint unused:false */
/* global _:true */

(function(){
  'use strict';

  $(document).ready(init);

  function init(){
    $('#go').click(cubeIt);
  }

  function cubeIt(){
    var inputNumbers = $('#input').val().split(',').map(x=>x.trim());
    var y = _.range(inputNumbers[0], inputNumbers[1], inputNumbers[2]).map(x=>Math.pow(x,3)).map(x=>`<div class='newClass'>${x}</div>`).forEach(x=>$('body').append(x));

    //
    // debugger;
    // .forEach(x=>Math.pow(x,3)).forEach(x=>`<div>${x}</div>`).forEach(x=>$('body').append(x));
  }


//Chyld's code for the same thing:
// $('#squares').val().split(',').map(x=>x*x).map(x=>`<div>${x}</div>`).forEach(x=>$('#container').append(x));


})();
