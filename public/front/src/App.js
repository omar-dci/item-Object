import React,{Component} from 'react';
import ToDoItems from './components/ToDoItems/toDoItems';
import AddItems from './components/AddItems/addItem';


class App extends Component {
  state= {
    items : [
      {id:1,item:'Mohamad',description:26},
      {id:2,item:'Alex',description:20},
      {id:3,item:'Nour',description:29}
    ],
    show:false,
    postData : (url, data)=> {
      return fetch(url, {
          method: 'POST', // GET, PUT, DELETE, etc
          mode: 'cors', // no-cors, same-origin
          cache: 'no-cache', //default, reload, force-cache
          credentials: 'same-origin', // include, same-origin, omit
          headers: {
              'Content-Type': 'application/json'
              // if you are using GET you need to use this option
              // content-Type': 'applicatoin/X-www-form-urlencoded'
          },
          redirect: 'follow', // manual, error,
          referrer: 'no-referrer', // client
          body: JSON.stringify(data),
      }).then((response) => {
          return response.json();
      });
  }
  }


  deleteItem = (id)=>{
let items=this.state.items.filter(item =>{
  
  return( item.id !== id);
  
});
this.setState({items})
  }
  
  addItem=(item)=>{
    item.id=Math.random();
    this.state.items.push(item);
  }
   hide=()=>{
 if(this.state.show){
this.setState({
  show:false
})
  }else{
    this.state.postData('/getdata',{}).then(data=>{
      this.setState({
        items:data,
        show:true
      })
    }).catch(error=>{
      this.setState({
        show:true
      })
    });
    
  }
  }
  render(){
    if(this.state.show){

    
    return(
    <div className="App container">
      <h1 className="text-center">Items</h1>
      <ToDoItems items={this.state.items} deleteItem={this.deleteItem} showItem={true} />
      <AddItems addItem={this.addItem} sendItem={this.state.postData}  />
      <button onClick={()=>this.hide()}>Show/Hide</button>
    </div>
    
    )}else{
      return(
        <div className="App container">
      <h1 className="text-center">Items</h1>
      <AddItems addItem={this.addItem} sendItem={this.state.postData}/>
      <button onClick={()=>this.hide()}>Show/Hide</button>
</div>
      )}
  
  };
}

export default App;

//sendItem={this.postData}