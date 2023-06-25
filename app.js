document.querySelector(".email").value = localStorage.email || "";
document.querySelector(".pass").value = localStorage.password || "";

document.querySelector(".button").addEventListener("click", function (e) {
  e.preventDefault();

  localStorage.email = document.querySelector(".email").value;
  localStorage.password = document.querySelector(".pass").value;

  this.closest("form").submit();
});
