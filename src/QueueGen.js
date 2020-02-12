const STORE = require('./Store');
const Queue = require('./Queue');
const adminService = require('./Admin/admin-service');

let catQueue = new Queue();
let dogQueue = new Queue();
let userQueue = new Queue();


function autoQueue() {
  if(STORE.success.length >= 6) {
    let originalSuccess = STORE.success[0];
    STORE.success = [];
    STORE.success.push(originalSuccess);
    catQueue = new Queue();
    dogQueue = new Queue();
  }

  if(userQueue.length <= 2) {
    let userIndex = Math.floor(Math.random() * Math.floor(STORE.users.length - 1));
    userQueue.enqueue(STORE.users[userIndex]);
  }

  let catIndex = Math.floor(Math.random() * Math.floor(STORE.cats.length - 1));
  let dogIndex = Math.floor(Math.random() * Math.floor(STORE.dogs.length - 1));
  let adoptionType  = Math.floor(Math.random() * Math.floor(2));

  catQueue.enqueue(STORE.cats[catIndex]);
  dogQueue.enqueue(STORE.dogs[dogIndex]);
  catQueue.enqueue(STORE.cats[dogIndex]);
  dogQueue.enqueue(STORE.dogs[catIndex]);
  if(adoptionType === 0) autoCatAdopt();
  else autoDogAdopt();
}

function autoCatAdopt() {
  let humanName = userQueue.dequeue();
  let adoptionSuccess  = Math.floor(Math.random() * Math.floor(2));
  if(adoptionSuccess === 1 && STORE.users.includes(humanName)) {
    let cat = catQueue.dequeue();
    let animalName = cat.name;
    let imageURL = cat.imageURL;
    let imageDescription = cat.imageDescription;
    STORE.success.push(
      { humanName,
        animalName,
        imageURL,
        imageDescription }
    );
  } else userQueue.enqueue(humanName);
}

function autoDogAdopt() {
  let humanName = userQueue.dequeue();
  let adoptionSuccess  = Math.floor(Math.random() * Math.floor(2));
  if(adoptionSuccess === 1 && STORE.users.includes(humanName)) {
    let dog = dogQueue.dequeue();
    let animalName = dog.name;
    let imageURL = dog.imageURL;
    let imageDescription = dog.imageDescription;
    STORE.success.push(
      { humanName,
        animalName,
        imageURL,
        imageDescription }
    );
  } else userQueue.enqueue(humanName);
}

 
function queueMain() {
  autoQueue();
  autoQueue();
  setInterval(autoQueue, 30000);
}

const queues = {
  catQueue,
  dogQueue,
  userQueue
};

module.exports = {
  queueMain,
  queues,
  autoQueue
};