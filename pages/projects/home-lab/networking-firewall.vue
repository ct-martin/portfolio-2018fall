<template>
  <div>
    <h2 class="title">Networking &amp; Firewall</h2>

    <p>
      I'm using <a href="https://www.pfsense.org/" target="_blank" rel="noopener">pfSense</a> as a router.
      pfSense has a lot of features as well as <a href="https://docs.netgate.com/pfsense/en/latest/virtualization/virtualizing-pfsense-with-proxmox.html" target="_blank" rel="noopener">official documentation for running on Proxmox</a>.
    </p>

    <p>pfSense gives me a lot of features:</p>
    <ul>
      <li>Internal DNS &amp; DHCP</li>
      <li>DNSSEC &amp; DNS over TLS</li>
      <li>Blacklisting of domains &amp; IPs</li>
      <li>Certificate Management with ACME (Let's Encrypt) integration</li>
      <li>Firewall rules for accessing other network segments</li>
      <li>Suricata NIDS (with Snort rules)</li>
      <li>HAProxy for controlled access of certain servers</li>
      <li>Traffic statistics</li>
    </ul>

    <h3>Intranet</h3>
    <p>
      Static DHCP leases are automatically registered in DNS.
      I also records pointing to the router with an internal domain for proxying to local servers using HAProxy.
      HAProxy is integrated with the ACME DNS challenge to get certificates and proxy select devices to servers with access to private data.
    </p>

    <h3 class="">Security</h3>
    <p>
      I go between <a href="https://1.1.1.1/" target="_blank" rel="noopener">Cloudflare's 1.1.1.1</a> and <a href="https://quad9.net/" target="_blank" rel="noopener">Quad9's</a> DNS servers.
      I like Cloudflare's privacy features, but Quad9 helps block malicious domains.
      Both support DNSSEC &amp; DNS over TLS, which help ensure DNS integrity.
    </p>

    <p>
      For security I use a variety of IP &amp; DNS blacklists.
      The main IP blacklists are from SpamHaus and most of the DNS blacklists are link to by the <a href="https://github.com/pi-hole/pi-hole/" target="_blank" rel="noopener">Pi-hole</a> project.
      Suricata runs Emerging Threats &amp; Snort rules.
      Together, these measures can block a significant variety of attacks.
    </p>

    <p>
      The network is divided into a number of segments.
      The SRV segment is for servers and is soon to be the only one with access to private data.
      The SRV segment can only be access by going through HAProxy.
      The LAN segment is for devices and gets controlled access to other segments.
      A Wi-Fi access point is also on the LAN segment.
      The DMZ &amp; LAB segments are isolated for testing things in.
    </p>

  </div>
</template>
