import React, { useState } from 'react'
import './App.css';
import List from './List';

function App() {

  const[inputItems,setinputItems]=useState();
  const[items,setItems]=useState([]);

  const itemsEvent =(event)=>{ 
    setinputItems(event.target.value)
  }

  const SubmitItems =() =>{
    setItems((olditems)=>{
      return[...olditems,inputItems]
    })
    setinputItems(" ");
  }
  const deleteItems =(id)=>{
    console.log("deleteItems")

    setItems((olditems)=>{
      return olditems.filter((arrElem,index)=>{
        return index !== id;
      });
    });
  }
  return (
    <>
      <div class="main_div">
        <div class="center_div">
        <h1>ToDo-App</h1>
          <input type="text" placeholder="Add the Items "
          onChange={itemsEvent}
          value={inputItems}
           />
          <button onClick={SubmitItems}> + </button>
          <ol>
            {
              items.map((data,index)=>{
                return(
                  <List 
                    key={index}
                    id={index}
                    text={data}
                    onSelect={deleteItems}

                    />)
              })
            }
          </ol>
        </div>
      </div>
    </>
  );
}
export default App;

