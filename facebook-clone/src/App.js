import './App.css';
import Header from './Header'
import Sidebar from './sidebar'
import Feed from './Feed'
import Widgets from './Widgets'
import Login from './Login'
function App() {
  const user = null;
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
