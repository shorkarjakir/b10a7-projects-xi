import './App.css'
import Available from './Components/Available'
import Banner from './Components/Banner'
import Footer from './Components/Footer'
import Newsletter from './Components/Newsletter'
import Navigation from './Navigation/NavBar'

function App() {


  return (
    <>
      <div>
          <Navigation></Navigation>
          <Banner></Banner>
          <Available></Available>

          <div className='relative'>
            <Newsletter></Newsletter>
          </div>
          <Footer></Footer>
      </div>
    </>
  )
}

export default App
