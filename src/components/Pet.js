import React from 'react'

class Pet extends React.Component {

  gender = () => {
    if (this.props.pet.gender === 'male'){
      return '♂'
    } else {
      return '♀'
    }
  }


  adopted = () => {
    if(this.props.pet.isAdopted === true){
      return <button className="ui disabled button">Already adopted</button>
    } else {
      return <button className="ui primary button" onClick={() => {this.props.onAdoptPet(this.props.pet.id)}}>Adopt pet</button>
    }
  }
  render() {
    return (
      <div className="card">
        <div className="content">
          <a className="header">
          {this.gender()}{this.props.pet.name}
          </a>
          <div className="meta">
            <span className="date">{this.props.pet.name}</span>
          </div>
          <div className="description">
            <p>Age: {this.props.pet.age}</p>
            <p>Weight: {this.props.pet.weight}</p>
            <p>Type: {this.props.pet.type}</p>
          </div>
        </div>
        <div className="extra content">
         {this.adopted()}
        </div>
      </div>
    )
  }
}

export default Pet
