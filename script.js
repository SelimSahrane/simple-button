document.getElementById("myButton").addEventListener(
  "click",
  function(event) {
    if (event.target.value === "Open") {
      event.target.value = "Close";
    } else {
      event.target.value = "Open";
    }
  },
  false
);