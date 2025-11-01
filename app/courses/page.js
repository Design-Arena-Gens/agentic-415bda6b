import Card from '../../components/Card';

export const metadata = { title: 'Courses' };

const courses = [
  { title: 'Personal Finance 101', level: 'Beginner', description: 'Foundations: budgeting, emergency funds, credit basics.' },
  { title: 'Investing Basics', level: 'Beginner', description: 'Risk, return, asset allocation, index funds.' },
  { title: 'Retirement Planning', level: 'Intermediate', description: '401(k), IRA, Roth vs Traditional, glide paths.' },
  { title: 'Debt Payoff Strategies', level: 'Beginner', description: 'Snowball vs avalanche, refinancing, pitfalls.' },
  { title: 'Taxes Made Simple', level: 'Intermediate', description: 'Brackets, credits, deductions, tax-advantaged accounts.' },
  { title: 'Behavioral Finance', level: 'Advanced', description: 'Biases and habits that move markets and you.' },
];

export default function Courses(){
  return (
    <div>
      <h1>Courses</h1>
      <p style={{ color: 'var(--muted)' }}>Structured learning paths with actionable steps.</p>
      <div className="grid" style={{ marginTop: 18 }}>
        {courses.map(c => (
          <Card key={c.title} title={`${c.title} ? ${c.level}`} description={c.description} href={`/articles?topic=${encodeURIComponent(c.title)}`} />
        ))}
      </div>
    </div>
  );
}
