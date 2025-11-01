export const metadata = { title: 'Glossary' };

const terms = {
  "APR": "Annual Percentage Rate ? yearly cost of borrowing.",
  "ETF": "Exchange-Traded Fund ? a basket of securities you can trade.",
  "Expense Ratio": "Annual fee charged by a fund, expressed as a percentage.",
  "Asset Allocation": "How you split investments across stocks, bonds, and cash.",
  "Diversification": "Reducing risk by spreading investments across assets.",
  "Compound Interest": "Interest on interest ? growth accelerates over time.",
};

export default function Glossary(){
  const entries = Object.entries(terms);
  return (
    <div>
      <h1>Glossary</h1>
      <p style={{ color: 'var(--muted)' }}>Key terms you will see throughout the site.</p>
      <div style={{ display:'grid', gap: 12, marginTop: 18 }}>
        {entries.map(([term, def]) => (
          <div key={term} className="card">
            <strong>{term}</strong>
            <p style={{ marginTop: 6, color: 'var(--muted)' }}>{def}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
