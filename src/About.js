import React from 'react'

class About extends React.Component {

  render() {
    let result = null

        result = this.props.data.map((car, index) => {
          if ( car.clicked) {
          return (
            <div
            key={index}
            className='about'
            >
              <div className='carName'>
                <h1>{car.mark} {car.model}</h1>
                <h3>Engine's type: <span>{car.fuel}</span></h3>
                <h3>Body type: <span>{car.body}</span></h3>
              </div>
              <div className='carYear'><h2>Year: {car.year}</h2></div>
              <div className='carPrice'><h2>{car.price}</h2></div>
            </div>
          )}
        })
      
    
    return (
      <>
      {result}
      </>
    )
  }
}

export default About