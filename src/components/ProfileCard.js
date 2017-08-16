import React, {Component} from 'react'

class ProfileCard extends Component {
  render(){
    return(<div>
      <div>
        <img src={require('../images/smiling.jpg')} />
      </div>
      <div className='name'>
        Grace Noh
      </div>
      <div className='prof-description'>
        This is a sentence about me that catches your attention.
      </div>
    </div>)
  }
}

export default ProfileCard;
