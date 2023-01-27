function myFunction() {
  var mobMenu = document.getElementById("mobMenu");
  if (mobMenu.style.display === "block") {
   return mobMenu.style.display = "none";
  } else {
   return mobMenu.style.display = "block";
  }
}