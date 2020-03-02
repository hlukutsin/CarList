import React from 'react'
import LeftBar from './LeftBar'
import About from './About'
import data from './data'

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      data
    }
  }

  onCarClick(id){
    let newState = [...this.state.data]
    for(let i = 0;i<newState.length;i++){
      newState[i].clicked = false
    }
    newState[id].clicked = true
    return (
      this.setState({
        state: newState
      })
    )
  }

  render(){
    return (
      <div className='wrapper'>
        <header>
          <h1>CarList</h1>
        </header>
        <main>
          <LeftBar 
          data = {this.state.data}
          onCarClick = {(id)=>this.onCarClick(id)}
          />
          <About
            data = {this.state.data}  
          />
          {console.log(this.state.data)}
        </main>
      </div>
    )
  }
}

export default App;
