const projectsData = [
  {
    title: 'Concierge',
    desc: 'A website to let you book a ticket to any number of events. You can create the event in question, or book the dates you’d like to go.',
    langs: ['Ruby on rails', 'React', 'Redux'],
    imgCard: "url('./images/projects/concierge-card.png')",
    imgDesk: 'images/projects/concierge-desk.png',
    imgPopup: 'images/projects/concierge-mob.png',
    live: 'https://concierge-jtz.netlify.app/',
    source: 'https://github.com/qwibbler/Concierge-Front-end',
  },
  {
    title: 'TV Shows Catalogue',
    desc: 'This is a catalog of all TV Shows culled from the free API TV Maze, where you can like and comment on all your favorite shows.',
    langs: ['HTML', 'CSS', 'Javascript', 'Webpack'],
    imgCard: "url('./images/projects/tv-card.png')",
    imgDesk: 'images/projects/tv-desk.png',
    imgPopup: 'images/projects/tv-mob.png',
    live: 'https://qwibbler-tv-catalogue.netlify.app/',
    source: 'https://github.com/qwibbler/Capstone-Js-and-Networking',
  },
  {
    title: 'EconoMe',
    desc: 'A budgeting app, where you can put in your daily expenditure, sort it into categories, and then see the breakdown of the expenditures per category.',
    langs: ['Ruby', 'Rails'],
    imgCard: "url('./images/projects/econome-card.png')",
    imgDesk: 'images/projects/econome-desk.png',
    imgPopup: 'images/projects/econome-mob.png',
    live: 'https://econo-me.herokuapp.com/',
    source: 'https://github.com/qwibbler/EconoMe',
  },
  {
    title: 'To Do List',
    desc: 'Create your own personal list of all the things you have yet to do.',
    langs: ['HTML', 'CSS', 'Javascript'],
    imgCard: 'url("./images/projects/todo-card.png")',
    imgDesk: 'images/projects/todo-desk.png',
    imgPopup: 'images/projects/todo-mob.png',
    live: 'https://qwibbler.github.io/todo-list/dist/',
    source: 'https://github.com/qwibbler/todo-list',
  },
  {
    title: 'Leaderboard',
    desc: 'This is a website showing all the top players in a game.',
    langs: ['HTML', 'CSS', 'Javascript', 'Webpack'],
    imgCard: 'url("./images/projects/leaderboard-card.png")',
    imgDesk: './images/projects/leaderboard-desk.png',
    imgPopup: './images/projects/leaderboard-mob.png',
    live: 'https://qwibbler.github.io/leaderboard/',
    source: 'https://github.com/qwibbler/leaderboard',
  },
  {
    title: 'Iqbal Day Poetry Festival',
    desc: "This is a demo website for a poetry festival held in honor of Pakistan's national poet, a man of deep thought and beautiful verse.",
    langs: ['Html', 'Css', 'Javascript'],
    imgCard: 'url("./images/projects/iqbal-day-card.png")',
    imgDesk: 'images/projects/iqbal-day-desk.png',
    imgPopup: 'images/projects/iqbal-day-mob.png',
    live: 'https://qwibbler.github.io/Capstone-Portal/',
    source: 'https://github.com/qwibbler/Capstone-Portal',
  },
];

// Intersection Observer threshold array
const buildThreshold = (numSteps) => {
  let thresholds = [0];

  for (let i = 1.0; i <= numSteps; i++) {
    let ratio = i / numSteps;
    thresholds.push(ratio);
  }
  return thresholds;
};

const openCurtains = (splashSpace, curtains) => {
  splashSpace.target.style.zIndex = 100;

  for (let i = 0; i < 2; i += 1) {
    curtains[i].style.width = `${(splashSpace.intersectionRatio / 2) * 100}%`;
  }

  $('.plaque').css('opacity', `${splashSpace.intersectionRatio * 2}`);

  const opacity = splashSpace.intersectionRatio * 2;
  splashSpace.target.style.opacity = opacity;
  $('.bg-dark').css('opacity', `${opacity}`);
  return;
};

const splashPage = () => {
  const curtains = $('.curtain');
  const splashPage = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          openCurtains(entry, curtains);
          return;
        }
        openCurtains(entry, curtains);
      });
    },
    {
      threshold: buildThreshold(30),
    },
  );
  $('.splash-space').each((i, ele) => splashPage.observe(ele));
};

// Fix heading on top of page
const headingObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    const heading = entry.target.querySelector('.heading');
    if (entry.isIntersecting) {
      heading.classList.add('page-visible');
      return;
    }
    heading.classList.remove('page-visible');
  });
});
$('.page').each((i, ele) => headingObserver.observe(ele));

// langs: ['Ruby on rails', 'React', 'Redux'],
// imgCard: "url('./images/projects/concierge-card.png')",
// imgDesk: 'images/projects/concierge-desk.png',
// imgPopup: 'images/projects/concierge-mob.png',
// live: 'https://concierge-jtz.netlify.app/',
// source: 'https://github.com/qwibbler/Concierge-Front-end',

const projectTemplate = (project, orientation) => {
  return `
    <div class="project-space">
      <div class="project-fixed ${orientation}">
        <div class="project-card">
          <div class="card-content">
            <img src="images/project_img/Gmail.png" alt="projimg">
            <h4>${project.title}</h4>
            <p>${project.desc}</p>
            <ul class="card-ul">
              <li class="card-li">JavaScript</li>
              <li class="card-li">Ruby</li>
              <li class="card-li">Html</li>
              <li class="card-li">css</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  `;
};

const foldedOridomi = () => {
  return $('.project-card').oriDomi({
    // vPanels: [50, 50], // number of panels when folding left or right
    hPanels: 10, // number of panels when folding top or bottom
    speed: 0, // folding duration in ms
    ripple: 0, // ripple effect when animating
    shadingIntensity: 1, // lessen the shading effect
    perspective: 400, // smaller values exaggerate 3D distortion
    maxAngle: 85, // keep the user's folds within a range of -40 to 40 degrees
    shading: 'soft', // change the shading type
  });
};

const projectEntrances = () => {
  const $folded = foldedOridomi();

  const projectEntry = new IntersectionObserver(
    (entries) => {
      // Entries is always an array
      entries.forEach((entry) => {
        const projectCard = entry.target.querySelector('.project-fixed');
        if (entry.isIntersecting) {
          projectCard.classList.add('folded');
          if (projectCard.classList.contains('left')) {
            projectCard.style.left = `${150 - entry.intersectionRatio * 100}%`;
            projectCard.style.transform = `translateX(-50%)`;
          } else {
            projectCard.style.right = `${150 - entry.intersectionRatio * 100}%`;
            projectCard.style.transform = `translateX(50%)`;
          }
          $folded.oriDomi(
            'accordion',
            (1 - entry.intersectionRatio) * 85,
            'bottom',
          );
          return;
        } else {
          projectCard.classList.remove('folded');
        }
      });
    },
    {
      threshold: buildThreshold(800),
    },
  );
  $('.project-space').each((i, ele) => projectEntry.observe(ele));
};

const createAllProjects = () => {
  let projectHTML = $('.projects').html();
  for (let i = 0; i < projectsData.length; i += 1) {
    if (i % 2 === 0) {
      projectHTML += projectTemplate(projectsData[i], 'left');
    } else {
      projectHTML += projectTemplate(projectsData[i], 'right');
    }
  }
  $('.projects').html(projectHTML);

  projectEntrances();
};
window.addEventListener(
  'load',
  () => {
    splashPage();
    createAllProjects();
  },
  false,
);
