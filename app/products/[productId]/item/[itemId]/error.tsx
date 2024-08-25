"use client";

const ErrorBoundary = ({ error }: { error: Error }) => {
  return (
    <>
      <h1>.....some thing went wrong error boundary hit</h1>
      <h1>{error.message} </h1>
    </>
  );
};

export default ErrorBoundary;
