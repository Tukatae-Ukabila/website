import { useState } from "react";
import { Button } from "@/components/ui/button";
import { 
  Share2, 
  Copy,
  MessageCircle
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useToast } from "@/hooks/use-toast";

interface SocialShareProps {
  url?: string;
  title?: string;
  text?: string;
  hashtags?: string[];
  className?: string;
  variant?: "default" | "outline" | "ghost";
  size?: "default" | "sm" | "lg" | "icon";
}

const SocialShare = ({ 
  url = window.location.href,
  title = document.title,
  text = "",
  hashtags = [],
  className = "",
  variant = "outline",
  size = "default"
}: SocialShareProps) => {
  const { toast } = useToast();
  const [isOpen, setIsOpen] = useState(false);

  const shareData = {
    url: encodeURIComponent(url),
    title: encodeURIComponent(title),
    text: encodeURIComponent(text || title),
    hashtags: hashtags.join(",")
  };

  const shareUrls = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${shareData.url}`,
    twitter: `https://twitter.com/intent/tweet?url=${shareData.url}&text=${shareData.text}${hashtags.length ? `&hashtags=${shareData.hashtags}` : ''}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${shareData.url}`,
    whatsapp: `https://wa.me/?text=${shareData.text}%20${shareData.url}`,
  };

  const handleShare = (platform: string) => {
    const url = shareUrls[platform as keyof typeof shareUrls];
    if (url) {
      window.open(url, '_blank', 'width=600,height=400');
    }
    setIsOpen(false);
  };

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(url);
      toast({
        title: "Link copied!",
        description: "The link has been copied to your clipboard.",
      });
    } catch (err) {
      toast({
        title: "Failed to copy",
        description: "Could not copy the link to clipboard.",
        variant: "destructive",
      });
    }
    setIsOpen(false);
  };

  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: title,
          text: text || title,
          url: url,
        });
        setIsOpen(false);
      } catch (err) {
        console.log('Error sharing:', err);
      }
    }
  };

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger asChild>
        <Button variant={variant} size={size} className={className}>
          <Share2 className="h-4 w-4" />
          {size !== "icon" && <span className="ml-2">Share</span>}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-48">
        {navigator.share && (
          <DropdownMenuItem onClick={handleNativeShare}>
            <Share2 className="mr-2 h-4 w-4" />
            Share
          </DropdownMenuItem>
        )}
        <DropdownMenuItem onClick={() => handleShare('facebook')}>
          <div className="mr-2 h-4 w-4 bg-blue-600 rounded-sm flex items-center justify-center text-white text-xs font-bold">f</div>
          Facebook
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleShare('twitter')}>
          <div className="mr-2 h-4 w-4 bg-black rounded-sm flex items-center justify-center text-white text-xs font-bold">X</div>
          Twitter
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleShare('linkedin')}>
          <div className="mr-2 h-4 w-4 bg-blue-700 rounded-sm flex items-center justify-center text-white text-xs font-bold">in</div>
          LinkedIn
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleShare('whatsapp')}>
          <MessageCircle className="mr-2 h-4 w-4" />
          WhatsApp
        </DropdownMenuItem>
        <DropdownMenuItem onClick={handleCopyLink}>
          <Copy className="mr-2 h-4 w-4" />
          Copy Link
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default SocialShare;