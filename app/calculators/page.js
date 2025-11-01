import CompoundInterest from '../../components/calculators/CompoundInterest';
import LoanPayment from '../../components/calculators/LoanPayment';
import Budget from '../../components/calculators/Budget50_30_20';

export const metadata = { title: 'Calculators' };

export default function Calculators(){
  return (
    <div>
      <h1>Calculators</h1>
      <p style={{ color: 'var(--muted)' }}>Play with the numbers to build intuition.</p>
      <div className="grid" style={{ marginTop: 18 }}>
        <CompoundInterest />
        <LoanPayment />
        <Budget />
      </div>
    </div>
  );
}
