'use client';

import { useRef, useEffect } from 'react';

export default function Testimonials() {
  const scrollRef = useRef(null);

  const testimonials = [
    {
      name: "Rahul Sharma",
      role: "Local Guide",
      text: "The best cold coffee in Raipur! The vibes here are unmatched, perfect for working or hanging out with friends.",
      stars: 5,
      initial: "R"
    },
    {
      name: "Priya Singh",
      role: "Food Blogger",
      text: "Love the Peri Peri Wings and the Nutella Waffles. The service is fast and the staff is very friendly.",
      stars: 5,
      initial: "P"
    },
    {
      name: "Amit Patel",
      role: "Coffee Lover",
      text: "A hidden gem in the city. Their Italian style cappuccino is authentic. Highly recommended!",
      stars: 5,
      initial: "A"
    }
  ];

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' 
        ? scrollLeft - clientWidth 
        : scrollLeft + clientWidth;
      
      scrollRef.current.scrollTo({
        left: scrollTo,
        behavior: 'smooth'
      });
    }
  };

  // Auto-slide every 10 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollRef.current) {
        const { scrollLeft, clientWidth, scrollWidth } = scrollRef.current;
        
        // Loop logic: if we are at the end (with a small buffer), go back to start
        if (scrollLeft + clientWidth >= scrollWidth - 10) {
          scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          scroll('right');
        }
      }
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="sec fade-in" id="testimonials">
      <div className="sec-label">Testimonials</div>
      <h2 className="sec-title">What our guests say</h2>
      <p className="sec-sub">Real reviews from our wonderful community</p>

      <div className="testi-wrap">
        <button className="testi-btn" onClick={() => scroll('left')}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </button>

        <div className="testi-grid" ref={scrollRef}>
          {testimonials.map((t, idx) => (
            <div key={idx} className="testi-card">
              <div className="testi-stars">
                {"★".repeat(t.stars)}
              </div>
              <p className="testi-text">"{t.text}"</p>
              <div className="testi-author">
                <div className="testi-avatar">{t.initial}</div>
                <div>
                  <div className="testi-name">{t.name}</div>
                  <div className="testi-role">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button className="testi-btn" onClick={() => scroll('right')}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </button>
      </div>
    </section>
  );
}
