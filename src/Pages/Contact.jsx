import React, { useState } from 'react'
import '/src/App.css'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    alert('Thank you for your message! We will get back to you soon.')
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    })
  }

  return (
    <div className="bg-contact">
      <div className="hero">
        <div className="container py-5">
          <h1 className="text-white text-center mb-5 display-4 fw-bold">Contact Us</h1>
          <div className="row justify-content-center">
            <div className="col-lg-10">
                <div className="row">
                  <div className="col-md-6 mb-4">
                    <div className="welcome-card p-4 h-100">
                      <h3 className="mb-4">Get in Touch</h3>
                      <div className="mb-3">
                        <h5>📧 Email</h5>
                        <p>support@apihub.com</p>
                      </div>
                      <div className="mb-3">
                        <h5>📱 Phone</h5>
                        <p>+1 (555) 123-4567</p>
                      </div>
                      <div className="mb-3">
                        <h5>📍 Address</h5>
                        <p>123 Tech Street<br />Silicon Valley, CA 94025</p>
                      </div>
                      <div className="mb-3">
                        <h5>🕐 Business Hours</h5>
                        <p>Monday - Friday: 9AM - 6PM PST<br />Saturday - Sunday: Closed</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="col-md-6 mb-4">
                    <div className="card p-4 h-100">
                      <h3 className="mb-4">✉️ Send us a Message</h3>
                      <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                          <label htmlFor="name" className="form-label">Name</label>
                          <input
                            type="text"
                            className="form-control"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                          />
                        </div>
                        <div className="mb-3">
                          <label htmlFor="email" className="form-label">Email</label>
                          <input
                            type="email"
                            className="form-control"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                          />
                        </div>
                        <div className="mb-3">
                          <label htmlFor="subject" className="form-label">Subject</label>
                          <input
                            type="text"
                            className="form-control"
                            id="subject"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            required
                          />
                        </div>
                        <div className="mb-3">
                          <label htmlFor="message" className="form-label">Message</label>
                          <textarea
                            className="form-control"
                            id="message"
                            name="message"
                            rows="4"
                            value={formData.message}
                            onChange={handleChange}
                            required
                          ></textarea>
                        </div>
                        <button type="submit" className="bb bg-primary text-white w-100">
                          Send Message
                        </button>
                      </form>
                    </div>
                  </div>
                </div>

                <div className="row mt-5">
                  <div className="col-12 text-center">
                    <div className="card p-4">
                      <h3 className="mb-4">🚀 Follow Us</h3>
                      <div className="row">
                        <div className="col-md-3 mb-3">
                          <div className="p-3">
                            <h5>📘 Facebook</h5>
                            <p>@apihub</p>
                          </div>
                        </div>
                        <div className="col-md-3 mb-3">
                          <div className="p-3">
                            <h5>🐦 Twitter</h5>
                            <p>@apihub_dev</p>
                          </div>
                        </div>
                        <div className="col-md-3 mb-3">
                          <div className="p-3">
                            <h5>💼 LinkedIn</h5>
                            <p>API Hub Company</p>
                          </div>
                        </div>
                        <div className="col-md-3 mb-3">
                          <div className="p-3">
                            <h5>🐙 GitHub</h5>
                            <p>github.com/apihub</p>
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
