import './App.css';
import {Home} from "./containers/Home";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Piece from "./containers/Piece";
import NavBar from "./NavBar";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <BrowserRouter>
                    <Routes>
                        <Route path='*' element={<Home/>}/>
                        <Route path='/piece' element={<><NavBar/><Piece/></>}/>
                    </Routes>
                </BrowserRouter>
            </header>
        </div>
    );
}

export default App;