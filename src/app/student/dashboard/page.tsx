import Sidebar from "@/components/Sidebar";

export default function Dashboard() {
  return (
    <main className="flex min-h-screen bg-slate-900 text-white">
      <Sidebar role="student" />

      <div className="flex-1 p-10">
        <h1 className="text-5xl font-bold">
          Student Dashboard
        </h1>

        <div className="grid grid-cols-3 gap-6 mt-10">
          <div className="bg-blue-500/20 p-8 rounded-3xl">
            <h2 className="text-4xl font-bold">
              92%
            </h2>

            <p>Attendance</p>
          </div>

          <div className="bg-green-500/20 p-8 rounded-3xl">
            <h2 className="text-4xl font-bold">
              120
            </h2>

            <p>Present Days</p>
          </div>

          <div className="bg-red-500/20 p-8 rounded-3xl">
            <h2 className="text-4xl font-bold">
              10
            </h2>

            <p>Absent Days</p>
          </div>
        </div>
      </div>
    </main>
  );
}