import React from "react";

const page = ({ params }: { params: { slug: string[] } }) => {
  // consider we are making doscumentation website which typically will have below hierchy
  // topic>>>subtopic --- means at max slug length will be 2
  function renderTextBasedOnSlugLength() {
    switch (params.slug?.length) {
      case 1:
        return <h1>welcome to topic {params.slug[0]}</h1>;
      case 2:
        return (
          <h1>
            welcome to topic {params.slug[0]} and sub topic is {params.slug[1]}{" "}
          </h1>
        );
      default:
        return <h1>Home page for documentation</h1>;
    }
  }

  /*
    NOTE : http://localhost:3000/docs/routing/nested-routing 
    this will abse url for slug folder name is like [...slug]

    but i try to access http://localhost:3000/docs >> it will show 404 error  to handle this we have to use optional catch all segments to use this 
    we need to change folder naming convention wrap slug dolder insided one more array like [[...slug]] >
     so now if i hit  http://localhost:3000/docs this eill show me default text value
    n
    */
  return (
    <div>
      <h1>learning catch all segments</h1>
      {renderTextBasedOnSlugLength()}
    </div>
  );
};

export default page;
