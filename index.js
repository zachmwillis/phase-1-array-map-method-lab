const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  function upperCase(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }

  return tutorials.map(tutorial => {
    const words = tutorial.split(' ');
    const upperCaseWords = words.map(upperCase);
    return upperCaseWords.join(' ');
  });
};

const upperCased = titleCased();
console.log(upperCased);