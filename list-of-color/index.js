function listOfColours(colours) {
  // Write your code here...
  const divElement = document.querySelector("#content");
  const pElement = document.createElement("P");
  const selcetElement = document.createElement("select");
  const textOption = document.createElement("option");
  textOption.textContent = "select your favorite color";
  divElement.append(selcetElement, pElement);
  selcetElement.append(textOption);
  colours.forEach((colour) => {
    const optionElement = document.createElement("option");
    optionElement.textContent = colour;
    optionElement.value = colour;
    selcetElement.append(optionElement);
  });
  selcetElement.addEvenListener("change", (e) => {
    pElement.textContent = `your favorite color is ${e.target.value}`;
    pElement.style = e.target.value;
    
  });
}

const colours = ["red", "blue", "green", "yellow", "pink", "brown"];

listOfColours(colours);


// check