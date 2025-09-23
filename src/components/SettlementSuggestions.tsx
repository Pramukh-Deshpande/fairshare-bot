import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Sparkles, ArrowRight, Check, TrendingUp, Users } from "lucide-react";
import { toast } from "sonner";

interface Settlement {
  from: string;
  to: string;
  amount: number;
  confidence: number;
}

export default function SettlementSuggestions() {
  const settlements: Settlement[] = [
    { from: "Alice", to: "You", amount: 45.50, confidence: 98 },
    { from: "Bob", to: "Charlie", amount: 32.75, confidence: 95 },
    { from: "Diana", to: "You", amount: 28.00, confidence: 92 },
  ];

  const handleSettle = (settlement: Settlement) => {
    toast.success(`Settlement marked as complete: ${settlement.from} → ${settlement.to}`);
  };

  return (
    <Card className="p-6 backdrop-blur-sm bg-gradient-card border-accent/20 shadow-xl relative overflow-hidden">
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-accent opacity-10 rounded-full blur-3xl"></div>
      
      <div className="relative">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <div className="relative">
              <Sparkles className="h-5 w-5 text-accent animate-pulse-glow" />
            </div>
            <h2 className="text-xl font-semibold">AI Settlement Suggestions</h2>
          </div>
          <Badge variant="secondary" className="bg-accent-light text-accent border-accent/20">
            98% Accuracy
          </Badge>
        </div>
        
        <div className="space-y-3">
          {settlements.map((settlement, index) => (
            <div
              key={index}
              className="group p-4 rounded-lg bg-background/60 hover:bg-background/80 transition-all duration-200 border border-border/50"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center text-primary-foreground font-medium">
                      {settlement.from[0]}
                    </div>
                    <ArrowRight className="h-4 w-4 text-muted-foreground" />
                    <div className="w-10 h-10 rounded-full bg-gradient-accent flex items-center justify-center text-accent-foreground font-medium">
                      {settlement.to === "You" ? "Y" : settlement.to[0]}
                    </div>
                  </div>
                  
                  <div>
                    <p className="font-medium">
                      {settlement.from} owes {settlement.to}
                    </p>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-2xl font-bold text-primary">
                        ${settlement.amount.toFixed(2)}
                      </span>
                      <Badge variant="outline" className="text-xs">
                        {settlement.confidence}% confidence
                      </Badge>
                    </div>
                  </div>
                </div>
                
                <Button
                  variant="ai"
                  size="sm"
                  onClick={() => handleSettle(settlement)}
                  className="opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <Check className="h-4 w-4 mr-1" />
                  Settle
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-6 p-4 rounded-lg bg-accent-light/20 border border-accent/20">
          <div className="flex items-start gap-3">
            <TrendingUp className="h-5 w-5 text-accent mt-0.5" />
            <div>
              <p className="text-sm font-medium text-foreground">Optimization Complete</p>
              <p className="text-xs text-muted-foreground mt-1">
                Reduced transactions from 12 to 3 using AI-powered settlement optimization.
                Total savings: $2.50 in transaction fees.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}