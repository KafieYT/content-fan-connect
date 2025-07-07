
import { Button } from "@/components/ui/button";
import { Heart, Menu, X } from "lucide-react";
import { useState } from "react";

interface HeaderProps {
  onAuth: (type: 'login' | 'signup') => void;
}

const Header = ({ onAuth }: HeaderProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="border-b bg-white/80 backdrop-blur-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 gradient-primary rounded-lg flex items-center justify-center">
              <Heart className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              CreatorHub
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-foreground hover:text-primary transition-colors">
              Découvrir
            </a>
            <a href="#" className="text-foreground hover:text-primary transition-colors">
              Catégories
            </a>
            <a href="#" className="text-foreground hover:text-primary transition-colors">
              Comment ça marche
            </a>
            <a href="#" className="text-foreground hover:text-primary transition-colors">
              Aide
            </a>
          </nav>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <Button 
              variant="ghost" 
              onClick={() => onAuth('login')}
              className="hover:bg-primary/10 hover:text-primary"
            >
              Se connecter
            </Button>
            <Button 
              onClick={() => onAuth('signup')}
              className="gradient-primary text-white border-none hover:scale-105 transition-transform"
            >
              S'inscrire
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t bg-white/95 backdrop-blur-md absolute left-0 right-0 top-16 shadow-lg">
            <nav className="flex flex-col space-y-4 px-4 py-6">
              <a href="#" className="text-foreground hover:text-primary transition-colors">
                Découvrir
              </a>
              <a href="#" className="text-foreground hover:text-primary transition-colors">
                Catégories
              </a>
              <a href="#" className="text-foreground hover:text-primary transition-colors">
                Comment ça marche
              </a>
              <a href="#" className="text-foreground hover:text-primary transition-colors">
                Aide
              </a>
              <div className="flex flex-col space-y-3 pt-4 border-t">
                <Button 
                  variant="outline" 
                  onClick={() => {
                    onAuth('login');
                    setMobileMenuOpen(false);
                  }}
                >
                  Se connecter
                </Button>
                <Button 
                  onClick={() => {
                    onAuth('signup');
                    setMobileMenuOpen(false);
                  }}
                  className="gradient-primary text-white border-none"
                >
                  S'inscrire
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
