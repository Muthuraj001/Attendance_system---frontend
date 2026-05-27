
"use client";

import Link from "next/link";

type Props = {
  role: "student" | "staff";
};

export default function Sidebar({
  role,
}: Props) {
  return (
    <div className="w-[260px] min-h-screen bg-slate-950 text-white p-6">
      <h1 className="text-3xl font-bold mb-10">
        AttendX
      </h1>

      <div className="flex flex-col gap-4">
        <Link
          href={`/${role}/dashboard`}
          className="bg-white/10 p-4 rounded-xl"
        >
          Dashboard
        </Link>

        <Link
          href={`/${role}/profile`}
          className="bg-white/10 p-4 rounded-xl"
        >
          Profile
        </Link>

        {role === "student" ? (
          <Link
            href="/student/attendance"
            className="bg-white/10 p-4 rounded-xl"
          >
            Attendance
          </Link>
        ) : (
          <Link
            href="/staff/students"
            className="bg-white/10 p-4 rounded-xl"
          >
            Manage Students
          </Link>
        )}

        <button className="bg-red-500/20 text-red-400 p-4 rounded-xl">
          Logout
        </button>
      </div>
    </div>
  );
}