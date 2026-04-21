export default function Features() {
  const features = [
    {
      title: 'Fresh Coffee',
      desc: 'Single-origin beans brewed to perfection',
      icon: (
        <svg viewBox="0 0 24 24">
          <path d="M18 8h1a4 4 0 0 1 0 8h-1" /><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" /><line x1="6" y1="1" x2="6" y2="4" /><line x1="10" y1="1" x2="10" y2="4" /><line x1="14" y1="1" x2="14" y2="4" />
        </svg>
      )
    },
    {
      title: 'Delicious Food',
      desc: 'Fresh meals, snacks and desserts daily',
      icon: <svg viewBox="0 0 24 24"><path d="M3 11l19-9-9 19-2-8-8-2z" /></svg>
    },
    {
      title: 'Free WiFi',
      desc: 'High-speed internet for work or study',
      icon: (
        <svg viewBox="0 0 24 24">
          <rect x="5" y="2" width="14" height="20" rx="2" /><line x1="12" y1="18" x2="12.01" y2="18" /><path d="M8.5 6h7M8.5 10h7" />
        </svg>
      )
    },
    {
      title: 'Cozy Ambience',
      desc: "Warm space you'll never want to leave",
      icon: (
        <svg viewBox="0 0 24 24">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9,22 9,12 15,12 15,22" />
        </svg>
      )
    }
  ];

  return (
    <section className="sec fade-in">
      <div className="sec-label">Why Choose Us</div>
      <h2 className="sec-title">Everything you love<br />in one place</h2>
      <p className="sec-sub">Built for people who appreciate the finer things</p>
      <div className="feat-grid">
        {features.map((feat, idx) => (
          <div key={idx} className="feat-card fade-in">
            <div className="fi">{feat.icon}</div>
            <div className="fn">{feat.title}</div>
            <div className="fd">{feat.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
