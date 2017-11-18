$(document).ready(function () {
  
  var dateEnd = new Date('11/11/2017 11:11 AM');
  var _second = 1000;
  var _minute = _second * 60;
  var _hour   = _minute * 60;
  var _day    = _hour * 24;
  
  function updateTimer() {
    var dateNow = new Date();
    var distance = dateEnd - dateNow;
    
    if (distance < 0) {
      clearInterval(timer);
      return;
    }
    
    var days     = Math.floor(distance / _day);
    var hours    = Math.floor((distance % _day) / _hour);
    var minutes  = Math.floor((distance % _hour) / _minute);
    var seconds  = Math.floor((distance % _minute) / _second);

    var realTime = ( days < 10 ? '0' : '' ) + days + 'd : ' + ( hours < 10 ? '0' : '' ) + hours + 'h : ' + ( minutes < 10 ? '0' : '' ) + minutes + 'm : ' + ( seconds < 10 ? '0' : '' ) + seconds + 's'

    $('.time').html(realTime);
    $('.time').attr('data-time', realTime);
  }

  var timer = setInterval(updateTimer, 1000);
});