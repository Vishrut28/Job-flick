
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { 
  BarChart as BarChartIcon, 
  LineChart as LineChartIcon,
  Download,
  Share2
} from "lucide-react";
import { 
  BarChart, 
  Bar, 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer 
} from 'recharts';

const TrajectoryTracker = () => {
  const skillProgressData = [
    { month: 'Jan', react: 40, typescript: 30, nodejs: 25, ux: 50 },
    { month: 'Feb', react: 45, typescript: 35, nodejs: 30, ux: 55 },
    { month: 'Mar', react: 55, typescript: 40, nodejs: 30, ux: 58 },
    { month: 'Apr', react: 65, typescript: 45, nodejs: 35, ux: 60 },
    { month: 'May', react: 68, typescript: 55, nodejs: 40, ux: 65 },
    { month: 'Jun', react: 75, typescript: 65, nodejs: 50, ux: 70 },
  ];

  const projectsCompletedData = [
    { month: 'Jan', web: 1, mobile: 0, design: 2, backend: 0 },
    { month: 'Feb', web: 2, mobile: 1, design: 1, backend: 1 },
    { month: 'Mar', web: 1, mobile: 1, design: 0, backend: 2 },
    { month: 'Apr', web: 3, mobile: 0, design: 1, backend: 1 },
    { month: 'May', web: 2, mobile: 2, design: 2, backend: 0 },
    { month: 'Jun', web: 4, mobile: 1, design: 1, backend: 2 },
  ];

  const SkillProgressCard = ({ title, current, target, color }: { title: string; current: number; target: number; color: string }) => {
    const progress = (current / target) * 100;
    
    return (
      <div className="space-y-1.5">
        <div className="flex justify-between items-center text-sm">
          <div className="font-medium">{title}</div>
          <div className="text-muted-foreground">{current}/{target}</div>
        </div>
        <div className="h-2 bg-muted rounded-full overflow-hidden">
          <div className="h-full rounded-full" style={{ width: `${progress}%`, backgroundColor: color }}></div>
        </div>
      </div>
    );
  };

  return (
    <div className="py-8" id="tracker">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-2xl font-bold">Candidate Trajectory Tracker</h2>
          <p className="text-muted-foreground">Visualize your skill growth over time</p>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline" size="sm">
            <Download className="mr-1 h-4 w-4" /> Export
          </Button>
          <Button variant="outline" size="sm">
            <Share2 className="mr-1 h-4 w-4" /> Share
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <Card className="col-span-2">
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg">Skill Growth Over Time</CardTitle>
              <Select defaultValue="6m">
                <SelectTrigger className="w-[120px]">
                  <SelectValue placeholder="Time period" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="3m">Last 3 months</SelectItem>
                  <SelectItem value="6m">Last 6 months</SelectItem>
                  <SelectItem value="1y">Last year</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="line">
              <div className="flex justify-between items-center mb-4">
                <TabsList>
                  <TabsTrigger value="line" className="flex items-center">
                    <LineChartIcon className="mr-1 h-4 w-4" /> Line
                  </TabsTrigger>
                  <TabsTrigger value="bar" className="flex items-center">
                    <BarChartIcon className="mr-1 h-4 w-4" /> Bar
                  </TabsTrigger>
                </TabsList>
              </div>
              
              <TabsContent value="line" className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart
                    data={skillProgressData}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="react" stroke="#8884d8" activeDot={{ r: 8 }} />
                    <Line type="monotone" dataKey="typescript" stroke="#82ca9d" />
                    <Line type="monotone" dataKey="nodejs" stroke="#ffc658" />
                    <Line type="monotone" dataKey="ux" stroke="#ff7300" />
                  </LineChart>
                </ResponsiveContainer>
              </TabsContent>
              
              <TabsContent value="bar" className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={skillProgressData}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="react" fill="#8884d8" />
                    <Bar dataKey="typescript" fill="#82ca9d" />
                    <Bar dataKey="nodejs" fill="#ffc658" />
                    <Bar dataKey="ux" fill="#ff7300" />
                  </BarChart>
                </ResponsiveContainer>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Current Skill Levels</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <SkillProgressCard title="React" current={75} target={100} color="#8884d8" />
            <SkillProgressCard title="TypeScript" current={65} target={100} color="#82ca9d" />
            <SkillProgressCard title="Node.js" current={50} target={100} color="#ffc658" />
            <SkillProgressCard title="UX Design" current={70} target={100} color="#ff7300" />
            <SkillProgressCard title="GraphQL" current={40} target={100} color="#00C49F" />
            <SkillProgressCard title="Testing" current={45} target={100} color="#0088FE" />
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Projects Completed</CardTitle>
          </CardHeader>
          <CardContent className="h-[280px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={projectsCompletedData}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="web" fill="#8884d8" />
                <Bar dataKey="mobile" fill="#82ca9d" />
                <Bar dataKey="design" fill="#ffc658" />
                <Bar dataKey="backend" fill="#ff7300" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Growth Recommendations</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="p-4 bg-muted rounded-lg">
                <div className="font-semibold mb-1">Focus on Backend Development</div>
                <p className="text-sm text-muted-foreground">Your Node.js skills are growing steadily, but consider adding database expertise to complement your stack.</p>
              </div>
              
              <div className="p-4 bg-muted rounded-lg">
                <div className="font-semibold mb-1">Strengthen Testing Skills</div>
                <p className="text-sm text-muted-foreground">Adding automated testing to your projects will significantly increase your profile strength.</p>
              </div>
              
              <div className="p-4 bg-muted rounded-lg">
                <div className="font-semibold mb-1">Try More Mobile Projects</div>
                <p className="text-sm text-muted-foreground">You have fewer projects in mobile development compared to web. Consider taking on a React Native assignment.</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default TrajectoryTracker;
