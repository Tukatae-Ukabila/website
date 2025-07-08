import { useEffect, useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Share2, Copy, MessageCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface Position {
  x: number;
  y: number;
}

const TextSelectionShare = () => {
  const [selectedText, setSelectedText] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [position, setPosition] = useState<Position>({ x: 0, y: 0 });
  const popupRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  useEffect(() => {
    const handleSelection = () => {
      const selection = window.getSelection();
      const text = selection?.toString().trim();

      if (text && text.length > 10) {
        const range = selection?.getRangeAt(0);
        const rect = range?.getBoundingClientRect();

        if (rect) {
          setSelectedText(text);
          setPosition({
            x: rect.left + rect.width / 2,
            y: rect.top - 10
          });
          setShowPopup(true);
        }
      } else {
        setShowPopup(false);
        setSelectedText("");
      }
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (popupRef.current && !popupRef.current.contains(event.target as Node)) {
        setShowPopup(false);
        setSelectedText("");
      }
    };

    document.addEventListener("mouseup", handleSelection);
    document.addEventListener("selectionchange", handleSelection);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mouseup", handleSelection);
      document.removeEventListener("selectionchange", handleSelection);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const shareText = (platform: string) => {
    const url = window.location.href;
    const text = `"${selectedText}" - ${document.title}`;
    
    const shareUrls = {
      twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`,
      whatsapp: `https://wa.me/?text=${encodeURIComponent(text + " " + url)}`,
    };

    const shareUrl = shareUrls[platform as keyof typeof shareUrls];
    if (shareUrl) {
      window.open(shareUrl, '_blank', 'width=600,height=400');
    }
    setShowPopup(false);
  };

  const copyText = async () => {
    try {
      const textToCopy = `"${selectedText}" - ${document.title} ${window.location.href}`;
      await navigator.clipboard.writeText(textToCopy);
      toast({
        title: "Text copied!",
        description: "The selected text has been copied to your clipboard.",
      });
    } catch (err) {
      toast({
        title: "Failed to copy",
        description: "Could not copy the text to clipboard.",
        variant: "destructive",
      });
    }
    setShowPopup(false);
  };

  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: document.title,
          text: `"${selectedText}"`,
          url: window.location.href,
        });
        setShowPopup(false);
      } catch (err) {
        console.log('Error sharing:', err);
      }
    }
  };

  if (!showPopup || !selectedText) return null;

  return (
    <div
      ref={popupRef}
      className="fixed z-50 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg p-2 flex gap-1"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: 'translate(-50%, -100%)',
      }}
    >
      {navigator.share && (
        <Button
          size="sm"
          variant="ghost"
          onClick={handleNativeShare}
          className="h-8 w-8 p-0"
        >
          <Share2 className="h-4 w-4" />
        </Button>
      )}
      <Button
        size="sm"
        variant="ghost"
        onClick={() => shareText('twitter')}
        className="h-8 w-8 p-0"
      >
        <div className="h-3 w-3 bg-black rounded-sm flex items-center justify-center text-white text-xs font-bold">X</div>
      </Button>
      <Button
        size="sm"
        variant="ghost"
        onClick={() => shareText('whatsapp')}
        className="h-8 w-8 p-0"
      >
        <MessageCircle className="h-4 w-4" />
      </Button>
      <Button
        size="sm"
        variant="ghost"
        onClick={copyText}
        className="h-8 w-8 p-0"
      >
        <Copy className="h-4 w-4" />
      </Button>
    </div>
  );
};

export default TextSelectionShare;