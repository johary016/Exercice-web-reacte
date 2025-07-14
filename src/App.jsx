import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  return (
    <div className="bg-white text-gray-800 px-6
    py-10">
        <section className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl
 font-bold mb-4 text-blue-700">
          Haute École d’Informatique – HEI
        </h1>
        <p className="text-lg max-w-2xl mx-auto
 text-gray-600">
          L’éducation est l’arme la plus puissante
 pour changer le monde.
          HEI forme la prochaine génération d’experts
 en informatique à Madagascar.
        </p>
      </section>

      <section className="grid md:grid-cols-3
 gap-6 text-center mb-12">
        <div className="bg-blue-50 rounded-2xl p-6
 shadow-md">
          <h2 className="text-2xl font-semibold
text-blue-600 mb-2">+3 ans</h2>
          <p>Depuis 2021 au service de l’excellence
 numérique.</p>
        </div>
        <div className="bg-blue-50 rounded-2xl p-6
 shadow-md">
          <h2 className="text-2xl font-semibold
 text-blue-600 mb-2">+250 étudiants</h2>
          <p>Formés dans l’IA, cybersécurité, et
 développement logiciel.</p>
        </div>
        <div className="bg-blue-50 rounded-2xl p-6
 shadow-md">
          <h2 className="text-2xl font-semibold
 text-blue-600 mb-2">État reconnu</h2>
          <p>Habilitée par le MESupRES – Arrêté
 n°31309/2023.</p>
        </div>
      </section>

      <section className="mb-12">
        <h3 className="text-3xl font-bold
 text-center mb-6">Domaines de formation</h3>
        <ul className="grid md:grid-cols-2 gap-4
 list-disc list-inside text-gray-700">
          <li>Développement Web & Mobile
 (frontend / backend)</li>
          <li>Cybersécurité & Cloud computing</li>
          <li>Intelligence Artificielle & Machine
 Learning</li>
          <li>Admin Systèmes & Réseaux / DevOps</
 li>
        </ul>
      </section>
      
    </div>
  )
}

export default App
