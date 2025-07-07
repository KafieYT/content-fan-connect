
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useState } from "react";
import { Heart, User, Users } from "lucide-react";

interface AuthModalProps {
  isOpen: boolean;
  type: 'login' | 'signup' | null;
  onClose: () => void;
}

const AuthModal = ({ isOpen, type, onClose }: AuthModalProps) => {
  const [userType, setUserType] = useState<'fan' | 'creator'>('fan');
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    username: '',
    fullName: ''
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Auth form submitted:', { type, userType, formData });
    // TODO: Implement actual authentication logic
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <div className="flex items-center justify-center mb-4">
            <div className="w-12 h-12 gradient-primary rounded-full flex items-center justify-center">
              <Heart className="w-6 h-6 text-white" />
            </div>
          </div>
          <DialogTitle className="text-center">
            {type === 'login' ? 'Connexion' : 'Créer un compte'}
          </DialogTitle>
        </DialogHeader>

        <Tabs value={type || 'login'} className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="login">Se connecter</TabsTrigger>
            <TabsTrigger value="signup">S'inscrire</TabsTrigger>
          </TabsList>

          <TabsContent value="login" className="space-y-4 mt-4">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="login-email">Email</Label>
                <Input
                  id="login-email"
                  type="email"
                  placeholder="votre@email.com"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="login-password">Mot de passe</Label>
                <Input
                  id="login-password"
                  type="password"
                  placeholder="••••••••"
                  value={formData.password}
                  onChange={(e) => handleInputChange('password', e.target.value)}
                  required
                />
              </div>
              <Button type="submit" className="w-full gradient-primary text-white border-none">
                Se connecter
              </Button>
            </form>
          </TabsContent>

          <TabsContent value="signup" className="space-y-4 mt-4">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-3">
                <Label>Je souhaite :</Label>
                <RadioGroup 
                  value={userType} 
                  onValueChange={(value: 'fan' | 'creator') => setUserType(value)}
                  className="grid grid-cols-2 gap-4"
                >
                  <div className="flex items-center space-x-2 border rounded-lg p-3 hover:bg-muted/50 cursor-pointer">
                    <RadioGroupItem value="fan" id="fan" />
                    <Label htmlFor="fan" className="flex items-center space-x-2 cursor-pointer">
                      <User className="w-4 h-4" />
                      <span>Être fan</span>
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2 border rounded-lg p-3 hover:bg-muted/50 cursor-pointer">
                    <RadioGroupItem value="creator" id="creator" />
                    <Label htmlFor="creator" className="flex items-center space-x-2 cursor-pointer">
                      <Users className="w-4 h-4" />
                      <span>Créer du contenu</span>
                    </Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="space-y-2">
                <Label htmlFor="signup-fullName">Nom complet</Label>
                <Input
                  id="signup-fullName"
                  type="text"
                  placeholder="John Doe"
                  value={formData.fullName}
                  onChange={(e) => handleInputChange('fullName', e.target.value)}
                  required
                />
              </div>

              {userType === 'creator' && (
                <div className="space-y-2">
                  <Label htmlFor="signup-username">Nom d'utilisateur</Label>
                  <Input
                    id="signup-username"
                    type="text"
                    placeholder="@monusername"
                    value={formData.username}
                    onChange={(e) => handleInputChange('username', e.target.value)}
                    required
                  />
                </div>
              )}

              <div className="space-y-2">
                <Label htmlFor="signup-email">Email</Label>
                <Input
                  id="signup-email"
                  type="email"
                  placeholder="votre@email.com"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="signup-password">Mot de passe</Label>
                <Input
                  id="signup-password"
                  type="password"
                  placeholder="••••••••"
                  value={formData.password}
                  onChange={(e) => handleInputChange('password', e.target.value)}
                  required
                />
              </div>

              <Button type="submit" className="w-full gradient-primary text-white border-none">
                Créer mon compte
              </Button>
            </form>
          </TabsContent>
        </Tabs>

        <p className="text-xs text-muted-foreground text-center mt-4">
          En continuant, vous acceptez nos conditions d'utilisation et notre politique de confidentialité.
        </p>
      </DialogContent>
    </Dialog>
  );
};

export default AuthModal;
