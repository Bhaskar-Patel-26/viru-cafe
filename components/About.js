export default function About() {
  return (
    <section className="sec about-sec fade-in">
      <div className="sec-label">About Us</div>
      <h2 className="sec-title">Our story</h2>
      <div className="about-card">
        <div style={{ textAlign: 'center' }}>
          <span style={{ fontSize: '3.5rem' }}>☕</span>
          <div style={{ fontSize: '11px', letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--coffee)', marginTop: '.4rem', fontWeight: 500 }}>
            Est. 2022 · Raipur
          </div>
        </div>
        <div className="about-badge">
          <div className="about-badge-n">4.9★</div>
          <div className="about-badge-l">Rating</div>
        </div>
      </div>
      <div className="about-stars">★★★★★</div>
      <p className="about-text">
        "Viru Cafe is the perfect place to relax with friends and enjoy amazing coffee and food. We believe every cup should bring a little more joy to your day."
      </p>
      <div className="pills">
        <div className="pill">Fresh Daily</div>
        <div className="pill">Pet Friendly</div>
        <div className="pill">Free WiFi</div>
      </div>
    </section>
  );
}
