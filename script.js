function navigationBar() {
  let burger = document.querySelector(".burger");
  let links = document.querySelector(".nav-links");
  const navlinks = document.querySelectorAll(".nav-links li");
  let orange_bg = document.querySelectorAll(".b");

  let menuLinks = document.querySelectorAll(".menu-links");
  menuLinks.forEach((l, index) => {
    l.addEventListener("click", () => {
      links.classList.toggle("nav-active");
      navlinks.forEach((link, index) => {
        if (link.style.animation) {
          link.style.animation = "";
        } else {
          link.style.animation = `navbar 0.5s ease forwards ${index / 7 + 0.3}s`;
        }
      });
      burger.classList.toggle("toggle");
    });
  });
  burger.addEventListener(
    "click",
    () => {
      // nav active
      links.classList.toggle("nav-active");
      //animate nav
      navlinks.forEach((link, index) => {
        if (link.style.animation) {
          link.style.animation = "";
        } else {
          link.style.animation = `navbar 0.5s ease forwards ${index / 7 + 0.3}s`;
        }
      });
      //burger animation
      burger.classList.toggle("toggle");
    },
    false
  );
}

// FAQ
function questions() {
  let questions = document.querySelectorAll(".question");
  questions.forEach((q, index) => {
    q.addEventListener("click", () => {
      let str = "";
      let cls_Name = "";
      switch (index) {
        case 0:
          str = `Tentu kami akan menambahkan menu menu baru yang lezat untuk para pembeli sekalian`;
          cls_Name = ".p1";
          break;
        case 1:
          str = `Lama pengiriman makanan bergantung pada lokasi tujuan, dan pesanan yang anda pilih, kami akan memberikan informasi pengiriman pada pesan atau email anda`;
          cls_Name = ".p2";
          break;
        case 2:
          str = `Tentu bakal ada event event menarik dari resto kami, seperti diskon harga makanan untuk anda sekalian`;
          cls_Name = ".p3";
          break;
        case 3:
          str = `Tentu saja bisa :)`;
          cls_Name = ".p4";
          break;
        default:
          str = `No Answer`;
          cls_Name = "";
      }
      let p = document.querySelector(cls_Name);
      p.innerText = str;
      if (p.classList.contains("hide")) {
        p.classList.add("display");
        p.classList.remove("hide");
      } else {
        p.classList.add("hide");
        p.classList.remove("display");
      }
    });
  });
}

//scroll top
function scrollToTop() {
  let mybutton = document.getElementById("myBtn");

  window.onscroll = function () {
    scrollFunction();
  };
  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  }
}
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
scrollToTop();
navigationBar();
questions();
