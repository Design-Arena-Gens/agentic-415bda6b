"use client";
import { useState } from 'react';

export default function Budget(){
  const [income, setIncome] = useState(5000);
  const [needs, setNeeds] = useState(0);
  const [wants, setWants] = useState(0);
  const [savings, setSavings] = useState(0);

  const targetNeeds = income * 0.5;
  const targetWants = income * 0.3;
  const targetSavings = income * 0.2;

  return (
    <div className="card" id="budget">
      <h3>50/30/20 Budget</h3>
      <div className="input-row">
        <div>
          <label>Monthly income ($)</label>
          <input type="number" value={income} onChange={e=>setIncome(Number(e.target.value))} />
        </div>
        <div>
          <label>Needs ($)</label>
          <input type="number" value={needs} onChange={e=>setNeeds(Number(e.target.value))} />
        </div>
      </div>
      <div className="input-row">
        <div>
          <label>Wants ($)</label>
          <input type="number" value={wants} onChange={e=>setWants(Number(e.target.value))} />
        </div>
        <div>
          <label>Savings ($)</label>
          <input type="number" value={savings} onChange={e=>setSavings(Number(e.target.value))} />
        </div>
      </div>
      <div className="result">
        <div>Target needs (50%): <strong>${targetNeeds.toLocaleString(undefined, { maximumFractionDigits: 2 })}</strong> ({((needs/income)||0*100).toFixed(1)}%)</div>
        <div>Target wants (30%): <strong>${targetWants.toLocaleString(undefined, { maximumFractionDigits: 2 })}</strong> ({((wants/income)||0*100).toFixed(1)}%)</div>
        <div>Target savings (20%): <strong>${targetSavings.toLocaleString(undefined, { maximumFractionDigits: 2 })}</strong> ({((savings/income)||0*100).toFixed(1)}%)</div>
      </div>
    </div>
  );
}
