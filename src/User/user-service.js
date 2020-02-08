const { queues } = require('../QueueGen');
const STORE = require('../Store');

const userService = {

  addUser(user){
    queues.userQueue.enqueue(user);
  },

  deleteBothPets(){
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

    let cat = queues.catQueue.dequeue();
    animalName = cat.name;
    imageURL = cat.imageURL;
    imageDescription = cat.imageDescription;
    STORE.success.push(
      { humanName,
        animalName,
        imageURL,
        imageDescription });

  }
};

module.exports = userService;