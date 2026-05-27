"use client";

import Sidebar from "@/components/Sidebar";

import { useEffect, useState } from "react";

export default function AttendancePage() {
  const [allowed, setAllowed] =
    useState(false);

  useEffect(() => {
    const now = new Date();

    const hour = now.getHours();

    if (hour >= 9 && hour < 10) {
      setAllowed(true);
    }
  }, []);

  return (
    <main className="flex bg-slate-900 min-h-screen text-white">
      <Sidebar role="student" />

      <section className="flex-1 p-10">
        <h1 className="text-5xl font-black mb-8">
          Attendance
        </h1>

        {allowed ? (
          <div className="bg-green-600/20 border border-green-500/20 rounded-3xl p-10 max-w-xl">
            <h2 className="text-3xl font-bold">
              Attendance Open
            </h2>

            <p className="text-slate-300 mt-3">
              You can mark attendance
              now.
            </p>

            <button className="mt-8 bg-green-600 hover:bg-green-700 px-8 py-4 rounded-2xl text-lg font-semibold">
              Mark Attendance
            </button>
          </div>
        ) : (
          <div className="bg-red-600/20 border border-red-500/20 rounded-3xl p-10 max-w-xl">
            <h2 className="text-3xl font-bold">
              Attendance Closed
            </h2>

            <p className="text-slate-300 mt-3">
              Attendance available only
              from 9 AM to 10 AM.
            </p>
          </div>
        )}
      </section>
    </main>
  );
}