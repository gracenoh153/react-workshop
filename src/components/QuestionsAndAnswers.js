import React, {Component} from 'react';

class QuestionsAndAnswers extends Component {
  render(){
    return(<div>
      <div className='question'>
        Where am I located?
      </div>
      <div className='answer'>
        Seattle, WA
      </div>
      <div className='question'>
        What do I work in?
      </div>
      <div className='answer'>
        Rails for Back End and hopefully React for Front End!
      </div>
      <div className='question'>
        What is my favorite restaurant?
      </div>
      <div className='answer'>
        List
      </div>
    </div>)
  }
}

export default QuestionsAndAnswers;
