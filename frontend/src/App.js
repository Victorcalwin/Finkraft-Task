import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Table from './Component/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';

function App() {
  return (
    <div className="App">
       <BrowserRouter>
      <Routes>
        <Route path="/" element={<Table />}>
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
