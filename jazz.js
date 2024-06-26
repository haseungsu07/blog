function goToScroll(name) {
  var location = document.querySelector("#" + name).offsetTop;
  window.scrollTo({top: location - 100, behavior: 'smooth'});
}

window.onload = function() {
    var texts2 = [
      "\'Jazzzzz....\'",
      "\'Quartal Downward Cliché\'",
      "\'F BLUES Scale\'",
      "\'G#dim7b9b13\'",
      "\'CM7 Dm7 G7 Am7 CM7\'"
    ];
  
    var randomIndex2 = Math.floor(Math.random() * texts2.length);
    var randomText2 = texts2[randomIndex2];
  
    document.getElementById("r_jazz").innerText = randomText2;
  };

