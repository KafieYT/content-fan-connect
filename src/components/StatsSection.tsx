
import { Card, CardContent } from "@/components/ui/card";
import { DollarSign, Users, Heart, TrendingUp } from "lucide-react";

const StatsSection = () => {
  const stats = [
    {
      icon: Users,
      value: "50K+",
      label: "Créateurs actifs",
      color: "text-blue-500"
    },
    {
      icon: Heart,
      value: "2M+",
      label: "Fans engagés",
      color: "text-pink-500"
    },
    {
      icon: DollarSign,
      value: "15M€",
      label: "Revenus générés",
      color: "text-green-500"
    },
    {
      icon: TrendingUp,
      value: "95%",
      label: "Taux de satisfaction",
      color: "text-purple-500"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card key={index} className="border-none shadow-sm hover:shadow-md transition-shadow text-center">
              <CardContent className="p-6">
                <div className={`w-12 h-12 ${stat.color} bg-current/10 rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <stat.icon className={`w-6 h-6 ${stat.color}`} />
                </div>
                <div className="text-3xl font-bold text-foreground mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
