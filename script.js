document.addEventListener("DOMContentLoaded", ()=>{
  updateWeather(25); // default
});

function updateWeather(temp=null){
  let weather = temp !== null ? temp : document.getElementById("tempInput").value;
  let result = document.getElementById("result");
  let effects = document.getElementById("effects");
  effects.innerHTML="";

  if(weather>40){
    result.innerHTML="🔥 It's blazing hot! Ice cream is melting 🍦";
    setBackground('sun.jpg');
    addSunRays();
  } else if(weather>30){
    result.innerHTML="🌤 Warm day. Perfect for a lazy nap 😴";
    setBackground('cloudy.jpg');
    addFloatingClouds();
  } else if(weather>20){
    result.innerHTML="🌥 Cool weather. Let's take a walk 🚶‍♀️";
    setBackground('partly_cloudy.jpg');
    addFloatingClouds();
  } else if(weather>10){
    result.innerHTML="❄️ Chilly! Penguins would be jealous 🐧";
    setBackground('snow.jpg');
    addSnow();
  } else{
    result.innerHTML="🥶 Freezing! Time to build a snowman ⛄";
    setBackground('frost.jpg');
    addSnow();
  }
}

function setBackground(img){
  document.body.style.opacity=0;
  setTimeout(()=>{
    document.body.style.backgroundImage=`url('${img}')`;
    document.body.style.opacity=1;
  },300);
}

/* Animations */
function addSunRays(){
  const e=document.getElementById("effects");
  for(let i=0;i<8;i++){
    let r=document.createElement("div");
    r.style.width="4px";
    r.style.height="120px";
    r.style.background="yellow";
    r.style.position="absolute";
    r.style.top="50%";
    r.style.left="50%";
    r.style.transform=`rotate(${i*45}deg) translateY(-60px)`;
    r.style.opacity=0.8;
    r.style.animation="spin 6s linear infinite alternate";
    e.appendChild(r);
  }
}

function addFloatingClouds(){
  const e=document.getElementById("effects");
  for(let i=0;i<5;i++){
    let c=document.createElement("div");
    const cloudEmojis=["☁️","🌥","☁️"];
    c.innerHTML=cloudEmojis[Math.floor(Math.random()*cloudEmojis.length)];
    c.style.position="absolute";
    c.style.fontSize="2rem";
    c.style.top=Math.random()*50+"%";
    c.style.left="-10%";
    c.style.animation=`moveCloud ${10+Math.random()*10}s ease-in-out infinite alternate`;
    e.appendChild(c);
  }
}

function addSnow(){
  const e=document.getElementById("effects");
  for(let i=0;i<30;i++){
    let s=document.createElement("div");
    const snowEmojis=["❄️","⛄"];
    s.innerHTML=snowEmojis[Math.floor(Math.random()*snowEmojis.length)];
    s.style.position="absolute";
    s.style.fontSize=Math.random()*1.5+1+"rem";
    s.style.top="-5%";
    s.style.left=Math.random()*100+"%";
    s.style.animation=`fallSnow ${5+Math.random()*5}s linear infinite`;
    e.appendChild(s);
  }
}

/* Keyframes */
const style=document.createElement('style');
style.innerHTML=`
@keyframes spin{0%{transform:rotate(0deg) translateY(-60px);}100%{transform:rotate(360deg) translateY(-60px);}}
@keyframes moveCloud{0%{left:-10%;}100%{left:110%;}}
@keyframes fallSnow{0%{top:-5%;opacity:1;}100%{top:105%;opacity:0;}}`;
document.head.appendChild(style);
