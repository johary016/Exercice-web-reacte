import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  return (
  
    <div className="bg-gray-950 text-gray-800 h-115
    py-0">
      <section className='bg-blue-600 mt10-12 w-full h-18 flex flex-row flex justify-start' >
        <nav className='pt-5 w-1/2 ml-5 md:text-3xl text-yellow-600'> HEI</nav>
        <nav className='w-1/2 flex justify-end  pr-10 pt-2  ml-150 mt-2 mb-5 mr-5 border-t-2 border-t-yellow-600 border-l-2 border-l-yellow-600 border-b-2 border-b-yellow-600 border-r-2 border-r-yellow-600
        text-white  border-yellow-600 bg-yellow-600 text-1xl font-bold'>INTRANET</nav>
      </section>

        <section className="text-center mb-12 pt-15 text-gray-600">
        <h1 className="text-4xl md:text-5xl
 font-bold mb-4 text-blue-700">
          Haute École d’Informatique
        </h1>
        <p className="text-lg max-w-2xl mx-auto">
          L’éducation est l’arme la plus puissante
 pour changer le monde.
          HEI forme la prochaine génération d’experts
 en informatique à Madagascar.
        </p>
      </section>
      <section className="text-center  bg-gray800">
        <a
          href="/inscription"
className="bg-white text-white px-5
 py-2 rounded-full shadow-lg hover:bg-blue-700
 transition duration-300"
 >
 Iscriver vous ici
 </a>
 <a
          href="/inscription"
className="bg-yellow-600 text-white px-5
 py-2 rounded-full shadow-lg hover:bg-blue-700
 transition duration-300"
 >
Employ du temps
 </a>
 <a
          href="/inscription"
className="bg-blue-600 text-white px-5
 py-2 rounded-full shadow-lg hover:bg-blue-700
 transition duration-300"
 >
Employ du temps
 </a>
 </section>

    </div>
  )
}

export default App
