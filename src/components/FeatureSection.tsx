
import { BookOpen, Users, Layout, BarChart } from "lucide-react";
import { Link } from 'react-router-dom';

const Feature = ({ icon: Icon, title, description, link }: { 
  icon: React.ElementType, 
  title: string, 
  description: string,
  link: string 
}) => {
  return (
    <div className="p-6 rounded-lg border bg-card card-hover">
      <div className="feature-icon">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground mb-4">{description}</p>
      <Link to={link} className="text-primary font-medium hover:underline">
        Learn more &rarr;
      </Link>
    </div>
  );
};

const FeatureSection = () => {
  return (
    <section className="py-16 md:py-24" id="how-it-works">
      <div className="container px-4 mx-auto">
        <h2 className="section-title">How JobFlick Works</h2>
        <p className="section-subtitle">
          Our platform transforms how students showcase their skills and how recruiters find talent.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Feature
            icon={BookOpen}
            title="SkillProof Deck"
            description="Showcase your projects in beautiful portfolios that highlight your skills and abilities."
            link="/student-dashboard#skillproof"
          />
          <Feature
            icon={Users}
            title="Blind Match Mode"
            description="Reduce bias with skill-first candidate profiles that focus on abilities over background."
            link="/recruiter-dashboard#blindmatch"
          />
          <Feature
            icon={Layout}
            title="Micro-Assignments"
            description="Find or create bite-sized projects to evaluate real-world skills in context."
            link="/micro-assignments"
          />
          <Feature
            icon={BarChart}
            title="Trajectory Tracker"
            description="Visualize skill growth over time and identify development opportunities."
            link="/student-dashboard#tracker"
          />
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
