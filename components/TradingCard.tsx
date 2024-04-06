"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import stocks from "@/app/stocks";

interface Stock {
  symbol: string;
  name: string;
  shares: number;
}

const TradingCard = () => {
  const [selectedStock, setSelectedStock] = useState(stocks[0]);
  const [quantity, setQuantity] = useState(0);
  const [walletBalance, setWalletBalance] = useState(1000);
  const [portfolio, setPortfolio] = useState<Stock[]>([]);

  const handleStockSelect = (stock: any) => {
    console.log(stock);
    setSelectedStock(stock);
  };

  const handleStockPurchase = () => {
    const stockIndex = portfolio.findIndex(
      (stock) => stock.symbol === selectedStock.symbol
    );
    if (stockIndex === -1) {
      if (selectedStock.currentPrice * quantity > walletBalance) {
        alert("You don't have enough balance to buy these many shares");
        return;
      }
      setPortfolio([
        ...portfolio,
        {
          symbol: selectedStock.symbol,
          name: selectedStock.name,
          shares: quantity,
        },
      ]);
    } else {
      if (selectedStock.currentPrice * quantity > walletBalance) {
        alert("You don't have enough balance to buy these many shares");
        return;
      }
      const newPortfolio = [...portfolio];
      newPortfolio[stockIndex].shares += quantity;
      setPortfolio(newPortfolio);
    }
    setWalletBalance(walletBalance - selectedStock.currentPrice * quantity);
  };
  const handleStockSale = () => {
    const stockIndex = portfolio.findIndex(
      (stock) => stock.symbol === selectedStock.symbol
    );
    if (stockIndex === -1) {
      return;
    } else {
      if (quantity > portfolio[stockIndex].shares) {
        alert("You don't have enough shares to sell");
        return;
      }
      const newPortfolio = [...portfolio];
      newPortfolio[stockIndex].shares -= quantity;
      if (newPortfolio[stockIndex].shares === 0) {
        newPortfolio.splice(stockIndex, 1);
      }
      setPortfolio(newPortfolio);
    }
    setWalletBalance(walletBalance + selectedStock.currentPrice * quantity);
  };

  return (
    <div className="h-screen w-full flex items-center justify-center bg-neutral-900 gap-10 p-10">
      <Card className="w-1/3 h-full shadow">
        <CardHeader className="flex flex-row gap-5">
          <Avatar>
            <AvatarImage src="" alt="ZenTrade" />
            <AvatarFallback>AA</AvatarFallback>
          </Avatar>
          <div>
            <CardTitle>Aryan Arora</CardTitle>
            <CardDescription>Registered Trading Account</CardDescription>
          </div>
        </CardHeader>
        <div className="bg-black text-white rounded-md px-5 py-3 mx-5 flex justify-between">
          <h1>Wallet Balance:</h1>
          <h1 className="font-bold">${walletBalance}</h1>
        </div>
        <CardContent className="flex flex-col gap-5 mt-10">
          <CardTitle>Portfolio</CardTitle>
          <div className="overflow-scroll">
            {portfolio.map((stock: Stock, index) => (
              <div
                key={index}
                className="flex justify-between items-center border-b-2 py-5"
              >
                <div>
                  <p className="text-xs font-semibold bg-slate-200 px-2 rounded-lg mb-1 inline-block">
                    {stock.symbol}
                  </p>
                  <h1 className="">{stock.name}</h1>
                </div>
                <p className="text-right text-xs">
                  Shares:
                  <br />
                  <span className="text-base font-semibold">
                    {stock.shares}
                  </span>
                </p>
              </div>
            ))}
          </div>
        </CardContent>
        <CardFooter className="flex flex-col items-start gap-5"></CardFooter>
      </Card>
      <Card className="w-2/3 h-full shadow overflow-hidden">
        <CardHeader className="flex flex-row w-full justify-between items-center">
          <CardTitle>Trading</CardTitle>
          <CardDescription>
            {new Date().toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          </CardDescription>
        </CardHeader>
        <div className="w-full h-full flex gap-10 px-5 pb-24">
          <div className="w-1/2 h-full flex flex-col gap-3 overflow-scroll">
            {stocks.map((stock) => (
              <Card
                className="hover:bg-gray-100 cursor-pointer"
                onClick={() => handleStockSelect(stock)}
              >
                <CardHeader className="flex flex-row items-center justify-between">
                  <div>
                    <CardTitle>{stock.symbol}</CardTitle>
                    <h1>{stock.name}</h1>
                  </div>
                  <div>
                    <CardTitle className="text-green-500">
                      ${stock.currentPrice}
                    </CardTitle>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
          <div className="w-1/2 flex flex-col justify-between">
            <div className="w-full border border-neutral-200 rounded-lg flex flex-col items-center justify-center h-1/2">
              <h1 className="font-bold">{selectedStock.symbol}</h1>
              <p>{selectedStock.name}</p>
            </div>
            <div>
              <h1 className="text-xl font-bold">Current Price</h1>
              <h1 className="text-2xl ">${selectedStock.currentPrice}</h1>
              {quantity > 0 && (
                <h1 className="text-xl font-bold mt-5">
                  Total:{" "}
                  <span className="">
                    ${selectedStock.currentPrice * quantity}
                  </span>
                </h1>
              )}
            </div>
            <div>
              <Input
                type="number"
                placeholder="Enter Quantity"
                onChange={(e) => {
                  setQuantity(parseInt(e.target.value));
                }}
              />
              <div className="w-full flex flex-row gap-5 py-5">
                <Button className="w-1/2" onClick={handleStockPurchase}>
                  Buy
                </Button>
                <Button className="w-1/2" onClick={handleStockSale}>
                  Sell
                </Button>
              </div>
            </div>
          </div>
        </div>
        <CardFooter className="flex flex-col items-start gap-5"></CardFooter>
      </Card>
    </div>
  );
};

export default TradingCard;
