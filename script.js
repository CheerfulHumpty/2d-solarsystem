let global = false;
    function myfunction(){
    let speech = new SpeechSynthesisUtterance();
    let info =document.getElementById("info")
    speech.pitch = 100;
    speech.volume = 2;
    speech.rate = 0.8;
    speech.text = "The Solar System formed 4.6 billion years ago from the gravitational collapse of a giant interstellar molecular cloud. The vast majority of the system's mass is in the Sun, with the majority of the remaining mass contained in Jupiter. The four inner system planets—Mercury, Venus, Earth and Mars—are terrestrial planets, being composed primarily of rock and metal. The four giant planets of the outer system are substantially more massive than the terrestrials. The two largest planets, Jupiter and Saturn, are gas giants, being composed mainly of hydrogen and helium; the next two, Uranus and Neptune, are ice giants, being composed mostly of substances with relatively high melting points compared with hydrogen and helium, called volatiles, such as water, ammonia and methane. All eight have nearly circular orbits that lie close to the plane of the Earth's orbit, called the ecliptic.";
    speechSynthesis.speak(speech);
    info.ondblclick = function(){
        speechSynthesis.cancel()
    }
    
    window.onload = function(){
        speechSynthesis.pause()
    }

}
    let orbit1 = document.getElementById("orbit1");
    let orbit2 = document.getElementById("orbit2");
    let orbit3 = document.getElementById("orbit3");
    let mercury = document.getElementById("mercury");
    let venus = document.getElementById("venus");
    let earth = document.getElementById("earth")
    let mars = document.getElementById("mars");
    let orbit4 = document.getElementById("orbit4")
    let jupiter = document.getElementById("jupiter");
    let orbit5 = document.getElementById("orbit5")
    let orbit6 = document.getElementById("orbit6")
    let orbit7 = document.getElementById("orbit7")
    let orbit8 = document.getElementById("orbit8")
    let saturn = document.getElementById("saturn");
    let uranus = document.getElementById("uranus");
    let neptune = document.getElementById("neptune");
    let ring = document.getElementById("ring");
    let strip1 = document.getElementById("strip1");
    let strip2 = document.getElementById("strip2");
    let moon = document.getElementById("moon");
    let m1 = document.getElementById("m1");
    let m2 = document.getElementById("m2");
    let m3 = document.getElementById("m3");
    let m4 = document.getElementById("m4");
    earth.append(moon);
    jupiter.append(m1);
    jupiter.append(m2);
    jupiter.append(m3);
    jupiter.append(m4);
    orbit1.append(mercury);
    orbit2.append(venus);
    orbit3.append(earth);
    orbit4.append(mars);
    orbit5.append(jupiter);
    orbit6.append(saturn);
    orbit7.append(uranus);
    orbit8.append(neptune);
    saturn.append(ring)
    jupiter.append(strip1);
    jupiter.append(strip2);
    let rotate = 0;
    let rotate2 = 0;
    let rotate3 = 0;
    let rotate4 = 0;
    let rotate5 = 0;
    let rotate6 = 0;
    let rotate7 = 0;
    let rotate8 = 0;
    let planetrotate = 0;
    let earthrotate = 0;
    window.onload = function(){
        setInterval(function(){
            rotate += 7;
       orbit1.style.transform = "rotate("+rotate+"deg)";
        } , 20)
        setInterval(function(){
            rotate2 += 3.5;
       orbit2.style.transform = "rotate("+rotate2+"deg)";
        } , 30)
        setInterval(function(){
            rotate3 += 4.0;
      orbit3.style.transform = "rotate("+rotate3+"deg)";
        } , 30)
        setInterval(function(){
            rotate4 += 1.5;
       orbit4.style.transform = "rotate("+rotate4+"deg)";
        } , 30)
        setInterval(function(){
            rotate5 += 1.5;
       orbit5.style.transform = "rotate("+rotate5+"deg)";
        } , 30)
        setInterval(function(){
            rotate6 +=0.5;
       orbit6.style.transform = "rotate("+rotate6+"deg)";
        } , 30)
        setInterval(function(){
            rotate7 +=0.8;
       orbit7.style.transform = "rotate("+rotate7+"deg)";
        } , 30)
        setInterval(function(){
            rotate8 += 0.9;
       orbit8.style.transform = "rotate("+rotate8+"deg)";
        } , 30)
        setInterval(function(){
            planetrotate += 5;
       jupiter.style.transform = "rotate("+planetrotate+"deg)";
        } , 30)
        setInterval(function(){
            earthrotate += 20;
       earth.style.transform = "rotate("+earthrotate+"deg)";
        } , 30)
    }
