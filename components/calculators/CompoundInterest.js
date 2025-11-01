"use client";
import { useState } from 'react';

export default function CompoundInterest(){
  const [principal, setPrincipal] = useState(10000);
  const [annualRate, setAnnualRate] = useState(7);
  const [timesPerYear, setTimesPerYear] = useState(12);
  const [years, setYears] = useState(10);

  const rate = annualRate / 100;
  const amount = principal * Math.pow(1 + rate / timesPerYear, timesPerYear * years);
  const interest = amount - principal;

  return (
    <div className="card" id="compound">
      <h3>Compound Interest</h3>
      <div className="input-row">
        <div>
          <label>Principal ($)</label>
          <input type="number" value={principal} onChange={e=>setPrincipal(Number(e.target.value))} />
        </div>
        <div>
          <label>Annual rate (%)</label>
          <input type="number" value={annualRate} onChange={e=>setAnnualRate(Number(e.target.value))} />
        </div>
      </div>
      <div className="input-row">
        <div>
          <label>Compounds per year</label>
          <input type="number" value={timesPerYear} onChange={e=>setTimesPerYear(Number(e.target.value))} />
        </div>
        <div>
          <label>Years</label>
          <input type="number" value={years} onChange={e=>setYears(Number(e.target.value))} />
        </div>
      </div>
      <div className="result">
        <div>Future value: <strong>${amount.toLocaleString(undefined, { maximumFractionDigits: 2 })}</strong></div>
        <div>Total interest: <strong>${interest.toLocaleString(undefined, { maximumFractionDigits: 2 })}</strong></div>
      </div>
    </div>
  );
}
