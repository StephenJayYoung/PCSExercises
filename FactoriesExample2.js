function CarDoor( options ) {
  this.color = options.color || 'red';
  this.side = options.side || 'right';
  this.hasPowerWindows = options.hasPowerWindows || true;
  this.isDented = options.isDented || false;
}

function CarSeat( options ) {
  this.color = options.color || 'gray';
  this.material = options.material || 'leather';
  this.isReclinable = options.isReclinable || true;
  this.isComfy = options.isComfy || true;
}

function CarPartFactory() {}
CarPartFactory.prototype.createPart = function createCarPart( options ) {
  var parentClass = null;
  
  if( options.partType === 'door' ) {
    parentClass = CarDoor;
  } else if( options.partType === 'seat' ) {
    parentClass = CarSeat;
  }
  
  if( parentClass === null ) {
    return false;
  }
  
  return new parentClass( options );
}

// example usage
var myPartFactory = new CarPartFactory();
var seat = myPartFactory.createPart( {
  partType : 'seat',
  material : 'leather',
  color : 'blue',
  isReclinable : false,
  isComfy : false,
} );

var myPartFactory = new CarPartFactory();
var door = myPartFactory.createPart( {
  partType : 'door',
  color : 'black',
  hasPowerWindows : false,
  isDented : false,
} );

// var myPartFactory1 = new CarPartFactory();
// var door = myPartFactory.createPart( {
//   color : 'red',
//   side: 'right',
//   hasPowerWindows : true

// } );



// outputs a CarSeat object with material "leather", color "blue", isReclinable "false"
// console.log( seat );
console.log(door);