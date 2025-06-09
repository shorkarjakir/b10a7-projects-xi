import './App.css'
import Available from './Components/Available'
import Banner from './Components/Banner'
import Newsletter from './Components/Newsletter'
import Navigation from './Navigation/NavBar'

function App() {


  return (
    <>
      <div>
          <Navigation></Navigation>
          <Banner></Banner>
          <Available></Available>

          <Newsletter></Newsletter>
      </div>
    </>
  )
}

export default App
