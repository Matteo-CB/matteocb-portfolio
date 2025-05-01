import React from "react";
import { projectsData } from "@/lib/data";
import Project from "./project";

const Page = () => {
  return (
    <div className="flex flex-col items-center">
      {projectsData.map((project, index) => (
        <Project key={index} {...project} />
      ))}
    </div>
  );
};

export default Page;
