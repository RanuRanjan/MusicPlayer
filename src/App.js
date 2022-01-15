import './App.css';
import Home from './components/Home';
import Navba from './components/Navbar';
import Ritviz from './components/Artists/Ritviz';
import Pritam from './components/Artists/Pritam';
import Eminem from './components/Artists/Eminem';
import Mithun from './components/Artists/Mithun';
import Papon from './components/Artists/Papon';
import Badshah from './components/Artists/Badshah';
import {Route, Switch } from  'react-router-dom';

function App() {
  // const  songs= async function() {
  //     let res= await fetch("http://localhost:3000/HipHop")
  //     let data= res.json()
  //     console.log(data);

  
  return (
    <>
       <Switch>
         <Route path='/' exact>
            <Home/>
         </Route>
         <Route path='/ritviz' exact>
            <Ritviz/>
         </Route>
         <Route path='/badshah' exact>
            <Badshah/>
         </Route>
         <Route path='/papon' exact>
            <Papon/>
         </Route>
         <Route path='/eminem' exact>
            <Eminem/>
         </Route>
         <Route path='/pritam' exact>
            <Pritam/>
         </Route>
         <Route path='/mithun' exact>
            <Mithun/>
         </Route>
         </Switch>
    </>
  );
}

export default App;
