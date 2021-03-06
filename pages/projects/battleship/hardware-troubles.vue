<template>
  <div>
    <h2 class="title">Hardware Troubleshooting</h2>

    <p>
      Debugging hardware & drivers are two of my personal least-favorite activities.
      Unfortunately for me, this project has required a decent amount of that. So here’s some details about the hardware and the fun I’ve had with it.
    </p>

    <p>
      As stated in the first couple posts, I’m working with a dual-touchscreen laptop.
      The laptop has no physical keyboard nor touchpad.
      The model is the Acer Iconia 6120 (the laptop, not the tablet series), also known by the model number PAU30.
    </p>

    <img style="max-height:300px;margin:0 auto 1em;display:block;" src="https://lh6.googleusercontent.com/K0KxivIfIFl5JNNOlr0C8ToJ8oeyhrdqFkI34aOLoq09GSx2wBePAx6NreXfwwJJzFuHY6tSzyJfa4vVubyRn6FZEEfRsZzGNdE3aVTZER9_3m_AFySkyIrWb0SJeu5rEiq9ysab" >

    <p>
      The hinge has a button on either side.
      On the right side is the power button, which requires you to hold it for a half a second before it will turn on, likely to prevent accidental presses in a backpack or similar.
      On the left side is the keyboard button, which will bring up a virtual keyboard on Windows 7.
      For driver fun, the keyboard button is the power button on Linux at a software level.
    </p>

    <p>
      The BIOS has a built-in virtual keyboard that stays up until you boot into an operating system (including that it will stay up for the Windows pre-boot recovery menu).
    </p>

    <img style="max-height:300px;margin:0 auto 1em;display:block;" src="https://lh6.googleusercontent.com/gLC9kdhpuEvxTbM1WJU7XWKHPt3DK5OnoQhVs4gwllVlYCaH97ZN-wAf_gjiD7iRnFKKf5Rn4Z9Mpwm9hA8MBhq58x8l8AyaX2O4kTX-m5uiTR6c8XV21SlaUjdEW-Hq0IRGLwV0" >

    <p>
      The CPU is ok by 2018 standards, but a too slow for moderately intensive usage.
      From a fresh Windows 7 install the decrease in performance as all the Windows updates install was very noticeable.
      When drawing in Krita I was noticing the lines break, although I’ve see in some reviews since then that using a stylus can sometimes confuse it.
    </p>

    <img style="max-height:300px;margin:0 auto;display:block;" src="https://lh6.googleusercontent.com/gLC9kdhpuEvxTbM1WJU7XWKHPt3DK5OnoQhVs4gwllVlYCaH97ZN-wAf_gjiD7iRnFKKf5Rn4Z9Mpwm9hA8MBhq58x8l8AyaX2O4kTX-m5uiTR6c8XV21SlaUjdEW-Hq0IRGLwV0" >
    <p style="text-align:center;"><small>Chrome is open, but the video was paused the entire time I was drawing the “Hello”</small></p>

    <img style="max-height:300px;margin:0 auto;display:block;" src="https://lh4.googleusercontent.com/itWAEDLGz1Cc2DCNnBVsDAz--QYttrXX81OnvRLr7IzWe038KsT73CvF3eCcs98AOEfiTlDUHhcmAgH0eTsWtIwVwdNiakS4QKiKTG5G9sKzhA7tBj7kEj968zjF9rLvlSyl9_SB" >
    <p style="text-align:center;"><small>This time the video was playing while I was writing</small></p>

    <p>
      Running anything other than Windows 7 was also an experience.
      Under Windows 10 with the latest touchscreen driver the second (lower) screen would get mapped to the upper screen, which was extra annoying as the second screen’s bottom is actually its top, so all touches are reversed which also makes it doubly unusable.
    </p>

    <p>
      On Linux the situation was far worse – I couldn’t get the second screen to turn on.
      The screen would appear correctly in the settings menu, but lshw could only see a single VGA adapter despite having two screens show in <code>/dev</code>.
      The touch worked even if the display showed nothing, which also indicated that the screen was working for the most part.
      I even tried Ubuntu LTS 12.04 to see if there had been a regression since support was added to the kernel to no avail.
      Due to lack of knowledge in configuring Wayland (and since lshw didn’t work under Wayland), I had to revert to X11.
    </p>

    <p>
      At this point I was forced to get some help and Dr. Egert (my mentor for the project) was able to find the discrepancy of the laptop having two model numbers, and that was able to lead him to find that you need to press the keyboard button after the lock screen has loaded to get the second screen to turn on.
      From further testing this appears like it might be a hardware thing and is further confusing since as mentioned, the keyboard button acts as the power button on Linux (and the power button does nothing in software but is still the hardware off if you hold it).
      This quirk is slightly extra annoying in that since it’s also the power button when you press it you have to then quickly cancel the shutdown.
    </p>

    <p>
      With the second screen able to be turned on, I was now able to fix the calibration.
      I first went into the settings and moved the bottom screen to the bottom instead of the right, and also rotated it 180deg so that it was facing the correct direction.
      Using the Arch Wiki’s <a href="https://wiki.archlinux.org/index.php/Calibrating_Touchscreen" target="_blank" rel="noopener">Touch Calibration</a> and <a href="https://wiki.archlinux.org/index.php/Touchscreen" target="_blank" rel="noopener">Touchscreen</a> pages, I was able to debug the remaining bit.
      After messing up and being lucky that it didn’t get saved, I learned to not follow all the instructions on the page for my use case.
      I was able to use <code>xrandr</code> and <code>xinput list</code> (via a USB keyboard) to get the order of the monitors and the touch inputs, and then use the <code>xinput --map-to-output</code> commands to map the second touchscreen to the second display.
      I also had to reverse the calibration matrix (since I don’t want to scale I didn’t have to do the math).
      After a reboot the results were slightly different (I think it auto-corrected the <code>-0.5</code>) and ended up with a matrix of <code>-1 0 1 -1 -0.5 1 0 0 1</code>.
      Interestingly, the second touchscreen input gets registered first in xinput, but the label’s number showed that it was registered to the second screen so I was able to get it mapped correctly.
      Additionally, the second laptop I did didn’t need the matrix, only the mapping, which I think might be caused by configuring the screen in Wayland before I switched to X11, but further testing is needed.
      It just makes for more confusion and fun trying to make everything work.
    </p>

    <img style="max-height:300px;margin:0 auto 1em;display:block;" src="https://lh6.googleusercontent.com/66s0HHNyD7Q1WDUAI0T9H958DhewppQhh_kJRab9e-iX7LV9coqFLEK7nZjlALBaSfZJDnUGTU-xa0o86X9UjtUVAvocClfseBt5zHJDLEjSXDKH3ezez2cOHzBS4pER5Raivf5R" >

    <p>
      Being able to run Linux has dramatically helped the performance of these devices that clearly show their age.
      After rebooting I've found that the input calibrations have revertedand I probably need to edit the xinput configs.
      However, even if I do, being able to run Linux (Fedora in this case) has reduce the lag in using these devices to a point where it’s a noticeable better experience, and it was well worth the effort.
    </p>

  </div>
</template>
