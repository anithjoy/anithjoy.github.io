// JavaScript to toggle the visibility of the dropdown content
function toggleDropdown() {
  var dropdownContent = document.getElementById("myDropdown");
  var button = document.getElementById("toggleButton");

  if (dropdownContent.style.display === "none") {
    // If currently hidden, show the content and change button text to "View Less"
    dropdownContent.style.display = "block";
    button.textContent = "View Less Projects";
  } else {
    // If currently visible, hide the content and change button text to "View More"
    dropdownContent.style.display = "none";
    button.textContent = "View More Projects";
  }
}
