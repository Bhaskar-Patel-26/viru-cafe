export default function Marquee() {
  const items = [
    'Espresso', 'Cold Brew', 'Cappuccino', 'Sandwiches', 'Waffles',
    'Pasta', 'Free WiFi', 'Dine In', 'Takeaway', 'Delivery'
  ];

  return (
    <div className="marquee-wrap">
      <div className="marquee-track">
        {[...items, ...items].map((item, idx) => (
          <span key={idx} className="m-item">
            <span className="m-dot"></span>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
