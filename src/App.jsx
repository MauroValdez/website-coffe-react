import '@fontsource/kanit/400.css'
import '@fontsource/kanit/500.css'
import '@fontsource/kanit/600.css'
import '@fontsource/lobster-two/400.css'
import '@fontsource/lobster-two/700.css'

import Header from './layout/Header/Header'
import Home from './layout/Home/Home'
import About from './layout/About/About'
import Features from './layout/Features/Features'

function App() {
  return (
    <>
      <Header />
      <Home />
      <About />
      <Features />
    </>
  )
}

export default App
