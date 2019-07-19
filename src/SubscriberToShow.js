import React,{Component} from 'react';
import Header from './Header.js'
import './SubscriberToShow.css';
import {Link} from 'react-router-dom';
class Subscriber extends Component{

onDeletedClick = (subID) => {
  this.props.deleteSubscriberHandler(subID);
}
render() {
  return (
    <div>
      <Header heading="Phone Directry"/>
      <Link to="/add"><button className="btn add-btn">Add</button></Link>
    
      <div className="label">
        <label>name</label>
        <label style={{marginLeft : '180px'}}>phone</label>
        </div>
        {
      this.props.subscriberList.map(arrayElement => {
      return <div style={{position:'relative',top:'50px',left:'30px',fontWeight:'bolder'}} key={arrayElement.id}  className="row">
      	<div className="col-lg-2">{arrayElement.name}</div>
        <div className="col-lg-2">{arrayElement.phone}</div>
       <div className="col-lg-8" style={{marginTop:'1px'}}><button className="delete-btn" onClick={this.onDeletedClick.bind(this,arrayElement.id)}>DELETE</button></div>
      </div>
      })
      }
      </div> 
     
  );
}
}
export default Subscriber;