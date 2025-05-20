
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const LandingHero = () => {
  return (
    <div className="py-12 md:py-20 bg-gradient-to-br from-accent to-background">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-accent text-primary text-sm font-medium">
              Reimagining recruitment
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Find your perfect <span className="text-primary">career match</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              JobFlick connects talented students with forward-thinking recruiters through skills-first 
              matching and project portfolios.
            </p>
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3 pt-4">
              <Button size="lg" asChild>
                <Link to="/signup">Get started</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="#how-it-works">Learn more</Link>
              </Button>
            </div>
            <div className="pt-6">
              <p className="text-sm text-muted-foreground">
                Join 5,000+ students and 500+ companies already using JobFlick
              </p>
              <div className="flex space-x-6 mt-4">
                <div className="w-16 h-8 bg-muted rounded"></div>
                <div className="w-16 h-8 bg-muted rounded"></div>
                <div className="w-16 h-8 bg-muted rounded"></div>
                <div className="w-16 h-8 bg-muted rounded"></div>
              </div>
            </div>
          </div>
          <div className="rounded-xl overflow-hidden shadow-xl">
            <img 
              src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81" 
              alt="JobFlick Platform" 
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingHero;
