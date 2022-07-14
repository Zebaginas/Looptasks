let i = 500;
const para = document.createElement("p");

function isPrime(num) {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}

// Add your code here
let j = 500;
while (j > 1) {
  if (isPrime(j)) {
    if (j != 2) {
      para.textContent = para.textContent + j.toString() + ", ";
    } else {
      para.textContent = para.textContent + j.toString();
    }
  }
  j--;
}

// Don't edit the code below here!
const section = document.querySelector("section");
section.appendChild(para);
