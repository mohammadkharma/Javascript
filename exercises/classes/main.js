// Classes exercises:
// ================== //


// 1. Person Class
class person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    describe() {
        console.log(`${this.name}, ${this.age} years old.`);
    }
}

let newPerson = new person('John', 38);
newPerson.describe();

// -------------------------------------------------------------------------- //

// 2. Volume
class Cylinder {
    constructor(cyl_height, cyl_diameter) {
        this.cyl_height = cyl_height;
        this.cyl_diameter = cyl_diameter;
    }
    Volume() {
        var radius = this.cyl_diameter / 2;
        return this.cyl_height * Math.PI * radius * radius;
    }
}

var cyl = new Cylinder(7, 4);
console.log('volume =', cyl.Volume().toFixed(4));

// -------------------------------------------------------------------------- //

// 3. Tick Tock
class Clock {
    constructor({ template }) {
        let timer;
        function render() {
            let date = new Date();
            let hours = date.getHours();
            if (hours < 10)
                hours = '0' + hours;
            let mins = date.getMinutes();
            if (mins < 10)
                mins = '0' + mins;
            let secs = date.getSeconds();
            if (secs < 10)
                secs = '0' + secs;
            let output = template
                .replace('h', hours)
                .replace('m', mins)
                .replace('s', secs);
            console.log(output);
        }
        this.start = function () {
            render();
            timer = setInterval(render, 1000);
        };
        this.stop = function () {
            clearInterval(timer);
        };

    }
}

let clock = new Clock({ template: 'h:m:s' });
clock.start();
clock.stop();

// -------------------------------------------------------------------------- //

// 4. TV Class
class TV {
    constructor(brand, channel = 1, volume = 50) {
        this.brand = brand;
        this.channel = channel;
        this.volume = volume;
    }

    volUp() {
        if (this.volume <= 0 || this.volume >= 100) {
            return false;
        } else {
            return console.log(`Vol: ${this.volume++}`);
        }
    }

    volDown() {
        if (this.volume <= 0 || this.volume >= 100) {
            return false;
        } else {
            return console.log(`Vol: ${this.volume--}`);
        }
    }

    setChannel(num) {
        if (num > 50 || num <= 0) {
            return false;
        } else {
            console.log(`Chan: ${num}`);
        }
    }

    reset() {
        this.volume = 50;
        this.channel = 1;
        console.log(`${this.brand} TV: Chan ${this.channel} / Vol ${this.volume}`);
    }

}

let newTV = new TV("Panasonic");
newTV.volUp("philip");
newTV.volUp("philip");
newTV.volUp("philip");

newTV.volDown("philip");
newTV.volDown("philip");
newTV.volDown("philip");

newTV.setChannel(8);
newTV.setChannel(70);

newTV.reset();

// -------------------------------------------------------------------------- //

// 5. Circle
class Circle {
    constructor (radius) {
        this.radius = radius;
    }

    getArea() {
        let area = Math.PI * this.radius * this.radius;
        console.log(`The Area is: ${area}`);
    }

    getPerimeter() {
        let perimeter = 2 * Math.PI * this.radius;
        console.log(`The Perimeter is: ${perimeter}`);
    }
}

let ball = new Circle(3);
ball.getArea();
ball.getPerimeter();

// -------------------------------------------------------------------------- //
