function httpRequest(url,callback) {
  var xhr = new XMLHttpRequest()
  xhr.open('GET',url,true)
  xhr.onreadystatechange = function () {
    if(xhr.readyState === 4){
      callback(xhr.responseText)
    }
  }
  xhr.send()
}
function showWeather(result) {
  result = JSON.parse(result).data
  console.log(result)
  document.getElementById('cityName').innerText = result.city
  document.getElementById('pic').innerHTML = '<img src="'+ result.forecast7[0].night[0].img + '">'
  document.getElementById('nowTem').innerText = result.now[0].now_temperature
  var climate = result.forecast7[0].hourForcast3[0]
  document.getElementById('direction').innerText = climate.direction + climate.power
  document.getElementById('humidity').innerText = climate.humidity
  document.getElementById('airpressure').innerText = climate.airpressure
  var table = '<table><tr><th>日期</th><th>天气</th><th>最低温度</th><th>最高温度</th></tr>';
  for(var i = 0; i < 7; i++){
    console.log(result.forecast7[i].date)
    table += '<tr>';
    table += '<td>'+result.forecast7[i].date+'</td>';

    table += '<td><img src="'+result.forecast7[0].night[0].img+'"></td>';
    table += '<td>'+ result.forecast7[i].hourForcast3[6].temprature + '</td>';
    table += '<td>'+ result.forecast7[i].hourForcast3[2].temprature + '</td>';
    table += '</tr>';
  }
  table += '</table>';
  document.getElementById('forecast').innerHTML = table
}
var city = localStorage.city || '北京'
var url = 'https://api.shenjian.io/?appid=fca6946c700a6f2e225c3931133b5607&city_name='+city
console.log(url)
httpRequest(url,showWeather)
