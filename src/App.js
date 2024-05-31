import React from 'react'
import { HashRouter as Router, Route, Routes } from 'react-router-dom'

import Header from './components/Header'
import Footer from './components/Footer'
import Presentation from './pages/Presentation/index.jsx'
import Accueil from './pages/Accueil'
import Competences from './pages/Competences'
import Projets from './pages/Projets'
import Contacts from './pages/Contacts'

function App() {
    return (      
    <Router>
          <Header />
          <Routes>
              <Route path="/accueil" component={Accueil} element={<Accueil />} />
              <Route path="/presentation" component={Presentation} element={<Presentation />} />
              <Route path="/competences" component={Competences} element={<Competences />} />
              <Route path="/projets" component={Projets} element={<Projets />} />
              <Route path="/contacts" component={Contacts} element={<Contacts />} />
              <Route path="*" component={Accueil} element={<Accueil />} />
          </Routes>
          <Footer />
    </Router>
    )}
    
export default App 