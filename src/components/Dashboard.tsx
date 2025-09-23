import { Card } from "@/components/ui/card";
import { TrendingUp, Users, DollarSign, Activity, ArrowUp, ArrowDown } from "lucide-react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";

const spendingData = [
  { month: "Jan", amount: 1200 },
  { month: "Feb", amount: 1350 },
  { month: "Mar", amount: 980 },
  { month: "Apr", amount: 1450 },
  { month: "May", amount: 1100 },
  { month: "Jun", amount: 1680 },
];

const categoryData = [
  { name: "Food & Dining", value: 35, color: "hsl(38 92% 50%)" },
  { name: "Transportation", value: 20, color: "hsl(217 91% 60%)" },
  { name: "Entertainment", value: 15, color: "hsl(280 85% 65%)" },
  { name: "Shopping", value: 12, color: "hsl(330 85% 60%)" },
  { name: "Bills", value: 18, color: "hsl(0 84% 60%)" },
];

export default function Dashboard() {
  const stats = [
    {
      title: "Total Expenses",
      value: "$7,890",
      change: "+12.5%",
      trend: "up",
      icon: DollarSign,
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
    {
      title: "Active Groups",
      value: "8",
      change: "+2",
      trend: "up",
      icon: Users,
      color: "text-accent",
      bgColor: "bg-accent/10",
    },
    {
      title: "Pending Settlements",
      value: "$234",
      change: "-45%",
      trend: "down",
      icon: Activity,
      color: "text-warning",
      bgColor: "bg-warning/10",
    },
    {
      title: "AI Accuracy",
      value: "98%",
      change: "+3%",
      trend: "up",
      icon: TrendingUp,
      color: "text-success",
      bgColor: "bg-success/10",
    },
  ];

  return (
    <div className="space-y-6">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <Card
              key={index}
              className="p-6 backdrop-blur-sm bg-card/90 border-border/50 hover:shadow-lg transition-all duration-200 animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">{stat.title}</p>
                  <p className="text-2xl font-bold mt-2">{stat.value}</p>
                  <div className="flex items-center gap-1 mt-2">
                    {stat.trend === "up" ? (
                      <ArrowUp className="h-3 w-3 text-success" />
                    ) : (
                      <ArrowDown className="h-3 w-3 text-destructive" />
                    )}
                    <span className={`text-xs ${stat.trend === "up" ? "text-success" : "text-destructive"}`}>
                      {stat.change}
                    </span>
                  </div>
                </div>
                <div className={`p-3 rounded-lg ${stat.bgColor}`}>
                  <Icon className={`h-5 w-5 ${stat.color}`} />
                </div>
              </div>
            </Card>
          );
        })}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Spending Trend */}
        <Card className="p-6 backdrop-blur-sm bg-card/90 border-border/50">
          <h3 className="text-lg font-semibold mb-4">Spending Trend</h3>
          <ResponsiveContainer width="100%" height={250}>
            <AreaChart data={spendingData}>
              <defs>
                <linearGradient id="colorAmount" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="hsl(217 91% 60%)" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="hsl(217 91% 60%)" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" opacity={0.3} />
              <XAxis 
                dataKey="month" 
                stroke="hsl(var(--muted-foreground))"
                fontSize={12}
              />
              <YAxis 
                stroke="hsl(var(--muted-foreground))"
                fontSize={12}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: "hsl(var(--background))",
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "8px",
                }}
              />
              <Area
                type="monotone"
                dataKey="amount"
                stroke="hsl(217 91% 60%)"
                strokeWidth={2}
                fillOpacity={1}
                fill="url(#colorAmount)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </Card>

        {/* Category Breakdown */}
        <Card className="p-6 backdrop-blur-sm bg-card/90 border-border/50">
          <h3 className="text-lg font-semibold mb-4">Category Breakdown</h3>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={categoryData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={90}
                paddingAngle={5}
                dataKey="value"
              >
                {categoryData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{
                  backgroundColor: "hsl(var(--background))",
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "8px",
                }}
              />
            </PieChart>
          </ResponsiveContainer>
          <div className="grid grid-cols-2 gap-2 mt-4">
            {categoryData.map((cat, index) => (
              <div key={index} className="flex items-center gap-2">
                <div
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: cat.color }}
                />
                <span className="text-xs text-muted-foreground">{cat.name}</span>
                <span className="text-xs font-medium ml-auto">{cat.value}%</span>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}