import React from "react";

export const Main = ({ children }) => {
  return (
    <main className="flex flex-col flex-grow items-center justify-center h-auto mb-1">
      <div className="mb-1 w-full">{children}</div>
    </main>
  );
};

