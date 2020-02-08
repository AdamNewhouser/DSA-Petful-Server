const { queues } = require('../QueueGen'); 
const autoQueue = require('../QueueGen');

const adminService = {
  resetData(){
    if(queues.catQueue !== undefined && queues.dogQueue !== undefined && queues.userQueue !== undefined) {
      let currNode = queues.catQueue;
      while(currNode.first !== null) {
        currNode.dequeue();
      }
      currNode = queues.dogQueue;
      while(currNode.first !== null) {
        currNode.dequeue();
      }
      currNode = queues.userQueue;
      while(currNode.first !== null) {
        currNode.dequeue();
      }
      autoQueue();
      autoQueue();
    }
    
  }
  
};

module.exports = adminService;