document.addEventListener("DOMContentLoaded", function () {
    // 1. Smooth Scroll Effect
    document.querySelectorAll("a[href^='#']").forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute("href")).scrollIntoView({
                behavior: "smooth"
            });
        });
    });

    // 2. Scroll Animation for Sections
    const elements = document.querySelectorAll(".feat, .card, .about-content");
    function checkScroll() {
        elements.forEach(el => {
            let position = el.getBoundingClientRect().top;
            if (position < window.innerHeight - 100) {
                el.style.opacity = 1;
                el.style.transform = "translateY(0)";
            }
        });
    }
    window.addEventListener("scroll", checkScroll);
    checkScroll();

    // 3. Back to Top Button
    const topButton = document.createElement("button");
    topButton.innerText = "↑";
    topButton.style.position = "fixed";
    topButton.style.bottom = "20px";
    topButton.style.right = "20px";
    topButton.style.padding = "10px 15px";
    topButton.style.fontSize = "20px";
    topButton.style.backgroundColor = "#378137";
    topButton.style.color = "white";
    topButton.style.border = "none";
    topButton.style.borderRadius = "5px";
    topButton.style.cursor = "pointer";
    topButton.style.display = "none";
    document.body.appendChild(topButton);

    window.addEventListener("scroll", () => {
        if (window.scrollY > 300) {
            topButton.style.display = "block";
        } else {
            topButton.style.display = "none";
        }
    });
    topButton.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    // 4. Mobile Menu Toggle
    const menuIcon = document.querySelector(".header .icon");
    const menuList = document.querySelector(".header .links ul");
    menuIcon.addEventListener("click", () => {
        menuList.style.display = menuList.style.display === "block" ? "none" : "block";
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const animatedElements = document.querySelectorAll(".animate-on-scroll");
  
    function handleScroll() {
      animatedElements.forEach((element) => {
        const elementPosition = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementPosition < windowHeight - 100) {
          element.classList.add("visible");
        }
      });
    }
  
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // للتأكد من تشغيل التأثير عند تحميل الصفحة
  });
  
