// Connect to the Ethereum network
const web3 = new Web3(Web3.givenProvider);

// Get the contract instance
var contractInstance = new web3.eth.Contract(abi, contractAddress);

// Function to add a number to the display
function addToDisplay(number) {
    const display = document.getElementById("display");
    display.value += number;
}

// Function to clear the display
function clearDisplay() {
    const display = document.getElementById("display");
    display.value = "";
}

// Function to perform addition
async function add() {
    const display = document.getElementById("display");
    const a = parseInt(display.value);
    const b = contractInstance.methods.result().call();
    const result = await contractInstance.methods.add(a, b).send({ from: accounts[0] });
    display.value = result;
}

async function add() {
  const display = document.getElementById("display");
  const a = parseInt(display.value);
  const b = await contractInstance.methods.result().call();
  const result = await contractInstance.methods.add(a, b).send({ from: accounts[0] });
  display.value = result;
 }

 const contractAddress = "0x5B38Da6a701c568545dCfcB03FcB875f56beddC4";
const abi = [
 // ABI code goes here
];

var contractInstance = new web3.eth.Contract(abi, contractAddress);


