import { Button } from "@/components/ui/button";
import Link from "next/link";
import { PageWrapper } from "@/components/layout/PageWrapper";

const NotFound = () => {
  return (
    <PageWrapper fullHeight center>
      <div className="text-center space-y-6 max-w-md mx-auto px-4">
        <div className="space-y-2">
          <h1 className="text-6xl sm:text-7xl font-heading text-primary">404</h1>
          <h2 className="text-xl sm:text-2xl font-semibold">Page Not Found</h2>
          <p className="text-muted-foreground">
            The page you&rsquo;re looking for doesn&rsquo;t exist or has been moved.
          </p>
        </div>
        
        <div className="space-y-3">
          <Button asChild variant="hero" size="lg" className="w-full sm:w-auto">
            <Link href="/">Return to Home</Link>
          </Button>
          <div className="text-sm">
            <span className="text-muted-foreground">Or explore </span>
            <Link href="/experiences" className="text-primary hover:underline">
              our experiences
            </Link>
          </div>
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 opacity-5 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-accent rounded-full blur-2xl"></div>
      </div>
    </PageWrapper>
  );
};

export default NotFound;