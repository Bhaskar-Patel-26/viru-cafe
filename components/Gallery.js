'use client';

import { useState, useEffect } from 'react';

export default function Gallery() {
  const [selectedIdx, setSelectedIdx] = useState(null);
  const [autoPlay, setAutoPlay] = useState(false);

  const images = [
    { url: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&q=80&w=800', tall: true },
    { url: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=800', tall: false },
    { url: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=800', tall: false },
    { url: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&q=80&w=800', tall: true },
    { url: 'https://images.unsplash.com/photo-1481833761820-0509d3217039?auto=format&fit=crop&q=80&w=800', tall: false },
    { url: 'https://images.unsplash.com/photo-1445116572660-236099ec97a0?auto=format&fit=crop&q=80&w=800', tall: false },
    { url: 'https://images.unsplash.com/photo-1559925393-8be0ec4767c8?auto=format&fit=crop&q=80&w=800', tall: false },
    { url: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&q=80&w=800', tall: false },
    { url: 'https://images.unsplash.com/photo-1521017432531-fbd92d74426b?auto=format&fit=crop&q=80&w=800', tall: true },
    { url: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&q=80&w=800', tall: false },
    { url: 'https://images.unsplash.com/photo-1497933322477-93ae814bc49e?auto=format&fit=crop&q=80&w=800', tall: false }
  ];

  const handleNext = () => {
    setSelectedIdx((prev) => (prev + 1) % images.length);
  };

  const handlePrev = () => {
    setSelectedIdx((prev) => (prev - 1 + images.length) % images.length);
  };

  const closeLightbox = () => {
    setSelectedIdx(null);
    setAutoPlay(false);
  };

  useEffect(() => {
    let interval;
    if (autoPlay && selectedIdx !== null) {
      interval = setInterval(() => {
        handleNext();
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [autoPlay, selectedIdx]);

  return (
    <>
      <section className="sec fade-in" id="gallery" style={{ background: 'var(--dark)' }}>
        <div className="sec-label">Gallery</div>
        <h2 className="sec-title">A peek inside<br />Viru Cafe</h2>
        <p className="sec-sub">Click any image to view our full collection</p>
        
        <div className="gal-grid">
          {images.slice(0, 6).map((img, idx) => (
            <div 
              key={idx} 
              className={`gi ${img.tall ? 'tall' : ''}`}
              onClick={() => setSelectedIdx(idx)}
            >
              <div className="gz">
                <img src={img.url} alt={`Gallery ${idx}`} loading="lazy" />
              </div>
              <div className="go">
                <svg viewBox="0 0 24 24">
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                  <line x1="11" y1="8" x2="11" y2="14" />
                  <line x1="8" y1="11" x2="14" y2="11" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox Overlay: Moved OUTSIDE the animated section to fix window centering */}
      {selectedIdx !== null && (
        <div className="lb-overlay" onClick={closeLightbox}>
          <div className="lb-content" onClick={(e) => e.stopPropagation()}>
            <button className="lb-close" onClick={closeLightbox}>×</button>
            
            <img 
              src={images[selectedIdx].url} 
              alt="Viewing enlarged" 
              className="lb-img" 
            />

            <div className="lb-nav">
              <button className="lb-btn" onClick={handlePrev}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="15 18 9 12 15 6"></polyline>
                </svg>
              </button>
              <button className="lb-btn" onClick={handleNext}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </button>
            </div>

            <div className="lb-controls">
              <button 
                className={`lb-play ${autoPlay ? 'active' : ''}`}
                onClick={() => setAutoPlay(!autoPlay)}
              >
                {autoPlay ? '⏸ Pause Slideshow' : '▶ Play Slideshow'}
              </button>
              <div className="lb-counter">
                {selectedIdx + 1} / {images.length}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
