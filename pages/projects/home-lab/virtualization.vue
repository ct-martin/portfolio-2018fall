<template>
  <div>
    <h2 class="title">Virtualization</h2>

    <p>
      I'm using <a href="https://www.proxmox.com/en/proxmox-ve" target="_blank">Proxmox</a> as my hypervisor, based on KVM & Debian.
      While less popular in enterprise, it's fairly popular for home labs and for SMB-grade infrastructure it works just fine.
      Additionally, it's based around open-source software and doesn't require licensing fees.
    </p>

    <p>
      Network segments are created using Open vSwitch.
      The host has an IP on the LAN & SRV segments for now, but will be moved to just the SRV (proxied) segment soon.
      There are also DMZ & LAB segments that can be accessed one-way from the LAN but are otherwise isolated.
      Additionally, the LAN & WAN segments each have a physical NIC attached to them to allow communication with other devices, including the internet.
      The host is not directly connected to the internet.
    </p>

  </div>
</template>
