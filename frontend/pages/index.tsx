import Hero from '../components/Hero';

export default function Home() {
  return (
    <>
      <Hero />
      <section style={{ marginTop: '2rem' }}>
        <h2>Our courses</h2>
        <p>
          We offer classes for beginners, intermediate, and advanced students.
        </p>
      </section>
    </>
  );
}
