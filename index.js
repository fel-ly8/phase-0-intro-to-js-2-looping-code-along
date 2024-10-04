function writeCards(names, event) {
    return names.map(name => `Thank you, ${name}, for the wonderful ${event} gift!`);
  }
  
  // Example usage:
  const names = ["Alice", "Bob", "Charlie"];
  const messages = writeCards(names, "birthday");
  console.log(messages); 
  // Output: [
  //   "Thank you, Alice, for the wonderful birthday gift!",
  //   "Thank you, Bob, for the wonderful birthday gift!",
  //   "Thank you, Charlie, for the wonderful birthday gift!"
  // ]
  function countDown(num) {
    for (let i = num; i >= 0; i--) {
      console.log(i);
    }
  }
  
  // Example usage:
  countDown(5); 
  // Output:
  // 5
  // 4
  // 3
  // 2
  // 1
  // 0
  
  
