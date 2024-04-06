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

const PortfolioCard = ({ walletBalance }: any) => {
  return (
    <Card className="w-1/3 h-full shadow">
      <CardHeader className="flex flex-row gap-5">
        <Avatar>
          <AvatarImage src="" alt="ZenTrade" />
          <AvatarFallback>ZT</AvatarFallback>
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
          {["AAPL", "GOOGL", "AMZN", "TSLA"].map((symbol, index) => (
            <div
              key={index}
              className="flex justify-between items-center border-b-2 py-5"
            >
              <div>
                <p className="text-xs font-semibold bg-slate-200 px-2 rounded-lg mb-1 inline-block">
                  {symbol}
                </p>
                <h1 className="">Microsoft Operations Inc.</h1>
              </div>
              <p className="text-right text-xs">
                Shares:
                <br />
                <span className="text-base font-semibold">10.39</span>
              </p>
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex flex-col items-start gap-5"></CardFooter>
    </Card>
  );
};

export default PortfolioCard;
