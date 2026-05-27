import Sidebar from "@/components/Sidebar";

export default function StaffDashboard() {
  return (
    <main className="flex bg-slate-900 min-h-screen text-white">
      <Sidebar role="staff" />

      <section className="flex-1 p-10">
        <h1 className="text-5xl font-black">
          Staff Dashboard
        </h1>

        <div className="grid md:grid-cols-3 gap-6 mt-10">
          <div className="bg-green-600/20 border border-green-500/20 rounded-3xl p-8">
            <h2 className="text-4xl font-black">
              1200
            </h2>

            <p className="text-slate-300 mt-2">
              Total Students
            </p>
          </div>

          <div className="bg-blue-600/20 border border-blue-500/20 rounded-3xl p-8">
            <h2 className="text-4xl font-black">
              1100
            </h2>

            <p className="text-slate-300 mt-2">
              Present Today
            </p>
          </div>

          <div className="bg-red-600/20 border border-red-500/20 rounded-3xl p-8">
            <h2 className="text-4xl font-black">
              100
            </h2>

            <p className="text-slate-300 mt-2">
              Absent Today
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}