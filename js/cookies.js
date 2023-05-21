const cookiesBox = document.querySelector(".cookies-container"),
      cookiesButtons = document.querySelectorAll(".cookies-button");

(function putCookieToLocalCookies() {
  if (document.cookie.includes("drolaszkitti.hu")) return;
  cookiesBox.classList.add("show");

  cookiesButtons.forEach((cookiesButton) => {
    cookiesButton.addEventListener("click", () => {
      cookiesBox.classList.remove("show");
      if (cookiesButton.id == "acceptCookiesBtn") {
        //set cookies for 365 days. 60 = 1 min, 60 = 1 hours, 24 = 1 day, 365 = 365 days
        document.cookie = "CookiesPopUp = drolaszkitti.hu; max-age=" + 60 * 60 * 24 * 365;
      }
    });
  });
})();