import React from 'react'
import Car from './Car'

class LeftBar extends React.Component {

  render() {
    let result = null
    result =  this.props.data.map(( car, id) => {
      return (
      <Car
      key={id}
      mark ={car.mark}
      model ={car.model}
      year ={car.year}
      price ={car.price}
      onCarClick = {() => this.props.onCarClick(id)}
     />)
  })
    return (
      <div className='leftBar'>
        {result}
      </div>
    )
  }
}

export default LeftBar