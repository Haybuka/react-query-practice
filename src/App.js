
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Nav from './components/nav';
import Homepage from './components/homepage';
import Superheroes from './components/superheroes';
import RQSuperHeroes from './components/rqSuperheroes';
import { ReactQueryDevtools } from 'react-query/devtools'
import RqSuperheroe from './components/rqSuperhero';
function App() {
  return (
    <div >
      <Nav />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='super-heroes' element={<Superheroes />} />
        <Route path='rq-super-heroes' element={<RQSuperHeroes />} />
        <Route path='rq-super-heroes/:heroId' element={<RqSuperheroe />} />
      </Routes>
      <ReactQueryDevtools initialIsOpen={false} />
    </div>
  );
}

export default App;
