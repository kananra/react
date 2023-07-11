import './App.css';
import Header from './components/Header';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import HomeIndex from './pages/HomeIndex'
import Details from './pages/Details'

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path='/' element={<HomeIndex/>}/>
      <Route path='/details/:name' element={<Details/>}/>
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App;
