window.onload = function() {
    var texts = [
        "\'아~ 펑크하고 싶다\'",
        "\'Em 아무거나 줘바 ㄱㄱ\'",
        "\'근본 Am ㄱㄱ??\'",
        "\'와 펑크 아.시.는.구.나.\'",
        "\'C7 FM7 G F C7\'"
    ];
  
    var randomIndex = Math.floor(Math.random() * texts.length);
    var randomText = texts[randomIndex];
  
    document.getElementById("r_funk").innerText = randomText;
  };
