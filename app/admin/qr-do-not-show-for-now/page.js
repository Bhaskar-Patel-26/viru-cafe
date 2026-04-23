'use client';

import { useState } from 'react';

export default function QRGenerator() {
  const [tableCount, setTableCount] = useState(10);
  const [baseUrl, setBaseUrl] = useState(typeof window !== 'undefined' ? `${window.location.origin}/menu` : '');

  const generateQRUrl = (table) => {
    const targetUrl = `${baseUrl}?table=${table}`;
    return `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(targetUrl)}`;
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="qr-admin-container">
      <style jsx>{`
        .qr-admin-container {
          padding: 40px 20px;
          max-width: 1000px;
          margin: 0 auto;
          font-family: 'Inter', sans-serif;
        }
        .admin-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 40px;
        }
        .admin-title h1 {
          font-size: 2.5rem;
          margin: 0;
          background: linear-gradient(135deg, #ff6b6b, #f06595);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .controls {
          background: #f8f9fa;
          padding: 20px;
          border-radius: 12px;
          margin-bottom: 40px;
          display: flex;
          gap: 20px;
          align-items: flex-end;
          box-shadow: 0 4px 12px rgba(0,0,0,0.05);
        }
        .input-group {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .input-group label {
          font-size: 0.9rem;
          font-weight: 600;
          color: #495057;
        }
        .input-group input {
          padding: 10px;
          border: 1px solid #dee2e6;
          border-radius: 6px;
          font-size: 1rem;
        }
        .print-btn {
          background: #339af0;
          color: white;
          border: none;
          padding: 12px 24px;
          border-radius: 8px;
          font-weight: 600;
          cursor: pointer;
          transition: transform 0.2s;
        }
        .print-btn:hover {
          transform: translateY(-2px);
          background: #228be6;
        }
        .qr-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
          gap: 30px;
        }
        .qr-card {
          background: white;
          border: 2px solid #f1f3f5;
          border-radius: 16px;
          padding: 20px;
          text-align: center;
          transition: all 0.3s ease;
        }
        .qr-card:hover {
          box-shadow: 0 10px 20px rgba(0,0,0,0.1);
          border-color: #ff6b6b;
        }
        .qr-card h3 {
          margin: 0 0 15px 0;
          color: #212529;
        }
        .qr-image {
          width: 180px;
          height: 180px;
          margin: 0 auto;
          background: #f8f9fa;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .qr-card p {
          margin-top: 15px;
          font-size: 0.8rem;
          color: #868e96;
          word-break: break-all;
        }

        @media print {
          .controls, .admin-header, .qr-card p {
            display: none !important;
          }
          .qr-admin-container {
            padding: 0;
          }
          .qr-grid {
            display: block;
          }
          .qr-card {
            page-break-inside: avoid;
            margin-bottom: 40px;
            border: 1px solid #eee;
            box-shadow: none;
          }
        }
      `}</style>

      <div className="admin-header">
        <div className="admin-title">
          <h1>QR Code Manager</h1>
          <p>Generate unique QR codes for each table</p>
        </div>
        <button className="print-btn" onClick={handlePrint}>Print All QR Codes</button>
      </div>

      <div className="controls">
        <div className="input-group">
          <label>Base URL</label>
          <input 
            type="text" 
            value={baseUrl} 
            onChange={(e) => setBaseUrl(e.target.value)}
            placeholder="http://localhost:3000/menu"
          />
        </div>
        <div className="input-group">
          <label>Number of Tables</label>
          <input 
            type="number" 
            value={tableCount} 
            onChange={(e) => setTableCount(parseInt(e.target.value) || 0)}
            min="1"
            max="100"
          />
        </div>
      </div>

      <div className="qr-grid">
        {Array.from({ length: tableCount }, (_, i) => i + 1).map((num) => (
          <div key={num} className="qr-card">
            <h3>Table {num}</h3>
            <div className="qr-image">
              <img src={generateQRUrl(num)} alt={`Table ${num} QR`} />
            </div>
            <p>{baseUrl}?table={num}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
