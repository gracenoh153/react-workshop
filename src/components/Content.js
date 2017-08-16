import React, {Component} from 'react'
import QuestionsAndAnswers from './QuestionsAndAnswers'
import PersonalStatement from './PersonalStatement'
import Quote from './Quote'

class Content extends Component {
  render(){

    return(<div>
      <div className='main-header'>
        Home
      </div>
      <div className='tagline'>
        Here is another super interesting fact about myself!
      </div>
      <div>
        <QuestionsAndAnswers/>
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
