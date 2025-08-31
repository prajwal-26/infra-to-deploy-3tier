import React, { useState } from 'react';
import logo from '../logo.svg';
import InfoPopup from './InfoPopup';
import AnimatedBanner from './AnimatedBanner';

function Layout({ children }) {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <div className="app-layout">
      <header className="app-header slide-down">
        <div className="brand">
          <img src={logo} alt="DevOps Project Logo" className="logo" />
          <div>
            <h1 className="brand-title">DevSecOps Project</h1>
           <p className="nav-subtitle">
  🚀 Pipeline Automation | ☸ Kubernetes Orchestration | AWS CLOUD | 🔒 DevSecOps Practices | 📦 Scalable Deployments
</p>
          </div>
        </div>
      </header>

<AnimatedBanner message="End-to-End 3-Tier Web Application Deployment 🚀" />

      <div className="app-body">
        <main className="main-content fade-in">
          {children}
        </main>
      </div>

      <footer className="app-footer">
        <p>
          © {new Date().getFullYear()} 3-Tier DevOps Project — 
          Built with React, Node.js, and SQL
        </p>
      </footer>

      <button className="help-btn" onClick={() => setShowInfo(true)}>?</button>
      {showInfo && <InfoPopup onClose={() => setShowInfo(false)} />}

      <div className="bubble-container">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="bubble" />
        ))}
      </div>
      <div className="star-container">
        {[...Array(10)].map((_, i) => (
          <div key={i} className="star" />
        ))}
      </div>
    </div>
  );
}

export default Layout;