
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { PlusCircle, ExternalLink, MoreHorizontal, Edit } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const ProjectCard = ({ 
  title, 
  description, 
  skills, 
  image 
}: { 
  title: string; 
  description: string; 
  skills: string[]; 
  image: string;
}) => {
  return (
    <Card className="overflow-hidden card-hover">
      <div className="h-40 overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-semibold">{title}</h3>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>
                <Edit className="mr-2 h-4 w-4" /> Edit
              </DropdownMenuItem>
              <DropdownMenuItem>
                <ExternalLink className="mr-2 h-4 w-4" /> View
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{description}</p>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, index) => (
            <Badge key={index} variant="secondary">{skill}</Badge>
          ))}
        </div>
      </div>
    </Card>
  );
};

const SkillProofDeck = () => {
  const projects = [
    {
      title: "E-commerce Platform",
      description: "A full-stack online store with product catalog, shopping cart, and payment integration.",
      skills: ["React", "Node.js", "MongoDB"],
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085"
    },
    {
      title: "Weather Dashboard",
      description: "Real-time weather forecast application with interactive maps and data visualization.",
      skills: ["JavaScript", "APIs", "Chart.js"],
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
    },
    {
      title: "Task Management App",
      description: "Collaborative project management tool with task assignment and progress tracking.",
      skills: ["TypeScript", "Redux", "Firebase"],
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
    },
    {
      title: "Fitness Tracker",
      description: "Mobile application to track workouts, nutrition, and personal fitness goals.",
      skills: ["React Native", "GraphQL", "UX Design"],
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81"
    },
  ];

  return (
    <div className="py-8" id="skillproof">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-2xl font-bold">SkillProof Deck</h2>
          <p className="text-muted-foreground">Showcase your projects and skills</p>
        </div>
        <Button>
          <PlusCircle className="mr-2 h-4 w-4" /> Add Project
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {projects.map((project, index) => (
          <ProjectCard 
            key={index} 
            title={project.title} 
            description={project.description} 
            skills={project.skills} 
            image={project.image}
          />
        ))}
      </div>
    </div>
  );
};

export default SkillProofDeck;
