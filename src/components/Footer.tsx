const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Kenya Unity Project</h3>
            <p className="text-primary-foreground/80 leading-relaxed">
              Dedicated to promoting understanding, healing, and unity among all Kenyan communities through education and dialogue.
            </p>
          </div>
          
          <div>
            <h4 className="text-xl font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>National Cohesion and Integration Commission</li>
              <li>Truth, Justice and Reconciliation Commission</li>
              <li>Institute for Security Studies</li>
              <li>Kenya National Bureau of Statistics</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-xl font-semibold mb-4">Our Mission</h4>
            <p className="text-primary-foreground/80 leading-relaxed mb-4">
              To foster national unity by promoting understanding of our shared history and building bridges across all communities.
            </p>
            <div className="text-sm text-primary-foreground/60">
              Educational content for awareness and unity.
            </div>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/60">
            &copy; 2024 Kenya Unity Project. Built for educational purposes to promote national cohesion.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;