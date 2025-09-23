import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { DollarSign, Users, Calendar, Trash2, Edit } from "lucide-react";

interface Expense {
  id: string;
  description: string;
  amount: number;
  category: string;
  splitWith: string[];
  date: string;
  paidBy: string;
  createdAt: string;
}

interface ExpenseListProps {
  expenses: Expense[];
  onDelete: (id: string) => void;
}

const categoryColors: Record<string, string> = {
  "Food & Dining": "bg-orange-500/10 text-orange-600 border-orange-500/20",
  "Transportation": "bg-blue-500/10 text-blue-600 border-blue-500/20",
  "Entertainment": "bg-purple-500/10 text-purple-600 border-purple-500/20",
  "Shopping": "bg-pink-500/10 text-pink-600 border-pink-500/20",
  "Bills & Utilities": "bg-red-500/10 text-red-600 border-red-500/20",
  "Travel": "bg-green-500/10 text-green-600 border-green-500/20",
  "Healthcare": "bg-cyan-500/10 text-cyan-600 border-cyan-500/20",
  "Other": "bg-gray-500/10 text-gray-600 border-gray-500/20"
};

export default function ExpenseList({ expenses, onDelete }: ExpenseListProps) {
  if (expenses.length === 0) {
    return (
      <Card className="p-8 backdrop-blur-sm bg-card/90 border-border/50 shadow-xl">
        <div className="text-center text-muted-foreground">
          <DollarSign className="h-12 w-12 mx-auto mb-3 opacity-50" />
          <p className="text-lg font-medium">No expenses yet</p>
          <p className="text-sm">Add your first expense to get started</p>
        </div>
      </Card>
    );
  }

  return (
    <Card className="p-6 backdrop-blur-sm bg-card/90 border-border/50 shadow-xl">
      <h2 className="text-xl font-semibold mb-6">Recent Expenses</h2>
      
      <div className="space-y-3">
        {expenses.map((expense) => (
          <div
            key={expense.id}
            className="group relative p-4 rounded-lg bg-background/50 hover:bg-background/70 transition-all duration-200 border border-border/50 hover:border-border"
          >
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="font-medium text-foreground">{expense.description}</h3>
                  <Badge
                    variant="secondary"
                    className={categoryColors[expense.category] || categoryColors["Other"]}
                  >
                    {expense.category}
                  </Badge>
                </div>
                
                <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <DollarSign className="h-3.5 w-3.5" />
                    ${expense.amount.toFixed(2)}
                  </span>
                  
                  <span className="flex items-center gap-1">
                    <Calendar className="h-3.5 w-3.5" />
                    {new Date(expense.date).toLocaleDateString()}
                  </span>
                  
                  {expense.splitWith.length > 0 && (
                    <span className="flex items-center gap-1">
                      <Users className="h-3.5 w-3.5" />
                      Split with {expense.splitWith.join(", ")}
                    </span>
                  )}
                </div>
              </div>
              
              <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <Edit className="h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 hover:text-destructive"
                  onClick={() => onDelete(expense.id)}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}