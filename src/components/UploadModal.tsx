
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Upload, Image, Video, X } from "lucide-react";

interface UploadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const UploadModal = ({ isOpen, onClose }: UploadModalProps) => {
  const [contentType, setContentType] = useState<'image' | 'video'>('image');
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string>('');
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    price: '',
    isExclusive: true
  });

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setUploadedFile(file);
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);
    }
  };

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Upload form submitted:', { contentType, uploadedFile, formData });
    // TODO: Implement actual upload logic
    onClose();
  };

  const removeFile = () => {
    setUploadedFile(null);
    setPreviewUrl('');
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center space-x-2">
            <Upload className="w-5 h-5" />
            <span>Nouveau contenu</span>
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Content Type Selection */}
          <div className="space-y-3">
            <Label>Type de contenu</Label>
            <RadioGroup 
              value={contentType} 
              onValueChange={(value: 'image' | 'video') => setContentType(value)}
              className="grid grid-cols-2 gap-4"
            >
              <div className="flex items-center space-x-2 border rounded-lg p-4 hover:bg-muted/50 cursor-pointer">
                <RadioGroupItem value="image" id="image" />
                <Label htmlFor="image" className="flex items-center space-x-2 cursor-pointer">
                  <Image className="w-5 h-5" />
                  <span>Photo</span>
                </Label>
              </div>
              <div className="flex items-center space-x-2 border rounded-lg p-4 hover:bg-muted/50 cursor-pointer">
                <RadioGroupItem value="video" id="video" />
                <Label htmlFor="video" className="flex items-center space-x-2 cursor-pointer">
                  <Video className="w-5 h-5" />
                  <span>Vidéo</span>
                </Label>
              </div>
            </RadioGroup>
          </div>

          {/* File Upload */}
          <div className="space-y-3">
            <Label>Fichier</Label>
            {!uploadedFile ? (
              <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-8 text-center hover:bg-muted/50 transition-colors">
                <input
                  type="file"
                  accept={contentType === 'image' ? 'image/*' : 'video/*'}
                  onChange={handleFileUpload}
                  className="hidden"
                  id="file-upload"
                />
                <Label htmlFor="file-upload" className="cursor-pointer">
                  <div className="space-y-2">
                    <div className="w-12 h-12 gradient-primary rounded-full flex items-center justify-center mx-auto">
                      {contentType === 'image' ? (
                        <Image className="w-6 h-6 text-white" />
                      ) : (
                        <Video className="w-6 h-6 text-white" />
                      )}
                    </div>
                    <p className="text-lg font-medium">
                      Cliquez pour sélectionner {contentType === 'image' ? 'une photo' : 'une vidéo'}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {contentType === 'image' 
                        ? 'Formats supportés: JPG, PNG, GIF (max 10MB)'
                        : 'Formats supportés: MP4, MOV, AVI (max 100MB)'
                      }
                    </p>
                  </div>
                </Label>
              </div>
            ) : (
              <div className="relative">
                {contentType === 'image' ? (
                  <img 
                    src={previewUrl} 
                    alt="Preview" 
                    className="w-full h-64 object-cover rounded-lg"
                  />
                ) : (
                  <video 
                    src={previewUrl} 
                    className="w-full h-64 object-cover rounded-lg"
                    controls
                  />
                )}
                <Button
                  type="button"
                  variant="destructive"
                  size="sm"
                  className="absolute top-2 right-2"
                  onClick={removeFile}
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>
            )}
          </div>

          {/* Title */}
          <div className="space-y-2">
            <Label htmlFor="title">Titre</Label>
            <Input
              id="title"
              placeholder="Donnez un titre accrocheur à votre contenu"
              value={formData.title}
              onChange={(e) => handleInputChange('title', e.target.value)}
              required
            />
          </div>

          {/* Description */}
          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              placeholder="Décrivez votre contenu, partagez l'histoire derrière..."
              rows={4}
              value={formData.description}
              onChange={(e) => handleInputChange('description', e.target.value)}
            />
          </div>

          {/* Price */}
          <div className="space-y-2">
            <Label htmlFor="price">Prix (optionnel)</Label>
            <div className="relative">
              <Input
                id="price"
                type="number"
                step="0.01"
                placeholder="0.00"
                value={formData.price}
                onChange={(e) => handleInputChange('price', e.target.value)}
                className="pl-6"
              />
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">€</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Laissez vide pour un contenu inclus dans l'abonnement
            </p>
          </div>

          {/* Exclusive Content Toggle */}
          <div className="space-y-3">
            <Label>Visibilité</Label>
            <RadioGroup 
              value={formData.isExclusive ? 'exclusive' : 'public'} 
              onValueChange={(value) => handleInputChange('isExclusive', value === 'exclusive')}
              className="space-y-2"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="exclusive" id="exclusive" />
                <Label htmlFor="exclusive" className="text-sm">
                  Réservé aux abonnés (recommandé)
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="public" id="public" />
                <Label htmlFor="public" className="text-sm">
                  Public (visible par tous)
                </Label>
              </div>
            </RadioGroup>
          </div>

          {/* Submit Buttons */}
          <div className="flex space-x-3 pt-4">
            <Button type="button" variant="outline" onClick={onClose} className="flex-1">
              Annuler
            </Button>
            <Button 
              type="submit" 
              disabled={!uploadedFile || !formData.title}
              className="flex-1 gradient-primary text-white border-none"
            >
              Publier
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default UploadModal;
