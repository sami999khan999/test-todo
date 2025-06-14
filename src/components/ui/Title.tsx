import React from "react";

const Title = ({ children }: { children: React.ReactNode }) => {
  return (
    <h2 className="lg:text-2xl text-lg font-bold text-accent-foreground">
      {children}
    </h2>
  );
};

export default Title;
