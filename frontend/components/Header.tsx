import Link from 'next/link';

export default function Header() {
  return (
    <header
      style={{
        width: '100%',
        padding: '2rem 3rem',
        backgroundColor: '#222',
        color: '#fff',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: 1000,
      }}
    >
      <div style={{ fontSize: '2rem', fontWeight: 'bold' }}>
        <Link href="/">Fighter Academy</Link>
      </div>
      <nav style={{ fontSize: '1.2rem', gap: '2rem', display: 'flex' }}>
        <Link href="/">Home</Link> | <Link href="/about">About</Link> |{' '}
        <Link href="/contact">Contact</Link>
      </nav>
    </header>
  );
}
