const form = document.getElementById('quiz');

const points = {
    problemSolving: {
      quickDecisions: {'F':3},
      wellThought: {'E': 3},
      intuitionFeelings: {'W': 3},
      brainstormOptions: {'A': 3}
  },
  color: {
    red: {'F':3},
    blue: {'W': 3},
    green: {'E': 3},
    yellow: {'F': 3},
    brown: {'E': 3},
    black: {'W': 3},
    white: {'A': 3},
    pink: {'A': 3}
},
  friendsDescription: {
    energy: {'F': 3},
    reliable: {'E': 3},
    empathetic: {'W': 3},
    social: {'A': 3}
  },
  outdoorActivity: {
    gardenSitting: {'E': 3},
    flyingKite: {'A': 3},
    campfire: {'F': 3},
    kayaking: {'W': 3}
  },
  dreamVacation: {
    spaceShuttle: {'A': 3},
    safari: {'F': 3},
    hawaiian: {'W': 3},
    caribbean: {'E': 3}
  },
  movies: { 
    journey: {'E': 3},
    alice: {'A': 3},
    firestarter: {'F': 3},
    leagues: {'A': 3},
    wizard: {'E': 3},
    poseidon: {'W': 3},
    inferno: {'F': 3}
  },
  foods: {
    iceCream: {'W': 3},
    bagel: {'E': 3},
    nachos: {'F': 3},
    pineapple: {'A': 3}
  },
  season: {
    spring: {'A': 3},
    summer: {'F': 3},
    autumn: {'E': 3},       
    winter: {'W': 3}                                    
  },
  birthmonth: {
    january: {'W': 3, 'E': 1, 'F': 1},
    february: {'A': 3, 'E': 2, 'F': 2},
    march: {'A': 1, 'E': 3, 'F': 1},
    april: {'A': 2, 'E': 3, 'F': 2},
    may: {'A': 1, 'E': 3, 'F': 2},
    june: {'A': 2, 'E': 1, 'F': 3},
    july: {'A': 1, 'W': 3, 'F': 2},
    august: {'A': 2, 'E': 2, 'F': 3},
    september: {'A': 1, 'E': 3, 'F': 2},
    october: {'A': 2, 'E': 3, 'F': 1},
    november: {'W': 3, 'E': 1, 'F': 2},
    december: {'A': 2, 'E': 2, 'F': 3}
}
};

form.addEventListener('submit', function(event) {
  event.preventDefault();

  const problemSolvingInputs = document.getElementsByName('problemSolving');
  const colorInputs = document.getElementsByName('color');
  const friendsDescriptionInputs = document.getElementsByName('friendsDescription');
  const outdoorActivityInputs = document.getElementsByName('outdoorActivity');
  const dreamVacationInputs = document.getElementsByName('dreamVacation');
  const moviesInputs = document.getElementsByName('movies');
  const foodsInputs = document.getElementsByName('foods');
  const seasonInputs = document.getElementsByName('season');
  const birthmonthInputs = document.getElementsByName('birthmonth');


  const ElementPoints = {
    'A': 0,
    'E': 0,
    'F': 0,
    'W': 0
  };


  function calculatePoints(inputs, question) {
    for (let i = 0; i < inputs.length; i++) {
      if (inputs[i].checked) {
        const selectedValue = inputs[i].value;
        for (const Element in points[question][selectedValue]) {
            ElementPoints[Element] += points[question][selectedValue][Element];
        }
        break;
      }
    }
  }
  
 
  calculatePoints(problemSolvingInputs, 'problemSolving');
  calculatePoints(colorInputs, 'color');
  calculatePoints(friendsDescriptionInputs, 'friendsDescription');
  calculatePoints(outdoorActivityInputs, 'outdoorActivity');
  calculatePoints(dreamVacationInputs, 'dreamVacation');
  calculatePoints(moviesInputs, 'movies');
  calculatePoints(foodsInputs, 'foods');
  calculatePoints(seasonInputs, 'season');
  calculatePoints(birthmonthInputs, 'birthmonth');


let maxPoints = 0;
let maxElement = '';

for (const Element in ElementPoints) {
  if (ElementPoints[Element] > maxPoints) {
    maxPoints = ElementPoints[Element];
    maxElement = Element;
  }
}


console.log('The Element with the highest points sum:', maxElement);

if (maxElement == 'A') {
    window.location.href = 'Air.html';
  }
  
  if (maxElement == 'E') {
    window.location.href = 'Earth.html';
  }
  
  if (maxElement == 'F') {
    window.location.href = 'Fire.html';
  }
  
  if (maxElement == 'W') {
    window.location.href = 'Water.html';
  }
    form.reset();
  });
  