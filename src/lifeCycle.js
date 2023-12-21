import React, { Component } from 'react';
import LifecycleB from './lifeCycleB';


class Lifecycle extends Component{
    constructor(props){
        super(props);
        this.state={
            count:0,
        }
        console.log("I am Lifecycle Constructor");
    }

    static getDrivedStateFromProps(props,state){
        console.log("I am Lifecycle getDrivedStateFromProps")
        return null;
    }

    componentDidMount(){
        console.log("I am Lifecycle ComponentDidmount")
    }

    shouldComponentUpdate(){
        console.log("I am Lifecycle ShowComponentUpdate")
        return true;
    }

    componentDidUpdate(prevProps,prevState){
        console.log("I am Lifecycle componentDidUpdate")
    }

    changeState=()=>{
        this.setState({
            count:this.state.count+1,
        })
    }

    decState=()=>{
        this.setState({
            count:this.state.count>0?this.state.count-1:0,
        })
    }

    render(){
        console.log("I am Lifecycle render")
        return(
            <div className='con'>
                <div className='row'>
                    <div className='col'>
                        <div className='card'>
                            <h2>{this.state.count} lifecycle</h2>
                        </div>
                        <div className='btn-card'>
                            <button className="up" onClick={()=>this.changeState()}><i class="bi bi-arrow-up-circle"></i></button>
                            <button className="down" onClick={()=>this.decState()}><i class="bi bi-arrow-down-circle"></i></button>  
                        </div>
                             
                    </div>
                </div>
                
                
                {/* <LifecycleB /> */}
            </div>
        )
    }
}

export default Lifecycle;