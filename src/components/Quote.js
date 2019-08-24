import React from 'react';

let quoteObject = {
  quotes: [
   '"With the new day comes new strength and new thoughts."',
   '"Failure will never overtake me if my determination to succeed is strong enough."',
   '"Always do your best. What you plant now, you will harvest later."',
    '"If you can dream it, you can do it."',
    '"Our greates weakness lies in giving up. The most certain way to succeed is always to try just one more time."',
    '"A creative man is motivated by the desire to achieve, not by the desire to beat others."',
    '"Quality is not an act, it is a habit."',
    '"If you fell down yesterday, stand up today."',
    '"Well done is better than well said."',
    '"Be miserable. Or motivate yourself. Whatever has to be done, it\'s always your choice."',
    '"It does not matter how slowly you go as long as you do not stop."',
    '"This too shall pass."',
    '"No one can make you feel inferior without your consent."',
    '"The woman who follows the crowd will usually go no further than the crowd. The woman who walks alone is likely to find herself in places no one has been before."',
    '"May I never be complete. May I never be content. May I never be perfect."',
    '"Ask yourself if what you\'re doing today will get you closer to where you want to be tomorrow."',
    '"What would you do if you weren\'t afraid?"',
    '"A champion is defined not by their wins, but by how they can recover when they fall"',
    '"Each person must live their life as a model for others."',
    '"Motivation comes from working on things we care about"',
    '"If you look at what you have in life, you\'ll always have more."',
    '"You get what you give."',
    '"You must do the things you think you cannot do."',
    '"Happiness is not by chance, but by choice."',
    '"Don\'t wait. The time will never be just right."',
    '"Life is like riding a bicycle. To keep your balance, you must keep moving."',
    '"Stay close to anything that makes you glad to you are alive."',
    '"You do not find the happy life. You make it."',
    "'If I cannot do great things, I can do small things in a great way.'",
    "'The bad news is time flies. The good news is you\'re the pilot'",
    "'Sometimes you will never know the value of a moment, until it becomes a memory.'"

 ],
  authors:[
    "Eleanor Roosevelt",
     "Og Mandino",
     "Og Mandino",
     "Walt Disney",
     "Thomas Edison",
     "Ayn Rand",
     "Aristotle",
     "H.G. Wells",
     "Benjamin Franklin",
     "Wayne Dyer",
     "Confucius",
     "Anonymous",
     "Eleanor Roosevelt",
     "Albert Einstein",
     "Chuck Palanhnuik",
     "Anonymous",
     "Sheryl Sandberg",
     "Serena Williams",
     "Rosa Parks",
     "Sheryl Sandberg",
     "Oprah Winfrey",
     "Jennifer Lopez",
     "Eleanor Roosevelt",
     "Jim Rohn",
     "Albert Einstein",
     "Hafez",
     "Camilla Eyring Kimball",
     "Martin Luther King Jr.",
     "Dr.Seuss"
 ]
}
let random = Math.floor(Math.random() * quoteObject.quotes.length)


class Quote extends React.Component{

  componentDidMount(){
  }

  render(){
    return(
      <div id="quote-container">
        <div>{quoteObject.quotes[random]}</div>
        <div>-{quoteObject.authors[random]}</div>
      </div>
    );
  }
}

export default Quote;
