// Make a new XMLHttpRequest object
const req = new XMLHttpRequest();

// Set the request parameters
req.open("GET", "/DataJson/history.json");
req.responseType = "json";

// Add the event listener for state changes
req.addEventListener("readystatechange", () => {
  // When the request is done...
  if (req.readyState === XMLHttpRequest.DONE) {
    // XMLHttpRequest.DONE === 4
    // Check the response status and act accordingly
    switch (req.status) {
      case 200:
        const textBox = document.getElementById("text-box");
        const textBox2 = document.getElementById("text-box2");

        // Show the content data (from json)
        for (let content of req.response) {
          const textP = document.createElement("p");
          textP.textContent = content.content1;
          textBox.appendChild(textP);

          const textP2 = document.createElement("p");
          textP2.textContent = content.content2;
          textBox.appendChild(textP2);

          const textP3 = document.createElement("p");
          textP3.textContent = content.content3;
          textBox.appendChild(textP3);

          const textP4 = document.createElement("p");
          textP4.textContent = content.content4;
          textBox.appendChild(textP4);

          const textP5 = document.createElement("p");
          textP5.textContent = content.content5;
          textBox.appendChild(textP5);

          const box2TextP = document.createElement("p");
          box2TextP.textContent = content.box2content;
          textBox2.appendChild(box2TextP);
        }

        break;
      case 404:
        console.error("Not found");
        break;
    }
  }
});

req.send();

