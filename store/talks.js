export const state = () => ({
  list: [
    {
      name: 'Intro to The Cloud & Cloud Security',
      url: '/talks/ritlug-intro-cloud-cloud-security',
      subtitle: 'Talk @ RITlug',
      description: 'Learn about the layers that make up "The Cloud" & the security concerns at each of those layers',
      tags: ['Cloud', 'RITlug']
    },
    {
      name: 'Trust in the Internet Age',
      url: '/talks/stv-internet-trust',
      subtitle: 'Talk @ STV',
      description: 'Group presentation for Science, Technology, & Values on how the internet is build on trust and the complications that can arise from violation of that social construct',
      tags: []
    },
    {
      name: 'Overview of Distributed Computing',
      url: '/talks/ritlug-overview-distributed-computing',
      subtitle: 'Talk @ RITlug',
      description: 'An overview of distributed computing, such as virtualization and containers, how we use them, and why',
      tags: ['Cloud', 'RITlug']
    },
    {
      name: 'Building Your Own Self-Hosted Infrastructure (Using Linux)',
      url: '/talks/ritlug-self-hosted',
      subtitle: 'Workshop @ RITlug',
      description: 'Workshop creating a personal server that you can easily deploy yourself',
      tags: ['Cloud', 'RITlug']
    }
  ].map((item) => {
    const listitem = item
    listitem.category = 'Talks & Workshops'
    listitem.icon = 'fa-desktop'
    return listitem
  })
})
