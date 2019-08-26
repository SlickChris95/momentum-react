import React from 'react';

let quotes = [
    '"With the new day comes new strength and new thoughts.  -Eleanor Roosevelt"',
    '"Failure will never overtake me if my determination to succeed is strong enough.  -Og Mandino"',
    '"Always do your best. What you plant now, you will harvest later.  -Og Mandino"',
    '"If you can dream it, you can do it.  -Walt Disney"',
    '"Our greates weakness lies in giving up. The most certain way to succeed is always to try just one more time.  -Thomas Edison"',
    '"A creative man is motivated by the desire to achieve, not by the desire to beat others.  -Ayn Rand"',
    '"Quality is not an act, it is a habit.  -Aristotle"',
    '"If you fell down yesterday, stand up today.  -H.G. Wells"',
    '"Well done is better than well said.  -Benjamin Franklin"',
    '"Be miserable. Or motivate yourself. Whatever has to be done, it\'s always your choice.  -Wayne Dyer"',
    '"It does not matter how slowly you go as long as you do not stop.  -Confucius"',
    '"This too shall pass.  -Anonymous"',
]

let randomQuote = (quoteArr)=>{
  let randomNum = Math.floor(Math.random() * quoteArr.length);
  return quoteArr[randomNum];
}

// let random = Math.floor(Math.random() * quoteObject.quotes.length)
class Quote extends React.Component{
  state = {
    quote:''
  }

  componentDidMount(){
    // this.setState({quote: quoteObject.quotes[random], author: quoteObject.authors[random]});
    this.setState({quote: randomQuote(quotes) });

  }
  handleClick = ()=>{
    window.open("https://twitter.com/intent/tweet?text=" + this.state.quote+ " -" + this.state.author);
  }

  render(){
    return(
      <div id="quote-container">
        <div id="quote-container">
          <div>{this.state.quote}</div>
        </div>
        <div id="quote-button-container">
          <button className="ui red button" onClick={()=> this.setState({quote: randomQuote(quotes) })}>
            New Quote
          </button>
          <button className="ui primary button" onClick={this.handleClick}>
            Tweet
          </button>
        </div>
      </div>
    );
  }
}

export default Quote;
