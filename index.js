// code your solution here
// Collection is an argument that represents an array of objects
function superbowlWin(collection) {
    const winRecord = collection.find(record => record.result === "W");
    return winRecord ? winRecord.year : undefined;
  }
  