let password = document.querySelector(".password");
let alert = document.querySelector(".alert");
let alertShift = document.querySelector(".alertShift");
let content = document.querySelector(".content");
password.addEventListener("input", (e) => {
  content.innerHTML = e.target.value;
});

password.addEventListener("keyup", (e) => {
  if (e.getModifierState("CapsLock")) {
    alert.style.display = "block";
  } else if (e.getModifierState("Shift")) {
    alertShift.style.display = "block";
  } else {
    alert.style.display = "none";
    alertShift.style.display = "none";
  }
});
