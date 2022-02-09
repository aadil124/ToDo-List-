// import React, { useState } from "react";
// import "./index.css";
// import ToDoList from "./ToDoList";


// const App = () => {
//   const [inputList, setInputList] = useState("");

//   const [listItems, setListItems] = useState([]);
//   const [errorMesg,setErrorMesg]= useState("");

//   const inputEvents = (event) => {
//     setInputList(event.target.value);
//     if(event.target.value){
//       setErrorMesg("");
//     }else{
//       setErrorMesg("Please Enter Value");
//     }
//   };
//   const addItems = () => {
//     if(inputList){
//       setListItems((oldVal) => {
//         return [...oldVal, inputList];
//       });
//       setInputList("");
//     }else{
//       setErrorMesg("Please Enter Value");
//     }

    
  
//   };
//   const deleteItems = (id) => {
//     setListItems((oldVal) => {
//       return oldVal.filter((arrElement, index) => {
//         return index !== id;
//       });
//     });
//   };

//   return (
//     <>
//       <div className="main_div">
//         <div className="center_div">
//           <br />
//           <h1> ToDo List</h1>
//           <br />
//           <input
//             type="text"
//             placeholder="Add Items"
//             onChange={inputEvents}
//             value={inputList}
//           />
//           <button className="Add_btn" onClick={addItems}>
//             +
//           </button>
//           <span className="span">{errorMesg}</span>
//           <br />
//           <ol>
//             {listItems.map((itemval, index) => {
//               return (
//                 <ToDoList
//                   text={itemval}
//                   key={index}
//                   id={index}
//                   onSelect={deleteItems}
//                 />
//               );
//             })}
//           </ol>
//         </div>
//       </div>
//     </>
//   );
// };

// export default App;






/*------------------------------------------------Todo List using Materials UI------------------------------------*/

import React, { useState } from "react";
import "./index.css";
import ToDoList from "./ToDoList";
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';


const App = () => {
  const [inputList, setInputList] = useState("");

  const [listItems, setListItems] = useState([]);
  const [errorMesg,setErrorMesg]= useState("");

  const inputEvents = (event) => {
    setInputList(event.target.value);
    if(event.target.value){
      setErrorMesg("");
    }else{
      setErrorMesg("Please Enter Value");
    }
  };
  const addItems = () => {
    if(inputList){
      setListItems((oldVal) => {
        return [...oldVal, inputList];
      });
      setInputList("");
    }else{
      setErrorMesg("Please Enter Value");
    }

    
  
  };
 

  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <br />
          <h1> ToDo List</h1>
          <br />
          <input
            type="text"
            placeholder="Add Items"
            onChange={inputEvents}
            value={inputList}
          />
          <Button id="Add_btn" onClick={addItems}>
            <AddIcon/>
          </Button>
          <span className="span">{errorMesg}</span>
          <br />
          <ol>
            {listItems.map((itemval, index) => {
              return (
                <ToDoList
                  text={itemval}
                  key={index}
                />
              );
            })}
          </ol>
        </div>
      </div>
    </>
  );
};

export default App;
