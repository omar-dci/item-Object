const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const itemSchema = new Schema({
    item: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
});
let Item = mongoose.model('items', itemSchema);

function connect() {
    const connectPromise = new Promise((resolve, reject)=>{
        if (mongoose.connection.readyState != 1) {
            mongoose.connect('mongodb+srv://omar:F6KXfQnNjEp82l30@cluster0-rqkxs.mongodb.net/myDB?retryWrites=true&w=majority', {
                useNewUrlParser: true,
                useCreateIndex: true
            }).then(() => {
                resolve();
            }).catch(error => {
                reject(error);
            })
        } else {
            resolve();
        }
    });
    return connectPromise;
    
  }

  function addItem(name, description){
      const addPromise = new Promise((resolve, reject)=>{
        connect().then(() => {
            let newItem = new Item({
                item: name,
                description: description
               
            });
            newItem.save().then(savedItem => {
                resolve(savedItem);
            }).catch(error => {
                reject(error);
            });
        }).catch(error => {
            reject(error);
        })
      });
      return addPromise;
    
  }
  function getData(){
    const getPromise = new Promise((resolve, reject)=>{
      connect().then(() => {
          
        Item.find().then(savedItems => {
              resolve(savedItems);
          }).catch(error => {
              reject(error);
          });
      }).catch(error => {
          reject(error);
      })
    });
    return getPromise;
  
}

  module.exports = {
      addItem,
      getData
  }