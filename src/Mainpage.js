import React,{Component} from 'react';
import Header from './Header.js'
import './SubscriberToShow.css';
import './AddSubscriber.css';
import AddSubscriber from './AddSubscriber.js'
import SubscriberToShow from './SubscriberToShow'
import {BrowserRouter as Router,Route} from 'react-router-dom';

class Main extends Component{
 constructor(){
    super();
  this.state ={
      subscriberList :[{
            id: 1,
            name:"sonali",
            phone:"9569545786"
          },
          {
            id: 2,
            name:"sonali1",
            phone:"9569545786"
          }
        ]
  }
 }
 addSubscriberHandler = (newSubscriber) =>{
  let subscriber = this.state.subscriberList;
  if(subscriber.length > 0){
    newSubscriber.id = subscriber[subscriber.length-1].id + 1;
  }
  else{
    newSubscriber.id = 1;
  }
  subscriber.push(newSubscriber);
  this.setState({subscriberList : subscriber});
 }


 deleteSubscriberHandler = (subID)=>{
    let Subscriber = this.state.subscriberList;
    let subscriberid = 0;
    Subscriber.forEach(function(subscriber,index){
      if(subscriber.id == subID){
        subscriberid = index;
      }
    },this);
    let newSubscriber = Subscriber;
    newSubscriber.splice(subscriberid,1);
    this.setState({subscriberList:newSubscriber});
 }

render() {
  return (
    <Router>
  <div>
  <Route exact path="/" render={ (props) => <SubscriberToShow {...props} subscriberList={this.state.subscriberList} deleteSubscriberHandler={this.deleteSubscriberHandler}/>}  />
  <Route exact path="/add" render={ ({history},props) => <AddSubscriber history={history}{...props} addSubscriberHandler={this.addSubscriberHandler} />} />
  </div>
  </Router>
  );
};
}

export default Main;