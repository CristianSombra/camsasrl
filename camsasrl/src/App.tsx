import { Suspense } from 'react';
import AppRouter from './routes/AppRouter';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css'

function App() {

  return (
    <Suspense>
      <AppRouter/>
    </Suspense>
  )
}

export default App
