"use strict";

document.addEventListener('DOMContentLoaded', function () {

  const $canvas = document.querySelector('canvas');
  const $limit = document.querySelector('footer div:first-child');
  const $coord = document.querySelector('footer div:last-child');
  
    $canvas.addEventListener('mousedown', function (event) {
      
      let X = event.clientX - $canvas.getBoundingClientRect().left;
      let Y = event.clientY - $canvas.getBoundingClientRect().top;
    
      $canvas.style.position = 'absolute';
      document.body.append($canvas);
    
      mouvement(event.pageX, event.pageY);
    
      function mouvement(pageX, pageY) {
        $canvas.style.left = pageX - X + 'px';
        $canvas.style.top = pageY - Y + 'px';
      }
    
      function donnees(event) {
        mouvement(event.pageX, event.pageY);
        $coord.textContent = `x: ${$canvas.style.left}; y: ${$canvas.style.top}`;
      }
    
      $limit.addEventListener('mousemove', donnees);
    
      $canvas.addEventListener('mouseup', function () {
        
        $limit.removeEventListener('mousemove', donnees);
      })
    })
  })