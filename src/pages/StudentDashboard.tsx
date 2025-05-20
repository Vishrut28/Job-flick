
import Navigation from "@/components/Navigation";
import SkillProofDeck from "@/components/SkillProofDeck";
import TrajectoryTracker from "@/components/TrajectoryTracker";
import { Button } from "@/components/ui/button";
import { 
  Card,
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Bell, Settings } from "lucide-react";

const StudentDashboard = () => {
  return (
    <div className="min-h-screen bg-muted/30">
      <Navigation />
      <div className="container px-4 mx-auto py-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-bold">Student Dashboard</h1>
            <p className="text-muted-foreground">Welcome back, Alex</p>
          </div>
          <div className="flex items-center space-x-2">
            <Button variant="outline" size="icon">
              <Bell className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon">
              <Settings className="h-4 w-4" />
            </Button>
            <Button>Complete Profile</Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Profile Strength</CardTitle>
              <CardDescription>Complete your profile to increase visibility</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>65%</span>
                  <span className="text-muted-foreground">10 steps to 100%</span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div className="h-full bg-primary rounded-full" style={{ width: "65%" }}></div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Profile Views</CardTitle>
              <CardDescription>Recruiters who viewed your profile</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">24</div>
              <div className="text-sm text-muted-foreground">+12% from last week</div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Assignment Invites</CardTitle>
              <CardDescription>Micro-assignments waiting for you</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">3</div>
              <div className="text-sm text-muted-foreground">2 new since yesterday</div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="projects" className="space-y-6">
          <TabsList className="grid grid-cols-2 w-[400px]">
            <TabsTrigger value="projects">SkillProof Deck</TabsTrigger>
            <TabsTrigger value="trajectory">Trajectory Tracker</TabsTrigger>
          </TabsList>
          
          <TabsContent value="projects">
            <SkillProofDeck />
          </TabsContent>
          
          <TabsContent value="trajectory">
            <TrajectoryTracker />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default StudentDashboard;
