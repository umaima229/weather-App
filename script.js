function checkWeather() {
  var weather = document.getElementById("tempInput").value;
  var result = document.getElementById("result");

  if (weather > 40) {
    result.innerHTML = "🔥 It's Too Hot Outside";
    document.body.style.backgroundImage = "url('sun.jpg')";
  } 
  else if (weather > 30) {
    result.innerHTML = "🌤 The Weather Today Is Normal";
    document.body.style.backgroundImage = "url('cloudy.jpg')";
  } 
  else if (weather > 20) {
    result.innerHTML = "🌥 Today Weather Is Cool";
    document.body.style.backgroundImage = "url('partly_cloudy.jpg')";
  } 
  else if (weather > 10) {
    result.innerHTML = "❄️ OMG! Today's Weather is So Cool";
    document.body.style.backgroundImage = "url('snow.jpg')";
  } 
  else {
    result.innerHTML = "⚠️ Too Cold!";
    document.body.style.backgroundImage = "url('frost.jpg')";
  }

  
  document.body.style.backgroundSize = "cover";
  document.body.style.backgroundPosition = "center";
  document.body.style.backgroundRepeat = "no-repeat";
}
