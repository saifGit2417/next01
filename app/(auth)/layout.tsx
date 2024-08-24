import React, { ReactNode } from "react";

const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div>
      <header style={{ background: "lightblue", padding: "1rem" }}>
        <h1>This is header for auth folder</h1>
      </header>
      {children}
      <footer style={{ background: "pink", padding: "1rem" }}>
        <h1>This is footer for auth folder</h1>
      </footer>
    </div>
  );
};

export default layout;
