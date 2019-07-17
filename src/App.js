import React,{Component} from 'react';
import Header from './Header.js'
import './app.css';

class App extends Component{
render() {
  let subscriber=[
    {
      id:1,
      name:"sonali",
      phone:"9569545786"
    },
    {
      id:2,
      name:"shilpa",
      phone:"9569545796"

    },
    {
      id:3,
      name:"shilpa",
      phone:"9569545796"

    }
  ]
  return (
    <div>
      <Header />
      <button className="btn" id="add-btn">Add</button>
    
      <div className="label">
        <label>name</label>
        <label style={{marginLeft : '180px'}}>phone</label>
        </div>
        {
      subscriber.map(arrayElement => {
      return <div style={{position:'relative',top:'50px',left:'30px',fontWeight:'bolder'}} key={arrayElement.id}  className="row">
      	<div className="col-lg-2">{arrayElement.name}</div>
        <div className="col-lg-2">{arrayElement.phone}</div>
       <div className="col-lg-8" style={{marginTop:'1px'}}><button className="delete-btn">DELETE</button></div>
      </div>
      })
      }
      </div> 
     
  );
}
}
export default App;