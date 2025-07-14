import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  return (
    <div className="bg-white text-gray-800">
    {/* NAVBAR */}
    <nav className="bg-blue-600 bg-opacity-70 text-white px-6 py-4 fixed top-0 left-0 w-full z-50 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-xl font-bold">HEI</div>
        <ul className="hidden md:flex gap-8 font-medium">
          <li className="hover:text-yellow-400 transition"><a href="#">Actualités</a></li>
          <li className="hover:text-yellow-400 transition"><a href="#">Bourse d'études</a></li>
          <li className="hover:text-yellow-400 transition"><a href="#">Inscription</a></li>
          <li className="hover:text-yellow-400 transition"><a href="#">Intranet</a></li>
        </ul>
      </div>

      {/* Menu Mobile visible tout le temps (pas de JS) */}
      <div className="md:hidden mt-4 space-y-4 text-center">
        <a href="#" className="block hover:text-yellow-400">Actualités</a>
        <a href="#" className="block hover:text-yellow-400">Bourse d'études</a>
        <a href="#" className="block hover:text-yellow-400">Inscription</a>
        <a href="#" className="block hover:text-yellow-400">Intranet</a>
      </div>
    </nav>

    {/* ACCUEIL */}
    <div
      className="relative h-screen bg-cover bg-center"
      style={{ backgroundImage: `url('https://via.placeholder.com/1600x900')` }}>
      <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-center items-center text-white text-center px-4 pt-24">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Haute École d'Informatique</h1>
        <p className="text-lg md:text-xl max-w-2xl mb-6">
          Une infrastructure de qualité et un programme pédagogique qui répond au besoin du marché
          pour l’employabilité de nos étudiants.
        </p>
        <div className="flex flex-wrap justify-center gap-4 mb-6">
          <button className="bg-white text-black font-semibold px-4 py-2 rounded hover:bg-gray-200 transition">Envoyez-vous ici</button>
          <button className="bg-yellow-400 text-black font-semibold px-4 py-2 rounded hover:bg-yellow-300 transition">Inscription</button>
          <button className="bg-blue-600 text-white font-semibold px-4 py-2 rounded hover:bg-blue-500 transition">Programme pédagogique</button>
        </div>
        <p className="text-sm opacity-80">Habilitation MESupRES, suivant l’arrêté N°15309/2020</p>
      </div>
    </div>

    <div className="flex flex-col md:flex-row items-center justify-center gap-10 p-8 bg-white text-[#1a237e]">
      {/* Section Image */}
      <div className="flex gap-4">
        <img
          src="photo1.jpg"
          alt="Salle de classe HEI"
          className="w-64 h-auto rounded-lg shadow-md"
        />
        <img
          src="photo1.jpg"
          alt="Étudiants HEI"
          className="w-64 h-auto rounded-lg shadow-md border-4 border-white -ml-10"
        />
      </div>

      {/* Section Texte */}
      <div className="max-w-xl space-y-6">
        <h2 className="text-3xl font-bold">À propos de nous</h2>

        <div className="flex items-start gap-4">
          <span className="text-yellow-500 text-2xl">🎓</span>
          <div>
            <h3 className="font-bold text-lg">+3 ans</h3>
            <p>
              Depuis 3 ans, nous formons ceux qui décryptent le futur, aux
              métiers de l’informatique. Nous sommes un groupe d’experts,
              de professionnels et de passionnés de l’informatique de
              Madagascar et du monde entier.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <span className="text-yellow-500 text-2xl">👥</span>
          <div>
            <h3 className="font-bold text-lg">+250 étudiants</h3>
            <p>
              Plus de 250 étudiants et plus d’une dizaine d’entreprises nous
              font confiance. Notre formation est habilitée par l’État
              malgache. Ensemble, nous formons la “grande famille HEI”.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <span className="text-yellow-500 text-2xl">🎯</span>
          <div>
            <h3 className="font-bold text-lg">Notre mission</h3>
            <p>
              Amener les jeunes malgaches vers des domaines porteurs comme
              l’intelligence artificielle, la cybersécurité et la programmation,
              afin d’améliorer leur employabilité et contribuer au développement
              du pays.
            </p>
          </div>
        </div>
      </div>
    </div>

    {/* ÉQUIPE PÉDAGOGIQUE */}
    <section className="bg-gradient-to-b from-blue-900 to-blue-600 text-white py-16">
      <h2 className="text-3xl font-bold text-center mb-10">L’équipe pédagogique</h2>
      <p>Notre équipe pédagogique se compose d’experts nationaux et internationaux de l’informatique, de la cybersécurité, de l’intelligence artificielle, dont un ingénieur chez Google. Ils sont passionnés par l’informatique et sont engagés vers l’excellence. Nous sommes conscients que cette équipe est la pierre angulaire de l’employabilité de nos étudiants, elle a été soigneusement sélectionnée.</p>
      <div className="flex justify-center gap-8 flex-wrap">
        <div className="bg-white text-black rounded-lg shadow-lg p-6 w-64 text-center">
          <img src="/img1.jpg" alt="Dr. Léo Mioriny" className="w-24 h-24 mx-auto rounded-full mb-4" />
          <h3 className="font-semibold text-lg">Dr. Léo Mioriny</h3>
          <p className="text-sm">Enseignant chercheur</p>
        </div>
        <div className="bg-white text-black rounded-lg shadow-lg p-6 w-64 text-center">
          <img src="/img2.jpg" alt="Mickaël RAKOTONARIVO" className="w-24 h-24 mx-auto rounded-full mb-4" />
          <h3 className="font-semibold text-lg">Mickaël RAKOTONARIVO</h3>
          <p className="text-sm">Ingénieur logiciel</p>
        </div>
        <div className="bg-white text-black rounded-lg shadow-lg p-6 w-64 text-center">
          <img src="/img3.jpg" alt="Julien RAFIDISON" className="w-24 h-24 mx-auto rounded-full mb-4" />
          <h3 className="font-semibold text-lg">Julien RAFIDISON</h3>
          <p className="text-sm">Enseignant développeur</p>
        </div>
      </div>
    </section>

    {/* DÉBOUCHÉS */}
    <section className="py-16 bg-yellow-50">
      <h2 className="text-2xl font-bold text-center mb-6">Quelques débouchés</h2>
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8 px-4">
        <div className="flex-1">
          <p className="text-gray-700 text-justify">
            Formez-vous pour prendre des décisions stratégiques dans une ère où il est crucial de maîtriser les technologies numériques afin de rester compétitif.
            Que ce soit en gestion de projet, data science, développement ou cybersécurité, de belles carrières vous attendent !
          </p>
        </div>
        <div className="flex-1">
          <img src="/etudiante.jpg" alt="Étudiante" className="rounded-lg shadow-md w-full" />
        </div>
      </div>
    </section>

    
    {/* Section Admission */}
  <section className="bg-blue-900 text-white py-12 px-4 text-center">
    <h2 className="text-3xl font-bold mb-4">Admission</h2>
    <p className="max-w-3xl mx-auto text-gray-200">
      Ouverte aux bacheliers de toutes les séries, l’admission chez HEI se fait par test de niveau : une épreuve de français niveau B2 et une épreuve de mathématiques niveau Terminale D.
    </p>

    <div className="grid md:grid-cols-3 gap-6 mt-10">
      <div className="bg-yellow-300 text-black p-6 rounded-xl shadow">
        <h3 className="text-2xl font-bold mb-2">01</h3>
        <p><strong>Dépôt de dossier</strong> : pour les bacheliers de toutes séries sans limite d’âge</p>
      </div>
      <div className="bg-yellow-300 text-black p-6 rounded-xl shadow">
        <h3 className="text-2xl font-bold mb-2">02</h3>
        <p><strong>Test de niveau</strong> : épreuve de français niveau B2 + mathématiques Terminale D</p>
      </div>
      <div className="bg-yellow-300 text-black p-6 rounded-xl shadow">
        <h3 className="text-2xl font-bold mb-2">03</h3>
        <p><strong>Inscription définitive</strong> : si test réussi</p>
      </div>
    </div>

{/* Section Domaines */}
<section className="py-12 px-4 bg-white text-center">
    <h2 className="text-3xl font-bold mb-4 text-blue-900">Domaines</h2>
    <p className="text-gray-600 max-w-3xl mx-auto">
      Au cours de vos trois ans de formation, naviguez entre les domaines les plus porteurs du numérique du présent et de l’avenir :
    </p>

    <div className="grid md:grid-cols-3 gap-8 mt-10">
      {/* Domaine 1 */}
      <div className="bg-gray-50 shadow p-6 rounded-xl hover:shadow-lg transition">
        <h3 className="text-xl font-semibold text-yellow-600 mb-4">Cloud et cybersécurité</h3>
        <p className="text-gray-700 text-sm">
          Maîtrisez les outils en ligne interconnectés (comme AWS). Devenez maître de la sécurisation des données, des programmes et des applications contre les cybermenaces.
        </p>
      </div>
      {/* Domaine 2 */}
      <div className="bg-gray-50 shadow p-6 rounded-xl hover:shadow-lg transition">
        <h3 className="text-xl font-semibold text-yellow-600 mb-4">Intelligence artificielle</h3>
        <p className="text-gray-700 text-sm">
          Découvrez la reconnaissance faciale, la détection d’obstacles et plus encore. Apprenez les bases de l’intelligence artificielle avec HEI.
        </p>
      </div>
      {/* Domaine 3 */}
      <div className="bg-gray-50 shadow p-6 rounded-xl hover:shadow-lg transition">
        <h3 className="text-xl font-semibold text-yellow-600 mb-4">Ingénierie logicielle</h3>
        <p className="text-gray-700 text-sm">
          Apprenez à concevoir des applications web et mobile, à résoudre des problèmes et à développer des solutions logicielles innovantes.
        </p>
      </div>
    </div>
  </section>

    <div className="mt-8 flex justify-center gap-4">
      <button className="bg-blue-500 text-white font-semibold px-6 py-2 rounded hover:bg-blue-600 transition">
        Inscrivez-vous ici
      </button>
      <button className="bg-gray-800 text-white font-semibold px-6 py-2 rounded hover:bg-gray-900 transition">
        Résultat concours
      </button>
    </div>
  </section>
    <div className="font-sans">
  

  {/* Section Programme pédagogique */}
  <section className="py-16 px-4 bg-white text-center">
    <div className="max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold text-blue-900 mb-4">Le programme pédagogique</h2>
      <p className="text-gray-600 mb-6">
        Suivant le système LMD, jusqu’au Master, notre formation repose sur un programme pédagogique conçu en adéquation avec les attentes du marché. La formation est sanctionnée par un diplôme de Licence et de Master en informatique reconnu par le MESupRes de Madagascar.
      </p>
      <button className="bg-white border border-blue-800 text-blue-900 px-4 py-2 rounded hover:bg-blue-800 hover:text-white transition">
        Notre Programme
      </button>

      {/* Méthodes d'apprentissage */}
      <div className="grid md:grid-cols-4 gap-4 mt-10 text-left">
        {[
          "Apprentissage théoriques en présentiel",
          "Apprentissage sur supports numériques",
          "Travaux individuels de l’étudiant",
          "Apprentissage en entreprise",
        ].map((title, index) => (
          <div key={index} className="bg-yellow-100 p-4 rounded-lg shadow-sm">
            <h3 className="text-2xl font-bold text-yellow-600 mb-2">25%</h3>
            <p className="text-gray-800 text-sm">{title}</p>
          </div>
        ))}
      </div>

      {/* Emplacement pour images */}
      <div className="grid md:grid-cols-3 gap-4 mt-10">
        <img
          src="/images/cours-1.jpg" // Remplacer par votre image
          alt="Cours 1"
          className="rounded-lg"
        />
        <img
          src="/images/cours-2.jpg" // Remplacer par votre image
          alt="Cours 2"
          className="rounded-lg"
        />
        <img
          src="/images/cours-3.jpg" // Remplacer par votre image
          alt="Cours 3"
          className="rounded-lg"
        />
      </div>
    </div>
  </section>

  {/* Section Technos utilisées (sans JS) */}
  <section className="bg-gray-100 py-16 px-4 text-center">
    <h2 className="text-3xl font-bold text-blue-900 mb-6">Les technos et langages utilisés</h2>
    <p className="text-gray-600 max-w-3xl mx-auto mb-10">
      Nos étudiants sont formés à l’utilisation et à la maîtrise des langages de programmation Java et Python. Ces deux langages occupent une place de choix dans le développement logiciel et du web.
    </p>

    {/* Logos technos (modifiables) */}
    <div className="flex flex-wrap justify-center items-center gap-8">
      {["java", "python", "c", "docker", "aws", "serverless", "openapi"].map((tech, i) => (
        <div key={i} className="w-16 h-16 flex items-center justify-center">
          <img
            src={`/logos/${tech}.png`} // Remplacer par vos logos
            alt={tech}
            className="w-12 h-12 object-contain"
          />
        </div>
      ))}
    </div>
  </section>

  

  {/* Section Partenaires */}
  <section className="py-16 px-4 text-center bg-white">
    <h2 className="text-3xl font-bold text-blue-900 mb-4">Nos partenaires</h2>
    <p className="text-gray-600 max-w-2xl mx-auto mb-10">
      L’employabilité de nos étudiants se base sur la pertinence de notre programme pédagogique
      et la composition de notre corps enseignant mais aussi du soutien et la collaboration des entreprises partenaires.
    </p>

    <div className="flex flex-wrap justify-center items-center gap-6">
      {[
        "ispa", "passerelles", "yooz", "etech", "emit",
        "numer", "bpartners", "yf", "kantech", "autre"
      ].map((logo, i) => (
        <img
          key={i}
          src={`/partenaires/${logo}.png`} // Remplacer par vos logos partenaires
          alt={logo}
          className="h-12 object-contain"
        />
      ))}
    </div>
  </section>

  {/* Footer */}
  <footer className="bg-blue-900 text-white py-10 px-6 mt-10">
    <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-6 text-sm">
      <div>
        <h3 className="text-yellow-400 font-bold mb-2">HEI</h3>
        <p>Formation habilitée par l’État suivant le système LMD</p>
        <p className="mt-2">Habilitation MESupRes<br />#713089/2023</p>
      </div>
      <div>
        <h3 className="font-semibold mb-2">Adresse</h3>
        <p>IJ 161 R Ambohidavoranjy</p>
        <p>Ivandry Antananarivo</p>
        <p>101, Madagascar</p>
      </div>
      <div>
        <h3 className="font-semibold mb-2">Navigation</h3>
        <ul className="space-y-1">
          <li><a href="#" className="hover:text-yellow-300">Accueil</a></li>
          <li><a href="#" className="hover:text-yellow-300">Actualités</a></li>
          <li><a href="#" className="hover:text-yellow-300">Bourse d'études</a></li>
          <li><a href="#" className="hover:text-yellow-300">Inscription</a></li>
        </ul>
      </div>
      <div>
        <h3 className="font-semibold mb-2">Médias sociaux</h3>
        <div className="flex gap-3">
          {["facebook", "twitter", "linkedin"].map((icon, i) => (
            <a
              key={i}
              href="#"
              className="w-8 h-8 bg-yellow-400 text-blue-900 flex items-center justify-center rounded-full hover:bg-yellow-500 transition"
            >
              {icon[0].toUpperCase()}
            </a>
          ))}
        </div>
      </div>
    </div>
  </footer>
</div>
  </div>
  )
}

export default App
