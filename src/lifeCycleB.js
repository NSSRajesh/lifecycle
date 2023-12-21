import React, { Component } from 'react';


class LifecycleB extends Component{
    constructor(props){
        super(props);
        this.state={
            count:0,
        }
        console.log("I am LifecycleB Constructor");
    }

    static getDrivedStateFromProps(props,state){
        console.log("I am LifecycleB getDrivedStateFromProps")
    }

    componentDidMount(){
        console.log("I am LifecycleB ComponentDidmount")
    }

    shouldComponentUpdate(){
        console.log("I am LifecycleB ShowComponentUpdate")
        return true;
    }

    componentDidUpdate(prevProps,prevState){
        console.log("I am LifecycleB componentDidUpdate")
    }

    changeState(){
        this.setState({
            count:this.state.count+1,
        })
    }

    render(){
        console.log("I am LifecycleB render")
        return(
            <div>
                <h2>I am lifecycle</h2>
                <button onClick={()=>this.changeState()}>change</button>
                <h2>{this.state.count}</h2>
               
            </div>
        )
    }
}

export default LifecycleB;