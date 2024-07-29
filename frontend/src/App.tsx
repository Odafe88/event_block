import { FC } from 'react'
import './App.css'
import Header from './components/Header'
import { Outlet } from 'react-router-dom';

interface AppProps {
  title: string;
}

const App: FC<AppProps> = () => {

  return (
    <>
      <div className="w-full h-screen">
        <Header />
        <Outlet />
      </div>
    </>
  )
}
// bg-gradient-to-br from-blue-800 to-slate-500
export default App
