import Card from '../../components/Card';

export const metadata = { title: 'Articles' };

const articles = [
  { title: 'What is an ETF?', summary: 'A simple guide to exchange-traded funds and why they matter.' },
  { title: 'Emergency Fund 101', summary: 'How much to save and the best accounts to use.' },
  { title: 'Credit Utilization', summary: 'How your balances impact your credit score.' },
  { title: 'Index Funds vs. Active', summary: 'Costs, performance, and when active can make sense.' },
  { title: 'Roth vs Traditional', summary: 'Which tax treatment fits your situation today and tomorrow.' },
  { title: 'Debt Snowball vs Avalanche', summary: 'Pick the method that keeps you moving.' },
];

export default function Articles(){
  return (
    <div>
      <h1>Articles</h1>
      <p style={{ color: 'var(--muted)' }}>Plain-language guides to core finance topics.</p>
      <div className="grid" style={{ marginTop: 18 }}>
        {articles.map(a => (
          <Card key={a.title} title={a.title} description={a.summary} />
        ))}
      </div>
    </div>
  );
}
