import React,{Component} from 'react'


class AddItems extends Component{
   
    state={
        name:'',
        description:''
    }
handleChange=(e)=>{
        this.setState({
        [e.target.id]:e.target.value
    })
}

handleSubmit=(e)=>{
e.preventDefault();
console.log(this.state)
if(this.state.description===''|| this.state.name===''){
    return false
}else{
    // this.props.addItem(this.state)
    //     this.setState({
    //         name:'',
    //         description:''
    //     })
    this.props.sendItem('/',{name:this.state.name,description:this.state.description}).then(data=>{
        if(data == 1){
            this.props.addItem(this.state)
        this.setState({
            name:'',
            description:''
        })
        }else{
           alert('server error'); 
        }
        
    }).catch(error=>{
        alert('server error'); 
        console.log(error)
    })

}
}

    render(){
        return(
            <div>
                <form >
                    <input type="text" placeholder="Enter Name..." id="name" onChange={this.handleChange} value = {this.state.name}/>
                    <input type="text" placeholder="Enter description.." id="description" onChange={this.handleChange}
                        value= {this.state.description}
                    />
                    <button onClick={this.handleSubmit}  >add</button>
                </form>
            </div>
        )
    }


}
export default AddItems;