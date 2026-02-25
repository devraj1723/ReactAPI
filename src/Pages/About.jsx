import React from 'react'
import '/src/App.css'

export default function About() {
  return (
    <div className="bg-about">
      <div className="hero">
        <div className="container py-5">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="weather-card p-5">
                <h1 className=" text-center mb-4 display-4 fw-bold">About API Hub</h1>
                
                <div className="row mb-5">
                  <div className="col-md-6 mb-4">
                    <h3 className="mb-3">🎯 Our Mission</h3>
                    <p className="lead">
                      We strive to provide developers with easy-to-use, reliable, and comprehensive APIs that power modern applications. Our goal is to simplify integration and accelerate development.
                    </p>
                  </div>
                  <div className="col-md-6 mb-4">
                    <h3 className="mb-3">🌟 What We Offer</h3>
                    <ul className="lead">
                      <li>Real-time Weather Data</li>
                      <li>Extensive Recipe Database</li>
                      <li>Comprehensive Product Catalog</li>
                      <li>RESTful API Architecture</li>
                      <li>Detailed Documentation</li>
                    </ul>
                  </div>
                </div>

                <div className="row ">
                  <div className="col-12 text-center mb-4">
                    <h3 className="mb-4">🛠️ Technology Stack</h3>
                  </div>
                  <div className="col-md-4 text-center mb-3">
                    <div className="welcome-card p-3">
                      <h5>React.js</h5>
                      <p>Modern Frontend Framework</p>
                    </div>
                  </div>
                  <div className="col-md-4 text-center mb-3">
                    <div className="welcome-card p-3">
                      <h5>REST APIs</h5>
                      <p>Standardized API Design</p>
                    </div>
                  </div>
                  <div className="col-md-4 text-center mb-3">
                    <div className="welcome-card p-3">
                      <h5>Bootstrap</h5>
                      <p>Responsive UI Components</p>
                    </div>
                  </div>
                </div>

                <div className="row mt-5">
                  <div className="col-12 text-center">
                    <div className="card p-4">
                      <h3 className="mb-3">📈 Our Impact</h3>
                      <div className="row">
                        <div className="col-md-4">
                          <h2 className="fw-bold">10K+</h2>
                          <p>API Calls Daily</p>
                        </div>
                        <div className="col-md-4">
                          <h2 className="fw-bold">500+</h2>
                          <p>Active Developers</p>
                        </div>
                        <div className="col-md-4">
                          <h2 className="fw-bold">99.9%</h2>
                          <p>Uptime SLA</p>
                        </div>
                      </div>
                    </div>
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
