const quotesList = [
    {
      quote: 'Try not. Do or do not. There is no try.',
      author: 'Yoda'
    },
    {
      quote: 'Your eyes can deceive you; don’t trust them.',
      author: 'Obi-Wan Kenobi'
    },
    {
      quote: 'Who’s the more foolish: the fool or the fool who follows him?',
      author: 'Obi-Wan Kenobi'
    },
    {
      quote: 'The ability to speak does not make you intelligent.',
      author: 'Qui-Gon Jinn'
    },
    {
      quote: 'Difficult to see; always in motion is the future.',
      author: 'Yoda'
    },
    {
      quote: 'Fear leads to anger, anger leads to hate, hate leads to suffering.',
      author: 'Yoda'
    },
    {
      quote: 'Why, you stuck-up half-witted scruffy-looking nerf herder.',
      author: 'Princess Leia'
    },
    {
      quote: 'Never tell me the odds.',
      author: 'Han Solo'
    },
    {
      quote: 'Traveling through hyperspace ain’t like dusting crops, farm boy.',
      author: 'Han Solo'
    },
    {
      quote: 'Don’t everybody thank me at once.',
      author: 'Han Solo'
    },
    {
      quote: 'So this is how liberty dies…with thunderous applause.',
      author: 'Padme'
    }
  ];

const colors = ['#55DDE0', '#33658A', '#FF6B6C', '#235789', '#F1D302', '#161925'];

// getRandomQuote function //
function getRandomQuote(){
return quotesList[Math.floor(Math.random() * quotesList.length)];
}

// getNewColor function //
function getNewColor(){
let newColor = colors[Math.floor(Math.random() * colors.length)];
$("#container").css("background-color", newColor);
$("#quote-box").css("color", newColor);
$("#twitter-box").css("background-color", newColor);
$("#new-quote").css("background-color", newColor);
}

// newQuote function //
function getNewQuote (){
let newQuote = getRandomQuote(); 
$("#text-container").html(
   "<p id='text'><i class='fa fa-quote-left'></i>  " + newQuote.quote + "</p>" 
);
$("#author-container").html("<p id='author'>~ " + newQuote.author + "</p>");
}

// onClick function //
$('#new-quote').on("click", function () {
getNewQuote();
getNewColor();
});

$(document).ready(function() {
  getNewQuote();
  getNewColor();
});