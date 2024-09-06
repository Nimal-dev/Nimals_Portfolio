import {BrowserRouter,Route, Routes} from 'react-router-dom'
import './App.css';
import Portfolio_page from './Components/MainPage/Portfolio_page';

function App() {
  return (
   <BrowserRouter>
   <Routes>
<>
    <Route path="/" element={<Portfolio_page/>} />
</>
   </Routes>
   </BrowserRouter>
  );
}

export default App;
