var winner = Math.floor(Math.random() * 3) + 1;
function theButton(id) {
  if (id == winner) {
    alert("Congratulations! Your choice was the right one!");
    var property = document.getElementById(id);
    document.getElementById("img1").style.visibility = "visible";
    document.getElementById("img2").style.visibility = "hidden";
    property.style.backgroundColor = "green";
    return true;
  } else {
    alert("Try again!");
    var property = document.getElementById(id);
    document.getElementById("img2").style.visibility = "visible";
    document.getElementById("img1").style.visibility = "hidden";
    property.style.backgroundColor = "red";
    return false;
  }
}
function refreshPage(){
  window.location.reload();
}
