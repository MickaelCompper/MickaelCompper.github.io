"use strict";

    const url = ['./assets/Algerie.jpg', './assets/avion.jpg', './assets/boussole.png', './assets/carte.png'];
    combineImages(url);

    async function combineImages(imageUrls) {
        // create a canvas element and insert it in the footer
        var canvas = document.createElement('canvas');
        
        // get the canvas context
        var ctx = canvas.getContext('2d');
        
        // loop through the image URLs
        imageUrls.forEach(function(url) {
            // create a new image element
            var img = new Image();
            
            // set the image source to the URL
          img.src = url;
          
          // wait for the image to load
          img.onload = function() {
            // generate random x and y positions for the image
            var x = Math.floor(Math.random() * (canvas.width - img.width));
            var y = Math.floor(Math.random() * (canvas.height - img.height));
            
            // draw the image on the canvas
            ctx.drawImage(img, x, y);
          }
        });
        document.querySelector('footer div').appendChild(canvas);
      }
      