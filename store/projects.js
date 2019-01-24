const createStore = {
  state: {
    list: [
      {
        name: 'Battleship',
        url: '/',
        description: 'Experience & proof of concept in synchonizing clients',
        tags: ['design-ux', 'web', 'home-design-ux'],
        icon: 'fa-code',
      },
      {
        name: 'Short-Link',
        url: '/projects/short-link',
        description: 'Node.js & React URL Shortener',
        tags: ['web', 'home-web'],
        icon: 'fa-code',
      },
      {
        name: 'TigerOS',
        url: '/projects/tigeros',
        description: 'RITlug\'s Linux distro for RIT',
        tags: ['home-more'],
        icon: 'fa-laptop',
      },
      {
        name: 'Home Lab',
        url: '/',
        description: 'Personal SMB-grade infrastructure, inc. intranet & firewall',
        tags: ['cloud','home-cloud'],
        icon: 'fa-server',
      },
      {
        name: 'RITlug Cloud',
        disabled: true,
        url: '/',
        description: 'RITlug\'s new cloud-hosting infrastructure',
        tags: ['cloud','home-cloud'],
        icon: 'fa-server',
      },
      {
        name: 'Bullet Journal',
        disabled: true,
        badge: 'Prototype',
        url: '/',
        description: 'Bullet journal using Material Design Lite and Vue.js',
        tags: ['web'],
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
