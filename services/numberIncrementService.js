// This service listens for numbers from the docs-agent, increments them, and sends them back.

// Simulated message listener and sender for interaction with docs-agent
const incrementAndRespond = (number) => {
  const incrementedNumber = number + 1;
  // Simulate sending the incremented number back to the docs-agent
  console.log(`Incremented number sent to docs-agent: ${incrementedNumber}`);
  return incrementedNumber;
};

// Example usage
const receivedNumber = 5; // Simulating receiving a number from docs-agent
console.log(`Received number from docs-agent: ${receivedNumber}`);
incrementAndRespond(receivedNumber);

module.exports = { incrementAndRespond };