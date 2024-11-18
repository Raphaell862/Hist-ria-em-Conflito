function alternarMenu1() {
    var m = document.getElementById("div331");
    if(m.style.display=="block"){
    m.style.display="none"} else{
        m.style.display="block";
    }
}
function alternarMenu2() {
    var m = document.getElementById("div332");
    if(m.style.display=="block"){
    m.style.display="none"} else{
        m.style.display="block";
    }
}
function alternarMenu3() {
    var m = document.getElementById("div333");
    if(m.style.display=="block"){
    m.style.display="none"} else{
        m.style.display="block";
    }
}
function alternarMenu4() {
    var img1 = document.getElementById("img1");
    var img2 = document.getElementById("img2");

    if (img1.style.display === "none") {
      img1.style.display = "block";
      img2.style.display = "none";
    } else {
      img1.style.display = "none";
      img2.style.display = "block";
    }
  }
  function alternarMenu5() {
    var img1 = document.getElementById("img2");
    var img2 = document.getElementById("img1");

    if (img2.style.display === "none") {
      img2.style.display = "block";
      img1.style.display = "none";
    } else {
      img2.style.display = "none";
      img1.style.display = "block";
    }
  }

