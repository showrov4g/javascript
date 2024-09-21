document
  .getElementById("show-add-money-button")
  .addEventListener("click", function (event) {
    showSection("add-money-section");
  });

document
  .getElementById("Cash-out-button")
  .addEventListener("click", function () {
    showSection("cash-out-section");
  });

document
  .getElementById("transition-button")
  .addEventListener("click", function () {
    showSection("transtion-section");
  });
