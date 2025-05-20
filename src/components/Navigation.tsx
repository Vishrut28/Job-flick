
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu, ChevronDown } from "lucide-react";

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="border-b py-4 bg-white sticky top-0 z-50">
      <div className="container px-4 mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Link to="/" className="flex items-center">
            <div className="w-10 h-10 rounded bg-primary flex items-center justify-center text-white font-bold">JF</div>
            <div className="ml-2">
              <div className="font-semibold text-lg">JobFlick</div>
              <div className="text-xs text-muted-foreground">Your Career, Your Pick</div>
            </div>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <div className="flex items-center space-x-6">
            <Link to="/" className="text-sm font-medium">Home</Link>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center space-x-1 p-0">
                  <span className="text-sm font-medium">For Students</span>
                  <ChevronDown size={16} />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem asChild>
                  <Link to="/student-dashboard">Dashboard</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/student-dashboard#skillproof">SkillProof Deck</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/student-dashboard#tracker">Trajectory Tracker</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center space-x-1 p-0">
                  <span className="text-sm font-medium">For Recruiters</span>
                  <ChevronDown size={16} />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem asChild>
                  <Link to="/recruiter-dashboard">Dashboard</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/recruiter-dashboard#blindmatch">Blind Match</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/micro-assignments">Micro-Assignments</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <div className="flex items-center space-x-2">
            <Button variant="ghost" asChild>
              <Link to="/login">Login</Link>
            </Button>
            <Button asChild>
              <Link to="/signup">Sign up</Link>
            </Button>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <Button 
          variant="ghost" 
          size="icon" 
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <Menu />
        </Button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden pt-4 pb-6 px-4 border-t animate-fade-in">
          <div className="flex flex-col space-y-4">
            <Link to="/" className="text-sm font-medium py-2">Home</Link>
            <div className="border-t pt-2">
              <div className="text-sm font-medium text-muted-foreground mb-2">For Students</div>
              <div className="flex flex-col space-y-2 pl-2">
                <Link to="/student-dashboard" className="text-sm">Dashboard</Link>
                <Link to="/student-dashboard#skillproof" className="text-sm">SkillProof Deck</Link>
                <Link to="/student-dashboard#tracker" className="text-sm">Trajectory Tracker</Link>
              </div>
            </div>
            <div className="border-t pt-2">
              <div className="text-sm font-medium text-muted-foreground mb-2">For Recruiters</div>
              <div className="flex flex-col space-y-2 pl-2">
                <Link to="/recruiter-dashboard" className="text-sm">Dashboard</Link>
                <Link to="/recruiter-dashboard#blindmatch" className="text-sm">Blind Match</Link>
                <Link to="/micro-assignments" className="text-sm">Micro-Assignments</Link>
              </div>
            </div>
            <div className="border-t pt-2 flex flex-col space-y-2">
              <Button variant="outline" asChild className="w-full">
                <Link to="/login">Login</Link>
              </Button>
              <Button asChild className="w-full">
                <Link to="/signup">Sign up</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
