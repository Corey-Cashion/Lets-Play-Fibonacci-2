    let fibonacciSequence = []; // Array to store the Fibonacci sequence

    function Fibonacci() {
      let n = prompt("Pick a number between 5 and 20 (or 'q' to quit)");

      // Handle quit option
      if (n.toLowerCase() === 'q') {
        return; // Exit the function if user enters 'q'
      }

      // Input validation
      while (isNaN(n) || n < 5 || n > 20) {
        n = prompt("Please enter a valid number between 5 and 20 (or 'q' to quit).");
        // Handle quit option inside the loop
        if (n.toLowerCase() === 'q') {
          return; // Exit the function if user enters 'q'
        }
      }

      n = parseInt(n); // Ensure n is a number

      fibonacciSequence = [0, 1]; // Initialize with 0 and 1
      let a = 0;
      let b = 1;

      for (let i = 2; i < n; i++) {
        let temp = a + b;
        a = b;
        b = temp;
        fibonacciSequence.push(a); // Add the current number to the array
      }

      document.getElementById("result").innerHTML = fibonacciSequence.join(" "); // Display the sequence
    }