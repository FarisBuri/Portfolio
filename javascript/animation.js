// Start Scroll
document.querySelector(".scroll").onclick = (_) => {
  this.scrollTo(0, 0);
};
// End Scroll

// Start About Us

let infoH3 = document.querySelector(".info h3"),
  infoP = document.querySelector(".info p");
let caret = setInterval(() => {
  infoH3.classList.toggle("trans");
}, 100);

let myInto = `Hi, I'm Faris Buri. I Hope My Portfolio Tells You About My Abilities`,
  myDetails = `I made this portfolio from scratch. I try my best in this portfolio to put all my projects and Skills, Also I really love what I'm doing and love to learn and make changes on websites and develop it, also i'm flexible. I hope to join to you.`;
let counter = 0,
  start = 0;
let main = setInterval(() => {
  infoH3.textContent += myInto.split("")[counter];
  counter++;
  if (counter >= myInto.split("").length) {
    // Stop Title About us
    clearInterval(main);
    clearInterval(caret);
    // Start Intoduce About us
    let caretP = setInterval(() => {
      infoP.classList.toggle("trans");
    }, 100);
    let sub = setInterval(() => {
      infoP.textContent += myDetails.split("")[start];
      start++;
      if (start >= myDetails.split("").length) {
        clearInterval(sub);
        clearInterval(caretP);
      }
    }, 50);
  }
}, 50);

// End About Us

// Start Services
let services = document.querySelector(".services");
// console.log(services.lastElementChild.children[1]);
window.onscroll = () => {
  // Start Project

  let projects = document.querySelector(".project");
  if (
    this.scrollY >
    projects.offsetHeight + projects.offsetTop - this.innerHeight - 300
  ) {
    document.querySelectorAll(".projects .container .project").forEach((e) => {
      e.classList.remove("opacity");
    });
  } else {
    document.querySelectorAll(".projects .container .project").forEach((e) => {
      e.classList.add("opacity");
    });
  }

  // Services
  let services_1 = services.lastElementChild.firstElementChild;
  if (
    this.scrollY >=
    services_1.offsetTop + services_1.offsetHeight - this.innerHeight - 300
  ) {
    services.lastElementChild.children[0].classList.remove("left");
    services.lastElementChild.children[1].classList.remove("right");
  } else {
    services.lastElementChild.children[0].classList.add("left");
    services.lastElementChild.children[1].classList.add("right");
  }

  let services_2 = services.lastElementChild.children[3];
  if (
    this.scrollY >=
    services_1.offsetTop + services_2.offsetHeight - this.innerHeight + 100
  ) {
    services.lastElementChild.children[2].classList.remove("left");
    services.lastElementChild.children[3].classList.remove("right");
  } else {
    services.lastElementChild.children[2].classList.add("left");
    services.lastElementChild.children[3].classList.add("right");
  }

  // Start Scroll
  if (this.scrollY > 300) {
    document.querySelector(".scroll").classList.remove("show");
  } else {
    document.querySelector(".scroll").classList.add("show");
  }
  // End Scroll

  // Start Progress Skills
};

// End Services

// Start SKills

window.onload = (_) => {
  let skills = document.querySelectorAll(".skills .container > div"),
    progress = document.querySelector(
      ".skills .container .box .skill .progress-box"
    ),
    progressSpan = document.querySelectorAll(
      ".skills .container .box .skill .progress-box span"
    );
  progressSpan.forEach((e) => {
    e.style.width = e.dataset.prog;
  });

  skills.forEach((e) => {
    e.onclick = (_) => {
      // Open Skill
      if (e.lastElementChild.classList.contains("moveDown")) {
        e.lastElementChild.classList.remove("appearance");
        setTimeout(() => {
          e.lastElementChild.classList.remove("moveDown");
          // Animation progress
          for (let j = 0; j < e.lastElementChild.children.length; j++) {
            e.lastElementChild.children[
              j
            ].lastElementChild.lastElementChild.classList.remove("prg");
          }
        }, 100);
      } else {
        e.lastElementChild.classList.add("moveDown");
        setTimeout(() => {
          e.lastElementChild.classList.add("appearance");
        }, 500);

        // Animation progress
        for (let j = 0; j < e.lastElementChild.children.length; j++) {
          e.lastElementChild.children[
            j
          ].lastElementChild.lastElementChild.classList.add("prg");
        }
      }

      // Rotate Arrow

      e.children[1].classList.toggle("rotate");
    };
  });

  // End SKills

  // Start Projects
  let madeSite = document.querySelectorAll(
      ".projects .container .project .title"
    ),
    rotate = document.querySelectorAll(".projects .container .project i");

  madeSite.forEach((e) => {
    e.onclick = (_) => {
      e.parentElement.lastElementChild.classList.toggle("hide");
      e.parentElement.firstElementChild.lastElementChild.classList.toggle(
        "rotate"
      );
    };
  });
  // End Projects
};

// Start  Footer

let mainColor = null;

let localColor = localStorage.getItem("localColors"),
  localFont = localStorage.getItem("localSize");
// Local Color
if (localColor != null) {
  document.querySelectorAll(".active").forEach((event) => {
    event.classList.remove("active");
  });

  document.documentElement.style.setProperty("--main-color", localColor);
  let colors = ["#f00", "#00bcd4", "#ff9800", "#03a9f4"];
  if (
    localColor == colors[0] ||
    localColor == colors[1] ||
    localColor == colors[2] ||
    localColor == colors[3]
  ) {
    document
      .querySelector(`[data-color='${localColor}']`)
      .classList.add("active");
  } else {
    document
      .querySelector("footer .customize .color input")
      .classList.add("active");
  }
}

// Local Font
if (localFont != null) {
  document.documentElement.style.setProperty("--font-size", localFont);
  let op = document.querySelector(`option[value="${localFont}"`);
  op.selected = "selected";
}

// Color
let input = document.querySelector("footer .customize .color input");
input.oninput = (_) => {
  document.documentElement.style.setProperty(
    "--main-color",
    setColor(input.value)
  );

  localStorage.setItem("localColors", getColor());
  document.querySelectorAll(".active").forEach((evn) => {
    evn.classList.remove("active");
  });
  input.classList.add("active");
};
let span = document
  .querySelectorAll("footer .customize .color span")
  .forEach((e) => {
    e.style.backgroundColor = e.dataset.color;
    e.addEventListener("click", (ev) => {
      document.documentElement.style.setProperty(
        "--main-color",
        setColor(ev.target.dataset.color)
      );

      localStorage.setItem("localColors", getColor());
      document.querySelectorAll(".active").forEach((evn) => {
        evn.classList.remove("active");
      });
      ev.target.classList.add("active");
    });
  });

// Font

let select = document.querySelector("select");

select.onchange = (_) => {
  document.documentElement.style.setProperty(
    "--font-size",
    select[select.selectedIndex].value
  );
  localStorage.setItem("localSize", select[select.selectedIndex].value);
};

function setColor(color) {
  mainColor = color;
  return mainColor;
}
function getColor() {
  return mainColor;
}

// End Footer

// console.log(document.querySelectorAll("option")[0]);
// document.querySelectorAll("option")[0].selected = "selected";
