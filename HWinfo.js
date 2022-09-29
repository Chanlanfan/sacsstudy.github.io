function myFunction() {
  // Get the checkbox
  var checkBox = document.getElementById("switch");
  // Get the output text
  var text = document.getElementById("yes");

  // If the checkbox is checked, display the output text
  if (checkBox.checked == true){
    document.getElementById("yes").innerHTML = "text0";
  } else {
    document.getElementById("yes").innerHTML = " ";
  }

}  

(function (global) {
  document.getElementById("save").addEventListener("click", function () {
      global.localStorage.setItem("mySharedData", document.getElementById("output").value);
  }, false);
}(window));

(function (global) {
  document.getElementById("output").value = global.localStorage.getItem("mySharedData");
}(window));