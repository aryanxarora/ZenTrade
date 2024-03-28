import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const StockCard = ({ stock, className, handleStockSelect }: any) => {
  return (
    <Card className={`${className}`} onClick={handleStockSelect(stock)}>
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
  );
};

export default StockCard;
