"use client";

import HomeAppointments from "../../features/home/components/HomeAppointments";
import React from "react";
import Profile from "../../features/home/components/Profile";
import NewsAside from "@/app/features/home/components/NewsArticles";
import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react";

export default function Home() {
  const { data: session, status } = useSession();


  if(status === "authenticated")
  return (
    <div className="min-w-96">
      <div className="mt-20 md:grid md:grid-cols-12">
        <aside className="md:col-span-3">
          <Profile />
        </aside>
        <main className="md:grid md:col-span-6">
          <HomeAppointments/>
        </main>
        {/* <aside className="hidden md:block md:grid md:col-span-3">
          <NewsAside/>
        </aside> */}
      </div>
    </div>
  );
  else { ()=>signOut()};
}