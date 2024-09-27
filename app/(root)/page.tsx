import React from 'react';
import HeaderBox from '@/components/HeaderBox';
import TotalBalanceBox from '@/components/TotalBalanceBox';
import RightSidebar from '@/components/RightSidebar';

const Home = () => {
  const loggedIn = { firstName: 'Dipesh', lastName: 'Kumar', email: 'contact@gmail.com' }; // Use firstName and lastName consistently

  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedIn?.firstName || "Guest"} // Corrected to firstName
            subtext="Access and manage your accounts and transactions."
          />

          <TotalBalanceBox 
            accounts={[]} 
            totalBanks={1} 
            totalCurrentBalance={1000.45} 
          />
        </header>
        RECENT TRANS
      </div>
      <RightSidebar 
        user={loggedIn} 
        transactions={[]} 
        banks={[{currentBalance: 123.4}, {currentBalance: 355}]} 
      />
    </section>
  );
};

export default Home;