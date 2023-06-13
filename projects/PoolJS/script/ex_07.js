"use strict";

document.addEventListener('DOMContentLoaded', function () {
  const buttons = this.querySelectorAll('button');
  const pause = buttons[0];
  const stop = buttons[1];
  const mute = buttons[2];

  const triangle = {
    music: '../triangle.ogg',
    statusMusic: true,
    canvas: null,
    ctx: null
  };
  const music = new Audio(triangle.music);

  triangle.canvas = document.querySelector('canvas');
  triangle.ctx = triangle.canvas.getContext('2d');
  triangle.ctx.beginPath();
  triangle.ctx.lineWidth = 1;
  triangle.ctx.strokeStyle = "white";
  triangle.ctx.moveTo(6, 6);
  triangle.ctx.lineTo(14, 10);
  triangle.ctx.lineTo(6, 14);
  triangle.ctx.lineTo(6, 6);
  triangle.ctx.stroke();

  triangle.canvas.addEventListener('click', function () {
    music.play();
    music.loop = true;
  });

  pause.addEventListener('click', function () {
    music.pause();
  });
  
  stop.addEventListener('click', function () {
    music.pause();
    music.currentTime = 0;
  });

  mute.addEventListener('click', function () {
    if (triangle.statusMusic) {
      music.volume = 0;
      triangle.statusMusic = false;
    } else {
      music.volume = 1;
      triangle.statusMusic = true;
    }
  });
});