// Import data
import {postings} from './postings'
// Import components
import './App.css';
import Directory from './directory'
import Gallery from './gallery'
import Searchbar from './searchbar'
import Sidebar from './sidebar'

function App(){
  return (
    <div>
      <div className="App">
        <Searchbar />
        <Directory />
        <Sidebar />
        <Gallery postings={postings} />
      </div>
    </div>
  );
}

export default App;
