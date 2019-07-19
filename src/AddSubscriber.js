import React,{Component} from 'react';
import Header from './Header.js'
import './SubscriberToShow.css';
import './AddSubscriber.css';
import {Link} from 'react-router-dom';
class AddSubscriber extends Component{
   constructor(){
        super();
    this.state = {
       id : 0,
        name: " ",
        phone: " "

    };
    
    }
    inputHandler = (e) =>{
       const state = this.state;
       state[e.target.name] = e.target.value;
       this.setState(state);
    }
    onSubmitformHandler = (e) => {
        e.preventDefault();
        this.props.addSubscriberHandler(this.state);
        this.setState({id:0,name:'',phone:''});
        this.props.history.push("/");
    }
    render(){
        var {name,phone} = this.state;
      return(
       
         <div className="main-container">
             <Header heading="ADD SUBSCRIBER"/>
             <div className="component-container">
                <Link to="/"><button className="custom-btn grey-btn">Back</button></Link>
                 <form className="subscriber-form" onSubmit={this.onSubmitformHandler.bind(this)}>
                     <label htmlFor="name" className="label-control">Name</label><br/>
                     <input type="text" id="text" className="input-control" name="name" onChange={this.inputHandler}/><br/><br/>
                     <label htmlFor="phone" className="label-control">Phone</label><br/>
                     <input type="text" id="phone" name="phone" maxLength="10" onChange={this.inputHandler} className="input-control"/><br/><br/>
                     <div className="subscriber-info-container">
                         <span className="subscriber-to-add-heading">Subscriber to be added...</span><br/>
                         <span className="subscriber-info">Name:{name}</span><br/>
                         <span className="subscriber-info">Phone:{phone}</span><br/>
                     </div>
                 <button type="submit" className="btn add-btn">ADD</button>
                 </form>
              
             </div>
         </div>
      );
    };
    }
    export default AddSubscriber;