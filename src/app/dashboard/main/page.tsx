import { WidgetsGrid } from "@/components";

export const metadata = {
  title: "Dashboard Administrativo",
  description: "Dashboard Administrativo",
};

export default function MainPage() {
  return (
    <div className="text-black py-2 px-4">
      <h1 className=" text-3xl">Dashboard</h1>
      <span>Información general</span>
      <WidgetsGrid />
    </div>
  );
}
