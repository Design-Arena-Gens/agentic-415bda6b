export const metadata = { title: 'About' };

export default function About(){
  return (
    <div>
      <h1>About MoneyWise</h1>
      <p style={{ color: 'var(--muted)' }}>MoneyWise is a free, no-jargon finance education resource. We focus on practical tools and evidence-based guidance so you can make confident money decisions.</p>
      <div className="card" style={{ marginTop: 18 }}>
        <h3>Our principles</h3>
        <ul>
          <li>Clarity over complexity</li>
          <li>Long-term thinking</li>
          <li>Low-cost, diversified investing</li>
          <li>Habits that compound</li>
        </ul>
      </div>
    </div>
  );
}
