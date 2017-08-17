import React, {Component} from 'react'
import QuestionsAndAnswers from './QuestionsAndAnswers'
import PersonalStatement from './PersonalStatement'
import Quote from './Quote'

class Content extends Component {
  render(){
    const questionsAndAnswers = [ {question: 'Where am I located?', 
                                   answer: 'Seattle, WA'},
                                  {question: 'What do I work in?',
                                   answer: 'Rails for Back End and React for Front End!'},
                                  {question: 'What is my favorite game?',
                                   answer: 'Splinter Cell'}
                                  ]
    return(<div>
      <div className='main-header'>
        Home
      </div>
      <div className='tagline'>
        Here is another super interesting fact about myself!
      </div>
      <div>
        <QuestionsAndAnswers items={questionsAndAnswers} />
      </div>
      <div>
        <PersonalStatement/>
      </div>
      <div>
        <Quote/>
      </div>
    </div>)
  }
}

export default Content;
