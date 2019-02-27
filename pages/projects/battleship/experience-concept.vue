<template>
  <div>
    <h2 class="title">Introduction</h2>

    <p>
      As previously discussed, I’m building an experience surrounding the dual-touchscreen laptops I have.
      The chosen experience is Battleship, due to the pre-existing similarities in the non-digital game
    </p>

    <p>
      The tech for this is somewhat straightforward.
      <a href="https://p5js.org/" target="_blank">p5.js</a> is used to draw the canvas, <a href="https://socket.io/" target="_blank">socket.io</a> is used to communicate between the client & server, <a href="https://nodejs.org/en/" target="_blank">Node.js</a> is used for the server, <a href="https://expressjs.com/" target="_blank">Express.js</a> serves the client-side code, and <a href="https://redis.io/" target="_blank">Redis</a> is used to store the states.
      Redis is sufficient for data storage since a game of Battleship is not expected to go on for a very long time like Risk or Dungeons & Dragons does.
    </p>

    <p>
      The challenge of this experience is making the parts communicate properly. This has a few sub-parts:
    </p>

    <ol>
      <li>Have the data sent update the respective side</li>
      <li>Synchronize the multiple clients of the same user</li>
      <li>Synchronize the two players</li>
    </ol>

    <p>
      Making this happen is surprisingly annoying, but that’ll be another blog post.
    </p>

    <p>
      This experience is somewhat of a proof of concept and isn’t fully polished nor coded in the best possible way, however, obviously a better experience is better.
    </p>

  </div>
</template>
