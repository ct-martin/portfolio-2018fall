export const state = () => ({
  list: [
    {
      name: 'Styling for Print & Accessible Code',
      url: 'https://blog.ctmartin.me/2019/11/print-accessible-code/',
      description: 'Coding my blog to be printable and have accessible syntax highlighting.',
      tags: ['Web']
    },
    /*{
      name: 'Mobile Blogging',
      url: 'https://blog.ctmartin.me/2019/10/mobile-blogging/',
      description: 'Blogging on Android using Git & Termux.',
      tags: ['Web']
    },*/
    {
      name: 'Hugo',
      url: 'https://blog.ctmartin.me/2019/10/hugo/',
      description: 'This summer I converted my blog to use Hugo, a static site generator, and GitLab Pages for a simple, lightning-fast, and secure writing experience.',
      tags: ['Cloud', 'Web']
    },
    {
      name: 'Bundling JS with Webpack & Babel',
      url: 'https://blog.ctmartin.me/2019/02/bundling-js-with-webpack-babel/',
      description: 'Retroactively adding Webpack & Babel to a Node.js project.',
      tags: ['Web']
    },
    {
      name: 'CI/CD with GitLab',
      url: 'https://blog.ctmartin.me/2019/02/ci-cd-with-gitlab/',
      description: 'Setting up a staging environment, automated testing (inc. security & compliance tests), and automated deployment.',
      tags: ['Cloud', 'Web']
    },
    /*{
      name: 'The apartment life of securing data',
      url: 'https://blog.ctmartin.me/2019/01/the-apartment-life-of-securing-data/',
      description: 'Having enough data to want to secure it, but no permanent, secure location makes for interesting data management challenges.',
      tags: ['Cloud']
    },
    {
      name: 'Problems of running production software at small scale',
      url: 'https://blog.ctmartin.me/2019/01/problems-of-running-production-software-at-small-scale/',
      description: 'Running the same technology that is used for production systems is not always a viable option and why this is a challenge, particularly as a student.',
      tags: ['Cloud']
    },*/
    {
      name: 'Secure cookies behind multiple proxies',
      url: 'https://blog.ctmartin.me/2019/01/secure-cookies-behind-multiple-proxies/',
      description: 'What I learned while implementing Secure cookies on a project.',
      tags: ['Cloud']
    },
    /*{
      name: 'Identifying how broken the Matrix bridge is',
      url: 'https://blog.ctmartin.me/2018/04/identifying-how-broken-the-matrix-bridge-is/',
      description: 'What I’ve learned using Matrix daily for several months and as a result of multiple failures of the Matrix<->Freenode bridge early 2018',
      tags: ['FOSS']
    },*/
    /*{
      name: 'The importance of good docs',
      url: 'https://blog.ctmartin.me/2018/04/the-importance-of-good-docs/',
      description: 'This post has come about from a couple really bad experiences with documentation, and what I found frustrating in those experiences.',
      tags: ['FOSS']
    },*/
    {
      name: 'Asking to use FOSS or an Open Standard',
      url: 'https://blog.ctmartin.me/2018/04/asking-to-use-foss-or-an-open-standard/',
      description: 'This article hopes to pass along personal experience I\'ve had with asking to use non-“normal” software/formats.',
      tags: ['FOSS']
    },
    {
      name: 'FOSSing Gmail',
      url: 'https://blog.ctmartin.me/2018/02/fossing-gmail/',
      description: 'Gmail\'s AI isn\'t very accessible in a FOSS-friendly way... but with a little effort, we can make it work.',
      tags: ['FOSS']
    }
  ].map((item) => {
    const listitem = item
    listitem.category = 'Articles'
    listitem.icon = 'fa-book'
    return listitem
  })
})
