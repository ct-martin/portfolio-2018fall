const createStore = {
  state: {
    list: [
      {
        name: 'Trust in the Internet Age',
        url: '/talks/stv-internet-trust',
        subtitle: 'Talk @ STV',
        description: 'Group presentation for Science, Technology, &amp; Values on how the internet is build on trust and the complications that can arise from violation of that social construct.',
        tags: ['stv', 'talk']
      },
      {
        name: 'Overview of Distributed Computing',
        url: '/talks/ritlug-overview-distributed-computing',
        subtitle: 'Talk @ RITlug',
        description: 'An overview of distributed computing, such as virtualization and containers, how we use them, and why.',
        tags: ['ritlug', 'talk', 'cloud']
      },
      {
        name: 'Building Your Own Self-Hosted Infrastructure (Using Linux)',
        url: '/talks/ritlug-self-hosted',
        subtitle: 'Workshop @ RITlug',
        description: 'In this workshop, we will be creating a personal server that you can easily deploy yourself at home on a Raspberry Pi or a VPS (the cloud).',
        tags: ['ritlug', 'workshop', 'cloud']
      },
    ].map(item => {
      const listitem = item;
      listitem.category = 'talks';
      listitem.icon = 'fa-desktop';
      return listitem;
    })
  }
}

export default createStore;
