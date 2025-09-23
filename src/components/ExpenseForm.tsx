import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card } from "@/components/ui/card";
import { PlusCircle, Users, DollarSign, Calendar, Tag } from "lucide-react";
import { toast } from "sonner";

const categories = [
  "Food & Dining",
  "Transportation",
  "Entertainment",
  "Shopping",
  "Bills & Utilities",
  "Travel",
  "Healthcare",
  "Other"
];

export default function ExpenseForm({ onAddExpense }: { onAddExpense: (expense: any) => void }) {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [splitWith, setSplitWith] = useState<string[]>([]);
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!description || !amount || !category) {
      toast.error("Please fill in all required fields");
      return;
    }

    const expense = {
      id: Date.now().toString(),
      description,
      amount: parseFloat(amount),
      category,
      splitWith,
      date,
      paidBy: "You",
      createdAt: new Date().toISOString()
    };

    onAddExpense(expense);
    
    // Reset form
    setDescription("");
    setAmount("");
    setCategory("");
    setSplitWith([]);
    
    toast.success("Expense added successfully!");
  };

  return (
    <Card className="p-6 backdrop-blur-sm bg-card/90 border-border/50 shadow-xl">
      <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
        <PlusCircle className="h-5 w-5 text-primary" />
        Add New Expense
      </h2>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="description" className="flex items-center gap-2">
              <Tag className="h-4 w-4 text-muted-foreground" />
              Description
            </Label>
            <Input
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="What was this expense for?"
              className="bg-background/50"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="amount" className="flex items-center gap-2">
              <DollarSign className="h-4 w-4 text-muted-foreground" />
              Amount
            </Label>
            <Input
              id="amount"
              type="number"
              step="0.01"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="0.00"
              className="bg-background/50"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="category" className="flex items-center gap-2">
              <Tag className="h-4 w-4 text-muted-foreground" />
              Category
            </Label>
            <Select value={category} onValueChange={setCategory}>
              <SelectTrigger className="bg-background/50">
                <SelectValue placeholder="Select category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map(cat => (
                  <SelectItem key={cat} value={cat}>{cat}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="date" className="flex items-center gap-2">
              <Calendar className="h-4 w-4 text-muted-foreground" />
              Date
            </Label>
            <Input
              id="date"
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="bg-background/50"
            />
          </div>
        </div>
        
        <div className="space-y-2">
          <Label className="flex items-center gap-2">
            <Users className="h-4 w-4 text-muted-foreground" />
            Split with (optional)
          </Label>
          <div className="flex flex-wrap gap-2">
            {["Alice", "Bob", "Charlie", "Diana"].map(person => (
              <Button
                key={person}
                type="button"
                variant={splitWith.includes(person) ? "default" : "outline"}
                size="sm"
                onClick={() => {
                  setSplitWith(prev =>
                    prev.includes(person)
                      ? prev.filter(p => p !== person)
                      : [...prev, person]
                  );
                }}
              >
                {person}
              </Button>
            ))}
          </div>
        </div>
        
        <Button type="submit" className="w-full" variant="gradient">
          Add Expense
        </Button>
      </form>
    </Card>
  );
}