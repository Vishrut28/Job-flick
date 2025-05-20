
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { 
  Filter, 
  Search, 
  CheckCircle, 
  XCircle,
  MoreHorizontal,
  User,
  Bookmark,
  MessageCircle
} from "lucide-react";

const CandidateCard = ({ 
  skills, 
  topProjects, 
  education, 
  experience,
  strengths
}: { 
  skills: string[]; 
  topProjects: {name: string, description: string}[];
  education: string;
  experience: number;
  strengths: string[];
}) => {
  return (
    <Card className="card-hover">
      <CardHeader className="pb-2">
        <div className="flex justify-between">
          <div>
            <CardTitle>Anonymous Candidate</CardTitle>
            <CardDescription>{education} • {experience} years experience</CardDescription>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>
                <User className="mr-2 h-4 w-4" /> View Profile
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Bookmark className="mr-2 h-4 w-4" /> Save Candidate
              </DropdownMenuItem>
              <DropdownMenuItem>
                <MessageCircle className="mr-2 h-4 w-4" /> Contact
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <div className="text-sm font-medium mb-1.5">Skills</div>
          <div className="flex flex-wrap gap-1.5">
            {skills.map((skill, index) => (
              <Badge key={index} variant="outline">{skill}</Badge>
            ))}
          </div>
        </div>
        
        <div>
          <div className="text-sm font-medium mb-1.5">Key Strengths</div>
          <div className="grid grid-cols-2 gap-1 text-sm">
            {strengths.map((strength, index) => (
              <div key={index} className="flex items-center">
                <CheckCircle className="mr-1 h-3 w-3 text-primary" />
                <span>{strength}</span>
              </div>
            ))}
          </div>
        </div>
        
        <div>
          <div className="text-sm font-medium mb-1.5">Top Projects</div>
          {topProjects.map((project, index) => (
            <div key={index} className="mb-2">
              <div className="font-medium text-sm">{project.name}</div>
              <div className="text-xs text-muted-foreground">{project.description}</div>
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter className="border-t pt-4 flex justify-between">
        <Button variant="outline" size="sm">
          <XCircle className="mr-1 h-4 w-4" /> Pass
        </Button>
        <Button size="sm">
          <CheckCircle className="mr-1 h-4 w-4" /> Shortlist
        </Button>
      </CardFooter>
    </Card>
  );
};

const BlindMatch = () => {
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  const availableSkills = ["React", "TypeScript", "Node.js", "Python", "Java", "UX Design", "Data Analysis"];

  const toggleSkill = (skill: string) => {
    if (selectedSkills.includes(skill)) {
      setSelectedSkills(selectedSkills.filter(s => s !== skill));
    } else {
      setSelectedSkills([...selectedSkills, skill]);
    }
  };

  const candidates = [
    {
      skills: ["React", "TypeScript", "Node.js", "MongoDB", "GraphQL"],
      topProjects: [
        {name: "E-commerce Platform", description: "Full-stack online shopping experience"},
        {name: "Portfolio Generator", description: "Tool to create developer portfolios"}
      ],
      education: "Computer Science Degree",
      experience: 2,
      strengths: ["Problem Solving", "Communication", "Fast Learner", "Team Player"]
    },
    {
      skills: ["UX Design", "Figma", "HTML/CSS", "JavaScript", "User Research"],
      topProjects: [
        {name: "Healthcare App Redesign", description: "Improved UX for patient management"},
        {name: "Travel Planner UI", description: "Interface for trip planning application"}
      ],
      education: "Design Degree",
      experience: 3,
      strengths: ["Visual Design", "Prototyping", "User Testing", "Accessibility"]
    },
    {
      skills: ["Python", "Data Analysis", "Machine Learning", "SQL", "Tableau"],
      topProjects: [
        {name: "Customer Segmentation", description: "ML model for customer classification"},
        {name: "Sales Prediction", description: "Time series analysis for forecasting"}
      ],
      education: "Data Science Certificate",
      experience: 1,
      strengths: ["Statistical Analysis", "Data Visualization", "Critical Thinking", "Detail-oriented"]
    },
  ];

  return (
    <div className="py-8" id="blindmatch">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-2xl font-bold">Blind Match Mode</h2>
          <p className="text-muted-foreground">Find candidates based on skills, not background</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-1">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Filter Candidates</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-3">
                <div className="font-medium text-sm">Search</div>
                <div className="relative">
                  <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input placeholder="Search skills, projects..." className="pl-8" />
                </div>
              </div>

              <div className="space-y-3">
                <div className="font-medium text-sm">Skills</div>
                <div className="space-y-2">
                  {availableSkills.map((skill) => (
                    <div key={skill} className="flex items-center space-x-2">
                      <Checkbox 
                        id={`skill-${skill}`} 
                        checked={selectedSkills.includes(skill)}
                        onCheckedChange={() => toggleSkill(skill)}
                      />
                      <label 
                        htmlFor={`skill-${skill}`}
                        className="text-sm cursor-pointer"
                      >
                        {skill}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-3">
                <div className="font-medium text-sm">Experience Level</div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">0 years</span>
                  <span className="text-sm">5+ years</span>
                </div>
                <div className="h-2 bg-muted rounded-full">
                  <div className="h-full bg-primary rounded-full" style={{width: "60%"}}></div>
                </div>
              </div>

              <Button className="w-full">
                <Filter className="mr-2 h-4 w-4" /> Apply Filters
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="lg:col-span-3">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {candidates.map((candidate, index) => (
              <CandidateCard 
                key={index}
                skills={candidate.skills} 
                topProjects={candidate.topProjects} 
                education={candidate.education}
                experience={candidate.experience}
                strengths={candidate.strengths}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlindMatch;
