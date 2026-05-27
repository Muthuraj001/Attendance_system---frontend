import Sidebar from "@/components/Sidebar";

export default function StaffStudentsPage() {
  const students = [
    {
      name: "Arun",
      roll: "CS101",
      status: "Present",
    },

    {
      name: "Kavin",
      roll: "CS102",
      status: "Absent",
    },
  ];

  return (
    <main className="flex bg-slate-900 min-h-screen text-white">
      <Sidebar role="staff" />

      <section className="flex-1 p-10">
        <h1 className="text-5xl font-black mb-10">
          Manage Students
        </h1>

        <div className="bg-white/10 border border-white/10 rounded-3xl overflow-hidden">
          <table className="w-full">
            <thead className="bg-white/10">
              <tr>
                <th className="text-left p-5">
                  Name
                </th>

                <th className="text-left p-5">
                  Roll No
                </th>

                <th className="text-left p-5">
                  Status
                </th>
              </tr>
            </thead>

            <tbody>
              {students.map(
                (
                  student,
                  index
                ) => (
                  <tr
                    key={index}
                    className="border-t border-white/10"
                  >
                    <td className="p-5">
                      {student.name}
                    </td>

                    <td className="p-5">
                      {student.roll}
                    </td>

                    <td className="p-5">
                      <span
                        className={`px-4 py-2 rounded-xl ${
                          student.status ===
                          "Present"
                            ? "bg-green-600/20 text-green-400"
                            : "bg-red-600/20 text-red-400"
                        }`}
                      >
                        {student.status}
                      </span>
                    </td>
                  </tr>
                )
              )}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
}