interface PageWrapperProps {
  children: React.ReactNode;
  className?: string;
  fullHeight?: boolean;
  center?: boolean;
}

export function PageWrapper({ 
  children, 
  className = "", 
  fullHeight = false,
  center = false 
}: PageWrapperProps) {
  const baseClasses = fullHeight ? "flex-1 flex flex-col" : "flex-1";
  const centerClasses = center ? "items-center justify-center" : "";
  
  return (
    <div className={`${baseClasses} ${centerClasses} ${className}`}>
      {children}
    </div>
  );
}