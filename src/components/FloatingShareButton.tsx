import { useState, useEffect } from "react";
import SocialShare from "@/components/SocialShare";

const FloatingShareButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-40">
      <SocialShare 
        title="Tukatae Ukabila - Unity in Kenya"
        text="Join the movement for unity and peace in Kenya"
        hashtags={["TukataeUkabila", "KenyaUnity", "Peace"]}
        variant="default"
        size="icon"
        className="shadow-lg hover:shadow-xl transition-shadow bg-primary hover:bg-primary/90"
      />
    </div>
  );
};

export default FloatingShareButton;