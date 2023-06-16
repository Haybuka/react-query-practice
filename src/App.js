
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Nav from './components/nav';
import Homepage from './components/homepage';
import Superheroes from './components/superheroes';
import RQSuperHeroes from './components/rqSuperheroes';
import { ReactQueryDevtools } from 'react-query/devtools'
import RqSuperheroe from './components/rqSuperhero';
import ParallelQueries from './components/parallelQueries';
import RQDynamicParallel from './components/rqDynamicParallel';
import DependentQueries from './components/dependentQueries';
function App() {
  return (
    <div >
      <Nav />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='super-heroes' element={<Superheroes />} />
        <Route path='rq-parallel' element={<ParallelQueries />} />
        <Route path='rq-dynamic-parallel' element={<RQDynamicParallel />} />
        <Route path='rq-dependent' element={<DependentQueries email="vishwas@example.com" />} />
        <Route path='rq-super-heroes' element={<RQSuperHeroes />} />
        <Route path='rq-super-heroes/:heroId' element={<RqSuperheroe />} />
      </Routes>
      <ReactQueryDevtools initialIsOpen={false} />
    </div>
  );
}

export default App;
