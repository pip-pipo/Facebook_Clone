import './App.css';
import Header from './Header'
import Sidebar from './sidebar'
import Feed from './Feed'
function App() {
  return (
    <div className="App">
      {/* header */}
      <Header />
      <div className="app__body">


        {/* slider */}

        <Sidebar />

        {/* feed */}
        <Feed />


        {/* widgets */}


      </div>
    </div>
  );
}

export default App;
