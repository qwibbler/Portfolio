const projects = [
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

const toggle_curtains = () => {
  const window_height = window.innerHeight;
  const scroll = window_height - window.pageYOffset
  const curtains = $('.curtain');

  if (window.pageYOffset < window_height) {
    $('.splash-page').css('z-index', '100');
    for (let i = 0; i < curtains.length; i += 1) {
      curtains[i].style.width = `${((scroll / (2 * window_height)) * 100)}%`;
    }
    $('.plaque').css('opacity', `${scroll / window_height}`);
    return;
  }
  $('.splash-page').css('z-index', '-1');
};

window.addEventListener('scroll', () => {
  // document.body.style.setProperty('--scroll', window.pageYOffset / (document.body.offsetHeight - window.innerHeight));
  // document.body.style.setProperty('--pos', window.pageYOffset);
  toggle_curtains();
}, false);
// $(
// )
