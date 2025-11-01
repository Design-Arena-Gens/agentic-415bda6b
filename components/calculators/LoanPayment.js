"use client";
import { useState } from 'react';

function calcMonthlyPayment(principal, annualRate, years){
  const n = years * 12;
  const r = (annualRate/100) / 12;
  if (r === 0) return principal / n;
  return principal * (r) / (1 - Math.pow(1 + r, -n));
}

export default function LoanPayment(){
  const [principal, setPrincipal] = useState(30000);
  const [annualRate, setAnnualRate] = useState(6.5);
  const [years, setYears] = useState(5);

  const monthly = calcMonthlyPayment(principal, annualRate, years);
  const totalPaid = monthly * years * 12;
  const totalInterest = totalPaid - principal;

  return (
    <div className="card" id="loan">
      <h3>Loan Payment</h3>
      <div className="input-row">
        <div>
          <label>Principal ($)</label>
          <input type="number" value={principal} onChange={e=>setPrincipal(Number(e.target.value))} />
        </div>
        <div>
          <label>APR (%)</label>
          <input type="number" value={annualRate} onChange={e=>setAnnualRate(Number(e.target.value))} />
        </div>
      </div>
      <div className="input-row">
        <div>
          <label>Term (years)</label>
          <input type="number" value={years} onChange={e=>setYears(Number(e.target.value))} />
        </div>
        <div style={{ display:'flex', alignItems:'flex-end' }}>
          <button className="btn" type="button" onClick={()=>{}}>Calculate</button>
        </div>
      </div>
      <div className="result">
        <div>Monthly payment: <strong>${monthly.toLocaleString(undefined, { maximumFractionDigits: 2 })}</strong></div>
        <div>Total interest: <strong>${totalInterest.toLocaleString(undefined, { maximumFractionDigits: 2 })}</strong></div>
        <div>Total paid: <strong>${totalPaid.toLocaleString(undefined, { maximumFractionDigits: 2 })}</strong></div>
      </div>
    </div>
  );
}
