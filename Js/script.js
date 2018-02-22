$(function(event){

var player = 1;
var table = $('table');
var messages = $('.messages');
var turn = $('.turn');
displayNextPlayer(turn, player);
var reset = $('#reset');

//reset.click(function(event){

	//player
//});

function setNextPlayer(player) {
  if(player == 1) {
    return player = 2;
  } else {
    return player = 1;
  }
}

function displayNextPlayer(turn, player) {
  turn.html('Player turn : '+player);
}

function checkIfPlayerWon(table, pattern) {
  var won = 0;
  if(table.find('.0').hasClass(pattern) && table.find('.1').hasClass(pattern) && table.find('.2').hasClass(pattern)) {
    won = 1;
  } else if (table.find('.1').hasClass(pattern) && table.find('.item4').hasClass(pattern) && table.find('.item7').hasClass(pattern)) {
    won = 1;
  } else if (table.find('.item1').hasClass(pattern) && table.find('.item5').hasClass(pattern) && table.find('.item9').hasClass(pattern)) {
    won = 1;
  } else if (table.find('.item4').hasClass(pattern) && table.find('.item5').hasClass(pattern) && table.find('.item6').hasClass(pattern)) {
    won = 1;
  } else if (table.find('.item7').hasClass(pattern) && table.find('.item8').hasClass(pattern) && table.find('.item9').hasClass(pattern)) {
    won = 1;
  } else if (table.find('.item2').hasClass(pattern) && table.find('.item5').hasClass(pattern) && table.find('.item8').hasClass(pattern)) {
    won = 1;
  } else if (table.find('.item3').hasClass(pattern) && table.find('.item6').hasClass(pattern) && table.find('.item9').hasClass(pattern)) {
    won = 1;
  } else if (table.find('.item3').hasClass(pattern) && table.find('.item5').hasClass(pattern) && table.find('.item7').hasClass(pattern)) {
    won = 1;
  }
  return won;
}

    reset.onclick('table') {
    table.find('td').each(function() {
    $(this).removeClass('O').removeClass('X');
  });

};



});