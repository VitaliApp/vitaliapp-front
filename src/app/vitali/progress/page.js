"use client";

import ExerciseGhrapic from "@/app/features/my-progress/components/Exercise";
import FeedingGrhapic from "@/app/features/my-progress/components/Feeding";
import HydrationGhrapic from "@/app/features/my-progress/components/Hydration";
import RestGhrapic from "@/app/features/my-progress/components/Rest";
import React from "react";

export default function Progress() {
  return (
    <React.Fragment>
      <div className="mb-16">
        <div className="md:flex md:justify-center">
          <FeedingGrhapic />
          <HydrationGhrapic />
        </div>
        <div className="md:flex md:justify-center">
          <RestGhrapic />
          <ExerciseGhrapic />
        </div>
      </div>
    </React.Fragment>
  );
}
