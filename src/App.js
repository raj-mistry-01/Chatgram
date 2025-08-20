import './App.css';
// import Navbar from './components/Navbar';
// import Login from './components/Login';
// import SignUp from './components/SignUp';
// import Chat from './components/Chat';
// import AddFreinds from './components/AddFreinds';
// import Notificaionforauser from './components/Notificaionforauser';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route} from 'react-router-dom';
// import FetchAllUserState from './context/FetchAllUserState';
// import Socketstate from './context/Socketstate';

import { lazy, useEffect , useState } from 'react';

function App() {
  const [records, setrecords] = useState([])
  const [loading, setloading] = useState(true)
  useEffect(()=> {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then(response => response.json())
    .then(data => {
      setrecords(data)
      setloading(false)
    })
  } , [])
  return (
    // <Socketstate>
    //   <Router>
    //   <Navbar/>
    //   <Routes>
    //   <Route exact path='/' element={<SignUp/>}></Route>
    //     <Route exact path='/login' element={<Login/>}></Route>
    //     <Route exact path='/signup' element={<SignUp/>}></Route>
    //     <Route exact path='/addfriends' element={<FetchAllUserState><AddFreinds/></FetchAllUserState>}></Route>
    //     <Route exact path="/chatpage" element = {<Chat></Chat>}></Route>
    //     <Route exact path="/notifications" element = {<Notificaionforauser></Notificaionforauser>}></Route>
    //   </Routes>
    // </Router>
    // </Socketstate>
    <>
    <h1>
      {
        loading ?
        ("Loading ....") 
        : 
        ( records &&
           records.userId
        )
      }
    </h1>
    </>
  );
}

export default App;
