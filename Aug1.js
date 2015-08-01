https://portlandcodeschool.github.io/jse/2015/08/01/aug1-callbacks-datastructs/


// people
var mom  = {name:'mom',  jobs:{}},
    dad  = {name:'dad',  jobs:{}},
    billy= {name:'billy',jobs:{}},
    sally= {name:'sally',jobs:{}};

// chores
var wash=   {job:'wash',who:{}},
    dry =   {job:'dry', who:{}},
    mop =   {job:'mop', who:{}},
    cook=   {job:'cook',who:{}};

var people = {
    mom:mom,
    dad:dad,
    billy:billy,
    sally:sally
};

var jobs = {
    mop:mop,
    cook:cook,
    wash:wash,
    dry:dry
};

wash.who = {mom:mom,billy:billy};
dry.who  = {dad:dad,billy:billy,sally:sally};
cook.who = {dad:dad,sally:sally};
mop.who  = {dad:dad,mom:mom};

mom.jobs  = {wash:wash,mop:mop};
dad.jobs  = {dry:dry,cook:cook,mop:mop};
sally.jobs= {dry:dry,cook:cook};
billy.jobs= {wash:wash,dry:dry};

// 1. Write a function hasJob(personName,jobName) returning true or false. For example:

// hasJob('mom','mop') --> true
// hasJob('mom','dry') --> false
function hasJob(personName, jobName) {
    return jobNAme in people[personName].jobs;
}

// Now write a variant hasJob(personObj,jobObj) which receives objects instead of strings:

// hasJob(mom,mop) --> true
// hasJob(mom,dry) --> false
function hasJob(personObj, jobObj)
    return jobObj.job in personObj.jobs;

// peopleDoing(job) --> array of objects
// Write a function peopleDoing(job) which returns an array of people-objects

function peopleDoingJob(jobObj) {
    return people[name]
    function PersonNameToObj(name) {
        return people[name;]
    }




// function peopleDoing(job) {
//     var peopleNames = Object.keys(job,who);
//         return peoplesNames.map(mapNameToObjects);
// }

console.log();
// console.log(peopleDoing(wash));




