import './App.css'
import Available from './Components/Available'
import Banner from './Components/Banner'
import Footer from './Components/Footer'
import Newsletter from './Components/Newsletter'
import Players from './Components/Player/Players'
import Navigation from './Navigation/NavBar'

function App() {


  return (
    <>
      <div>
          <Navigation></Navigation>
          <Banner></Banner>
          <Available></Available>
           <Players></Players>
          <div className=''>
            <Newsletter></Newsletter>
          </div>
          <Footer></Footer>
      </div>
    </>
  )
}

export default App
