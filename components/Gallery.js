export default function Gallery() {
  const images = [
    { url: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&q=80&w=800', tall: true },
    { url: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=800', tall: false },
    { url: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=800', tall: false },
    { url: 'https://images.unsplash.com/photo-1481833761820-0509d3217039?auto=format&fit=crop&q=80&w=800', tall: true },
    { url: 'https://images.unsplash.com/photo-1445116572660-236099ec97a0?auto=format&fit=crop&q=80&w=800', tall: false },
    { url: 'https://images.unsplash.com/photo-1559925393-8be0ec4767c8?auto=format&fit=crop&q=80&w=800', tall: false }
  ];

  return (
    <section className="sec fade-in" style={{ background: 'var(--dark)' }}>
      <div className="sec-label">Gallery</div>
      <h2 className="sec-title">A peek inside<br />Viru Cafe</h2>
      <p className="sec-sub">Follow us · @virucafe</p>
      <div className="gal-grid">
        {images.map((img, idx) => (
          <div key={idx} className={`gi ${img.tall ? 'tall' : ''}`}>
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
  );
}
