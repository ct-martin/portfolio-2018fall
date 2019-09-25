export const state = () => ({
  list: [
    {
      name: 'Short-Link',
      url: '/projects/short-link',
      description: 'Node.js & React URL Shortener',
      tags: ['web', 'home-hero'],
      icon: 'fa-code',
    },
    {
      name: 'Battleship',
      url: '/projects/battleship',
      description: 'UX study, experience & proof of concept in synchonizing clients',
      tags: ['design-ux', 'web', 'home-hero'],
      icon: 'fa-code',
    },
    {
      name: 'Home Lab',
      url: '/projects/home-lab',
      description: 'SMB-grade infrastructure for testing systems & integration of enterprise technologies',
      tags: ['cloud','home-hero'],
      icon: 'fa-server',
    },
    {
      name: 'TigerOS',
      url: '/projects/tigeros',
      description: 'RITlug\'s Linux distro for RIT',
      tags: ['linux'],
      icon: 'fa-laptop',
    },
    /*{
      name: '[NYI] Bullet Journal',
      badge: 'Prototype',
      url: '/',
      description: 'Bullet journal using Material Design Lite and Vue.js',
      tags: ['web'],
      icon: 'fa-code',
    },*/
    {
      name: 'Kaleidoscope',
      url: '/projects/kaleidoscope',
      description: 'An interactive kaleidoscope you can draw on, with particles.',
      tags: ['design-ux'],
      icon: 'fa-mouse-pointer',
    },
    {
      name: 'Arduino Macro Buttons',
      url: '/projects/arduino-macros',
      description: 'Taking complex keyboard shortcuts to just a button press',
      tags: ['design-ux'],
      icon: 'fa-keyboard-o',
    },
    {
      name: 'Web Audio Visualizer',
      url: '/projects/audio-viz',
      description: 'Waveform/frequency viewer with filters',
      tags: ['design-ux'],
      icon: 'fa-music',
    },
    {
      name: 'Portfolio Site',
      url: '/projects/portfolio-site',
      description: 'Here! A Single-Page Application (SPA) written using Nuxt.js (Vue.js\'s Next.js equivalent) and Bulma',
      tags: ['web'],
      icon: 'fa-code',
    },
    {
      name: 'StartPage',
      url: '/projects/startpage',
      description: 'A simple page to read the news and weather, using the geolocation API & local storage caching.',
      tags: ['web'],
      icon: 'fa-code',
    },
  ].filter(item => !item.disabled).map(item => {
    const listitem = item;
    listitem.category = 'projects';
    return listitem;
  })
});