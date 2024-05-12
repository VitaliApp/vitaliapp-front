"use client";

import HomeAppointments from "../../features/home/components/HomeAppointments";
import React from "react";
// import { useSession } from "next-auth/react";
import Loading from "../../loading";
import Profile from "../../features/home/components/Profile";
import NewsAside from "@/app/features/home/components/NewsArticles";
import MyProgress from "@/app/features/my-progress/components/Progress";

export default function Home() {
  // const { data: session, status } = useSession();
  // if (status === "loading") {
  //   return <Loading />;
  // }
  // console.log(session, "session user");

  return (
    <div className="">
      <div className="mt-20 md:grid md:grid-cols-12">
        <aside className="md:col-span-3">
          <Profile />
        </aside>
        <main className="md:grid md:col-span-6">
          <HomeAppointments/>
        </main>
        <aside className="md:grid md:col-span-3">
          <NewsAside/>
        </aside>
      </div>
    </div>
  );
}