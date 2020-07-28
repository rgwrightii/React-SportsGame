class Team extends React.Component{
    constructor(props){
      super(props)
  
      this.state = {
        shots: 0,
        score:0
      }
    }
      render(){
          return (
              <div className="Team">
                <h2>{this.props.name}</h2>
                  <div className="identity">
                    <img src={this.props.logo}alt={this.props.name}/>
                  </div>

                  <div>
                      <strong>Shots</strong> {this.state.shots}
                  </div>
                  </div>
          )
      }
  }
  
  // An App component under which all other components will be added
  function App(props) {
    return (
      <div className="App">
          <Team 
          name="Elephants" 
          logo="./assets/images/download.png"/>
        <h1>Welcome to the Sports Game starter!</h1>
        <em>This file represents the way your code should look after completing the <strong>Setup</strong> steps in the instructions.</em>
      </div>
    )
  }