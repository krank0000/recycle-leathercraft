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
const lines = document.getElementsByClassName("line"); //取得菜單所有線段元素
const originalLogoSrc = "./asset/img/logo-white.webp"; //原始logo
const scrolledLogoSrc = "./asset/img/logo-black.webp"; //滾動後logo

window.addEventListener("scroll", () => {
  if (window.innerWidth < 600) {
    // 小螢幕時的滾動效果
    if (window.scrollY > 50) {
      header.style.backgroundColor = "#ffffff";
      // header.style.padding = "0 20px"; // 小螢幕時的 padding
      navLogo.src = scrolledLogoSrc;
      for (let link of links) {
        link.style.color = "#000000";
      }
      for (let line of lines) {
        line.style.backgroundColor = "#000000";
      }
    } else {
      header.style.backgroundColor = "#000000";
      // header.style.padding = "0 40px"; // 小螢幕時的 padding
      navLogo.src = originalLogoSrc;
      for (let link of links) {
        link.style.color = "#ffffff";
      }
      for (let line of lines) {
        line.style.backgroundColor = "#ffffff";
      }
    }
  } else {
    // 大螢幕時的滾動效果
    if (window.scrollY > 50) {
      header.style.backgroundColor = "#ffffff";
      header.style.padding = "0 50px";
      navLogo.src = scrolledLogoSrc;
      for (let link of links) {
        link.style.color = "#000000";
      }
      for (let line of lines) {
        line.style.backgroundColor = "#000000";
      }
    } else {
      header.style.backgroundColor = "#000000";
      header.style.padding = "0 80px";
      navLogo.src = originalLogoSrc;
      for (let link of links) {
        link.style.color = "#ffffff";
      }
      for (let line of lines) {
        line.style.backgroundColor = "#ffffff";
      }
    }
  }
});
