import Link from "next/link";
import React from "react";

const ConceptId = ({
  params,
}: {
  params: { conceptId: string; featureId: string };
}) => {
  return (
    <div>
      <h1>
        feature id is {params.featureId} and concept id is {params.conceptId}{" "}
      </h1>

      <Link href={'/'}>
      <button>Goto home page</button>
      </Link>
    </div>
  );
};

export default ConceptId;
