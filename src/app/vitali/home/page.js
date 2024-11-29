"use client";

import HomeAppointments from "../../features/home/components/HomeAppointments";
import React from "react";
import Profile from "../../features/home/components/Profile";
import NewsAside from "@/app/features/home/components/NewsArticles";

export default function Home() {

  return (
    <div className="">
      <div className="mt-20 md:grid md:grid-cols-12">
        <aside className="md:col-span-3">
          <Profile />
        </aside>
        <main className="md:grid md:col-span-6">
          <HomeAppointments/>
        </main>
        <aside className="hidden md:block md:grid md:col-span-3">
          <NewsAside/>
        </aside>
      </div>
    </div>
  );
}