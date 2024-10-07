import './App.css'
import TelaLoginBemVindo from './components/TelaLoginBemVindo'
import TelaLoginLeft from './components/TelaLoginLeft'
import TelaLoginRight from './components/TelaLoginRight'
import Sidebar from './components/sidebar'
import Home from './components/home'


function App() {
  return (
    <>
      <TelaLoginLeft />
      <TelaLoginRight />

      {/*
      <Sidebar />
      */}
    </>
  )
}

export default App
