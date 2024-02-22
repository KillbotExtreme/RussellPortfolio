
let mouseObjects = [];
let imageCombos = [];
let segs = [], segs2 = [], segs3 = [], segs4 = [];
let c = 0;
let dir = 1;
let img1, img1Final;
let resize1 = 0;
let percentW1, percentW25, percentW50, percentH1, i, dX, dY, dX2, dY2, dX3, dY3, dX4, dY4;
let segNum = 25, segLen = 56;


function setup() {
    displayWidth = document.getElementById("main-container").offsetWidth;
    displayHeight = document.getElementById("main-container").offsetHeight;
    img1 = loadImage('Media/Images/match.jpg');
    percentW1 = displayWidth / 100;
    percentH1 = displayHeight / 100;
    percentW25 = percentW1 * 25;
    percentW50 = percentW1 * 50;
    myCanvas = createCanvas(displayWidth - 25, displayHeight); //Create Canvas
    myCanvas.parent("main-container");
    mouseObjects[0] = new MouseObject(100, 100, 1000, 1, 25, displayWidth, displayHeight);
    imageCombos[0] = new ImageCombo(resize1, displayWidth, percentW1, 0, 0, img1, "ABOUT", "Explore the art of captivating blog design\nwith our latest blog design page.\nDiscover expert tips, creative layouts,\nand responsive themes\nto elevate your online presence.\n\nWhether youre a seasoned blogger or just starting,\nour design insights will help you craft visually stunning\nand user-friendly blogs.\nDive into the world of aesthetics and functionality\nto make your content shine.\n");
    imageCombos[1] = new ImageCombo(resize1, displayWidth, percentW1, 0, 1, img1, "PRODUCT SALE DEMO", "Explore the art of captivating blog design\nwith our latest blog design page.\nDiscover expert tips, creative layouts,\nand responsive themes\nto elevate your online presence.\n\nWhether youre a seasoned blogger or just starting,\nour design insights will help you craft visually stunning\nand user-friendly blogs.\nDive into the world of aesthetics and functionality\nto make your content shine.\n");
    imageCombos[2] = new ImageCombo(resize1, displayWidth, percentW1, 0, 2, img1, "BLOG", "Explore the art of captivating blog design\nwith our latest blog design page.\nDiscover expert tips, creative layouts,\nand responsive themes\nto elevate your online presence.\n\nWhether youre a seasoned blogger or just starting,\nour design insights will help you craft visually stunning\nand user-friendly blogs.\nDive into the world of aesthetics and functionality\nto make your content shine.\n");
    //createSegments();
}

function draw() {
    background(0);
    //drawImg1();
    for (i = 0; i < imageCombos.length ; i++) {
        imageCombos[i].draw();
    }
    //updateSegments();
    mouseObjects[0].draw();
}

