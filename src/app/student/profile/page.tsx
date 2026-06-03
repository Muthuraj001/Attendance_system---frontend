import Sidebar from "@/components/Sidebar";

export default function StudentProfile() {
  return (
    <main className="flex bg-slate-900 min-h-screen text-white">
      <Sidebar role="student" />

      <section className="flex-1 p-10">
        <h1 className="text-5xl font-black mb-8">
          Student Profile
        </h1>

        <div className="bg-white/10 border border-white/10 rounded-3xl p-8 max-w-2xl">
          <div className="space-y-5">
            <div>
              <p className="text-slate-400">
                Name
              </p>

              <h2 className="text-2xl font-bold">
                Thulasi
              </h2>
            </div>

            <div>
              <p className="text-slate-400">
                Roll Number
              </p>

              <h2 className="text-2xl font-bold">
                CS101
              </h2>
            </div>

            <div>
              <p className="text-slate-400">
                Email
              </p>

              <h2 className="text-2xl font-bold">
                student@gmail.com
              </h2>
            </div>

            <div>
              <p className="text-slate-400">
                Mobile
              </p>

              <h2 className="text-2xl font-bold">
                +91 9876543210
              </h2>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}