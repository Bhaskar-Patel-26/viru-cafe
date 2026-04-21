export default function InfoRow() {
  return (
    <div className="info-row">
      <div className="info-item">
        <span className="info-icon">⏰</span>
        <div className="info-lbl">Hours</div>
        <div className="info-val">8am–11pm</div>
      </div>
      <div className="info-item">
        <span className="info-icon">📍</span>
        <div className="info-lbl">Location</div>
        <div className="info-val">Raipur, CG</div>
      </div>
      <div className="info-item">
        <span className="info-icon">🛵</span>
        <div className="info-lbl">Delivery</div>
        <div className="info-val">3 km radius</div>
      </div>
    </div>
  );
}
