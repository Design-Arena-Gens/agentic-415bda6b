import Card from '../components/Card';

export const metadata = {
  title: 'Finance Education Home',
  description: 'Master budgeting, investing, debt payoff, and more with interactive tools.'
};

export default function Page(){
  return (
    <div>
      <section className="hero">
        <div>
          <h1>Financial literacy, made practical.</h1>
          <p>Understand money with plain-language articles, bite-sized courses, and calculators you can trust.</p>
          <a className="cta" href="/courses">Start learning ?</a>
        </div>
        <div className="card">
          <h3>Quick Calculators</h3>
          <div className="grid">
            <Card title="Compound Interest" description="See your money grow." href="/calculators#compound" />
            <Card title="Loan Payment" description="Estimate monthly payments." href="/calculators#loan" />
            <Card title="50/30/20 Budget" description="Plan needs, wants, savings." href="/calculators#budget" />
          </div>
        </div>
      </section>

      <section className="section">
        <h2>Featured learning paths</h2>
        <a className="more" href="/courses">View all</a>
      </section>
      <div className="grid">
        <Card title="Personal Finance 101" description="Budgeting, emergency funds, credit scores."></Card>
        <Card title="Investing Basics" description="Risk, diversification, index funds."></Card>
        <Card title="Crush Your Debt" description="Snowball vs avalanche, payoff strategies."></Card>
      </div>

      <section className="section" style={{ marginTop: 32 }}>
        <h2>Latest articles</h2>
        <a className="more" href="/articles">View all</a>
      </section>
      <div className="grid">
        <Card title="What is an ETF?" description="A simple guide to funds."></Card>
        <Card title="How to build an emergency fund" description="Where to save, how much." ></Card>
        <Card title="Credit utilization explained" description="Boost your score the smart way." ></Card>
      </div>
    </div>
  );
}
