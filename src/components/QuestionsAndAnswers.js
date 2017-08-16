import React, {Component} from 'react';

class QuestionsAndAnswers extends Component {
  render(){
    const pairs = [['Where am I located?',
                    'Seattle'],
                    ['What do I work in?',
                    'Rails for Back End and hopefully React for Front End!'],
                    ['What is my favorite restaurant?',
                    'What is my favorite restaurant?']]
    return(<div>
      <ul>
        {pairs.map((questionanswer) =>
          return {questionAnswer}
        )}
      </ul>
    </div>)
  }
}

export default QuestionsAndAnswers;
