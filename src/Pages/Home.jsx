import React from 'react'
import { Link } from 'react-router-dom'
import '/src/App.css'
import { WiDaySunny, WiCloudy, WiRain } from 'react-icons/wi'
import { FaUtensils, FaShoppingCart } from 'react-icons/fa'

export default function Home() {
  const apiCards = [
    {
      id: 1,
      title: 'Weather API',
      description: 'Get real-time weather information for any location worldwide',
      icon: <WiDaySunny className="text-warning" style={{ fontSize: '3rem' }} />,
      link: '/Weather',
      color: 'bg-info'
    },
    {
      id: 2,
      title: 'Recipe API',
      description: 'Discover delicious recipes from around the world',
      icon: <FaUtensils className="text-danger" style={{ fontSize: '3rem' }} />,
      link: '/Recipe',
      color: 'bg-success'
    },
    {
      id: 3,
      title: 'Store API',
      description: 'Browse and manage products with our comprehensive store API',
      icon: <FaShoppingCart className="text-primary" style={{ fontSize: '3rem' }} />,
      link: '/Store',
      color: 'bg-warning'
    },
    {id: 4,
      title: 'Movies API',
      description: 'Access a vast database of movies, actors, and directors',
      icon: <i className="fas fa-film text-danger" style={{ fontSize: '3rem' }} />,
      link: '/Movies',
      color: 'bg-dark'
    }
  ]

  return (
    <div className="bg-home">
      <div className="hero">
        <div className="container py-5">
          <div className="row mb-5">
            <div className="col-12 text-center">
              <div className="mx-auto" style={{ maxWidth: '600px' }}>
                <h1 className="display-4 fw-bold mb-3">Welcome to API Hub</h1>
                <p className="lead">Explore our collection of powerful APIs</p>
              </div>
            </div>
          </div>
          
          <div className="row g-4 justify-content-center">
            {apiCards.map((api) => (
              <div key={api.id} className="col-md-6 col-lg-3">
                <Link to={api.link} className="text-decoration-none">
                  <div className="weather-card h-100 border-0 shadow-lg">
                    <div className="card-body text-center p-4">
                      <div className="mb-3">
                        {api.icon}
                      </div>
                      <h3 className="card-title text-white fw-bold mb-3">{api.title}</h3>
                      <p className="card-text text-muted">{api.description}</p>
                      <button className={`bb ${api.color} text-white`}>
                        Explore API
                      </button>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
          
          <div className="row mt-5">
            <div className="col-12 text-center">
              <div className="card p-4" style={{ backgroundColor: 'black' }}>
                <h2 className="text-white mb-3">Why Choose Our APIs?</h2>
                <div className="row text-white">
                  <div className="col-md-4 mb-3">
                    <h5>🚀 Fast & Reliable</h5>
                    <p>Lightning-fast response times with 99.9% uptime</p>
                  </div>
                  <div className="col-md-4 mb-3">
                    <h5>📚 Comprehensive Docs</h5>
                    <p>Detailed documentation with code examples</p>
                  </div>
                  <div className="col-md-4 mb-3">
                    <h5>🔒 Secure</h5>
                    <p>Enterprise-grade security for your data</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
