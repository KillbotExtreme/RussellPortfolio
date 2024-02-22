function windowResized() {
    displayWidth = document.getElementById("main-container").offsetWidth;
    displayHeight = document.getElementById("main-container").offsetHeight;
    mouseObjects[0].width = displayWidth;
    mouseObjects[0].height = displayHeight;
    resizeCanvas(displayWidth - 25, displayHeight);
    percentW1 = displayWidth / 100;
    percentH1 = displayHeight / 100;
    percentW25 = percentW1 * 25;
    percentW50 = percentW1 * 50;
    for (i = 0; i < imageCombos.length ; i++) {
        imageCombos[i].displayWidth = displayWidth;
        imageCombos[i].percentW1 = percentW1;
        imageCombos[i].percentW50 = percentW50;
    }
  }

  function mouseReleased() {
    if (dist(mouseObjects[0].x, mouseObjects[0].y, mouseX, mouseY) < 12.5) {
        if (window.scrollY > 0) {
            document.body.scrollTop = document.documentElement.scrollTop = 0;
        }
        else {
            document.body.scrollTop = document.documentElement.scrollTop = 10000;
        }
        
    }
  }

  function createSegments() {
    for (let i = 0; i < segNum; i++) {
        if (i == 0) {
            segs[i] = new Segment(null, segLen, 0, i);
            segs2[i] = new Segment(null, segLen, 0, i);
            segs3[i] = new Segment(null, segLen, 0, i);
            segs4[i] = new Segment(null, segLen, 0, i);
        }
        else {
            segs[i] = new Segment(segs[i - 1], segLen, 0, i);
            segs2[i] = new Segment(segs2[i - 1], segLen, 0, i);
            segs3[i] = new Segment(segs3[i - 1], segLen, 0, i);
            segs4[i] = new Segment(segs4[i - 1], segLen, 0, i);
        }
        segs[i].calcB();
        segs2[i].calcB();
        segs3[i].calcB();
        segs4[i].calcB();
    }
  }

//   function updateSegments() {
//     for (i = 0; i < segs.length; i++) {
//         segs[i].update();
//         segs2[i].update();
//         segs3[i].update();
//         segs4[i].update();
//     }

    
//     dX = segs[segs.length-1].b[0];
//     dY = segs[segs.length-1].b[1] - window.scrollY;
//     dX2 = displayWidth - segs2[segs.length-1].b[0];
//     dY2 = segs2[segs.length-1].b[1] - window.scrollY;
//     dX3 = segs3[segs.length-1].b[0] + 20;
//     dY3 = segs3[segs.length-1].b[1] - 1250 - window.scrollY;;
//     dX4 = displayWidth - segs4[segs.length-1].b[0];
//     dY4 = segs4[segs.length-1].b[1] - 1250 - window.scrollY;;
//     for (i = 0; i < segs.length; i++) {
//         segs[i].b[0] -= dX;
//         segs[i].b[1] -= dY;
//         segs[i].a[0] -= dX;
//         segs[i].a[1] -= dY;
//         segs[i].draw();

//         segs2[i].b[0] += dX2;
//         segs2[i].b[1] -= dY2;
//         segs2[i].a[0] += dX2;
//         segs2[i].a[1] -= dY2;
//         segs2[i].draw();

//         segs3[i].b[0] -= dX3;
//         segs3[i].b[1] -= dY3;
//         segs3[i].a[0] -= dX3;
//         segs3[i].a[1] -= dY3;
//         segs3[i].draw();

//         segs4[i].b[0] += dX4;
//         segs4[i].b[1] -= dY4;
//         segs4[i].a[0] += dX4;
//         segs4[i].a[1] -= dY4;
//         segs4[i].draw();
//     }
//   }