const button = document.querySelector("button");
const result = document.querySelector(".result");
const input = document.querySelector("input");
// ================================

// URL: https://cat-fact.herokuapp.com/facts

// BEFORE YOU START:
// run `npm install -g serve`
// then run `serve` in this directory

/**
 * Exercise 1
 *
 * create a function {fetchData} which takes
 * a URL as an argument and sends a GET request.
 * When you get a response, return an array of facts.
 */
const getFacts = (url) => fetch(url).then(response => response.json());
getFacts('https://cat-fact.herokuapp.com/facts').then(text => {
  console.log(text);
  return text;
});


/**
 * Description of the application:
 *
 * As a user I should be able to:
 * 1. click on a button "Get random facts"
 * 2. view 3 random facts in ".result" element
 */
const getThreeFacts = async () => {
  const data = await getFacts('https://cat-fact.herokuapp.com/facts');
  const onlyFacts = data.map((item) => item.text);
  const threeFacts = [];
  while (threeFacts.length < 3) {
    const element = onlyFacts[Math.floor(Math.random()*onlyFacts.length)];
    if (!threeFacts.includes(element)) {
      threeFacts.push(element);
    }
  }
  threeFacts.forEach(fact => {
    const newFact = document.createElement('li');
    newFact.innerText = fact;
    result.appendChild(newFact);
  
  });
};
button.addEventListener('click', () => {
  getThreeFacts();
});