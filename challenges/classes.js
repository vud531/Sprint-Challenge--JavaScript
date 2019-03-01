// 1. Copy and paste your prototype in here and refactor into class syntax.
class Cuboid {
    constructor(properties){
        this.length = properties.length;
        this.width = properties.width;
        this.height = properties.height;
    }

    volume() {
        return this.length * this.width * this.height;
    }

    surfaceArea() {
        return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
    }
  }
  
  cuboid = new Cuboid({length: 4, width: 5, height: 5});


// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log('------class syntax------------')
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.

class CubeMaker extends Cuboid {
    constructor(properties){
        super(properties);
    }

    volume() {
        return this.length ** 3;
    }

    surfaceArea() {
        return 6 * (this.length ** 2);
    }
}
const cube = new Cuboid({length: 4, width: 4, height: 4});
const cube2 = new CubeMaker({length: 4, width: 4, height: 4});

console.log(cube.volume()); // 64
console.log(cube.surfaceArea()); // 96


console.log(cube.volume()); // 64
console.log(cube.surfaceArea()); // 96