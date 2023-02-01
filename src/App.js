import { useState } from 'react';
import './App.css';
import FormInput from './components/FormInput/FormInput';
import NewList from './components/newList/NewList';

function App() {

  const [list, setList] = useState([])
 
  const AddNewList = (data) => {
    console.log(data);
    const updateList = [...list]
    updateList.push(data)
    setList(updateList)
  }
  
  list.sort((a,b)=>{
    return b.ageInp - a.ageInp
  })

  console.log(list);
     
  return (
    <div className="App">
    <FormInput onNewList={AddNewList}/>
    <NewList list={list}/>
    </div>
  );
}

export default App;
