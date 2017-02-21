// Explorer Mode

// Make an object named spaceship1 using a JavaScript object literal. Include properties with this information: - Top speed of 2lyph (light years per hour) - Ship name of Galaxy Cruiser

// Include a method (a property that is set to an anonymous function) named launch that console logs your ship name + ' launching to infinity and beyond at ' + top speed + '!'. After you create your spaceship object, call the launch method to see the console log.

var spaceship1 = {
    topSpeed: '2lyph',
    shipName: 'Galaxy Cruiser',
    launch: function() {
        console.log(this.shipName + ' launching to infinity and beyond at ' + this.topSpeed + '!')
    }
}

spaceship1.launch();

// Make three other spaceships with different speeds and names using the three other ways of making objects seen in the examples above.

// Object New

var spaceship2 = new Object();
spaceship2.topSpeed = '1041.66lyph';
spaceship2.shipName = 'Millenium Falcon';
spaceship2.launch = function() {
    console.log(this.shipName + ' launching to infinity and beyond at ' + this.topSpeed + '!')
}

spaceship2.launch();



// Constructor Function

var SpaceShip = function () {
    this.topSpeed = '400lyph';
    this.shipName = 'A-Wing';
    this.launch = function() {
        console.log(this.shipName + ' ' + ' launching to infinity and beyond at ' + this.topSpeed + '!')
    }
}

var spaceship3 = new SpaceShip();

spaceship3.launch();

// Class

class SpaceShipClass {
    constructor () {
        this.topSpeed = '2lyph';
        this.shipName = 'FC-219';
    }

    launch() {
        console.log(this.shipName + ' ' + ' launching to infinity and beyond at ' + this.topSpeed + '!')
    }
}

var spaceship4 = new SpaceShipClass ();

spaceship4.launch();

// // Class
// class Vehicle {
//     constructor() {
//         this.make = 'Toyota'
//         this.model = 'Yaris'
//     }

//     drive(speed) {
//         console.log(this.make + ' ' + this.model + ' is driving ' + speed + 'mph.')
//     }
// }

// var car = new Vehicle()

// // Call the drive method with a speed argument value of 55
// car.drive(55)
