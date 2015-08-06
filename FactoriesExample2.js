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

function CarAdditions(options) {
  this.rims = options.rims || true;
  this.bodyKit = options.bodyKit || false;
}

function CarPartFactory() {}
CarPartFactory.prototype.createPart = function createCarPart( options ) {
  var parentClass = null;

  if( options.partType === 'door' ) {
    parentClass = CarDoor;
  } if(options.PartType === 'additions'){
    parentClass = CarAdditions;
  }
  if ( options.partType === 'seat' ) {
    parentClass = CarSeat;
  }

  if ( parentClass === null ) {
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

var myPartFactory = new CarPartFactory();
var additions = myPartFactory.createPart( {
  rims : true,
  bodyKit : true,
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
console.log(additions);