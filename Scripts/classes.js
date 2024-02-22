
class MouseObject {
    constructor(x, y, speed, motionMulti, size, width, height) {
        this.x = x;
        this.y = y;
        this.speed = speed;
        this.currentSpeed = 0;
        this.distance = 0;
        this.motionMulti = motionMulti;
        this.dX = 0;
        this.dY = 0;
        this.dir = 0;
        this.size = size;
        this.width = width;
        this.height = height;
    }

    draw() {
        this.distance = dist(this.x, this.y, mouseX, mouseY);
        if (this.distance > 50) {
            if (this.motionMulti * (this.distance/10) < this.speed) {
                this.currentSpeed = this.motionMulti * (this.distance/10);
            }
            else {
                this.currentSpeed = this.speed;
            }
            this.dX = mouseX - this.x;
            this.dY = mouseY - this.y;
            this.dir = Math.atan2(this.dX, this.dY);
            this.dX = this.currentSpeed * Math.sin(this.dir);
            this.dY = this.currentSpeed * Math.cos(this.dir);
            this.x += this.dX;
            this.y += this.dY;
        }
        if (this.x < this.size / 2) {
            this.x = this.size / 2 + 1;
        }
        else if (this.x > this.width - this.size * 1.5 - 1) {
            this.x = this.width - this.size * 1.5 - 1;
        }
        if (this.y < this.size / 2) {
            this.y = this.size / 2 + 1;
        }
        else if (this.y > this.height - this.size / 2 - 1) {
            this.y = this.height - this.size / 2 - 1;
        }
        push();
        stroke(211,209,187);
        fill(Math.abs(this.dX*2) + Math.abs(this.dY*2));
        circle(this.x, this.y, this.size);
        fill(211,209,187);
        if (window.scrollY > 0) {
            beginShape();
            vertex(this.x - 3, this.y + 7);
            vertex(this.x + 3, this.y + 7);
            vertex(this.x + 3, this.y);
            vertex(this.x + 8, this.y);
            vertex(this.x, this.y - 8);
            vertex(this.x - 8, this.y);
            vertex(this.x - 3, this.y);
            vertex(this.x - 3, this.y + 7);
            endShape(CLOSE);
        }
        else {
            beginShape();
            vertex(this.x - 3, this.y - 7);
            vertex(this.x + 3, this.y - 7);
            vertex(this.x + 3, this.y);
            vertex(this.x + 8, this.y);
            vertex(this.x, this.y + 8);
            vertex(this.x - 8, this.y);
            vertex(this.x - 3, this.y);
            vertex(this.x - 3, this.y - 7);
            endShape(CLOSE);
        }
        pop();
    }
}

class ImageCombo {
    constructor (resize1, displayWidth, percentW1, side, id, img, title, para) {
        this.resize1 = resize1;
        this.percentW1 = percentW1;
        this.percentW50 = percentW1 * 50;
        this.side = side;
        this.id = id;
        this.img = img;
        this.displayWidth = displayWidth;
        this.title = title;
        this.para = para;
        //this.mouseX = mouseX;
    }

    draw() {
        fill(255);
        this.resize1 = (this.percentW50 - mouseX);
        this.resize1 /= 1.2;
        if (this.resize1 < 0) {
            this.resize1 = 0;
        }
        else if (this.resize1 > 200) {
            this.resize1 = 200;
        }
        push();
        translate(0, 200 + (this.id * this.displayWidth/2.8) - this.resize1 / 2);
        tint(255, this.resize1 * 1.2);
        image(this.img, 0, 0, (300 + (this.resize1*1.778)) * this.displayWidth/1300, (200 + this.resize1) * this.displayWidth/1300);
        pop();
        translate(0, 0);
        push();
        translate(this.percentW1*75, 200 + (this.id * this.displayWidth/2.8) - (this.resize1 / 2));
        noStroke();
        fill(211,209,187, this.resize1 * 1);
        textSize(12 + 2 * this.percentW1);
        textAlign(CENTER);
        text(this.title, 0, 0);
        //p text
        textSize(5 + this.percentW1);
        text(this.para, 0, 20 + 4 * this.percentW1);
        pop();
    }
    
  }

  // class Segment {
//     constructor(parent, len, angle, id) {
//         if (parent == null) {
//             this.a = [385, 250];
//         }
//         else {
//             this.a = [parent.b[0], parent.b[1]];
//         }
//         this.b = [0, 0];
//         this.len = len;
//         this.angle = angle;
//         this.angle2 = angle;
//         this.dX = 0; this.dY = 0;
//         this.parent = parent;
//         this.id = id;
//     }

//     update() {
//         if (this.parent == null) {
//             this.angle = this.angle2 - Math.atan2(this.b[1] - mouseY, this.b[0] - mouseX);
//             this.a[0] = mouseX;
//             this.a[1] = mouseY;
//         }
//         else {
//             this.angle = this.angle2 - Math.atan2(this.b[1] - this.parent.b[1], this.b[0] - this.parent.b[0]);
//             this.a[0] = this.parent.b[0];
//             this.a[1] = this.parent.b[1];
//         }
//         this.calcB();
//     }

//     calcB() {
//         this.b[0] = this.a[0]+this.len * Math.cos(-this.angle);
//         this.b[1] = this.a[1]+this.len * Math.sin(-this.angle);
//     }

//     draw() {
//         push();
//         stroke(200,200,200,this.id/80+10);
//         strokeWeight(this.id + 5);
//         line(this.a[0], this.a[1], this.b[0], this.b[1]);
//         pop();
//     }
// }