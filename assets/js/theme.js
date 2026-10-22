// Remembers a light/dark choice; otherwise follows the system setting.
(function () {
  var root = document.documentElement;
  try {
    var saved = localStorage.getItem("theme");
    if (saved === "light" || saved === "dark") root.setAttribute("data-theme", saved);
  } catch (e) {}

  document.addEventListener("DOMContentLoaded", function () {
    var button = document.querySelector(".theme-toggle");
    if (!button) return;
    button.addEventListener("click", function () {
      var current = root.getAttribute("data-theme");
      if (!current) current = matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
      var next = current === "dark" ? "light" : "dark";
      root.setAttribute("data-theme", next);
      try {
        localStorage.setItem("theme", next);
      } catch (e) {}
    });
  });
})();
