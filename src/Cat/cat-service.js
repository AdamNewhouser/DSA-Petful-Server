const { queues } = require('../QueueGen');
const STORE = require('../Store');

const catService = {
  deleteCat(){
    let humanName = queues.userQueue.dequeue();
    let cat = queues.catQueue.dequeue();
    let animalName = cat.name;
    let imageURL = cat.imageURL;
    let imageDescription = cat.imageDescription;
    STORE.success.push(
      { humanName,
        animalName,
        imageURL,
        imageDescription }
    );
  }
};

module.exports = catService;