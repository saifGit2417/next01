import React, { ReactNode } from "react";

const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div>
      <h1>
        this layout will only be applicable for register and login as we made
        group layout under (with-auth-layout) folder
      </h1>
      {children}
    </div>
  );
};

export default layout;
