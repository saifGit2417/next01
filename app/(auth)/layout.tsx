import React, { ReactNode } from "react";

const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div>
      <header
        style={{ background: "lightblue", padding: "1rem", margin: "1rem" }}
      >
        <h1>This is header for auth folder</h1>
        <p>
          this is example of nested layout this will nbe only available in auth
          folder not at root level
        </p>
      </header>
      {children}
      <footer style={{ background: "pink", padding: "1rem", margin: "1rem" }}>
        <h1>This is footer for auth folder</h1>
        <p>
          this is example of nested layout this will nbe only available in auth
          folder not at root level
        </p>
    </footer>
    </div>
  );
};

export default layout;
