function httpRequest(url, callback){
  var xhr = new XMLHttpRequest()
  xhr.open("GET", url, true)
  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4) {
      var reg = /(2(5[0-5]{1}|[0-4]\d{1})|[0-1]?\d{1,2})(\.(2(5[0-5]{1}|[0-4]\d{1})|[0-1]?\d{1,2})){3}/g
      callback(xhr.responseText.match(reg)[0])
    }
  }
  xhr.send()
}

httpRequest('http://pv.sohu.com/cityjson', function(ip){
  document.getElementById('ip_div').innerText = 'Your local ip is:' + ip;
});
