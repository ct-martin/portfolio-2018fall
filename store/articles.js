const createStore = {
  state: {
    list: [
      {
        name: 'Secure cookies behind multiple proxies',
        url: 'https://blog.ctmartin.me/2019/01/secure-cookies-behind-multiple-proxies/',
        description: 'What I learned while implementing Secure cookies on a project.',
        tags: ['cloud', 'home-cloud']
      },
      {
        name: 'Identifying how broken the Matrix bridge is',
        url: 'https://blog.ctmartin.me/2018/04/identifying-how-broken-the-matrix-bridge-is/',
        description: 'What I’ve learned using Matrix daily for several months and as a result of multiple failures of the Matrix<->Freenode bridge early 2018',
        tags: ['foss']
      },
      {
        name: 'The importance of good docs',
        url: 'https://blog.ctmartin.me/2018/04/the-importance-of-good-docs/',
        description: 'This post has come about from a couple really bad experiences with documentation, and what I found frustrating in those experiences.',
        tags: ['foss']
      },
      {
        name: 'Asking to use FOSS or an Open Standard',
        url: 'https://blog.ctmartin.me/2018/04/asking-to-use-foss-or-an-open-standard/',
        description: 'This article hopes to pass along personal experience I\'ve had with asking to use non-“normal” software/formats.',
        tags: ['foss']
      },
      {
        name: 'FOSSing Gmail',
        url: 'https://blog.ctmartin.me/2018/02/fossing-gmail/',
        description: 'Gmail\'s AI isn\'t very accessible in a FOSS-friendly way... but with a little effort, we can make it work.',
        tags: ['foss', 'home-more']
      }
    ].map(item => {
      const listitem = item;
      listitem.category = 'article';
      listitem.icon = 'fa-book';
      return listitem;
    })
  }
}

export default createStore;
