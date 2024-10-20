'use client';  // Ensures this component is a client-side component

import React from 'react';
import AnimatedCounter from '@/components/AnimatedCounter';
import DoughnutChart from '@/components/DoughnutChart';

interface TotalBalanceBoxProps {
  accounts: any[];
  totalBanks: number;
  totalCurrentBalance: number;
}

const TotalBalanceBox: React.FC<TotalBalanceBoxProps> = ({
  accounts = [],
  totalBanks,
  totalCurrentBalance,
}) => {
  return (
    <section className='total-balance flex gap-8'> {/* Added gap-8 for spacing */}
      <div className='total-balance-chart'>
        <DoughnutChart accounts={accounts} />
      </div>

      <div className='flex flex-col gap-6'>
        <h2 className='header-2'>
          Bank Accounts: {totalBanks}
        </h2>
        <div className='flex flex-col gap-2'>
          <p className='total-balance-label'>
            Total Current Balance
          </p>
          <div className='total-balance-amount flex-center gap-2'>
            <AnimatedCounter amount={totalCurrentBalance} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TotalBalanceBox;