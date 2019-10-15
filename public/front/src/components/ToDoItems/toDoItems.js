import React from 'react'

const ToDoItems = (props)=>{
const items = props.items;
const deleteItem=props.deleteItem;
let length= items.length;
// if there is no items to show then show Pargraph
const listItems = length ?
( items.map(item => {
    return(
<div key={item.id}>
<span className="item">{item.item}</span>
<span className="descriptionAction">{item.description}</span>
<span className="action icon" onClick={()=> deleteItem(item.id)}>&times;</span> 



    </div>
            )

}))
//No items in the Array
    :(<p>There is No Items to Show</p>)
    return(
<div className="ListItems">

    <div>
    <span className="item title">Item name</span>
    <span className="description title">Description</span>
    <span className="action title">Action</span>
    </div>

{listItems}
</div>
    )
}

export default ToDoItems;