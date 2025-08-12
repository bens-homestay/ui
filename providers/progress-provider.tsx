"use client";

import * as React from "react";
import { ProgressBar, ProgressBarProvider } from "react-transition-progress";

export function ProgressProvider({
  children,
  ...props
}: React.ComponentProps<typeof ProgressBarProvider>) {
  return (
    <ProgressBarProvider {...props}>
      <ProgressBar className="fixed top-0 h-1 bg-primary shadow-lg shadow-primary/20 z-50" />
      {children}
    </ProgressBarProvider>
  );
}