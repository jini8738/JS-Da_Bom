const quotes = [
  {
    quote:
      "The aim of art is to represent not the outward appearance of things, but their inward significance.",
    author: "Aristotle",
  },
  {
    quote: "A mind too active is no mind at all.",
    author: " Theodore Roethke",
  },
  {
    quote:
      "my love   I'm not a real movie star. I've still got the same wife I started out with twenty-eight years ago.",
    author: "Will Rogers",
  },
  {
    quote:
      "There is no such thing as an underestimate of average intelligence.",
    author: "Henry Adams",
  },
  {
    quote:
      "my love   I'm not a real movie star. I've still got the same wife I started out with twenty-eight years ago.",
    author: "Will Rogers",
  },
  {
    quote:
      "The people who are regarded as moral luminaries are those who forego ordinary pleasures themselves and find compensation in interfering with the pleasures of others.",
    author: "Bertrand Russell",
  },
  {
    quote: "Everywhere I go I find a poet has been there before me.",
    author: "Sigmund Freud",
  },
  {
    quote:
      "The world tolerates conceit from those who are successful, but not from anybody else.",
    author: "John Blake",
  },
  {
    quote: "There are people I know who won't hurt me. I call them corpses.",
    author: "Randy K. Milholland",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const quoteRandom = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = quoteRandom.quote;
author.innerText = quoteRandom.author;
