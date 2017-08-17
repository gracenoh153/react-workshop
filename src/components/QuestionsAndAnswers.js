import React, {Component} from 'react';

class QuestionsAndAnswers extends Component {
  render(){
    const questionsAndAnswers = [ {question: 'Where am I located?', 
                                   answer: 'Seattle, WA'},
                                  {question: 'What do I work in?',
                                   answer: 'Rails for Back End and React for Front End!'},
                                  {question: 'What is my favorite game?',
                                   answer: 'Splinter Cell'}
                                  ]
    return(<div>
      {questionsAndAnswers.map(function({question, answer}){
        return(
        <div>
          <div className="question">
            {question}
          </div>
          <div className="answer">
            {answer}
          </div>
        </div>
        )
      })}
    </div>)
  }
}

export default QuestionsAndAnswers;
