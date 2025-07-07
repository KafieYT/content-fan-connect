
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Heart, Star, Users, DollarSign, Upload, Eye } from "lucide-react";
import Header from "@/components/Header";
import AuthModal from "@/components/AuthModal";
import CreatorCard from "@/components/CreatorCard";
import StatsSection from "@/components/StatsSection";

const Index = () => {
  const [authModal, setAuthModal] = useState<{ isOpen: boolean; type: 'login' | 'signup' | null }>({
    isOpen: false,
    type: null
  });

  const featuredCreators = [
    {
      id: 1,
      name: "Emma Rose",
      username: "@emmarose",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616c9ca4ee7?w=150&h=150&fit=crop&crop=face",
      subscribers: 12500,
      rating: 4.9,
      category: "Lifestyle",
      monthlyPrice: 19.99,
      isVerified: true
    },
    {
      id: 2,
      name: "Marcus Fit",
      username: "@marcusfit",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      subscribers: 8300,
      rating: 4.8,
      category: "Fitness",
      monthlyPrice: 24.99,
      isVerified: true
    },
    {
      id: 3,
      name: "Luna Art",
      username: "@lunaart",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      subscribers: 15200,
      rating: 4.9,
      category: "Art",
      monthlyPrice: 15.99,
      isVerified: false
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header onAuth={(type) => setAuthModal({ isOpen: true, type })} />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 gradient-primary opacity-10"></div>
        <div className="container mx-auto px-4 py-20 relative">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Monétisez votre passion
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
              Rejoignez la plateforme qui connecte les créateurs avec leurs fans les plus fidèles. 
              Créez, partagez et gagnez de l'argent avec votre contenu exclusif.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="gradient-primary text-white border-none hover:scale-105 transition-transform"
                onClick={() => setAuthModal({ isOpen: true, type: 'signup' })}
              >
                Devenir créateur
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-primary text-primary hover:bg-primary hover:text-white"
                onClick={() => setAuthModal({ isOpen: true, type: 'login' })}
              >
                Explorer les créateurs
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <StatsSection />

      {/* Featured Creators */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Créateurs en vedette</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Découvrez les créateurs les plus populaires et leurs contenus exclusifs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCreators.map((creator) => (
              <CreatorCard 
                key={creator.id} 
                creator={creator}
                onSubscribe={() => setAuthModal({ isOpen: true, type: 'login' })}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Pourquoi nous choisir ?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Les outils dont vous avez besoin pour réussir en tant que créateur
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center">
                <div className="w-16 h-16 gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <DollarSign className="w-8 h-8 text-white" />
                </div>
                <CardTitle>Revenus élevés</CardTitle>
                <CardDescription>
                  Gardez jusqu'à 85% de vos revenus avec nos frais de commission parmi les plus bas du marché
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center">
                <div className="w-16 h-16 gradient-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Upload className="w-8 h-8 text-white" />
                </div>
                <CardTitle>Upload facile</CardTitle>
                <CardDescription>
                  Interface intuitive pour publier vos photos, vidéos et contenus en quelques clics
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Eye className="w-8 h-8 text-white" />
                </div>
                <CardTitle>Analytics détaillés</CardTitle>
                <CardDescription>
                  Suivez vos performances, vos revenus et l'engagement de vos fans en temps réel
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Prêt à commencer votre aventure ?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Rejoignez des milliers de créateurs qui gagnent déjà leur vie grâce à leur passion
          </p>
          <Button 
            size="lg" 
            variant="secondary"
            className="bg-white text-primary hover:bg-white/90 hover:scale-105 transition-transform"
            onClick={() => setAuthModal({ isOpen: true, type: 'signup' })}
          >
            Créer mon compte gratuitement
          </Button>
        </div>
      </section>

      <AuthModal 
        isOpen={authModal.isOpen}
        type={authModal.type}
        onClose={() => setAuthModal({ isOpen: false, type: null })}
      />
    </div>
  );
};

export default Index;
