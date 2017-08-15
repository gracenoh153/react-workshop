import React, {Component} from 'react'
import MyFirstComponent from './MyFirstComponent'
import ExtraComponent from './ExtraComponent'

class BasicComponent extends Component {
  render(){
    return(<div>
      <div>
        Hi, I'm a Basic Component!
      </div>
      <div>
        <MyFirstComponent/>
      </div>
      <div>
        <ExtraComponent/>
      </div>
    </div>)
  }
}

export default BasicComponent;
