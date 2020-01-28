export const state = () => ({
  list: [
    {
      name: 'Vis',
      url: 'https://vis.ctmartin.me/',
      description: 'Data visualizations of pancakes, life, and about half a million museum objects',
      featured: true,
      image: '/img/projects/met-view.jpg',
      tags: ['Data', 'Web'],
      icon: 'fa-area-chart'
    },
    {
      name: 'Portfolio Site',
      url: '/projects/portfolio-site',
      description: 'Here! A Single-Page Application (SPA) using Bulma, GitLab CI, Nuxt.js, SASS, & TypeScript',
      featured: true,
      tags: ['Web'],
      icon: 'fa-code'
    },
    {
      name: 'Short-Link',
      url: '/projects/short-link',
      description: 'Node.js & React URL Shortener with analytics tracking and charts',
      tags: ['Data', 'Web'],
      icon: 'fa-code'
    },
    {
      name: 'Battleship',
      url: '/projects/battleship',
      description: 'UX study, experience & proof of concept in synchonizing clients',
      tags: ['Design/UX', 'Web'],
      icon: 'fa-code'
    },
    {
      name: 'More Sites',
      url: 'https://ctmartin.me/#hobbies',
      description: 'Static Sites deployed w/ CI and keeping things simple but powerful',
      tags: ['Web'],
      icon: 'fa-code'
    },
    {
      name: 'Home Lab',
      url: '/projects/home-lab',
      description: 'SMB-grade infra for testing & integration of enterprise technologies',
      tags: ['Cloud'],
      icon: 'fa-server'
    },
    /*{
      name: 'TigerOS',
      url: '/projects/tigeros',
      description: 'RITlug\'s Linux distro for RIT',
      tags: ['Linux'],
      icon: 'fa-laptop'
    },*/
    /* {
      name: '[NYI] Bullet Journal',
      badge: 'Prototype',
      url: '/',
      description: 'Bullet journal using Material Design Lite and Vue.js',
      tags: ['web'],
      icon: 'fa-code',
    }, */
    /*{
      name: 'Kaleidoscope',
      url: '/projects/kaleidoscope',
      description: 'An interactive kaleidoscope you can draw on, with particles.',
      tags: ['Design/UX'],
      icon: 'fa-mouse-pointer'
    },
    {
      name: 'Arduino Macro Buttons',
      url: '/projects/arduino-macros',
      description: 'Taking complex keyboard shortcuts to just a button press',
      tags: ['Design/UX'],
      icon: 'fa-keyboard-o'
    },
    {
      name: 'Web Audio Visualizer',
      url: '/projects/audio-viz',
      description: 'Waveform/frequency viewer with filters',
      tags: ['Design/UX'],
      icon: 'fa-music'
    },*/
    /*{
      name: 'StartPage',
      url: '/projects/startpage',
      description: 'A simple page to read the news and weather, using the geolocation API & local storage caching.',
      tags: ['web'],
      icon: 'fa-code'
    }*/
  ].filter(item => !item.disabled).map((item) => {
    const listitem = item
    listitem.category = 'Projects'
    return listitem
  })
})
