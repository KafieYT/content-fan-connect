
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Heart, Star, Users, Check, Upload, Settings, DollarSign, Eye } from "lucide-react";
import UploadModal from "@/components/UploadModal";

const CreatorProfile = () => {
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);

  const creatorData = {
    name: "Emma Rose",
    username: "@emmarose",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616c9ca4ee7?w=150&h=150&fit=crop&crop=face",
    coverImage: "https://images.unsplash.com/photo-1579952363873-27d3bfad9c0d?w=800&h=300&fit=crop",
    bio: "Créatrice lifestyle passionnée par la mode, les voyages et le bien-être. Je partage mon quotidien authentique avec ma communauté.",
    subscribers: 12500,
    rating: 4.9,
    category: "Lifestyle",
    monthlyPrice: 19.99,
    isVerified: true,
    totalLikes: 45600,
    totalPosts: 234
  };

  const posts = [
    {
      id: 1,
      type: "image",
      thumbnail: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=300&h=300&fit=crop",
      title: "Morning routine essentials",
      likes: 245,
      isLocked: !isSubscribed
    },
    {
      id: 2,
      type: "video",
      thumbnail: "https://images.unsplash.com/photo-1524863479829-916d8e77f114?w=300&h=300&fit=crop",
      title: "Behind the scenes",
      likes: 189,
      isLocked: !isSubscribed
    },
    {
      id: 3,
      type: "image",
      thumbnail: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=300&h=300&fit=crop",
      title: "Travel diary",
      likes: 312,
      isLocked: !isSubscribed
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Cover Image */}
      <div className="relative h-64 md:h-80 overflow-hidden">
        <img 
          src={creatorData.coverImage} 
          alt="Cover" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Profile Header */}
      <div className="container mx-auto px-4 -mt-20 relative">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="flex flex-col md:flex-row items-start gap-6">
            <Avatar className="w-32 h-32 border-4 border-white shadow-lg">
              <AvatarImage src={creatorData.avatar} alt={creatorData.name} />
              <AvatarFallback className="text-2xl">{creatorData.name.charAt(0)}</AvatarFallback>
            </Avatar>

            <div className="flex-1 space-y-4">
              <div>
                <div className="flex items-center space-x-2 mb-2">
                  <h1 className="text-3xl font-bold">{creatorData.name}</h1>
                  {creatorData.isVerified && (
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                  )}
                </div>
                <p className="text-muted-foreground text-lg">{creatorData.username}</p>
                <Badge className="bg-primary/10 text-primary mt-2">
                  {creatorData.category}
                </Badge>
              </div>

              <p className="text-muted-foreground leading-relaxed">
                {creatorData.bio}
              </p>

              <div className="flex items-center space-x-6 text-sm">
                <div className="flex items-center space-x-1">
                  <Users className="w-4 h-4" />
                  <span className="font-semibold">{creatorData.subscribers.toLocaleString()}</span>
                  <span className="text-muted-foreground">abonnés</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Heart className="w-4 h-4" />
                  <span className="font-semibold">{creatorData.totalLikes.toLocaleString()}</span>
                  <span className="text-muted-foreground">likes</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Eye className="w-4 h-4" />
                  <span className="font-semibold">{creatorData.totalPosts}</span>
                  <span className="text-muted-foreground">posts</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span className="font-semibold">{creatorData.rating}</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col space-y-3">
              {!isSubscribed ? (
                <Card className="p-4 text-center">
                  <div className="mb-2">
                    <p className="text-sm text-muted-foreground">Abonnement mensuel</p>
                    <p className="text-2xl font-bold text-primary">{creatorData.monthlyPrice}€</p>
                  </div>
                  <Button 
                    onClick={() => setIsSubscribed(true)}
                    className="w-full gradient-primary text-white border-none"
                  >
                    S'abonner
                  </Button>
                </Card>
              ) : (
                <div className="space-y-2">
                  <Button className="w-full" variant="outline">
                    <Settings className="w-4 h-4 mr-2" />
                    Gérer l'abonnement
                  </Button>
                  <Button 
                    onClick={() => setIsUploadModalOpen(true)}
                    className="w-full gradient-primary text-white border-none"
                  >
                    <Upload className="w-4 h-4 mr-2" />
                    Nouveau contenu
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Content Tabs */}
      <div className="container mx-auto px-4 py-8">
        <Tabs defaultValue="posts" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="posts">Publications</TabsTrigger>
            <TabsTrigger value="about">À propos</TabsTrigger>
            <TabsTrigger value="stats">Statistiques</TabsTrigger>
          </TabsList>

          <TabsContent value="posts" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((post) => (
                <Card key={post.id} className="group overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="relative aspect-square">
                    <img 
                      src={post.thumbnail} 
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                    {post.isLocked && (
                      <div className="absolute inset-0 bg-black/70 flex items-center justify-center">
                        <div className="text-white text-center">
                          <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-2">
                            <Eye className="w-6 h-6" />
                          </div>
                          <p className="text-sm">Contenu réservé aux abonnés</p>
                        </div>
                      </div>
                    )}
                    <div className="absolute top-2 right-2">
                      <Badge variant="secondary" className="bg-black/50 text-white">
                        {post.type === 'video' ? 'Vidéo' : 'Photo'}
                      </Badge>
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-semibold mb-2">{post.title}</h3>
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <div className="flex items-center space-x-1">
                        <Heart className="w-4 h-4" />
                        <span>{post.likes}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="about" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>À propos d'Emma</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  Salut ! Je suis Emma, une créatrice passionnée qui adore partager sa vie quotidienne, 
                  ses conseils beauté et ses aventures de voyage avec sa communauté.
                </p>
                <p>
                  Sur ma page, vous trouverez du contenu exclusif sur mon quotidien, mes routines 
                  bien-être, mes looks du jour et mes découvertes lifestyle.
                </p>
                <div className="pt-4">
                  <h4 className="font-semibold mb-2">Ce que vous pouvez attendre :</h4>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                    <li>Photos et vidéos exclusives de mon quotidien</li>
                    <li>Conseils beauté et mode personnalisés</li>
                    <li>Behind the scenes de mes projets</li>
                    <li>Sessions Q&A régulières</li>
                    <li>Contenu interactif et communauté engagée</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="stats" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card>
                <CardContent className="p-6 text-center">
                  <DollarSign className="w-8 h-8 text-green-500 mx-auto mb-2" />
                  <div className="text-2xl font-bold">2,450€</div>
                  <div className="text-sm text-muted-foreground">Revenus ce mois</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <Users className="w-8 h-8 text-blue-500 mx-auto mb-2" />
                  <div className="text-2xl font-bold">+234</div>
                  <div className="text-sm text-muted-foreground">Nouveaux abonnés</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <Heart className="w-8 h-8 text-pink-500 mx-auto mb-2" />
                  <div className="text-2xl font-bold">1,567</div>
                  <div className="text-sm text-muted-foreground">Likes ce mois</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <Eye className="w-8 h-8 text-purple-500 mx-auto mb-2" />
                  <div className="text-2xl font-bold">89%</div>
                  <div className="text-sm text-muted-foreground">Taux d'engagement</div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      <UploadModal 
        isOpen={isUploadModalOpen}
        onClose={() => setIsUploadModalOpen(false)}
      />
    </div>
  );
};

export default CreatorProfile;
