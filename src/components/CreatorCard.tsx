
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Heart, Star, Users, Check } from "lucide-react";

interface Creator {
  id: number;
  name: string;
  username: string;
  avatar: string;
  subscribers: number;
  rating: number;
  category: string;
  monthlyPrice: number;
  isVerified: boolean;
}

interface CreatorCardProps {
  creator: Creator;
  onSubscribe: () => void;
}

const CreatorCard = ({ creator, onSubscribe }: CreatorCardProps) => {
  return (
    <Card className="group hover:shadow-xl transition-shadow duration-300 border-none bg-white overflow-hidden">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-3">
            <Avatar className="w-12 h-12 border-2 border-primary/20">
              <AvatarImage src={creator.avatar} alt={creator.name} />
              <AvatarFallback>{creator.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div>
              <div className="flex items-center space-x-1">
                <h3 className="font-semibold text-lg">{creator.name}</h3>
                {creator.isVerified && (
                  <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center">
                    <Check className="w-3 h-3 text-white" />
                  </div>
                )}
              </div>
              <p className="text-sm text-muted-foreground">{creator.username}</p>
            </div>
          </div>
          <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-red-500">
            <Heart className="w-4 h-4" />
          </Button>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between">
          <Badge variant="secondary" className="bg-primary/10 text-primary">
            {creator.category}
          </Badge>
          <div className="flex items-center space-x-1 text-sm text-muted-foreground">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            <span>{creator.rating}</span>
          </div>
        </div>

        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
          <div className="flex items-center space-x-1">
            <Users className="w-4 h-4" />
            <span>{creator.subscribers.toLocaleString()} abonnés</span>
          </div>
        </div>

        <div className="pt-2 border-t">
          <div className="flex items-center justify-between mb-3">
            <div>
              <p className="text-sm text-muted-foreground">Tarif mensuel</p>
              <p className="text-2xl font-bold text-primary">{creator.monthlyPrice}€</p>
            </div>
          </div>
          
          <Button 
            onClick={onSubscribe}
            className="w-full gradient-primary text-white border-none hover:scale-105 transition-transform"
          >
            S'abonner
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default CreatorCard;
