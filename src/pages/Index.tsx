import { useState } from "react";
import Header from "@/components/Header";
import Dashboard from "@/components/Dashboard";
import ExpenseForm from "@/components/ExpenseForm";
import ExpenseList from "@/components/ExpenseList";
import SettlementSuggestions from "@/components/SettlementSuggestions";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LayoutDashboard, Receipt, Sparkles } from "lucide-react";

const Index = () => {
  const [expenses, setExpenses] = useState<any[]>([]);

  const handleAddExpense = (expense: any) => {
    setExpenses([expense, ...expenses]);
  };

  const handleDeleteExpense = (id: string) => {
    setExpenses(expenses.filter(exp => exp.id !== id));
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Background gradient mesh */}
      <div className="fixed inset-0 bg-gradient-mesh opacity-30 pointer-events-none" />
      
      <Header />
      
      <main className="container mx-auto px-4 py-8 relative">
        <div className="mb-8 animate-fade-up">
          <h1 className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
            Smart Expense Management
          </h1>
          <p className="text-muted-foreground">
            AI-powered expense splitting with 98% settlement accuracy
          </p>
        </div>
        
        <Tabs defaultValue="dashboard" className="space-y-6">
          <TabsList className="grid w-full max-w-md grid-cols-3 bg-card-glass backdrop-blur-sm">
            <TabsTrigger value="dashboard" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              <LayoutDashboard className="h-4 w-4 mr-2" />
              Dashboard
            </TabsTrigger>
            <TabsTrigger value="expenses" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              <Receipt className="h-4 w-4 mr-2" />
              Expenses
            </TabsTrigger>
            <TabsTrigger value="ai" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              <Sparkles className="h-4 w-4 mr-2" />
              AI Insights
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="dashboard" className="animate-fade-in">
            <Dashboard />
          </TabsContent>
          
          <TabsContent value="expenses" className="space-y-6 animate-fade-in">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <ExpenseForm onAddExpense={handleAddExpense} />
              <ExpenseList expenses={expenses} onDelete={handleDeleteExpense} />
            </div>
          </TabsContent>
          
          <TabsContent value="ai" className="animate-fade-in">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <SettlementSuggestions />
              <div className="space-y-6">
                <div className="p-6 rounded-xl bg-gradient-card backdrop-blur-sm border border-border/50">
                  <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                    <Sparkles className="h-5 w-5 text-accent" />
                    AI Performance Metrics
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span>Settlement Accuracy</span>
                        <span className="font-medium">98%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div className="bg-gradient-accent h-2 rounded-full" style={{ width: "98%" }} />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span>Transaction Optimization</span>
                        <span className="font-medium">87%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div className="bg-gradient-primary h-2 rounded-full" style={{ width: "87%" }} />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span>Fair Split Calculation</span>
                        <span className="font-medium">95%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div className="bg-success h-2 rounded-full" style={{ width: "95%" }} />
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="p-6 rounded-xl bg-accent-light/10 border border-accent/20">
                  <h3 className="text-lg font-semibold mb-3">How AI Optimization Works</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span>Analyzes spending patterns to suggest optimal settlement timing</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span>Reduces transaction fees by consolidating multiple settlements</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span>Ensures fair distribution based on income levels and contribution history</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span>Predicts future expenses to help with budget planning</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Index;