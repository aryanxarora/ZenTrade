import PortfolioCard from "@/components/PortfolioCard";
import TradingCard from "@/components/TradingCard";

export default function Home() {
  return (
    <main className="h-screen w-full flex items-center justify-center bg-neutral-900 gap-10 p-10">
      <PortfolioCard />
      <TradingCard />
    </main>
  );
}
