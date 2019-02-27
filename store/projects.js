const createStore = {
  state: {
    list: [
      {
        name: '[NYI] Battleship',
        url: '/',
        description: 'UX study, experience & proof of concept in synchonizing clients',
        tags: ['design-ux', 'web', 'home-hero'],
        icon: 'fa-code',
      },
      {
        name: 'Short-Link',
        url: '/projects/short-link',
        description: 'Node.js & React URL Shortener',
        tags: ['web', 'home-hero'],
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
        tags: ['home-more'],
        icon: 'fa-laptop',
      },
      {
        name: '[NYI] Bullet Journal',
        badge: 'Prototype',
        url: '/',
        description: 'Bullet journal using Material Design Lite and Vue.js',
        tags: ['web'],
        icon: 'fa-code',
      },
      {
        name: '[NYI] Graphic Sandbox',
        url: '/',
        description: 'Coming soon',
        tags: ['home-design-ux'],
        icon: 'fa-question-circle',
      },
      {
        name: '[NYI] Kaleidoscope',
        url: '/',
        description: 'Coming soon',
        tags: ['home-design-ux'],
        icon: 'fa-question-circle',
      },
      {
        name: '[NYI] Bokeh?',
        url: '/',
        description: 'Coming soon',
        tags: ['home-design-ux'],
        icon: 'fa-question-circle',
      },
      {
        name: 'Portfolio Site',
        url: '/projects/portfolio-site',
        description: 'Here! A Single-Page Application (SPA) written using Nuxt.js (Vue.js\'s Next.js equivalent) and Bulma',
        tags: ['home-web'],
        icon: 'fa-code',
      },
      {
        name: 'StartPage',
        url: '/projects/startpage',
        description: 'A simple page to read the news and weather, using the geolocation API & local storage caching.',
        tags: ['home-web'],
        icon: 'fa-code',
      },
    ].filter(item => !item.disabled).map(item => {
      const listitem = item;
      listitem.category = 'projects';
      return listitem;
    })
  }
}

export default createStore;
