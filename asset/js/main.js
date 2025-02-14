//nav dropdown =====================================================
//滑鼠觸碰下拉選單
$(function () {
  $("#navi")
    .children("li")
    .hover(function () {
      $(this).children("ul").stop().slideToggle(100);
    });
});

//向下滾動頁面，改變<header>樣式=======================================
const header = document.getElementById("header");
const navLogo = document.getElementById("navLogo");
const links = header.getElementsByTagName("a"); //取得所有連結<a>元素
const originalLogoSrc = "./asset/img/logo-white.webp"; //原始logo
const scrolledLogoSrc = "./asset/img/logo-black.webp"; //滾動後logo

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    // 當滾動超過50px時
    header.style.backgroundColor = "#ffffff"; // 將背景色設為白色
    header.style.padding = "0 50px"; // padding
    for (let link of links) {
      link.style.color = "#000000";
    }
    navLogo.src = scrolledLogoSrc; // 更換logo
  } else {
    header.style.backgroundColor = "#000000"; // 恢復為黑色
    header.style.padding = "0 80px"; // padding
    navLogo.src = originalLogoSrc; // 恢復原始logo
    for (let link of links) {
      link.style.color = "#ffffff";
    }
  }
});
