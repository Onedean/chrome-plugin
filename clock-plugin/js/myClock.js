function myClock(el) {
  var today = new Date()
  var h = today.getHours()
  var m = today.getMinutes()
  var s = today.getSeconds()
  m = m > 10 ? m : '0'+m
  s = s > 10 ? s : '0'+s
  el.innerHTML = 'now is ' + h + ':' + m + ':' + s
  setTimeout(function () {
    myClock(el),1000
  })
}
var clock_div = document.getElementById('clock_div')
myClock(clock_div)
