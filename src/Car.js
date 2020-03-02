import React from 'react'

class Car extends React.Component {

  render() {
    return (
      <div className='car' onClick={() => this.props.onCarClick()}>
        <h2 className='carM'>{this.props.mark}   {this.props.model}</h2>
        <h2 className='carY'>{this.props.year}</h2>
        <h3 className='carP'>{this.props.price}</h3>
      </div>
    )
  }
}

export default Car