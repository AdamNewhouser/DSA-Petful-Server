const { queues } = require('../QueueGen');
const STORE = require('../Store');

const dogService = {
  deleteDog(){
    let humanName = queues.userQueue.dequeue();
    let dog = queues.dogQueue.dequeue();
    let animalName = dog.name;
    let imageURL = dog.imageURL;
    let imageDescription = dog.imageDescription;
    STORE.success.push(
      { humanName,
        animalName,
        imageURL,
        imageDescription }
    );
  }
};

module.exports = dogService;