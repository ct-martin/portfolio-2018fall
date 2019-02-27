<template>
  <div>
    <h2 class="title">NAS (Network Storage)</h2>

    <p>
      I'm using <a href="https://www.freenas.org/" target="_blank">FreeNAS</a> for my NAS.
      <a href="https://www.freenas.org/blog/yes-you-can-virtualize-freenas/" target="_blank">FreeNAS can be virtualized</a>, and I'm following the requirements to do so, including a hardware host bus adapter over PCIe passthrough for the disks.
    </p>

    <p>
      The disks are in RAIDZ1 (ZFS's equivalent of RAID5) and the volume is encrypted.
      There is 4TB of usable space available.
      Access is done over SMB since I can't get NFS working and I have a couple Windows devices.
      There is also a dataset for Proxmox to host LXC containers that have access to private data, such as Nextcloud.
      This dataset is on the encrypted volume for security.
      The encrypted volume does not self-decrypt at boot due to my server not having a fixed, secure location.
      This creates some <a href="https://blog.ctmartin.me/2019/01/the-apartment-life-of-securing-data/" target="_blank">interesting problems</a>, but it's worth it in my opinion.
    </p>

  </div>
</template>
