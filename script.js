//your JS code here. If required.
document.getElementById("btn").addEventListener("click", () => {
  const inputNumber = Number(document.getElementById("ip").value); // Get input value
  const outputDiv = document.getElementById("output"); // Get output div

  // Clear previous output
  outputDiv.textContent = "";

  // Step 1: Create a promise that resolves after 2 seconds with the input number
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(inputNumber);
    }, 2000);
  })
    .then((result) => {
      // Display the result
      outputDiv.textContent = `Result: ${result}`;
      return new Promise((resolve) => {
        // Step 2: Multiply the number by 2 and resolve after 1 second
        setTimeout(() => {
          resolve(result * 2);
        }, 1000);
      });
    })
    .then((result) => {
      // Display the result
      outputDiv.textContent = `Result: ${result}`;
      return new Promise((resolve) => {
        // Step 3: Subtract 3 and resolve after 1 second
        setTimeout(() => {
          resolve(result - 3);
        }, 1000);
      });
    })
    .then((result) => {
      // Display the result
      outputDiv.textContent = `Result: ${result}`;
      return new Promise((resolve) => {
        // Step 4: Divide by 2 and resolve after 1 second
        setTimeout(() => {
          resolve(result / 2);
        }, 1000);
      });
    })
    .then((result) => {
      // Display the result
      outputDiv.textContent = `Result: ${result}`;
      return new Promise((resolve) => {
        // Step 5: Add 10 and resolve after 1 second
        setTimeout(() => {
          resolve(result + 10);
        }, 1000);
      });
    })
    .then((finalResult) => {
      // Display the final result
      outputDiv.textContent = `Final Result: ${finalResult}`;
    })
    .catch((error) => {
      // Handle any errors
      outputDiv.textContent = `Error: ${error.message}`;
    });
});
