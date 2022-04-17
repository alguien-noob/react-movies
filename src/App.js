import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom'
import style from './App.module.css'
import { LandingPage } from './pages/LandingPage';
import { MovieDetails } from './pages/MovieDetails';
function App() {
    return (
        <Router>
            <header>
                <Link to=''>
                    <h1 className={style.title}>Movies</h1>
                </Link>
            </header>
            <main>
                <Routes>
                    <Route path='' element={<LandingPage />} />
                    <Route path='movie/:id' element={<MovieDetails />} />
                </Routes>
            </main>
        </Router>
    );
}

export default App;
