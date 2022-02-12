// Start Services

let servicesCard = [
  {
    i: "fas fa-paint-brush",
    h3: "front end",
    p: `I Love This Field And Work Really Hard On It Also Most Courses I Took It Was From Front End I'd Learn A Lot Of Things On It Like :`,
    li_1: ["HTML", "CSS", "Javascript"],
    li_2: ["TypeScript", "Angular", "Ionic"],
  },
  {
    i: "fas fa-ruler roll",
    h3: "Back End",
    p: `I Have Fun When I Coding Also It's Improve My Problem Solving Skill, Another thing is Make Shortcuts And Think Different Also It's Benefit Me In Other Fields. Most Things I Have Been Learn `,
    li_1: ["C#", "OOP"],
    li_2: ["Data Structure", "Algorithm"],
  },
  {
    i: "fas fa-database",
    h3: "Database",
    p: `This Filed is the most one that didn't take a lot of time becuase it's sample to understand and easy to write code on it. things i have been learn :`,
    li_1: ["UML", "EER Diagram"],
    li_2: ["Class Diagram", "Microsoft SQL"],
  },
  {
    i: "fas fa-pencil-ruler",
    h3: "Full Stack Developer",
    p: `One Of The Most Things I like Because it's let me understand everything I have been learn and how things work with each other. what I learn :`,
    li_1: ["ASP.NET", "HTTP"],
    li_2: ["Git Hub", "Command Line"],
  },
];

let servicesParent = document.querySelector(".services .container");
let transition = true;
for (let j = 0; j < servicesCard.length; j++) {
  let card = document.createElement("div"),
    paint = document.createElement("div"),
    i = document.createElement("i"),
    spans = document.createElement("span"),
    h3 = document.createElement("h3"),
    p = document.createElement("p"),
    breakUl = document.createElement("div"),
    ul_1 = document.createElement("ul"),
    ul_2 = document.createElement("ul");

  //  Start Transition
  transition == true ? card.classList.add("left") : card.classList.add("right");

  transition = !transition;
  // End Transition
  card.classList.add("card");
  paint.classList.add("paint");
  i.className = servicesCard[j].i;

  // ===========

  h3.textContent = servicesCard[j].h3;
  p.textContent = servicesCard[j].p;
  breakUl.classList.add("ul-break");

  // ===========

  servicesParent.appendChild(card);
  card.append(paint);
  paint.appendChild(i);
  paint.appendChild(spans);
  // __________

  card.appendChild(h3);
  card.appendChild(p);
  card.appendChild(breakUl);
  breakUl.appendChild(ul_1);
  breakUl.appendChild(ul_2);
  for (let x = 0; x < servicesCard[j].li_1.length; x++) {
    let li_1 = document.createElement("li");
    li_1.textContent = servicesCard[j].li_1[x];
    ul_1.appendChild(li_1);
  }
  for (let x = 0; x < servicesCard[j].li_2.length; x++) {
    let li_2 = document.createElement("li");
    li_2.textContent = servicesCard[j].li_2[x];
    ul_2.appendChild(li_2);
  }
}

// End Services

// Start Skills

let skillsParent = document.querySelector(".skills .container");

let skillsCards = [
  {
    divClass: "front",
    h3Class: "main-title change-main",
    h3Text: "Front End",
    lang: ["HTML", "CSS", "Javascript", "Typescript", "Angular", "Ionic"],
    rating: ["85", "80", "75", "75", "50", "60"],
  },
  {
    divClass: "back",
    h3Class: "main-title change-main",
    h3Text: "Back End",
    lang: ["C#", "OOP", "Data Structure", "Algorithm"],
    rating: ["75", "85", "65", "50"],
  },
  {
    divClass: "database",
    h3Class: "main-title change-main",
    h3Text: "Database",
    lang: ["UML", "EER Diagram", "Class Diagram", "Microsoft SQL"],
    rating: ["60", "55", "60", "75"],
  },
  {
    divClass: "full",
    h3Class: "main-title change-main",
    h3Text: "Full Stack",
    lang: ["ASP.NET", "HTTP", "Git Hub", "Command Line"],
    rating: ["80", "90", "70", "75"],
  },
  {
    divClass: "other",
    h3Class: "main-title change-main",
    h3Text: "Soft Skills",
    lang: [
      "Communicate",
      "planning",
      "problems solving",
      "Flexibility",
      "Teamwork",
      "Self Motivated ",
    ],
    rating: ["90", "95", "80", "100", "100", "90"],
  },
  {
    divClass: "other",
    h3Class: "main-title change-main",
    h3Text: "Other Skills",
    lang: ["English", "self Learning", "Typing Speed", "Searching"],
    rating: ["85", "95", "100", "90"],
  },
];

for (let i = 0; i < skillsCards.length; i++) {
  let parent = document.createElement("div"),
    h3 = document.createElement("h3"),
    arrow = document.createElement("i");
  arrow.className = "fas fa-arrow-alt-circle-right";
  box = document.createElement("div");
  parent.classList.add(skillsCards[i].divClass);
  h3.textContent = skillsCards[i].h3Text;
  h3.className = skillsCards[i].h3Class;
  box.className = "box appearance moveDown";
  skillsParent.appendChild(parent);
  parent.appendChild(h3);
  parent.appendChild(arrow);
  parent.appendChild(box);

  for (let x = 0; x < skillsCards[i].lang.length; x++) {
    let skill = document.createElement("div"),
      h4 = document.createElement("h4"),
      prog = document.createElement("div"),
      span = document.createElement("span");

    box.appendChild(skill);
    skill.classList.add("skill");
    skill.appendChild(h4);
    h4.textContent = skillsCards[i].lang[x];
    skill.appendChild(prog);
    prog.classList.add("progress-box");
    span.classList.add("progress", "prg");
    prog.appendChild(span);
    span.dataset.prog = skillsCards[i].rating[x] + "%";
  }
}

// End Skills

// Start Projects

let projectParent = document.querySelector(".projects .container");
projectsCard = [
  {
    img: "images/IPA Coffee.WebP",
    link: "http://faris.meshari-ipa.com/Home.aspx",
    h4: "IPA Coffee",
    i: "fas fa-arrow-alt-circle-right",
    infoStrong: "This Site Made For Staff in IPA : ",
    text_1: `- Teachers or Staff can get their coffee during session or meeting`,
    text_2: `- Teachers or stuff can add list of their type of things cause they don’t need every time write or check on same order`,
    langStrong_1: "Front End :",
    items_1: ["HTML", "CSS", "Javascript"],
    langStrong_2: "Back End :",
    items_2: ["C#", "ASP.NET", "Microsoft SQL"],
  },
  {
    img: "images/Template JS.WebP",
    link: "https://farisburi.github.io/Template-JS-With-Mentor",
    h4: "Template JS",
    i: "fas fa-arrow-alt-circle-right",
    infoStrong: "I took this course from Elzero Web School",
    text_1: ` - to apply what i learn from course javascript BootCamp `,
    text_2: `- to understand DOM , BOM well and improve problem solving skill`,
    langStrong_1: "Front End :",
    items_1: ["HTML", "CSS", "Javascript"],
    langStrong_2: "Library:",
    items_2: ["Font Awesome", "Normlize", "Image From Unsplash"],
  },
  {
    img: "images/Design_SCSS.WebP",
    link: " https://farisburi.github.io/Design_SCSS",
    h4: "Template SCSS",
    i: "fas fa-arrow-alt-circle-right",
    infoStrong: "I took this course from Elzero Web School",
    text_1: ` - I Made This Template To Be Familiar With SCSS`,
    text_2: `- to understand how to make component and helper and how to be organize `,
    langStrong_1: "Front End :",
    items_1: ["HTML", "SCSS"],
    langStrong_2: "Advantage:",
    items_2: ["Multi language ", "Responsive Design"],
  },
  {
    img: "images/Portfolio.WebP",
    link: "#home",
    h4: "This Portfolio",
    i: "fas fa-arrow-alt-circle-right",
    infoStrong: "I Took Ideas From Elzero, Codezlia ",
    text_1: ` - to show my ability and skills in way more interactive `,
    text_2: `- to learn how to make site good for viewer   `,
    langStrong_1: "Front End :",
    items_1: ["HTML", "CSS", "Javascript"],
    langStrong_2: "Advantage :",
    items_2: [
      "Use Object in Sections",
      "Use Local Storage, DOM, BOM",
      "Light House More Than 80",
    ],
  },
  {
    img: "images/Template 3.WebP",
    link: "https://farisburi.github.io/Template3-With-Mentor",
    h4: "Template 3",
    i: "fas fa-arrow-alt-circle-right",
    infoStrong: "I took this course from Elzero Web School",
    text_1: `- to understand animation and how it's work and when i have to use it `,
    text_2: `- to know how to use transition well `,
    langStrong_1: "Front End :",
    items_1: ["HTML", "CSS"],
    langStrong_2: "Library:",
    items_2: ["Font Awesome", "Normlize"],
  },
  {
    img: "images/Template 2.WebP",
    link: "https://farisburi.github.io/Template2-With-Mentor",
    h4: "Template 2",
    i: "fas fa-arrow-alt-circle-right",
    infoStrong: "I took this course from Elzero Web School",
    text_1: `- To Understand How Flex Work And when i have to use it`,
    text_2: `- To Understand How Grid Work And when i have to use it`,
    langStrong_1: "Front End :",
    items_1: ["HTML", "CSS"],
    langStrong_2: "Library:",
    items_2: ["Font Awesome", "Normlize"],
  },
  {
    img: "images/Template 1.WebP",
    link: "https://farisburi.github.io/Template1-With-Mentor",
    h4: "Template 1",
    i: "fas fa-arrow-alt-circle-right",
    infoStrong: "I took this course from Elzero Web School",
    text_1: ` - to be familiar with HTML , CSS`,
    text_2: ` - to understand responsive and how it's work`,
    langStrong_1: "Front End :",
    items_1: ["HTML", "CSS"],
    langStrong_2: "Library:",
    items_2: ["Font Awesome", "Normlize"],
  },
];

for (let i = 0; i < projectsCard.length; i++) {
  let project = document.createElement("div"),
    image = document.createElement("div"),
    img = document.createElement("img"),
    a = document.createElement("a");

  projectParent.appendChild(project);
  project.classList.add("project", "opacity");
  // Image
  project.appendChild(image);
  image.classList.add("image");
  image.appendChild(img);
  img.src = projectsCard[i].img;
  img.alt = projectsCard[i].h4;
  image.appendChild(a);
  a.href = projectsCard[i].link;
  a.textContent = "visit";
  a.target = "_blank";
  a.setAttribute("rel", "noopener");

  // Info

  let info = document.createElement("div"),
    h4 = document.createElement("h4"),
    details = document.createElement("div"),
    title = document.createElement("div"),
    h5 = document.createElement("h5"),
    info_i = document.createElement("i"),
    slow = document.createElement("div"),
    p = document.createElement("p");

  project.appendChild(info);
  info.classList.add("info");
  info.appendChild(h4);
  h4.textContent = projectsCard[i].h4;
  info.appendChild(details);
  details.classList.add("details");
  details.appendChild(title);
  title.classList.add("title");
  title.appendChild(h5);
  h5.textContent = "Why I Made This Site";
  title.appendChild(info_i);
  info_i.className = "fas fa-arrow-alt-circle-right";
  details.appendChild(slow);
  slow.classList.add("slow");
  slow.appendChild(p);
  p.innerHTML = `<strong>${projectsCard[i].infoStrong}</strong>
                <br/>
                ${projectsCard[i].text_1}
                <br/>
                <br/>
                ${projectsCard[i].text_2}`;

  // Languages

  let lang = document.createElement("div");

  info.appendChild(lang);
  lang.classList.add("lang");
  lang.innerHTML = `<div class='title'>
    <h5>Languages Used</h5>
    <i class='fas fa-arrow-alt-circle-right'></i>
  </div>
  <div class="slow near">
      <div>
          <strong>${projectsCard[i].langStrong_1}</strong>
            <ul>
                ${getLi(projectsCard[i].items_1).innerHTML}
            </ul>
      </div>
      <div>
          <strong>${projectsCard[i].langStrong_2}</strong>
            <ul>
                ${getLi(projectsCard[i].items_2).innerHTML}
            </ul>
        </div>
  </div>`;
}

function getLi(...arr) {
  let ul = document.createElement("ul");
  for (let x = 0; x < arr[0].length; x++) {
    let li = document.createElement("li");
    ul.appendChild(li);
    li.textContent = arr[0][x];
  }
  return ul;
}

// End Projects
