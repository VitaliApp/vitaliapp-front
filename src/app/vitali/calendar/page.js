"use client";

import HabitsCalendar from "@/app/features/calendar/components/HabitsCalendar";
import TagsCalendar from "@/app/features/calendar/components/TagsCalendar";
import React from "react";

export default function CalendarCompon() {
  return (
    <React.Fragment>
      <div className="md:flex">
        <TagsCalendar />
        <HabitsCalendar />
      </div>
    </React.Fragment>
  );
}
