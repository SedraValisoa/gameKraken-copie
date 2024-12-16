const toDarkMode = document.querySelector('input[type="checkbox"]');

const root = document.querySelector(":root");
let isDark = false;
function darkMode() {
  isDark = true;
  root.style.setProperty("--colorPrimary", "#1A1A1D");
  root.style.setProperty("--colorSecondary", "#3E432E");
  root.style.setProperty("--colorIcon", "#BEF992");
  root.style.setProperty("--colorShadow", "#4E9F3D");
  root.style.setProperty("--darkBG", "#4E9F3D");
  root.style.setProperty("--IconDark", "#D8E9A8");
  root.style.setProperty("--transparent", "#D8E9A8");
  root.style.setProperty("--colorTxt", "#ddf0c2");
  root.style.setProperty("--ligthTxt", "#ddf0c2");
  root.style.setProperty("--input", "#4E9F3D");
  root.style.setProperty("--clEm", "#00b906");
}
function lightMode() {
  isDark = false;
  root.style.setProperty("--colorPrimary", " #f4f7ed");
  root.style.setProperty("--colorSecondary", " #b5e79e");
  root.style.setProperty("--colorIcon", "#3c3d3b");
  root.style.setProperty("--colorShadow", "#c2c2c2f6");
  root.style.setProperty("--colorTxt", "#1A1A1D");
  root.style.setProperty("--transparent", "transperent");
  root.style.setProperty("--clEm", "#003602");
}
toDarkMode.addEventListener("click", () => {
  if (isDark !== false) {
    lightMode();
  } else {
    darkMode();
  }
});
