<template>
  <article class="container">
    <nav class="breadcrumb is-large" aria-label="breadcrumbs">
      <ul>
        <li><nuxt-link to="/talks">Talks</nuxt-link></li>
        <li class="is-active has-text-weight-bold"><nuxt-link to="/talks/ritlug-self-hosted" aria-current="page">Building Your Own Self-Hosted Infrastructure (Using Linux)</nuxt-link> <p class="subtitle">(Workshop, RITlug)</p></li>
      </ul>
    </nav>

    <div class="content">
      <i>Time: About 1 hour (Linux installs are slow & typing takes time, particularly for those who haven't done this before); it helps if you have people download Debian as they enter.</i>
      <p>In this workshop, we will be creating a personal server that you can easily deploy yourself at home on a Raspberry Pi or a VPS (the cloud).</p>
      <ol>
        <li>
          Grab a copy of the <a href="https://www.debian.org/distrib/" target="_blank" rel="noopener">Debian netinstall</a>.
          Since we're at RIT, <a href="https://mirrors.rit.edu/debian/debian-cd/current/amd64/iso-cd/" target="_blank" rel="noopener">mirrors.rit.edu</a> is a good way to do this.
        </li>
        <li>
          Create a new virtual machine in VMware Workstation (since it's on the lab machines and we don't want to spend the whole time debugging a variety
          of hardware, operating systems, and virtualization software). Just do the recommended settings. By default the VM won't be given a lot of resources, but
          that's fine since it's close to a Raspberry Pi or a cheap VPS.
        </li>
        <li>
          Boot up the VM and install Debian. There are a couple screens to note. First, don't set a root password (otherwise you might not get the <code>sudo</code>
          package). Second, <code>/dev/sda</code> is the virtual disk, if prompted use it. Third, since we're at RIT, find and use mirrors.rit.edu. Fourth, in the
          software selection screen make sure <strong>ONLY</strong> "standard system utilities" is selected. We don't need a GUI, and GNOME will make your VM slow
          in addition to adding a significant amount of time to your install. Also leave "SSH Server" unchecked since I want to show a manual install of that.
        </li>
        <li>
          Log into your VM through the VMware console window and run the command <code>sudo apt install openssh-server ufw</code> and type Y (then enter) when prompted.
          OpenSSH Server allows us SSH access, and UFW gives us a simple firewall to protect the VM.
          Run the command <code>sudo ufw allow SSH</code> to allow SSH access, and then <code>sudo ufw enable</code> to turn it on.
          You can use <code>ip a</code> to get the IP address of your VM.
          At this point your VM will be about the same as a plain VPS.
        </li>
        <li>
          To make this experience more real, close the VMware window and click "run in background" when prompted.
          Now open PuTTY for an SSH terminal and log into your VM.
          OpenSSH Server also provides an SFTP server out of the box.
          You can see this by opening FileZilla, entering your VM's login information, and putting 22 as the port (or <code>sftp://</code> preceeding the VM's IP).
          SFTP is more secure than normal FTP, which transmits passwords as plaintext, so I recommend using it.
          It's <em>possible</em> to set up FTP so it doesn't do this, but SFTP is already there and you can't always count on getting a properly set up FTP server.
        </li>
        <li>
          You can do Git over SSH if you install the package using <code>sudo apt install git</code> and when using your Git client (or IDE plugin) of choice you can set
          a remote using <code>ssh://&lt;VM_IP_HERE&gt;</code>
        </li>
        <li>
          Another convenient thing you can do on a VPS is IRC.
          Since we don't want it being the only thing running, we're also going to install tmux.
          <ol>
            <li>Use <code>sudo apt install tmux weechat</code> to install tmux and WeeChat (a command-line IRC client).</li>
            <li>Use <code>tmux new -s irc</code> and then <code>weechat</code> to run WeeChat in tmux.</li>
            <li>Use <kbd>Ctrl+b</kbd> and then press <kbd>d</kbd> to put tmux in the background.</li>
            <li>Use <code>tmux attach -t irc</code> to get back to WeeChat.</li>
            <li>In WeeChat, use <code>/server add freenode chat.freenode.net</code> to add the FreeNode IRC network.</li>
            <li>In WeeChat, use <code>/connect freenode</code> to connect to the FreeNode network.</li>
            <li>In WeeChat, use <code>/join #rit-foss</code> to join the RIT FOSS channel.</li>
            <li>Say hi!</li>
            <li>You can close WeeChat with <code>/disconnect</code>, and kill tmux with <code>tmux kill-session -t irc</code></li>
          </ol>
          The WeeChat Quick Start Guide <a href="https://weechat.org/files/doc/stable/weechat_quickstart.en.html" target="_blank" rel="noopener">be found here</a>.
        </li>
        <li>
          Let's also set up a quick web server.
          <ol>
            <li>Run <code>sudo apt install apache2</code> to install Apache.</li>
            <li>Use <code>sudo adduser &lt;YOUR_USERNAME&gt; www-data</code> to let your user change files on the web server.</li>
            <li>The default directory for the web server is <code>/var/www/html</code>, <code>cd</code> into it.</li>
            <li>Delete or move the default homepage (<code>index.html</code>) using <code>rm</code> or <code>mv</code>, respectively.</li>
            <li>
              Create a simple index.html using your editor of choice. Here's an example:
              <!-- Unindented b/c the indents will appear in the <pre> blocl -->
              <pre>
  &lt;!DOCTYPE html&gt;
  &lt;html&gt;
  &lt;head&gt;
  &lt;title&gt;Simple website | YOUR NAME HERE&lt;/title&gt;
  &lt;/head&gt;
  &lt;body&gt;
  &lt;h1&gt;Hello World!&lt;/h1&gt;
  &lt;p&gt;Put something here&lt;/p&gt;
  &lt;/body&gt;
  &lt;/html&gt;
              </pre>
            </li>
            <li>Next, allow access to the web server in UFW with <code>sudo ufw allow WWW</code> ("WWW" in caps).</li>
          </ol>
          You should now be able to open a web browser, type in your VM's IP address and see your page.
        </li>
        <li>
          Finally, let's throw in PHP.
          <ol>
            <li>Install PHP with <code>sudo apt install php libapache2-mod-php</code></li>
            <li>Make your page a PHP file with <code>mv index.html index.php</code></li>
            <li>Replace <code>Hello World!</code> with <code>&lt;?php echo("Hello World (from PHP)!"); ?&gt;</code></li>
            <li>Reload your page</li>
          </ol>
          Voila!
        </li>
      </ol>

      <p><i>If you're doing this as a workshop and still have time to spare, some ideas for more are: MariaDB/MySQL, Nextcloud, GitLab/Gitea/Gogs, and Docker.</i></p>

      <p>Resources for more things you can do on your own time (on DigitalOcean, warning: may for an older version of Debian):</p>
      <ul>
        <li><a href="https://www.digitalocean.com/community/tutorials/?q=debian" target="_blank" rel="noopener">Debian Tutorials</a></li>
        <li><a href="https://www.digitalocean.com/community/tutorials/initial-server-setup-with-debian-8" target="_blank" rel="noopener">"Initial Server Setup" (SSH Keys/Debian 8)</a></li>
      </ul>
    </div>

    <a href="http://ritlug.com/announcements/2018/01/31/homelab.html" target="_blank" rel="noopener" class="button is-link is-fullwidth">RITlug Announcement Post</a>
    <div class="card" style="margin-top:1rem;">
      <div class="card-content">
        <h4 class="card-title">License</h4>
        <p>This workshop is available under <a href="https://creativecommons.org/licenses/by-sa/4.0/" target="_blank" rel="noopener">CC BY-SA 4.0</a></p>
      </div>
    </div>
  </article>
</template>
