const cookiesBox = document.querySelector(".cookies-container"),
      cookiesButtons = document.querySelectorAll(".cookies-button");

function putCookieToLocalCookies(){
  if (document.cookie.includes("drolaszkitti.hu")) return;
  cookiesBox.classList.add("show");

  cookiesButtons.forEach((cookiesButton) => {
    cookiesButton.addEventListener("click", () => {
      cookiesBox.classList.remove("show");
      if (cookiesButton.id == "acceptCookiesBtn") {
        //set cookies for 30 days. 60 = 1 min, 60 = 1 hours, 24 = 1 day, 30 = 30 days
        document.cookie = "CookiesPopUp= drolaszkitti.hu; max-age=" + 60 * 60 * 24 * 30;
      }
    });
  });
};
putCookieToLocalCookies();