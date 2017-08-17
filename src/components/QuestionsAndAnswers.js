import React, {Component} from 'react';

class QuestionsAndAnswers extends Component {
  render(){

    return(<div>
      {this.props.items.map(function({question, answer}){
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
