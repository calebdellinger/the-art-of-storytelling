import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import NewHome from "./pages/NewHome";
import Phase1 from "./pages/Phase1";
import Phase15 from "./pages/Phase15";
import Phase2 from "./pages/Phase2";
import Phase3 from "./pages/Phase3";
import AssetManagement from "./pages/AssetManagement";
import Cinematography from "./pages/Cinematography";

function Router() {
  return (
    <Switch>
      <Route path={"/"} component={NewHome} />
      <Route path={"/cinematography/workflow"} component={Home} />
      <Route path={"/cinematography/shots"} component={Cinematography} />
      <Route path={"/asset-management"} component={AssetManagement} />
      <Route path={"/cinematography/phase1"} component={Phase1} />
      <Route path={"/cinematography/phase15"} component={Phase15} />
      <Route path={"/cinematography/phase2"} component={Phase2} />
      <Route path={"/cinematography/phase3"} component={Phase3} />
      {/* Legacy routes for backward compatibility */}
      <Route path={"/phase1"} component={Phase1} />
      <Route path={"/phase15"} component={Phase15} />
      <Route path={"/phase2"} component={Phase2} />
      <Route path={"/phase3"} component={Phase3} />
      <Route path={"/cinematography"} component={Cinematography} />
      <Route path={"/workflow"} component={Home} />
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="light"
      >
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
