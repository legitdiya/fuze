import { Switch, Route, Redirect } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useAuthStore } from "@/lib/auth-store";
import Welcome from "@/pages/welcome";
import Auth from "@/pages/auth";
import Home from "@/pages/home";
import Profile from "@/pages/profile";
import NotFound from "@/pages/not-found";

function ProtectedRoute({ component: Component }: { component: React.ComponentType }) {
  const { isLoggedIn } = useAuthStore();
  
  if (!isLoggedIn) {
    return <Redirect to="/" />;
  }
  
  return <Component />;
}

function Router() {
  const { isLoggedIn } = useAuthStore();

  return (
    <Switch>
      <Route path="/" component={Welcome} />
      <Route path="/auth" component={Auth} />
      <Route path="/home">
        <ProtectedRoute component={Home} />
      </Route>
      <Route path="/profile">
        <ProtectedRoute component={Profile} />
      </Route>
      {/* Redirect logged-in users from auth pages to home */}
      <Route path="/login">
        {isLoggedIn ? <Redirect to="/home" /> : <Redirect to="/auth?mode=login" />}
      </Route>
      <Route path="/signup">
        {isLoggedIn ? <Redirect to="/home" /> : <Redirect to="/auth?mode=signup" />}
      </Route>
      {/* Fallback to 404 */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <div className="dark">
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </QueryClientProvider>
    </div>
  );
}

export default App;
