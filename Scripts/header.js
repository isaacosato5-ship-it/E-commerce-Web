
setTimeout(() => {
  document.addEventListener("DOMContentLoaded", function () {
  const hambuger = document.querySelector(".hambuger");
  console.log(hambuger);
  const mobileNav = document.querySelector(".mobile-nav");
  const navTheme = document.querySelector(".nav-theme");
  const themeIcon = document.querySelector(".theme-icon");

  let hambugerState = false;
  if (hambuger) {
    hambuger.addEventListener("click", () => {
      mobileNav.classList.toggle("show");
      if (hambugerState === false) {
        hambuger.innerHTML = "❌";
        hambugerState = true;
        return;
      } else if (hambugerState === true) {
        hambuger.innerHTML = `
        <div class="bar"></div> 
        <div class="bar"></div>
        <div class="bar"></div> `;
        hambugerState = false;
        return;
      }
    });
  }
  function toggleTheme(type) {
    console.log(type.value);
  }
  if (navTheme) {
  navTheme.addEventListener("change", () => toggleTheme(navTheme));
  themeIcon.addEventListener("change", () => toggleTheme(themeIcon));
  }
});
}, 3500);
