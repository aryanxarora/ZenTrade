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
import { Label } from "@/components/ui/label";
import { useState } from "react";

const PortfolioCard = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [disabled, setDisabled] = useState(false);

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
      <CardContent className="flex flex-col gap-10 mt-10">
        <CardTitle>Portfolio</CardTitle>
      </CardContent>
      <CardFooter className="flex flex-col items-start gap-5"></CardFooter>
    </Card>
  );
};

export default PortfolioCard;
