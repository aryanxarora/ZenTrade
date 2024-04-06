"use client";

import PortfolioCard from "@/components/PortfolioCard";
import TradingCard from "@/components/TradingCard";
export default function Home() {
  return (
    <main>
      {/* <PortfolioCard walletBalance={walletBalance} /> */}
      <TradingCard />
    </main>
  );
}
