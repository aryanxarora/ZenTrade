"use client";

import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import stocks from "@/app/stocks";

const TradingCard = () => {
  const [selectedStock, setSelectedStock] = useState(stocks[0]);
  const [quantity, setQuantity] = useState(0);
  const handleStockSelect = (stock: any) => {
    console.log(stock);
    setSelectedStock(stock);
  };

  return (
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
            <Input
              type="number"
              placeholder="Enter Quantity"
              onChange={(e) => {
                setQuantity(parseInt(e.target.value));
              }}
            />
            <div className="w-full flex flex-row gap-5 py-5">
              <Button className="w-1/2">Buy</Button>
              <Button className="w-1/2">Sell</Button>
            </div>
          </div>
        </div>
      </div>
      <CardFooter className="flex flex-col items-start gap-5"></CardFooter>
    </Card>
  );
};

export default TradingCard;
