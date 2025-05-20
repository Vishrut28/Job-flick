
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Card,
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { 
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Search, 
  Filter, 
  Clock, 
  BarChart, 
  FileText,
  PlusCircle
} from "lucide-react";

const AssignmentCard = ({ 
  title, 
  company, 
  description, 
  duration, 
  difficulty,
  skills
}: { 
  title: string; 
  company: string; 
  description: string; 
  duration: string;
  difficulty: string;
  skills: string[];
}) => {
  return (
    <Card className="card-hover">
      <CardHeader className="pb-2">
        <CardTitle>{title}</CardTitle>
        <CardDescription>{company}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-sm text-muted-foreground line-clamp-2">{description}</p>
        
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, index) => (
            <Badge key={index} variant="outline">{skill}</Badge>
          ))}
        </div>
        
        <div className="grid grid-cols-2 gap-2 text-sm">
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-1.5 text-muted-foreground" />
            <span>{duration}</span>
          </div>
          <div className="flex items-center">
            <BarChart className="h-4 w-4 mr-1.5 text-muted-foreground" />
            <span>
              {difficulty === "Easy" && <span className="text-green-500">{difficulty}</span>}
              {difficulty === "Medium" && <span className="text-amber-500">{difficulty}</span>}
              {difficulty === "Hard" && <span className="text-rose-500">{difficulty}</span>}
            </span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="border-t pt-4">
        <Button className="w-full">View Assignment</Button>
      </CardFooter>
    </Card>
  );
};

const CreateAssignmentForm = () => {
  return (
    <div className="space-y-4">
      <div>
        <label htmlFor="title" className="text-sm font-medium">Assignment Title</label>
        <Input id="title" placeholder="e.g., Build a Product Landing Page" />
      </div>
      
      <div>
        <label htmlFor="description" className="text-sm font-medium">Description</label>
        <Textarea id="description" placeholder="Describe the task, goals, and deliverables..." rows={4} />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="duration" className="text-sm font-medium">Expected Duration</label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select duration" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1-2 hours">1-2 hours</SelectItem>
              <SelectItem value="2-4 hours">2-4 hours</SelectItem>
              <SelectItem value="4-8 hours">4-8 hours</SelectItem>
              <SelectItem value="1-2 days">1-2 days</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <div>
          <label htmlFor="difficulty" className="text-sm font-medium">Difficulty</label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select difficulty" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="easy">Easy</SelectItem>
              <SelectItem value="medium">Medium</SelectItem>
              <SelectItem value="hard">Hard</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      
      <div>
        <label htmlFor="skills" className="text-sm font-medium">Required Skills</label>
        <Input id="skills" placeholder="e.g., React, JavaScript, UI Design (comma separated)" />
      </div>
    </div>
  );
};

const MicroAssignments = () => {
  const assignments = [
    {
      title: "Build a Responsive Landing Page",
      company: "TechCo",
      description: "Create a responsive landing page for our new product using HTML, CSS, and JavaScript. The design should be modern and adapt to various screen sizes.",
      duration: "2-4 hours",
      difficulty: "Easy",
      skills: ["HTML", "CSS", "JavaScript", "Responsive Design"]
    },
    {
      title: "Implement User Authentication",
      company: "SecureApp",
      description: "Implement a secure user authentication system with login, signup, and password reset functionality using React and Firebase.",
      duration: "4-8 hours",
      difficulty: "Medium",
      skills: ["React", "Firebase", "Authentication", "Security"]
    },
    {
      title: "Data Visualization Dashboard",
      company: "DataViz",
      description: "Create an interactive dashboard to visualize sales data using D3.js or a similar library. Include filtering options and responsive charts.",
      duration: "1-2 days",
      difficulty: "Hard",
      skills: ["JavaScript", "D3.js", "Data Visualization"]
    },
    {
      title: "Mobile App Prototype",
      company: "MobileFirst",
      description: "Design and prototype a mobile application for food delivery. Focus on the user flow from browsing restaurants to completing an order.",
      duration: "4-8 hours",
      difficulty: "Medium",
      skills: ["UI/UX", "Figma", "Prototyping"]
    },
    {
      title: "API Integration Task",
      company: "ConnectAPI",
      description: "Connect to a provided API endpoint to fetch and display product data. Implement pagination and search functionality.",
      duration: "2-4 hours",
      difficulty: "Medium",
      skills: ["API Integration", "JavaScript", "React"]
    },
    {
      title: "Bug Fixing Challenge",
      company: "FixIt",
      description: "Identify and fix bugs in a provided codebase. Document your approaches and solutions for each bug resolved.",
      duration: "1-2 hours",
      difficulty: "Easy",
      skills: ["Debugging", "JavaScript", "Problem Solving"]
    },
  ];

  return (
    <div className="min-h-screen bg-muted/30">
      <Navigation />
      <div className="container px-4 mx-auto py-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-bold">Micro-Assignment Store</h1>
            <p className="text-muted-foreground">Browse and create bite-sized projects</p>
          </div>
          <Dialog>
            <DialogTrigger asChild>
              <Button>
                <PlusCircle className="h-4 w-4 mr-2" /> Create Assignment
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[600px]">
              <DialogHeader>
                <DialogTitle>Create New Micro-Assignment</DialogTitle>
                <DialogDescription>
                  Design a task that showcases specific skills and can be completed in a few hours.
                </DialogDescription>
              </DialogHeader>
              <CreateAssignmentForm />
              <DialogFooter>
                <Button type="submit">Create Assignment</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Filter Assignments</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-3">
                  <div className="font-medium text-sm">Search</div>
                  <div className="relative">
                    <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input placeholder="Search assignments..." className="pl-8" />
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="font-medium text-sm">Difficulty</div>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <input type="checkbox" id="easy" />
                      <label htmlFor="easy" className="text-sm">Easy</label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input type="checkbox" id="medium" />
                      <label htmlFor="medium" className="text-sm">Medium</label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input type="checkbox" id="hard" />
                      <label htmlFor="hard" className="text-sm">Hard</label>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="font-medium text-sm">Duration</div>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <input type="checkbox" id="1-2h" />
                      <label htmlFor="1-2h" className="text-sm">1-2 hours</label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input type="checkbox" id="2-4h" />
                      <label htmlFor="2-4h" className="text-sm">2-4 hours</label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input type="checkbox" id="4-8h" />
                      <label htmlFor="4-8h" className="text-sm">4-8 hours</label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input type="checkbox" id="1-2d" />
                      <label htmlFor="1-2d" className="text-sm">1-2 days</label>
                    </div>
                  </div>
                </div>

                <Button className="w-full">
                  <Filter className="mr-2 h-4 w-4" /> Apply Filters
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-3">
            <Tabs defaultValue="browse">
              <TabsList className="grid grid-cols-3 w-[300px] mb-6">
                <TabsTrigger value="browse">Browse</TabsTrigger>
                <TabsTrigger value="applied">Applied</TabsTrigger>
                <TabsTrigger value="created">Created</TabsTrigger>
              </TabsList>
              
              <TabsContent value="browse" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                  {assignments.map((assignment, index) => (
                    <AssignmentCard
                      key={index}
                      title={assignment.title}
                      company={assignment.company}
                      description={assignment.description}
                      duration={assignment.duration}
                      difficulty={assignment.difficulty}
                      skills={assignment.skills}
                    />
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="applied" className="mt-0">
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <FileText className="h-16 w-16 text-muted-foreground mb-4" />
                  <h3 className="text-2xl font-medium mb-2">No Applications Yet</h3>
                  <p className="text-muted-foreground mb-6">You haven't applied to any micro-assignments yet.</p>
                  <Button>Browse Assignments</Button>
                </div>
              </TabsContent>
              
              <TabsContent value="created" className="mt-0">
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <FileText className="h-16 w-16 text-muted-foreground mb-4" />
                  <h3 className="text-2xl font-medium mb-2">No Created Assignments</h3>
                  <p className="text-muted-foreground mb-6">You haven't created any micro-assignments yet.</p>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button>Create Your First Assignment</Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[600px]">
                      <DialogHeader>
                        <DialogTitle>Create New Micro-Assignment</DialogTitle>
                        <DialogDescription>
                          Design a task that showcases specific skills and can be completed in a few hours.
                        </DialogDescription>
                      </DialogHeader>
                      <CreateAssignmentForm />
                      <DialogFooter>
                        <Button type="submit">Create Assignment</Button>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MicroAssignments;
