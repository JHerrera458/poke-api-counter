import { SideBar } from "../../components/SideBar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className=" h-screen antialiased bg-slate-100 text-slate-300 selection:bg-blue-600 selection:text-white">
      <div className="relative flex">
        <SideBar />
        <div className="w-full text-slate-900">{children}</div>
      </div>
    </div>
  );
}
