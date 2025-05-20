
import Navigation from "@/components/Navigation";
import BlindMatch from "@/components/BlindMatch";
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
import { Link } from "react-router-dom";
import { Bell, Settings, Users, Calendar, FileCheck, PlusCircle } from "lucide-react";

const RecruiterDashboard = () => {
  return (
    <div className="min-h-screen bg-muted/30">
      <Navigation />
      <div className="container px-4 mx-auto py-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-bold">Recruiter Dashboard</h1>
            <p className="text-muted-foreground">Welcome back, Jamie</p>
          </div>
          <div className="flex items-center space-x-2">
            <Button variant="outline" size="icon">
              <Bell className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon">
              <Settings className="h-4 w-4" />
            </Button>
            <Button asChild>
              <Link to="/micro-assignments">Post Assignment</Link>
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Active Positions</CardTitle>
              <CardDescription>Open roles you're recruiting for</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center">
                <Users className="h-8 w-8 mr-3 text-primary" />
                <div>
                  <div className="text-3xl font-bold">5</div>
                  <div className="text-sm text-muted-foreground">2 with shortlists</div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Upcoming Interviews</CardTitle>
              <CardDescription>Scheduled candidate interviews</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center">
                <Calendar className="h-8 w-8 mr-3 text-primary" />
                <div>
                  <div className="text-3xl font-bold">3</div>
                  <div className="text-sm text-muted-foreground">Next: Tomorrow at 2PM</div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Active Assignments</CardTitle>
              <CardDescription>Micro-assignments in progress</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center">
                <FileCheck className="h-8 w-8 mr-3 text-primary" />
                <div>
                  <div className="text-3xl font-bold">12</div>
                  <div className="text-sm text-muted-foreground">4 completed this week</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="blindmatch" className="space-y-6">
          <TabsList className="grid grid-cols-2 w-[400px]">
            <TabsTrigger value="blindmatch">Blind Match</TabsTrigger>
            <TabsTrigger value="trajectory">Trajectory Tracker</TabsTrigger>
          </TabsList>
          
          <TabsContent value="blindmatch">
            <BlindMatch />
          </TabsContent>
          
          <TabsContent value="trajectory">
            <TrajectoryTracker />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default RecruiterDashboard;
