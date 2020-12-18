import React from 'react';
import './App.css';
import Header from './Header'
import Sidebar from './sidebar'
import Feed from './Feed'
import Widgets from './Widgets'
import Login from './Login'
import {useStateValue} from './StateProvider'
function App() {
  const [{user},dispatch] = useStateValue();

  return (
    <div className="App">
      {/* header */}
      {!user ? (<Login />):(


<>
 <Header />
      <div className="app__body">


        {/* slider */}

        <Sidebar />

        {/* feed */}
        <Feed />


        {/* widgets */}
        <Widgets />

      </div>



</>
      )}
     
    </div>
  );
}

export default App;
