import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="nav">
      <Link href="/" className="nav-logo"><span>Viru</span><b>.</b>Cafe</Link>
      <Link href="/menu" className="nav-pill">Order Now</Link>
    </nav>
  );
}
