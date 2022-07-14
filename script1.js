const myArray = ['tomatoes', 'chick peas', 'onions', 'rice', 'black beans'];
const list = document.createElement('ul');

// Add your code here
for(const item of myArray)
{
    const elem = document.createElement('li');
    elem.textContent = item;
    list.appendChild(elem);
}
// Don't edit the code below here!

const section = document.querySelector('section');
section.appendChild(list);